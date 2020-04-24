import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-login-options',
  templateUrl: './login-options.page.html',
  styleUrls: ['./login-options.page.scss'],
})
export class LoginOptionsPage implements OnInit {
  @Input() accounts: string[];


  constructor(
    protected modal: ModalController,
  ) { }

  ngOnInit() {
    console.log(`accounts: `, this.accounts);
  }

  dismiss(index: number) {
    this.modal.dismiss({
      dismissed: true,
      index,
    });
  }

}
