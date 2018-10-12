import { Injectable } from "@angular/core";

//Esto permite que este servicio pueda ser injectado en otros componentes
@Injectable()

export class LugaresService{
    lugares:any=[
        {id:1,plan:'pagado',cercania:1,distancia:1,active:true,nombre:'Floristeria'     ,descripcion: 'Descripción de este negocio. Mas adelante tendremos mas información'},
        {id:2,plan:'gratuito',cercania:1,distancia:1.8,active:true,nombre:'Floristeria2',descripcion: 'Descripción de este negocio. Mas adelante tendremos mas información'},
        {id:3,plan:'gratuito',cercania:2,distancia:5,active:true,nombre:'Floristeria3'  ,descripcion: 'Descripción de este negocio. Mas adelante tendremos mas información'},
        {id:4,plan:'gratuito',cercania:2,distancia:10,active:true,nombre:'Floristeria4' ,descripcion: 'Descripción de este negocio. Mas adelante tendremos mas información'},
        {id:5,plan:'pagado',cercania:3,distancia:35,active:false,nombre:'Panaderia5'    ,descripcion: 'Descripción de este negocio. Mas adelante tendremos mas información'},
        {id:6,plan:'gratuito',cercania:3,distancia:120,active:true,nombre:'Veterinaria6',descripcion: 'Descripción de este negocio. Mas adelante tendremos mas información'}
      ];

      public getLugares(){
          return this.lugares;
      }

    public buscarLugar(id){
        //Busca un lugar con el id del paraemtro del query dentro del array de lugares
        return this.lugares.filter((lugar)=>{return lugar.id==id})[0] || null;
    }
}