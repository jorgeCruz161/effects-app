import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usersActions from "../actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { UserService } from "src/app/services/user.service";

@Injectable()
export class UserEffects{

    constructor(
        private actions$: Actions,
        private usersServices: UserService
    ){}

    loadUser$ = createEffect(
        () => this.actions$.pipe(
            ofType( usersActions.loadUser ),
            mergeMap( 
                ( action ) => this.usersServices.getUserById( action.id )
                    .pipe( 
                        map( user => usersActions.loadUserSuccess({ user: user }) ),
                        catchError( err => of (usersActions.loadUserError({ payload: err })) )
                    )
            )
        )
    )

}