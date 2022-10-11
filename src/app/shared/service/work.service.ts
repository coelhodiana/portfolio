import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { works } from '../content/works';
import { Work } from '../interface/work';

@Injectable({
  providedIn: 'root',
})
export class WorkService {
  constructor() {}

  getWorks(): Observable<Work[]> {
    return of(works);
  }
}
