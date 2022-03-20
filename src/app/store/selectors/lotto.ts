import { createSelector } from "@ngrx/store";
import { AppState } from "../models/AppState";
import { lotto } from "../models/lotto";
  
export const lottoGroup =  (state:AppState) => state.lotto
export const getLottoAmount = createSelector(
    lottoGroup,
    (state) => (state.length)
)
export const getTotalPay = createSelector(
    lottoGroup,
    (state:AppState) => state.plus,
    (state:AppState) => state.weekDuration,
    (lotto:lotto[],is_plus, week_duration) => {
        if(is_plus){
            return lotto.length *(1+ 0.5) *week_duration
        }else{
            return lotto.length*week_duration
        }
    }
)