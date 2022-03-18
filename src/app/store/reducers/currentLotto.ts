import { createAction, createReducer, props,on } from "@ngrx/store"

const initialState:Array<number> = []

export const pushNewToCurrentLotto = createAction(
    "[currentLotto]  add a new number to currentLotto",
    props<{num:number}>()
)

export const CurrentLotto = createReducer(
    initialState,
    on(pushNewToCurrentLotto, (state,{num})=>{
        console.log(state)
        if(state.length < 7){
            if(!state.includes(num)){
                return [...state,num]
            }else{
                return state.filter(s=> s !==num)
            }
        }else{
            return initialState
        }
        
    }),
)