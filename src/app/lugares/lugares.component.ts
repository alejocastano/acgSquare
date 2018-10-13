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

         lugaresService.getLugares()
         .valueChanges().subscribe(lugares => { 
           this.lugares2 = lugares;
         });
         



      setTimeout(()=>{
        this.listo = true;
      },3000)
    }
  
    hacerAlgo(){
      alert('haciendo algo');
    }
}
