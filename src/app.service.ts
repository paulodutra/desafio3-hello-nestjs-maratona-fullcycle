import { Injectable } from '@nestjs/common';
import { MyService } from './my.service';

@Injectable()
export class AppService {

  constructor(private Service: MyService){}

  getHello(): string {
    return `Hello ${this.Service.randonWord()}`;
  }


}
