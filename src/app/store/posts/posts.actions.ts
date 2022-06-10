import { Posts } from "./posts.model";


  export class AddPost {
    static readonly type = '[POSTS] Add Posts'

    constructor( public payload: Posts ) {}
  }

  export class RemovePost {
    static readonly type = '[POSTS] Remove Posts'

    constructor( public payload: string ) {}

  }

export class AddAnimal {
  static readonly type = '[Zoo] Add Animal';
  constructor(public name: string) {}
}

export namespace Animals{

  export class Feed {
    static readonly type = '[Zoo] Feed Animals';
    constructor(public name: string, public hayAmount: number) {};
  }

  export class Wash {
    static readonly type = ' [Zoo] Wash Animals ';
    constructor (public soap: boolean) {}
  }
}


export namespace Todo {
  export class Add {
    static readonly type = '[Todo] Add';
    constructor(public payload: any) {}
  }

  export class Edit {
    static readonly type = '[Todo] Edit';
    constructor(public payload: any) {}
  }

  export class FetchAll {
    static readonly type = '[Todo] Fetch All';
  }

  export class Delete {
    static readonly type = '[Todo] Delete';
    constructor(public id: number) {}
  }
}


