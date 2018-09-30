import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AgmCoreModule } from '@agm/core';

import { ResaltarDirective } from './directives/resaltar.directive';/*(==>1)*/
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import {Routes, RouterModule} from "@angular/router";
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes : Routes=[
  {path:'',component: LugaresComponent},//Asi se definiria la ruta por defecto
  {path:'lugares',component: LugaresComponent}//El path "lugares" abre el componente AppComponent
  ,{path:'detalle/:id',component: DetalleComponent}
  ,{path:'contacto',component: ContactoComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    /*Ojo esta directiva es propia y fue creada en el archivo resaltar.directive.ts
    tener en cuenta que tambien se importo arriba Ver(==>1)
    */
  ContarClicksDirective,
  DetalleComponent,
  LugaresComponent,
  ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5GGebbpRWPIqq5Q1Z0d4HvDCioPM7ahM'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
