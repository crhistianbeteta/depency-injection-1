import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private _prefix: string = '';

  set prefix(prefix: string) {
    this._prefix = prefix;
  }
  constructor() { }

  public log(message: string) {
    console.log(this._prefix, message);
  }

}
