import { Component } from '@angular/core';
import { LugaresService } from '../Services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['../app.component.css']
})
export class LugaresComponent {
    listo = false;
    nombre:string = '';
    apellido1:string = '';
    apellido2:string = '';
  
    //:any es cualquier tipo de objeto en Typescript
  lugares:any=[
    {nombre:'Floristeria'},
    {nombre:'Panaderia'},
    {nombre:'Veterinaria'},
    {nombre:'Floristeria'},
    {nombre:'Panaderia'},
    {nombre:'Veterinaria'}
  ];
  lugares2= null;
  
  lat:number=4.6560663;
  long:number=-74.0595918;
  
    /* Esta codigo asigna "true" despues de 3 segundos a la propiedad que deshabilita el boton**/
    constructor(private lugaresService: LugaresService){
          //this.lugares2 = lugaresService.getLugares();
    
          /* si se manejaba traer datos de firebase en angular 4
            lugaresService.getLugares()
              .subscribe(lugares => { 
              this.lugares2 = lugares;
            });
          */

          /* 
            //Esta era la forma de traer lugares cuando se utlizan los websocket de firebase. Como se va a hacer la prueba con http, se utiliza el codigo de abajo, ver ==>1
            lugaresService.getLugares()
            .valueChanges().subscribe(lugares => { 
              this.lugares2 = lugares;
            });
          */
       
         lugaresService.getLugares()//==>1 , get en firebase con HTTP
         .subscribe(lugares => { 
           this.lugares2 = lugares;//.json();//Se comenta ya que el map esta haciendo eso por nosotros
           
           var me = this;//Esto se utiliza para corregir un error en el scope de javascript que se presentara en las lineas de abajo ver ==>2
           //al entrar a la funcion .map , el "this" ya haria parte del scope de .map no el scope global. Por esto el "this" hay que asignarlo en una variable aparte

           //==>2 Este codigo convierte un objeto tipo Json en un array
           me.lugares2 = Object.keys(me.lugares2).map(function(key){ return me.lugares2[key];});
         },error=>{ console.log(error);
          alert('Que pena con vos, tenemos unos problemitas. Error:'+error.statusText);
        });
         



      setTimeout(()=>{
        this.listo = true;
      },3000)
    }
  
    hacerAlgo(){
      alert('haciendo algo');
    }
}
