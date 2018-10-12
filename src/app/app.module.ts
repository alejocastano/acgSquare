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
import { LugaresService } from './Services/lugares.service';/*(==>1)*/

/***************************************************************/
/* Imports para que funcione firebase **************************/
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
/***************************************************************/
/***************************************************************/
import { CrearComponent } from './crear/crear.component';


const appRoutes : Routes=[
  {path:'',component: LugaresComponent},//Asi se definiria la ruta por defecto
  {path:'lugares',component: LugaresComponent}//El path "lugares" abre el componente AppComponent
  ,{path:'detalle/:id',component: DetalleComponent}
  ,{path:'contacto',component: ContactoComponent}
  ,{path:'crear',component: CrearComponent}

];

/***************************************************************/
/* String de conexion a firebase **************************/
export const firebaseConfig = {
  apiKey: "AIzaSyD3OU4-S4eIWevY_ra7tEXXOLhsHlBOKsw",
  authDomain: "acgsquare-1537629647915.firebaseapp.com",
  databaseURL: "https://acgsquare-1537629647915.firebaseio.com",
  storageBucket: "acgsquare-1537629647915.appspot.com",
  messagingSenderId: "634939116298"
};
/***************************************************************/
/***************************************************************/

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
  ContactoComponent,
  CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5GGebbpRWPIqq5Q1Z0d4HvDCioPM7ahM'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  //Aqui en providers traemos los servicios que vamos a utilizar.tener en cuenta que tambien se importo arriba Ver(==>2)
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
