import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  indicator_style = {
    'transform':'translate3d(0px, 0px, 0px)',
      'width':'76px'
  }
  title = 'lotto';
  set_indicator_co = (event:Event) => { 
    const target = event.target as HTMLElement
    const targetDim =  target.getBoundingClientRect()
    const offsetX = targetDim.x -14
    const width = targetDim.width + 4
    this.indicator_style = {
      'transform':'translate3d('+ offsetX +'px, 0px, 0px)',
      'width':width  + 'px'
    }
   }

   
}

