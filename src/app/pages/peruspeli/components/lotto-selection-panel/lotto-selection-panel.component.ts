import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { nanoid } from 'nanoid';
import { of } from 'rxjs';
import { delay, map, mergeWith} from 'rxjs/operators';
import { AddNewLotto } from 'src/app/store/actions/lotto';
import { week_duration } from 'src/app/store/enums/enums';
import { AppState } from 'src/app/store/models/AppState';
import { pushAllToCurrentLotto, pushNewToCurrentLotto } from 'src/app/store/reducers/currentLotto';
import { getLottoAmount, getTotalPay } from 'src/app/store/selectors/lotto';

@Component({
  selector: 'app-lotto-selection-panel',
  templateUrl: './lotto-selection-panel.component.html',
  styleUrls: ['./lotto-selection-panel.component.scss']
})
export class LottoSelectionPanelComponent implements OnInit {
  numbers = Array(40).fill(1).map((a, b) => a + b)
  constructor(private store: Store<AppState>) { }
  currentLotto: Array<number> = []
  lottoAmount = 0
  is_plus = false
  pay = 0
  weekDuration = 1
  is_loading = false
  ngOnInit(): void {
    this.store.select(s => s.currentLotto).subscribe(
      (result) => {
        this.currentLotto = result
      }
    )
    this.store.select(getLottoAmount).subscribe(
      (result) => { 
        this.lottoAmount = result
       }
    )
    this.store.select(s=> s.plus).subscribe(
      (res) => {
        this.is_plus = res
      }
    )
    this.store.select(getTotalPay).subscribe(
      (res) => {
        this.pay = res
      }
    )
    this.store.select(s=> s.weekDuration).subscribe(
      (res)=> {
        this.weekDuration = res
      }
    )
    
  }
  private generateLotto(current_lotto:Array<number>) {
    const sortedNumbers: Array<number> = [...current_lotto].sort((a, b) => a - b)
    const newlotto = {
      id: nanoid(),
      numbers: [...sortedNumbers, Math.floor(Math.random() * 40 + 1)],
      is_editable: false,
      time_duration: week_duration.oneWeek,
      price: 1,
    }
    // this.store.dispatch(AddNewLotto({ lotto: newlotto }))
    setTimeout(() => {
      this.store.dispatch(AddNewLotto({ lotto: newlotto }))
      this.store.dispatch(pushNewToCurrentLotto({ num: 0 }))
    }, 500);
    
    
    
    
  }
  setCurrentLotto = (currentNumber: number) => {
    this.store.dispatch(pushNewToCurrentLotto({ num: currentNumber }))
    if (this.currentLotto.length === 7) {
      this.generateLotto(this.currentLotto)
    }
  }
  generateCurrentLotto = () => {
    const lotto_size = 7
    const current_lotto_size = this.currentLotto.length
    const current_lotto = [...this.currentLotto]
    for (let index = 0; index < lotto_size - current_lotto_size; index++) {
      var randomNumber =Math.floor( Math.random() * 40 )+ 1
      while (current_lotto.includes(randomNumber)) {
        randomNumber = Math.floor( Math.random() * 40 )+ 1
      }
      current_lotto.push(randomNumber)
    }
    // console.log(current_lotto)
    this.store.dispatch(pushAllToCurrentLotto({numbers:current_lotto}))
    this.generateLotto(current_lotto)

  }
}
