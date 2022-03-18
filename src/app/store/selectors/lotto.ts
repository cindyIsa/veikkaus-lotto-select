import { createSelector } from "@ngrx/store";
import { AppState } from "../models/AppState";
  
export const lottoGroup =  (state:AppState) => state.lotto
export const getLottoAmount = createSelector(
    lottoGroup,
    (state) => (state.length)
)
