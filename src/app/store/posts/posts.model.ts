
export interface Posts {
  id: string;
  text: string;
}

export class PostStateModel {
  posts: Posts[] = [];
}

export interface User {
  id: string;
  name: string;
  payment: number
  hasExperience: boolean;
}

export class UserStateModel {
  users: User[] = [];
}



