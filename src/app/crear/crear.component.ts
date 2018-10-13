import { Component } from '@angular/core';
import { LugaresService } from '../Services/lugares.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
    lugar:any = {};
    id:any = null;
    constructor(private lugaresService:LugaresService,private route:ActivatedRoute ){

        this.id = this.route.snapshot.params['id'];

        if (this.id != 'new') {
            this.lugaresService.getLugar(this.id)
            .valueChanges().subscribe((lugar)=>{
                this.lugar = lugar
            });
        }
        
        console.log(this.id);
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
}
