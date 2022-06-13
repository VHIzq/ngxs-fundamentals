import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RemoveUser } from '../store/posts/posts.actions';
import { User } from '../store/posts/posts.model';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styles: [
  ]
})
export class ListarUsuariosComponent  {

  public users: Observable<User[]>;

  constructor( private store: Store) {
    this.users = this.store.select( state => state.users.users)
   }

   public removeUser(id: string) {
    this.store.dispatch( new RemoveUser(id))
   }

}
