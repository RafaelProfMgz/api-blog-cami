import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('protected')
export class ProtectedController {
  @Get()
  @UseGuards(AuthGuard('jwt'))
  getProtectedData() {
    return 'This is protected data';
  }
}
