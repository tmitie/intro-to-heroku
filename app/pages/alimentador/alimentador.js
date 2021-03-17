import { OnInit } from '@angular/core';
import { Page, NavController, NavParams } from 'ionic-angular';
import { AlimentadorService } from '../../services/alimentador-service';

@Page({
    templateUrl: 'build/pages/alimentador/alimentador.html'
})


export class AlimentadorPage {


    static get parameters() {
        return [[NavController], [NavParams], [alimentadorService]];
    }

    constructor(nav, navParams, alimentadorService) {
        this.alimentadorService = alimentadorService;
        this.alimentador = navParams.get('alimentador');
    }

    ngOnInit() {
        this.alimentadorService.findById(this.alimentador.id).subscribe(alimentador => this.alimentador = alimentador);
    }

}