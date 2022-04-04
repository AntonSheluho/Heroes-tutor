import { ActionType } from './../actionTypes';
import { createAction, props } from "@ngrx/store";

export const registerAction = createAction(
    ActionType.REGISTER,
    props<{ username: string; email: string; password: string }>(),
)