import { Injectable } from '@nestjs/common';

import * as temperatureData from './static/temperature.json';
import * as precipitationData from './static/precipitation.json';
import { IData } from './types';

@Injectable()
export class AppService {
  getTemperatureData(): IData[] {
    return temperatureData;
  }

  getPrecipitationData(): IData[] {
    return precipitationData;
  }
}
