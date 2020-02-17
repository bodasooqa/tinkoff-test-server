import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IData } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return `Hi there :)`;
  }

  @Get('temperature')
  getTemperature(): IData[] {
    return this.appService.getTemperatureData();
  }

  @Get('precipitation')
  getPrecipitation(): IData[] {
    return this.appService.getPrecipitationData();
  }
}
