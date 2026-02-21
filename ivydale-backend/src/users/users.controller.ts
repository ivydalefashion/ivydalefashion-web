import {
  Controller, Get, Patch, Delete, Body, Param, UseGuards, Req, Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { CreateAddressDto } from './dto/create-address.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('users')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: '[Admin] Get all users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get('profile')
  @ApiOperation({ summary: 'Get my profile' })
  getProfile(@Req() req) {
    return this.usersService.findOne(req.user.id);
  }

  @Patch('profile')
  @ApiOperation({ summary: 'Update my profile' })
  updateProfile(@Req() req, @Body() dto: UpdateProfileDto) {
    return this.usersService.updateProfile(req.user.id, dto);
  }

  @Get('addresses')
  @ApiOperation({ summary: 'Get my addresses' })
  getAddresses(@Req() req) {
    return this.usersService.getAddresses(req.user.id);
  }

  @Post('addresses')
  @ApiOperation({ summary: 'Add a new address' })
  addAddress(@Req() req, @Body() dto: CreateAddressDto) {
    return this.usersService.addAddress(req.user.id, dto);
  }

  @Patch('addresses/:id')
  @ApiOperation({ summary: 'Update an address' })
  updateAddress(@Req() req, @Param('id') id: string, @Body() dto: Partial<CreateAddressDto>) {
    return this.usersService.updateAddress(req.user.id, id, dto);
  }

  @Delete('addresses/:id')
  @ApiOperation({ summary: 'Delete an address' })
  deleteAddress(@Req() req, @Param('id') id: string) {
    return this.usersService.deleteAddress(req.user.id, id);
  }

  @Get(':id')
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: '[Admin] Get user by ID' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
}
