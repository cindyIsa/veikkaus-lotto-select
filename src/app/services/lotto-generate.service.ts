import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LottoGenerateService{
  constructor() {

   }
  
  generateRadomLotto(maxN:number, row:number):Array<number>{
    var lotto:Array<number> = []
    while(lotto.length < row){
      const num = Math.floor(Math.random()*maxN) + 1
      if(!lotto.includes(num)){
        lotto.push(num)
      }
    }
    lotto.sort((a,b) => (a - b))
    lotto.push(Math.floor(Math.random()*maxN) + 1)
    return lotto
  }
}
