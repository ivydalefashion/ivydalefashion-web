import { IsString, IsOptional, IsArray } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// status: DRAFT | PUBLISHED | ARCHIVED

export class CreatePostDto {
  @ApiProperty() @IsString() title: string;
  @ApiProperty() @IsString() slug: string;
  @ApiPropertyOptional() @IsOptional() @IsString() excerpt?: string;
  @ApiProperty() @IsString() body: string;
  @ApiPropertyOptional() @IsOptional() @IsString() coverImage?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() coverImagePublicId?: string;
  @ApiPropertyOptional({ example: 'DRAFT', description: 'DRAFT | PUBLISHED | ARCHIVED' })
  @IsOptional() @IsString() status?: string;
  @ApiProperty() @IsString() authorId: string;
  @ApiPropertyOptional({ type: [String] }) @IsOptional() @IsArray() tagIds?: string[];
}
