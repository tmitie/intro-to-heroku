import { ViewChild } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { App, Platform } from 'ionic-angular';

import { WelcomePage } from './pages/welcome/welcome';
import { PropertyListPage } from './pages/property-list/property-list';
import { BrokerListPage } from './pages/broker-list/broker-list';
import { FavoriteListPage } from './pages/favorite-list/favorite-list';
import { PropertyService } from './services/property-service';
import { BrokerService } from './services/broker-service';

import { AlimentadorPage } from './pages/alimentador/alimentador';
import { AlimentadorService } from './services/alimentador-services';

@App({
    templateUrl: 'build/app.html',
    config: {
        mode: "ios"
    },
    queries: {
        nav: new ViewChild('content')
    },
    providers: [HTTP_PROVIDERS, PropertyService, BrokerService, AlimentadorService]
})
class MyApp {

    static get parameters() {
        return [[Platform]];
    }

    constructor(platform) {

        this.platform = platform;

        this.pages = [
            { title: 'Welcome', component: WelcomePage, icon: "bookmark" },
            { title: 'Alimentador', component: AlimentadorPage, icon: "star" },
            { title: 'Favorites', component: FavoriteListPage, icon: "star" },
            { title: 'Properties', component: PropertyListPage, icon: "home" },
            { title: 'Brokers', component: BrokerListPage, icon: "people" }
        ];

        this.rootPage = WelcomePage;
        this.initializeApp();
    }

    initializeApp() {

    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }

}
