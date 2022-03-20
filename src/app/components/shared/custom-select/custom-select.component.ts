import { Component,Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/AppState';
import { changeWeekDuration } from 'src/app/store/reducers/duration';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {
  @Input() inputLabel:string=""
  @Input() inputLabelAmount:string = ""
  @Input() selectOptions:Array<any> = []
  selectOption = "tilaus"
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  
  }
  setOption = (event:Event) => { 
    const selectDom = event.target as HTMLSelectElement
    this.selectOption = this.selectOptions[selectDom.selectedIndex].name
    this.store.dispatch(changeWeekDuration( {duration:this.selectOptions[selectDom.selectedIndex].val}))
  }

}
