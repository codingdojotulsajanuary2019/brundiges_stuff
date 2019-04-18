import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ListComponent } from './list/list.component'
import { NewComponent } from './new/new.component'
import { HomeComponent } from './home/home.component'
import { StatusComponent } from './status/status.component';
import { CoinService } from './coin.service';
import { HttpService } from './http.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ListComponent,
        NewComponent,
        StatusComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [CoinService, HttpService],
    bootstrap: [AppComponent]
})
export class AppModule { }
