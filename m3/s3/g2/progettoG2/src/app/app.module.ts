import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdFormComponent } from './Components/td-form/td-form.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TdFormComponent, ReactiveFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
