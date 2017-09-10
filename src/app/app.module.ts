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
import {SliderMainComponent} from './components/homepage/slider-main/slider-main.component';
import {AboutSectionComponent} from './components/homepage/home-about-section/about-section.component';
import {AboutImageBlockComponent} from './components/homepage/about-image-block/about-image-block.component';
import {HomeCounterStatsComponent} from './components/homepage/home-counter-stats/home-counter-stats.component';
import {HomePortfolioComponent} from './components/homepage/home-portfolio/home-portfolio.component';
import {HomeServiceBoxComponent} from './components/homepage/home-service-box/home-service-box.component';
import {HomeCallToActionComponent} from './components/homepage/home-call-to-action/home-call-to-action.component';
import {HomeTeamSectionComponent} from './components/homepage/home-team-section/home-team-section.component';
import {HomeStyleSwitcherComponent} from './components/homepage/home-style-switcher/home-style-switcher.component';
import {FooterComponent} from './components/footer/footer.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {TestimonialsBriefComponent} from './components/homepage/testimonials-brief/testimonials-brief.component';
import {PageHeaderComponent} from './components/utility/page-header/page-header.component';
import {ServicesComponent} from './pages/services/services.component';
import {ServicesHexWidgetComponent} from './components/widgets/services-hex-widget/services-hex-widget.component';
import {ServicesMultiWidgetComponent} from './components/widgets/services-multi-widget/services-multi-widget.component';
import {PageBannerComponent} from './components/utility/page-banner/page-banner.component';
import {ClientsComponent} from './pages/clients/clients.component';
import {TeamComponent} from './pages/team/team.component';
import {ContactComponent} from './pages/contact/contact.component';
import { TradingviewOverviewComponent } from './components/widgets/tradingview-overview/tradingview-overview.component';

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
        HomeStyleSwitcherComponent,
        FooterComponent,
        AboutUsComponent,
        TestimonialsBriefComponent,
        PageHeaderComponent,
        ServicesComponent,
        ServicesHexWidgetComponent,
        ServicesMultiWidgetComponent,
        PageBannerComponent,
        ClientsComponent,
        TeamComponent,
        ContactComponent,
        TradingviewOverviewComponent
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
