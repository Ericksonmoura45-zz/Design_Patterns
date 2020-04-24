import { Injectable } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';

import { NullUser, User } from '../models';
import { LoginOptionsPage } from '../modal/login-options/login-options.page';
import { isObject } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user;
  public isLogged = false;

  accounts: string[] = [
    'assets/avatar-finn.png',
    'assets/avatar-han.png',
    'assets/avatar-leia.png',
    'assets/avatar-luke.png',
  ];

  constructor(
    protected toast: ToastController,
    protected modal: ModalController,
  ) {
    this.user = new NullUser(this.toast);
  }

  async login() {
    const m = await this.modal.create({
      component: LoginOptionsPage,
      componentProps: {
        accounts: this.accounts
      },
    });
    m.present();

    const { data } = await m.onWillDismiss();
    if (data) {
      clearInterval(this.user.interval);
      this.user = new User(this.toast);
      this.user.name = this.user.name + ' ' + data.index;
      this.user.profile = this.accounts[data.index];
    }
    this.isLogged = this.user instanceof User;

    console.log(`this.user instanceof User: `, this.user instanceof User);
    console.log(`data: `, data);
  }
}
