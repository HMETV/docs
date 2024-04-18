// request-modal.component.ts

import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.scss'],
})
  
export class RequestModalComponent {
  equipment: string = '';
  quantity: string = '';

  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss();
  }

  submitRequest() {
    const requestData = {
      equipment: this.equipment,
      quantity: this.quantity,
    };
    this.modalController.dismiss(requestData);
  }
}