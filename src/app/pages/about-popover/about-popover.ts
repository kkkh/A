import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="close('https://b23.tv/kpckvPQ')">
        <ion-label>呀超（哔哩哔哩）</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://qm.qq.com/cgi-bin/qm/qr?k=VYzqzge_HU-pc7Qn7ws4QDOeRaEnGncS&noverify=0&personal_qrcode_source=4')">
        <ion-label>QQ</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://github.com/kkkh')">
        <ion-label>GitHub</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://awvw.cn')">
        <ion-label>秦超</ion-label>
      </ion-item>
      <ion-item button (click)="support('https://support.qq.com/product/287814')">
        <ion-label>帮助</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController) {}

  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
