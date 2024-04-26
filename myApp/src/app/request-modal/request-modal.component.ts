// request-modal.component.ts

import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.scss'],
})
  
export class RequestModalComponent {
  equipment: string = '';
  quantity: string = '';
  logoShouldMove = false;
  
  constructor(private modalController: ModalController, private toastController: ToastController) {}

  dismissModal() {
    this.modalController.dismiss();
  }

  animateLogo() {
    this.logoShouldMove = true;
    // Change the duration as needed
  }

  async submitRequest() {
    if (!this.equipment || !this.quantity) {
      this.presentToast('Please fill in all fields.');
      return;
    }

    this.sendRequestToServer();

    // Display confirmation message
    this.presentToast('Request submitted successfully.');

    this.animateLogo();

    // Dismiss the modal
    this.dismissModal();

    const requestData = {
      equipment: this.equipment,
      quantity: this.quantity,
    };
    this.modalController.dismiss(requestData);
  }

  async sendRequestToServer() {
    // Simulate sending request to server with a timeout
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // Simulated success response from server
        resolve();
      }, 2000); // Adjust timeout as needed
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Display toast for 2 seconds
      position: 'bottom'
    });
    toast.present();
  
    
  }
}

