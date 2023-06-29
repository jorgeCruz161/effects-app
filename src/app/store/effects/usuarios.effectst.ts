import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as usersActions from "../actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { UserService } from "src/app/services/user.service";

@Injectable()
export class  UsersEffects{

    constructor(
        private actions$: Actions,
        private usersServices: UserService
    ){}

    loadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType( usersActions.loadUsers ),
            mergeMap( 
                () => this.usersServices.getUsers()
                    .pipe( 
                        map( users => usersActions.loadUsersSuccess({ users: users }) ),
                        catchError( err => of (usersActions.loadUsersError({ payload: err })) )
                    )
            )
        )
    )

}