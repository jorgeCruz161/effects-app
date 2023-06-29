import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersError } from '../actions';
import { User } from 'src/app/models/user.model';

export interface UsersState {
    users: User[],
    loaded  : boolean,
    loadding: boolean,
    error   : any
}

export const usersInitialState: UsersState = {
    users   : [],
    loaded  : false,
    loadding: false,
    error   : null
}

const _usersReducer = createReducer(usersInitialState,

    on( loadUsers , state => ({ ...state, loadding: true })),
    
    
    on( loadUsersSuccess , (state, { users }) => ({ 
        ...state, 
        loadding: false,
        loaded:true,
        users: [...users]
    })),

    on( loadUsersError , (state, { payload } ) => ({ 
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

export function usersReducer(state, action) {
    return _usersReducer(state, action);
}