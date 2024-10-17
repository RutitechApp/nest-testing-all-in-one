import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { title: string; subtitle: string } {
    return {
      title: 'Dynamic Title from Service',
      subtitle: 'Dynamic Subtitle from Service',
    };
  }
}
