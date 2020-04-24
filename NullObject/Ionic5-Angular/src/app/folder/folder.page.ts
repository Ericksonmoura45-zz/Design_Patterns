import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LoginOptionsPage } from '../modal/login-options/login-options.page';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    protected toast: ToastController,
    protected modal: ModalController,
    protected userService: UserService,
  ) {
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(`folder: `, this.folder);
  }
}
