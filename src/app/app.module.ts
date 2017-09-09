import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';

import {DataService} from "./services/data.service";
import {NavbarComponent} from './components/navbar/navbar.component';
import {SliderMainComponent} from './components/slider-main/slider-main.component';
import {AboutSectionComponent} from './components/home-about-section/about-section.component';
import {AboutImageBlockComponent} from './components/about-image-block/about-image-block.component';
import {HomeCounterStatsComponent} from './components/home-counter-stats/home-counter-stats.component';
import {HomePortfolioComponent} from './components/home-portfolio/home-portfolio.component';
import { HomeServiceBoxComponent } from './components/home-service-box/home-service-box.component';
import { HomeCallToActionComponent } from './components/home-call-to-action/home-call-to-action.component';
import { HomeTeamSectionComponent } from './components/home-team-section/home-team-section.component';
import { HomeStyleSwitcherComponent } from './components/home-style-switcher/home-style-switcher.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        NavbarComponent,
        SliderMainComponent,
        AboutSectionComponent,
        AboutImageBlockComponent,
        HomeCounterStatsComponent,
        HomePortfolioComponent,
        HomeServiceBoxComponent,
        HomeCallToActionComponent,
        HomeTeamSectionComponent,
        HomeStyleSwitcherComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
