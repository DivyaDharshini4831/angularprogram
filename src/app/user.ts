import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private logger: Logger) {}

  getuser() {
    const user = { id: 1, name: 'John Doe', email: 'john.doe@example.com' };
    this.logger.log(`fetched user: ${user.name}`);
    return user;
  }

}
