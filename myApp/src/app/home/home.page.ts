// home.page.ts

import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RequestModalComponent } from '../request-modal/request-modal.component';
import { LogoAnimationService } from '../logo-animation.service'; // Import the LogoAnimationService

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
  

export class HomePage {
  logoShouldMove = false;
   
  constructor(private modalController: ModalController, private logoAnimationService: LogoAnimationService ) {}

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

  // Method to toggle logo animation using the LogoAnimationService
  async toggleLogoAnimation() {
    this.logoAnimationService.toggleAnimation();
  }
}
