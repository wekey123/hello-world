import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})

export class HeaderService {

  constructor() { }

  getHeroes () {
    return 'test';
  }
}
