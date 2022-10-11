import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Work } from './shared/interface/work';
import { WorkService } from './shared/service/work.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Diana Coelho - Desenvolvedora de Sistemas';
  works$ = new BehaviorSubject<Work[]>([]);

  constructor(private workService: WorkService) {

  }

  ngOnInit(): void {
    this.workService.getWorks().subscribe((works) => {
      console.log(works);

      this.works$.next(works)

    })
  }
}
