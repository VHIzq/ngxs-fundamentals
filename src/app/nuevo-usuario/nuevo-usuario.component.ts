import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddUser } from '../store/posts/posts.actions';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styles: [
  ]
})
export class NuevoUsuarioComponent {

  private _name: string = '';
  private _id: string='';
  private _payment: number= 0;
  private _hasExperience!: boolean;

  constructor( private store: Store) { }

  public get id() {
    return this._id
  }

  public  get name() {
    return this._name
  }

  public set name (name) {
    this._name = name
  }

  public get payment() {
    return this._payment
  }

  public set payment(payment) {
    this._payment = payment
  }

  public get hasExperience() {
    return this._hasExperience
  }

  public set hasExperience(experience) {
    this._hasExperience = experience
  }

  public  addUser() {
    this.store.dispatch( new AddUser({
      id: uuidv4(),
      name: this.name,
      payment: this.payment,
      hasExperience: this.hasExperience
    }))
  }

}
