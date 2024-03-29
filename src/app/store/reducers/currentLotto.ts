import { createAction, createReducer, props,on } from "@ngrx/store"

const initialState:Array<number> = []

export const pushNewToCurrentLotto = createAction(
    "[currentLotto]  add a new number to currentLotto",
    props<{num:number}>()
)
export const deleteCurrentLotto = createAction(
    '[currentLotto] delete the current lotto'
)
export const pushAllToCurrentLotto = createAction(
    '[currentLotto] add a new group of numbers to currentlotto',
    props<{numbers:number[]}>()
)

export const CurrentLotto = createReducer(
    initialState,
    on(pushNewToCurrentLotto, (state,{num})=>{
        // console.log(state)
        if(state.length < 7 && num != 0){
            if(!state.includes(num)){
                return [...state,num]
            }else{
                return state.filter(s=> s !==num)
            }
        }else{
            return initialState
        }
        
    }),
    on(pushAllToCurrentLotto, (state,action) => action.numbers),
    on(deleteCurrentLotto, ()=> initialState),
)