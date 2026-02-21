import { IsString, IsOptional, IsBoolean, IsUrl } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateBrandDto {
  @ApiProperty({ example: 'Adidas' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'adidas' })
  @IsString()
  slug: string;

  @ApiPropertyOptional() @IsOptional() @IsString() description?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() logo?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() banner?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() website?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() facebook?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() instagram?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() twitter?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() tiktok?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() youtube?: string;
  @ApiPropertyOptional({ default: true }) @IsOptional() @IsBoolean() isActive?: boolean;
}
