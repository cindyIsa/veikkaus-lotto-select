import { lotto } from "./lotto";

export interface AppState{
    "lotto":Array<lotto>;
    "plus":boolean;
    "currentLotto":Array<number>;
    'weekDuration':number;
}