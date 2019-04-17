import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PnfComponent } from './pnf/pnf.component';

import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { LedgerComponent } from './ledger/ledger.component';

import { CoinService } from './coin.service';
import { DetailComponent } from './detail/detail.component';

@NgModule({
    declarations: [
        AppComponent,
        PnfComponent,
        HomeComponent,
        MineComponent,
        BuyComponent,
        SellComponent,
        LedgerComponent,
        DetailComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
    providers: [CoinService],
    bootstrap: [AppComponent]
})
export class AppModule { }
