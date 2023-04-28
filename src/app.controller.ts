import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('info')
  getHello() {
    return this.appService.getHello();
  }

  @Post('info')
  createHello() {
    return this.appService.create();
  }
}
