import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductQueryDto } from './dto/product-query.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  private get include() {
    return {
      brand: true,
      category: true,
      images: { orderBy: { position: 'asc' as const } },
      variants: true,
      _count: { select: { reviews: true } },
    };
  }

  async findAll(query: ProductQueryDto) {
    const { brandSlug, categorySlug, featured, search, minPrice, maxPrice, page = 1, limit = 20 } = query;

    const where: any = { isActive: true };
    if (brandSlug) where.brand = { slug: brandSlug };
    if (categorySlug) where.category = { slug: categorySlug };
    if (featured !== undefined) where.isFeatured = featured === 'true';
    if (search) where.name = { contains: search };
    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price.gte = Number(minPrice);
      if (maxPrice) where.price.lte = Number(maxPrice);
    }

    const skip = (Number(page) - 1) * Number(limit);
    const [products, total] = await Promise.all([
      this.prisma.product.findMany({
        where,
        include: this.include,
        orderBy: { createdAt: 'desc' },
        skip,
        take: Number(limit),
      }),
      this.prisma.product.count({ where }),
    ]);

    return { products, total, page: Number(page), limit: Number(limit), pages: Math.ceil(total / Number(limit)) };
  }

  async findFeatured() {
    return this.prisma.product.findMany({
      where: { isFeatured: true, isActive: true },
      include: this.include,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(idOrSlug: string) {
    const product = await this.prisma.product.findFirst({
      where: { OR: [{ id: idOrSlug }, { slug: idOrSlug }], isActive: true },
      include: {
        ...this.include,
        reviews: { include: { user: { select: { firstName: true, lastName: true, avatar: true } } } },
      },
    });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async create(dto: CreateProductDto) {
    const { images, variants, ...data } = dto;
    return this.prisma.product.create({
      data: {
        ...data,
        images: images ? { create: images } : undefined,
        variants: variants ? { create: variants } : undefined,
      },
      include: this.include,
    });
  }

  async update(id: string, dto: UpdateProductDto) {
    await this.findOne(id);
    const { images, variants, ...data } = dto;
    return this.prisma.product.update({
      where: { id },
      data,
      include: this.include,
    });
  }

  async toggleFeatured(id: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');
    return this.prisma.product.update({
      where: { id },
      data: { isFeatured: !product.isFeatured },
    });
  }

  async addImage(productId: string, imageData: { url: string; publicId: string; alt?: string }) {
    return this.prisma.productImage.create({
      data: { productId, ...imageData },
    });
  }

  async deleteImage(imageId: string) {
    return this.prisma.productImage.delete({ where: { id: imageId } });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.product.delete({ where: { id } });
  }

  async addReview(productId: string, userId: string, data: { rating: number; title?: string; body?: string }) {
    return this.prisma.review.create({
      data: { productId, userId, ...data },
      include: { user: { select: { firstName: true, lastName: true, avatar: true } } },
    });
  }
}
