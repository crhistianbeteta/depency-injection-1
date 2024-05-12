import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {
  createdAt: string
  generated$ = new BehaviorSubject<string>(this.generate());
  logger = inject(LoggerService);

  constructor() {
    this.createdAt = new Date().toISOString();
    this.logger.log("ID GENERATOR SERVICE CREATED AT" + this.createdAt);
  }

  private generate(): string {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const groupLength = 5;
    const groups = 4;

    let result = '';

    for (let i = 0; i < groups; i++) {
      for (let j = 0; j < groupLength; j++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      if (i !== groups - 1) {
        result += '-';
      }
    }

    return result;
  }
}
