import { ActionReducer, ActionReducerMap, ReducerTypes } from "@ngrx/store"
import { AppState } from "./store/models/AppState"
import { CurrentLotto } from "./store/reducers/currentLotto"
import { durationReducer } from "./store/reducers/duration"
import { lottoReducer } from "./store/reducers/lotto"
import { plusReduce } from "./store/reducers/plus"

export const reducers :ActionReducerMap<AppState> = 
    {
        lotto:lottoReducer,
        plus:plusReduce,
        currentLotto:CurrentLotto,
        weekDuration:durationReducer,
      
    }


