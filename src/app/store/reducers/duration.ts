import { createAction, createReducer, on, props } from "@ngrx/store";
import { week_duration } from "../enums/enums";

export const weekDuration:week_duration = week_duration.tilaus

export const changeWeekDuration =  createAction(
    '[week duration] change the week duration',
    props<{duration:number}>()
)
export const durationReducer = createReducer(
    weekDuration,
    on(changeWeekDuration, (_,{duration})=>duration)
)