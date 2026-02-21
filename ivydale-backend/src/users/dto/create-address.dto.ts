import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiPropertyOptional({ default: 'Home' }) @IsOptional() @IsString() label?: string;
  @ApiProperty() @IsString() firstName: string;
  @ApiProperty() @IsString() lastName: string;
  @ApiProperty() @IsString() street: string;
  @ApiPropertyOptional() @IsOptional() @IsString() suburb?: string;
  @ApiProperty() @IsString() city: string;
  @ApiProperty() @IsString() province: string;
  @ApiProperty() @IsString() postalCode: string;
  @ApiPropertyOptional({ default: 'South Africa' }) @IsOptional() @IsString() country?: string;
  @ApiPropertyOptional({ default: false }) @IsOptional() @IsBoolean() isDefault?: boolean;
}
