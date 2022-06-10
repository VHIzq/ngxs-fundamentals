import { Action, Selector, State, StateContext } from "@ngxs/store";
import { PostStateModel } from "./posts.model";
import { AddPost, RemovePost } from './posts.actions';

@State({
  name: 'posts',
  defaults: {
    posts: []
  }
})


export class PostState {

  @Selector()
  static getPost( state: PostStateModel ) { return state.posts; }

  //*Agregar un nuevo post al estado
  @Action( AddPost )
  //* es un reduce. toma el state a mutar con statecontext y en el payload, la accion que lo realiza.
  add({ getState, patchState}: StateContext<PostStateModel>, {
    payload}: AddPost ) {
      const state = getState();
      patchState({
        posts: [...state.posts, payload]
      });
    }


  //* Elimina un post del estado
  @Action(RemovePost)
  remove( { getState, patchState }: StateContext<PostStateModel>, { payload }: RemovePost ) {
    patchState({
      posts: getState().posts.filter(post => post.id !== payload)
    });
  }
}
