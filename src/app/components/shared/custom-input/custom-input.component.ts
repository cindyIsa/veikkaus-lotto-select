import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {
  @Input() inputLabel:string=""
  @Input() inputLabelAmount:string = "asd"
  amount = 0
  private maxAmount = 10
  private minAmount = 0
  constructor() { }

  ngOnInit(): void {
  }
  addAmount = (cond:boolean) => { 
    // const restraint = /  /
    if(cond && this.amount < this.maxAmount){
      this.amount++
    }else if(!cond && this.amount > this.minAmount){
      this.amount--
    }
   }
}
