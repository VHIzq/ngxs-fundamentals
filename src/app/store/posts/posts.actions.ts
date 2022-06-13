import { Posts, User } from "./posts.model";


  export class AddPost {
    static readonly type = '[POSTS] Add Posts'

    constructor( public payload: Posts ) {}
  }

  export class RemovePost {
    static readonly type = '[POSTS] Remove Posts'

    constructor( public payload: string ) {}

  }

  export class AddUser {
    static readonly type = '[USER] Add User '
    constructor( public payload: User ) {}
  }

  export class RemoveUser {
    static readonly type = ' [USER] Remove User '
    constructor( public payload: string ) {}
  }



