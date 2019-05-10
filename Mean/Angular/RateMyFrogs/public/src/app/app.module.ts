import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { FrogComponent } from './frog/frog.component';
// import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    FrogComponent,
    // TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
