import { combineReducers } from "redux";
import { EDefaultActions } from "../constants";
import { authReducer, IAuthReducer } from "./auth.reducer";
import { IUserReducer, userReducer } from "./user.reducer";

export interface IRootReducer {
    auth: IAuthReducer;
    user: IUserReducer;
    default: IDefaultReducer,
}

interface IDefaultReducer {
    loading: boolean,
}

const initialState = {
    loading: false,
}

const defaultReducer = (state:IDefaultReducer=initialState, action:any) => {
    switch(action.type) {
        case EDefaultActions.SET_LOADING: {
            return { ...state, loading: action.payload }
        }

        default: {
            return state; 
        }
    }
}

const reducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    default: defaultReducer,
  })

export { reducers };