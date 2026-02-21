import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreateTagDto } from './dto/create-tag.dto';
import { CreateAuthorDto } from './dto/create-author.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@ApiTags('blog')
@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get('posts')
  @ApiOperation({ summary: 'Get published blog posts' })
  @ApiQuery({ name: 'tag', required: false })
  findAll(@Query('tag') tag?: string) {
    return this.blogService.findAll('PUBLISHED', tag);
  }

  @Get('posts/all')
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiOperation({ summary: '[Admin] Get all posts including drafts' })
  findAllAdmin(@Query('status') status?: string) {
    return this.blogService.findAll(status);
  }

  @Get('posts/:slug')
  @ApiOperation({ summary: 'Get post by slug or ID' })
  findOne(@Param('slug') slug: string) {
    return this.blogService.findOne(slug);
  }

  @Post('posts')
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiOperation({ summary: '[Admin] Create blog post' })
  create(@Body() dto: CreatePostDto) {
    return this.blogService.create(dto);
  }

  @Patch('posts/:id')
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiOperation({ summary: '[Admin] Update blog post' })
  update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    return this.blogService.update(id, dto);
  }

  @Delete('posts/:id')
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiOperation({ summary: '[Admin] Delete blog post' })
  remove(@Param('id') id: string) {
    return this.blogService.remove(id);
  }

  @Get('tags')
  @ApiOperation({ summary: 'Get all blog tags' })
  findAllTags() { return this.blogService.findAllTags(); }

  @Post('tags')
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiOperation({ summary: '[Admin] Create blog tag' })
  createTag(@Body() dto: CreateTagDto) {
    return this.blogService.createTag(dto.name, dto.slug);
  }

  @Get('authors')
  @ApiOperation({ summary: 'Get all blog authors' })
  findAllAuthors() { return this.blogService.findAllAuthors(); }

  @Post('authors')
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiOperation({ summary: '[Admin] Create blog author' })
  createAuthor(@Body() dto: CreateAuthorDto) {
    return this.blogService.createAuthor(dto);
  }
}
