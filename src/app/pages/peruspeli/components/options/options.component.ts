import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { nanoid } from 'nanoid';
import { LottoGenerateService } from 'src/app/services/lotto-generate.service';
import { AddNewLotto } from 'src/app/store/actions/lotto';
import { week_duration } from 'src/app/store/enums/enums';
import { AppState } from 'src/app/store/models/AppState';
import { changePlusStatus } from 'src/app/store/reducers/plus';
import { getLottoAmount } from 'src/app/store/selectors/lotto';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  checkedValue = false
  indicator_style = {}
  customInputLabels = ['jokeri', 'lomatonni', 'Valitse Kesto' ]
  customInputAmount = ['1 000 000€', '1 000€' ]
  extraRow = [1,3,5,10]
  currentRow = 0
  private maxRows = 20
  customSelectOption = [
      {val:1, name:'1 viikko'},
      {val:2, name:'2 viikko'},
      {val:3, name:'3 viikko'},
      {val:5, name:'5 viikko'},
      {val:10, name:'10 viikko'},]
  constructor(private lottoService:LottoGenerateService, private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getLottoAmount).subscribe(
      num => (this.currentRow = num)
    )
  }
  changeValue = (val:boolean) => { 
    this.checkedValue = val
    // console.log(val)
    if(val){
      this.indicator_style = {'transform':'translateX(100%)'}
      // this.is_plus = true
      this.store.dispatch(changePlusStatus())
      
    }
    else{
      this.indicator_style = {'transform':'translateX(0%)'}
      // this.is_plus = false
      this.store.dispatch(changePlusStatus())
    }
   }
  addRandomLotto = (row:number) => { 
    // console.log(this.currentRow)
    if(this.currentRow < this.maxRows){
      for (let index = 0; index < row; index++) {
        const numbers =  this.lottoService.generateRadomLotto(40,7)
        const lotto = {
          id:nanoid(),
          numbers:numbers,
          is_editable:false,
          time_duration:week_duration.oneWeek,
          price:1,
        }
        this.store.dispatch(AddNewLotto({lotto:lotto}))
      }
    }
    
   }

}
