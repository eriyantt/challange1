import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProdukPage } from '../produk/produk';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onGoToLogin(){
    this.navCtrl.push(LoginPage)
  }
  
  onGoToProduk(){
    this.navCtrl.push(ProdukPage)
  }

}
