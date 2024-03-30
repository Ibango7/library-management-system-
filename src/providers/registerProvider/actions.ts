import { IRegisterStateContext } from "./context";
import { createAction } from "redux-actions";
import { IRegister } from "./context";

export const actionType = {
    REGISTER_USER: "REGISTER_USER"
}

export const registerUserAction = createAction<IRegisterStateContext>(actionType.REGISTER_USER, ()=>({}));

