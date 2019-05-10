import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotService } from './spot.service';
import { EntityService } from './entity.service';
import { MovesService } from './moves.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [SpotService, EntityService, MovesService],
    bootstrap: [AppComponent]
})
export class AppModule { }
