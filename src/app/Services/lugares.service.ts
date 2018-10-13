import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import {Http,Headers} from "@angular/http";
//import 'rxjs/add/operator/map'; //asi se importaba en Angular 4
import { map } from 'rxjs/operators'//==>1 importar map en Angular 6



//Esto permite que este servicio pueda ser injectado en otros componentes
@Injectable()

export class LugaresService{
    APIENDPOINT = 'https://acgsquare-1537629647915.firebaseio.com';
    lugares:any=[
        {id:1,plan:'pagado',cercania:1,distancia:1,active:true,nombre:'Floristeria'     ,descripcion: 'Descripción de este negocio. Mas adelante tendremos mas información'},
        {id:2,plan:'gratuito',cercania:1,distancia:1.8,active:true,nombre:'Floristeria2',descripcion: 'Descripción de este negocio. Mas adelante tendremos mas información'},
        {id:3,plan:'gratuito',cercania:2,distancia:5,active:true,nombre:'Floristeria3'  ,descripcion: 'Descripción de este negocio. Mas adelante tendremos mas información'},
        {id:4,plan:'gratuito',cercania:2,distancia:10,active:true,nombre:'Floristeria4' ,descripcion: 'Descripción de este negocio. Mas adelante tendremos mas información'},
        {id:5,plan:'pagado',cercania:3,distancia:35,active:false,nombre:'Panaderia5'    ,descripcion: 'Descripción de este negocio. Mas adelante tendremos mas información'},
        {id:6,plan:'gratuito',cercania:3,distancia:120,active:true,nombre:'Veterinaria6',descripcion: 'Descripción de este negocio. Mas adelante tendremos mas información'}
      ];

      constructor(private afDB:AngularFireDatabase,private http: Http){}

      public getLugares(){
          //return this.lugares;
          
          //Websocekt
          //return this.afDB.list('lugares/');

          //return this.http.get(this.APIENDPOINT+'/lugares.json');


          //Esta seria la version de angular 4 de como usar el .map
          /*
          return this.http.get(this.APIENDPOINT+'/.json')
          .map((resultado)=>{
              const data = resultado.json().lugares;
              return data;
          })
          */

         //el .map debe de ser importado ver ==>1
          return this.http.get(this.APIENDPOINT+'/.json')
					.pipe(map((resultado)=>{
							const data =  resultado.json().lugares
							return data
						})
					)
        

      }

    public buscarLugar(id){
        //Busca un lugar con el id del paraemtro del query dentro del array de lugares
        return this.lugares.filter((lugar)=>{return lugar.id==id})[0] || null;
    }

    public guardarLugar(lugar){
        console.log(lugar);

        //Websocekt
        //this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
        const _headers = new Headers({"Content-Type":"application/json"});
        return this.http.post(this.APIENDPOINT+'/lugares/'+lugar.id+'.json',lugar,{headers : _headers}).subscribe();
        //{ HttpClient, HttpHeaders } from ‘@angular/common/http’;

    }

    public editarLugar(lugar){
        console.log(lugar);
        this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
    }

    public ObtenerGeoData(direccion){
        var apikey = '&key=AIzaSyA5GGebbpRWPIqq5Q1Z0d4HvDCioPM7ahM';
        //https://maps.google.com/maps/api/geocode/json?address=78-43+diagonal+70f,+Bogota,Colombia&key=AIzaSyA5GGebbpRWPIqq5Q1Z0d4HvDCioPM7ahM
        return this.http.get('https://maps.google.com/maps/api/geocode/json?address='+direccion+apikey);

    }

    public getLugar(id){
        return this.afDB.object('lugares/'+id);
    }
}