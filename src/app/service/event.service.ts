import { Event } from './../model/event';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  list: Event[] = [
    {
      name: 'End of the World',
      date: '2038. január 19.',
      time: '03:14:07',
      location: {
        address: 'Mindenki háza',
        city: 'Mindegyik',
        country: 'Az összes'
      }
    },
    {
      name: 'Dzsembori Borival',
      date: '2022. február 11.',
      time: '18:00',
      location: {
        address: 'Borbála utca',
        city: 'Borbálásújpécs',
        country: 'Románia'
      }
    },
    {
      name: 'Buli Baluval',
      date: '2022. anuár 10.',
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
