import { createReducer, on } from '@ngrx/store';
import { loadUser, loadUserSuccess, loadUserError } from '../actions';
import { User } from 'src/app/models/user.model';

export interface UserState {
    id      : string;
    user    : User,
    loaded  : boolean,
    loadding: boolean,
    error   : any
}

export const userInitialState: UserState = {
    id: null,
    user   : null,
    loaded  : false,
    loadding: false,
    error   : null
}

const _UserReducer = createReducer(userInitialState,

    on( loadUser , (state, { id }) => ({
         ...state, 
         loadding: true,
         id: id 
        })),
    
    
    on( loadUserSuccess , (state, { user }) => ({ 
        ...state, 
        loadding: false,
        loaded:true,
        user: {...user}
    })),

    on( loadUserError , (state, { payload } ) => ({ 
        ...state, 
        loadding: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),

);

export function userReducer(state, action) {
    return _UserReducer(state, action);
}