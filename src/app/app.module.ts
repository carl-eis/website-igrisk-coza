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
import {AboutSectionComponent} from './components/about-section/about-section.component';
import {AboutImageBlockComponent} from './components/about-image-block/about-image-block.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        NavbarComponent,
        SliderMainComponent,
        AboutSectionComponent,
        AboutImageBlockComponent
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
