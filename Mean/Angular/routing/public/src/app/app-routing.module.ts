import { NiceComponent } from './nice/nice.component';
import { CoolComponent } from './cool/cool.component';
import { PnfComponent } from './pnf/pnf.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'nice', component: NiceComponent },
    { path: 'cool', component: CoolComponent },
    // use a colon and parameter name to include a parameter in the url
    // redirect to /alpha if there is nothing in the url
    { path: '', pathMatch: 'full', redirectTo: '/nice' },
    // the ** will catch anything that did not match any of the above routes
    { path: '**', component: PnfComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

