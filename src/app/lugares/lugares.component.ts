import { Component } from '@angular/core';

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
    {nombre:'Veterinaria'}
    {nombre:'Floristeria'},
    {nombre:'Panaderia'},
    {nombre:'Veterinaria'}
  ];
  
  lugares2:any=[
    {id:1,plan:'pagado',cercania:1,distancia:1,active:true,nombre:'Floristeria'},
    {id:2,plan:'gratuito',cercania:1,distancia:1.8,active:true,nombre:'Floristeria2'},
    {id:3,plan:'gratuito',cercania:2,distancia:5,active:true,nombre:'Floristeria3'},
    {id:4,plan:'gratuito',cercania:2,distancia:10,active:true,nombre:'Floristeria4'},
    {id:5,plan:'pagado',cercania:3,distancia:35,active:false,nombre:'Panaderia5'},
    {id:6,plan:'gratuito',cercania:3,distancia:120,active:true,nombre:'Veterinaria6'}
  ];
  
  lat:number=4.6560663;
  lng:number=-74.0595918;
  
    /* Esta codigo asigna "true" despues de 3 segundos a la propiedad que deshabilita el boton**/
    constructor(){
      setTimeout(()=>{
        this.listo = true;
      },3000)
    }
  
    hacerAlgo(){
      alert('haciendo algo');
    }
}
