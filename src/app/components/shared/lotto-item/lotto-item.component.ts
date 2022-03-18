import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { week_duration } from 'src/app/store/enums/enums';
import { lotto } from 'src/app/store/models/lotto';
import { DeleteLottoByID, RandomLottoByID } from 'src/app/store/actions/lotto';
import { AppState } from 'src/app/store/models/AppState';


@Component({
  selector: 'app-lotto-item',
  templateUrl: './lotto-item.component.html',
  styleUrls: ['./lotto-item.component.scss']
})
export class LottoItemComponent implements OnInit {

  @Input() lotto: lotto = {
    id: "",
    numbers: [],
    is_editable: false,
    time_duration: week_duration.oneWeek,
    price: 1,
  }
  @Input() is_plus:boolean = false
  @Input() is_current:boolean = false
  @Input() current_lotto:Array<number> = []
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }
  deleteLotto = (id:string) => { 
    this.store.dispatch(DeleteLottoByID({id}))
   }
   randomPlus = (id:string) => { 
     this.store.dispatch(RandomLottoByID({id}))
    }

}
