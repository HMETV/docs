// home.page.ts

import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RequestModalComponent } from '../request-modal/request-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  objectDetected: boolean = false;
  
  constructor(private modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: RequestModalComponent,
      componentProps: {}
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      console.log('User Information:', data);
      // Here you can handle the user information received from the modal
    }
  }
}