import { Event } from './../model/event';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  list: Event[] = [
    {
      name: 'End of the world',
      date: '2038. Január 19.',
      time: '03:14:07',
      location: {
        address: 'Mindenki háza',
        city: 'Mindegyik',
        country: 'Az összes'
      }
    },
    {
      name: 'Dzsembori Borival',
      date: 'Január 11',
      time: '18:00',
      location: {
        address: 'Borbála utca',
        city: 'Borbálásújpécs',
        country: 'Románia'
      }
    },
    {
      name: 'Buli Baluval',
      date: 'Január 10',
      time: '11:00',
      location: {
        address: 'Balu utca',
        city: 'Békásmegyer',
        country: 'Magyarország'
      }
    },
  ]

  getAll(): Event[] {
    return this.list
  }

  constructor() { }
}
