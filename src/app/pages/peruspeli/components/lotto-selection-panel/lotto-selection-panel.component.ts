import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { nanoid } from 'nanoid';
import { AddNewLotto } from 'src/app/store/actions/lotto';
import { week_duration } from 'src/app/store/enums/enums';
import { AppState } from 'src/app/store/models/AppState';
import { pushNewToCurrentLotto } from 'src/app/store/reducers/currentLotto';

@Component({
  selector: 'app-lotto-selection-panel',
  templateUrl: './lotto-selection-panel.component.html',
  styleUrls: ['./lotto-selection-panel.component.scss']
})
export class LottoSelectionPanelComponent implements OnInit {
  numbers = Array(40).fill(1).map((a,b) => a + b)
  constructor(private store:Store<AppState>) { }
  currentLotto:Array<number> = []
  ngOnInit(): void {
    this.store.select(s=> s.currentLotto).subscribe(
      (result) => { 
        this.currentLotto = result
       }
    )
  }
  setCurrentLotto = (currentNumber:number) => { 
    this.store.dispatch(pushNewToCurrentLotto({num:currentNumber}))
    if(this.currentLotto.length === 7){
      const sortedNumbers:Array<number> = [...this.currentLotto].sort((a,b) =>  a -b )
      const newlotto = {
        id:nanoid(),
        numbers:[...sortedNumbers ,Math.floor(Math.random()*40 +1)] ,
        is_editable:false,
        time_duration:week_duration.oneWeek,
        price:1,}
        this.store.dispatch(AddNewLotto({lotto:newlotto}))
        this.store.dispatch(pushNewToCurrentLotto({num:0}))
    }
    
   }
}
