import { createReducer, on } from "@ngrx/store";
import { LottoGenerateService } from "src/app/services/lotto-generate.service";
import { AddNewLotto, DeleteLottoByID, RandomLottoByID } from '../actions/lotto'
import { week_duration } from "../enums/enums";
import { lotto } from "../models/lotto";

// const initialState:Array<lotto> = []
const initialState:Array<lotto> = [{
    id:"1",
    numbers:[1,2,32,4,23,43,40,24],
    is_editable:false,
    time_duration:week_duration.fiveWeeks,
    price:1,
}]
const service = new LottoGenerateService() 
export const lottoReducer =  createReducer(
    initialState,
    on(AddNewLotto, (state,{lotto:lotto}) => [lotto,...state]),
    on(DeleteLottoByID, (state,{id}) => state.filter(s => s.id !== id)),
    on(RandomLottoByID, (state,{id}) => {
        const newState:Array<lotto> = []
        state.map((s) => { 
            if(s.id === id){
                newState.push({...s, numbers:service.generateRadomLotto(40,8)})
            }
            else{
                newState.push(s)
            }
         })
        return newState
    }  )
)


