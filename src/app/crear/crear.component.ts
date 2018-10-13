import { Component } from '@angular/core';
import { LugaresService } from '../Services/lugares.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
    lugar:any = {};

    constructor(private lugaresService:LugaresService){

    }

    guardarLugar(){
        var direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
        //Al subscribirse espera a que la peticion se cumpla
        this.lugaresService.ObtenerGeoData(direccion)
                .subscribe((result)=>{
                    debugger
                    this.lugar.lat = result.json().results[0].geometry.location.lat;
                    this.lugar.long = result.json().results[0].geometry.location.lng;

                    this.lugar.id = Date.now();
                    this.lugaresService.guardarLugar(this.lugar);
                    alert('Negocio guardado con exito')
                    this.lugar = {};
                });
    }
}
