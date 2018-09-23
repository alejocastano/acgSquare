import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AgmCoreModule } from '@agm/core';

import { ResaltarDirective } from './directives/resaltar.directive';/*(==>1)*/
import { ContarClicksDirective } from './directives/contar-clicks.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    /*Ojo esta directiva es propia y fue creada en el archivo resaltar.directive.ts
    tener en cuenta que tambien se importo arriba Ver(==>1)
    */
  ContarClicksDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5GGebbpRWPIqq5Q1Z0d4HvDCioPM7ahM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
