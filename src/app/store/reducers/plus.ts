import { createAction, createReducer, on, props } from "@ngrx/store";

export const is_plus = false

export const changePlusStatus = createAction(
    "[plus] change the plus status")

export const plusReduce = createReducer(is_plus,
    on(changePlusStatus,(is_plus) => !is_plus )
)