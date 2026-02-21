import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  private get include() {
    return {
      author: true,
      tags: { include: { tag: true } },
      images: true,
    };
  }

  async findAll(status?: string, tagSlug?: string) {
    const where: any = {};
    if (status) where.status = status;
    else where.status = 'PUBLISHED';
    if (tagSlug) where.tags = { some: { tag: { slug: tagSlug } } };

    return this.prisma.blogPost.findMany({
      where,
      include: this.include,
      orderBy: { publishedAt: 'desc' },
    });
  }

  async findOne(idOrSlug: string) {
    const post = await this.prisma.blogPost.findFirst({
      where: { OR: [{ id: idOrSlug }, { slug: idOrSlug }] },
      include: this.include,
    });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async create(dto: CreatePostDto) {
    const { tagIds, ...data } = dto;
    return this.prisma.blogPost.create({
      data: {
        ...data,
        publishedAt: data.status === 'PUBLISHED' ? new Date() : undefined,
        tags: tagIds ? { create: tagIds.map((tagId) => ({ tagId })) } : undefined,
      },
      include: this.include,
    });
  }

  async update(id: string, dto: UpdatePostDto) {
    const existing = await this.findOne(id);
    const { tagIds, ...data } = dto;
    return this.prisma.blogPost.update({
      where: { id },
      data: {
        ...data,
        publishedAt:
          data.status === 'PUBLISHED' ? existing.publishedAt ?? new Date() : undefined,
        tags: tagIds
          ? { deleteMany: {}, create: tagIds.map((tagId) => ({ tagId })) }
          : undefined,
      },
      include: this.include,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.blogPost.delete({ where: { id } });
  }

  findAllTags() {
    return this.prisma.blogTag.findMany({ orderBy: { name: 'asc' } });
  }

  createTag(name: string, slug: string) {
    return this.prisma.blogTag.create({ data: { name, slug } });
  }

  findAllAuthors() {
    return this.prisma.blogAuthor.findMany();
  }

  createAuthor(data: { name: string; bio?: string; avatar?: string }) {
    return this.prisma.blogAuthor.create({ data });
  }
}
