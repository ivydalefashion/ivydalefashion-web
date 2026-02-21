import {
  Controller, Post, Delete, Param, UploadedFile, UseInterceptors, UseGuards, Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import {
  ApiTags, ApiOperation, ApiBearerAuth, ApiConsumes, ApiBody, ApiQuery,
} from '@nestjs/swagger';

@ApiTags('cloudinary')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard)
@Controller('cloudinary')
export class CloudinaryController {
  constructor(private cloudinaryService: CloudinaryService) {}

  @Post('upload')
  @ApiOperation({ summary: 'Upload a file to Cloudinary' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ schema: { type: 'object', properties: { file: { type: 'string', format: 'binary' } } } })
  @ApiQuery({ name: 'folder', required: false })
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Express.Multer.File, @Query('folder') folder?: string) {
    const result = await this.cloudinaryService.uploadFile(file, folder ?? 'ivydale');
    return { url: result.secure_url, publicId: result.public_id };
  }

  @Delete(':publicId')
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @ApiOperation({ summary: '[Admin] Delete file from Cloudinary' })
  async delete(@Param('publicId') publicId: string) {
    await this.cloudinaryService.deleteFile(publicId);
    return { deleted: true };
  }
}