import { IsString, IsOptional, IsEnum, IsArray } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BlogStatus } from '@prisma/client';

export class CreatePostDto {
  @ApiProperty() @IsString() title: string;
  @ApiProperty() @IsString() slug: string;
  @ApiPropertyOptional() @IsOptional() @IsString() excerpt?: string;
  @ApiProperty() @IsString() body: string;
  @ApiPropertyOptional() @IsOptional() @IsString() coverImage?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() coverImagePublicId?: string;
  @ApiPropertyOptional({ enum: BlogStatus, default: BlogStatus.DRAFT })
  @IsOptional() @IsEnum(BlogStatus) status?: BlogStatus;
  @ApiProperty() @IsString() authorId: string;
  @ApiPropertyOptional({ type: [String] }) @IsOptional() @IsArray() tagIds?: string[];
}
