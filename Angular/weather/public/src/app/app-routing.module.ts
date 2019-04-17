import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WTonComponent } from './wton/wton.component';
import { PnfComponent } from './pnf/pnf.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'burbank', component: BurbankComponent },
    { path: 'chicago', component: ChicagoComponent },
    { path: 'dallas', component: DallasComponent },
    { path: 'sanjose', component: SanJoseComponent },
    { path: 'seattle', component: SeattleComponent },
    { path: 'wton', component: WTonComponent },

    // use a colon and parameter name to include a parameter in the url
    // redirect to /alpha if there is nothing in the url
    { path: '', pathMatch: 'full', redirectTo: '/burbank' },
    // the ** will catch anything that did not match any of the above routes
    { path: '**', component: PnfComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}

