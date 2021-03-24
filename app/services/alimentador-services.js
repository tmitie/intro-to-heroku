import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

/*
 Prettify objects returned from Salesforce. This is optional, but it allows us to keep the templates independent
 from the Salesforce specific naming convention. This could also be done Salesforce-side by creating a custom REST service.
 */
let prettifyAlimentador = (alimentador) => {
    return {
        id: alimentador.sfid,
        name: alimentador.name,
        comando: alimentador.comando_para_placa__c,
        cafe: alimentador.horario_manha__c,
        almoco: alimentador.horario_almoco__c,
        jantar: alimentador.horario_jantar__c,
        ceia: alimentador.horario_ceia__c

    };
};

@Injectable()
export class AlimentadorService {

    static get parameters() {
        return [Http];
    }

    constructor(http) {
        this.http = http;
    }

    findAll() {
        return this.http.get('/alimentador').map(response => response.json().map(prettifyalimentador));
    }

    findById(id) {
        return this.http.get('/alimentador/' + id).map(response => prettifyalimentador(response.json()));
    }

}