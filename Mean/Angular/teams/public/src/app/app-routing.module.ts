import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { StatusComponent } from './status/status.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'players/list', component: ListComponent },
    { path: 'players/add', component: NewComponent },
    { path: 'players/game/:id', component: StatusComponent },

    // use a colon and parameter name to include a parameter in the url
    // redirect to /alpha if there is nothing in the url
    { path: '', pathMatch: 'full', redirectTo: 'players/list' },
    // the ** will catch anything that did not match any of the above routes
    { path: '**', redirectTo: 'players/list' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}

