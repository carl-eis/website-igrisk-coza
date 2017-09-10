import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

// Import Page Components
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";

const routes: Routes = [

    // Default path
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutUsComponent},
    // {path: 'search', component: SearchComponent},
    // {path: 'abalobifn', component: AbalobifnComponent,
    //     children: [
    //         {path: '', redirectTo: 'jobs', pathMatch: 'full'},
    //         {path: 'jobs', component: JobstableComponent},
    //         {path: 'view/:id', component: ViewjobComponent}
    //     ]
    // },
    // {
    //     path: 'search/fisher/:id', component: FisherDetailComponent,
    //     children: [
    //         {path: '', redirectTo: 'trips', pathMatch: 'full'},
    //         {path: 'trips', component: FisherTripsComponent},
    //         {path: 'bio', component: FisherBioComponent}
    //     ]
    // },
    // {
    //     path: 'statistics', component: StatisticsComponent,
    //     children: [
    //         {path: '', redirectTo: 'list', pathMatch: 'full'},
    //         {path: 'communities/list', component: CommunitiesListComponent},
    //         {path: 'communities/:id/fishers', component: CommunitiesFishersComponent}
    //     ]
    // },
    // {
    //     path: 'tools', component: ToolsComponent,
    //     children: [
    //         {path: '', redirectTo: 'odk', pathMatch: 'full'},
    //         {path: 'messaging', component: MessagingComponent},
    //         {path: 'odk', component: OdkComponent},
    //         {path: 'links', component: LinksComponent}
    //         // {path: 'datatools', component: DataToolsComponent}
    //     ]
    // },
    // {
    //     path: 'registrations', component: RegistrationsComponent,
    //     children: [
    //         {path: '', redirectTo: 'list', pathMatch: 'full'},
    //         {path: 'list', component: RegistrationsListComponent},
    //     ]
    // },
    // {
    //     path: 'analytics', component: RegistrationsComponent,
    //     children: [
    //         {path: '', redirectTo: 'endpointusage', pathMatch: 'full'},
    //         {path: 'endpointusage', component: EndpointUsageComponent},
    //     ]
    // }
];

// Use hash in location routes, for hosting on heroku
const routeSettings = {
    useHash: true
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, routeSettings)
    ],
    declarations: [],
    exports: [RouterModule]
})


export class AppRoutingModule {
}
