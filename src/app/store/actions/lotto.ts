import { createAction, props } from "@ngrx/store";
import { lotto } from "../models/lotto";

export const AddNewLotto =  createAction(
    '[lotto] add a new lotto series to lotto group',
    props<{lotto:lotto}>())

export const DeleteLottoByID = createAction(
    '[lotto] delete the lotto by id',
    props<{id:string}>())

export const RandomLottoByID = createAction(
    '[lotto] random change the plus number by id',
    props<{id:string}>())