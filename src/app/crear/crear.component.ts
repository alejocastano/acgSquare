import { Component } from '@angular/core';
import { LugaresService } from '../Services/lugares.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import * as Rx from 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { Http } from '@angular/http';
import { switchMap, map, debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
    lugar:any = {};
    id:any = null;
     searchField : FormControl;
    results$: Observable<any>;//El signo pesos al final es una convencion que indica que la variable es un stream
    
    constructor(private lugaresService:LugaresService,private route:ActivatedRoute,private http: Http ){

        this.id = this.route.snapshot.params['id'];

        if (this.id != 'new') {
            this.lugaresService.getLugar(this.id)
            .valueChanges().subscribe((lugar)=>{
                this.lugar = lugar
            });
        }
        console.log(this.id);
        var apikey = 'AIzaSyA5GGebbpRWPIqq5Q1Z0d4HvDCioPM7ahM';
        const URL = 'https://maps.google.com/maps/api/geocode/json';
        this.searchField = new FormControl();
        this.results$ = this.searchField.valueChanges.pipe(debounceTime(500),switchMap(query=> this.http.get(`${URL}?address=${query}&key=${apikey}`))
        ,map(response => response.json().results));
        this.results$.subscribe();
    }

    guardarLugar(){
        var direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
        //Al subscribirse espera a que la peticion se cumpla
        this.lugaresService.ObtenerGeoData(direccion)
                .subscribe((result)=>{
                    
                    this.lugar.lat = result.json().results[0].geometry.location.lat;
                    this.lugar.long = result.json().results[0].geometry.location.lng;
                    
                    if (this.id != 'new') {
                        this.lugaresService.editarLugar(this.lugar);
                        alert('Negocio editado con éxito')
                    }
                    else{
                        this.lugar.id = Date.now();
                        this.lugaresService.guardarLugar(this.lugar);
                        alert('Negocio guardado con éxito')
                    }
                    this.lugar = {};
                });
    }

    asignarValores(result){
        console.log(result.address_components);
        this.lugar.calle =  result.address_components[1].long_name + ' ' + result.address_components[0].long_name;
        this.lugar.ciudad =  result.address_components[2].long_name;
        this.lugar.pais =  result.address_components[5].long_name;
        
    }

}
