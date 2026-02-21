import { Controller, Get, Post, Delete, Param, UseGuards, Req } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('wishlist')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard)
@Controller('wishlist')
export class WishlistController {
  constructor(private wishlistService: WishlistService) {}

  @Get()
  @ApiOperation({ summary: 'Get my wishlist' })
  findAll(@Req() req) { return this.wishlistService.findAll(req.user.id); }

  @Post(':productId')
  @ApiOperation({ summary: 'Toggle product in wishlist' })
  toggle(@Req() req, @Param('productId') productId: string) {
    return this.wishlistService.toggle(req.user.id, productId);
  }

  @Delete(':productId')
  @ApiOperation({ summary: 'Remove from wishlist' })
  remove(@Req() req, @Param('productId') productId: string) {
    return this.wishlistService.remove(req.user.id, productId);
  }
}
