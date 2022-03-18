import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {
  @Input() inputLabel:string=""
  @Input() inputLabelAmount:string = ""
  @Input() selectOptions:Array<any> = []
  selectOption = "10 viikoa"
  constructor() { }

  ngOnInit(): void {
  
  }
  setOption = (event:Event) => { 
    const selectDom = event.target as HTMLSelectElement
    this.selectOption = this.selectOptions[selectDom.selectedIndex].name
   }

}
