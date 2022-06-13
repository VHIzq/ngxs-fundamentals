import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UserStateModel } from "./posts.model";
import { AddUser, RemoveUser, RemovePost } from './posts.actions';



@State({
  name: 'users',
  defaults:{
    users: []
  }
})
export class UserState {

  @Selector()
  static getUser( state: UserStateModel) { return state.users };
  //* desestructuracion permite extraer los dos metodos  de statecontext.
  //* Y a la vez definimos el state que deseamos mutar.
  add({ getState, patchState}: StateContext<UserStateModel>, {
    payload}: AddUser) {
      const oldState = getState();
      patchState({
        users: [...oldState.users, payload]
      })
  }

  @Action(RemoveUser)
  remove( {getState, patchState}: StateContext<UserStateModel>, { payload}: RemovePost ) {
    patchState({
      users: getState().users.filter( user => user.id !== payload)
    });
  }

}
