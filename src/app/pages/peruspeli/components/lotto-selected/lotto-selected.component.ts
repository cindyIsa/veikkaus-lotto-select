import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LottoGenerateService } from 'src/app/services/lotto-generate.service';
import { AppState } from 'src/app/store/models/AppState';
import { lotto } from 'src/app/store/models/lotto';
import { changePlusStatus } from 'src/app/store/reducers/plus';

@Component({
  selector: 'app-lotto-selected',
  templateUrl: './lotto-selected.component.html',
  styleUrls: ['./lotto-selected.component.scss']
})
export class LottoSelectedComponent implements OnInit {

  constructor(private store:Store<AppState>) { }
  lottos:Observable<Array<lotto>> = new Observable()
  is_plus:boolean = false
  current_lotto:Array<number> = []
  ngOnInit(): void {
    this.lottos = this.store.select(s=> s.lotto)
    this.store.select(s=> s.plus).subscribe(
      (status:boolean) => { 
        this.is_plus = status
       }
    )
    
    this.store.select(s=> s.currentLotto).subscribe(
      (result) => { 
        this.current_lotto = result
       }
    )
  }
  
}
