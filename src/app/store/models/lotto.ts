import { week_duration } from "../enums/enums";

export interface lotto{
    id:string,
    numbers:Array<number>,
    is_editable:boolean,
    time_duration:week_duration,
    price:number,
}