import { BuyComponent } from './buy/buy.component';
import { HomeComponent } from './home/home.component';
import { LedgerComponent } from './ledger/ledger.component';
import { MineComponent } from './mine/mine.component';
import { SellComponent } from './sell/sell.component';
import { DetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'buy', component: BuyComponent },
    { path: 'home', component: HomeComponent },
    { path: 'ledger', component: LedgerComponent },
    { path: 'ledger/:id', component: DetailComponent },
    { path: 'mine', component: MineComponent },
    { path: 'sell', component: SellComponent },

    // use a colon and parameter name to include a parameter in the url
    // redirect to /alpha if there is nothing in the url
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    // the ** will catch anything that did not match any of the above routes
    { path: '**', redirectTo: '/home' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}

