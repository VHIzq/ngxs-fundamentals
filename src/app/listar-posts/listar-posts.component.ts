import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { RemovePost } from '../store/posts/posts.actions';
import { Posts } from '../store/posts/posts.model';

@Component({
  selector: 'app-listar-posts',
  templateUrl: './listar-posts.component.html',
  styleUrls: ['./listar-posts.component.css']
})

export class ListarPostsComponent  {

  public posts: Observable<Posts[]>;

  constructor( private store: Store ) {
    this.posts = this.store.select(state => state.posts.posts)
  }

  public removePost(id: string) {
    this.store.dispatch(new RemovePost(id))
  }

}
