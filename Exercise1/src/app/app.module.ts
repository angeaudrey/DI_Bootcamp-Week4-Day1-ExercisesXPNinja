import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ButtonComponent } from './SharedModule/button/button.component';
import { ShareModuleModule } from './share-module/share-module.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ShareModuleModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
