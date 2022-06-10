import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddPost } from '../store/posts/posts.actions';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-nuevo-posts',
  templateUrl: './nuevo-posts.component.html',
  styleUrls: ['./nuevo-posts.component.css']
})
export class NuevoPostsComponent  {

  public text: string = '';
  constructor(  private store: Store) { }

  public addPost() {

    this.store.dispatch( new AddPost({ id: uuidv4(), text: this.text}));
    this.text = ''
  }


}
