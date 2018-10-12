import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../Services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {

    
    id = null;
    lugar:any ={};
    //la variable del tipo ActivatedRoute me permitira capturar los parametros que lleguen en la url
    constructor(private route: ActivatedRoute,private lugaresService:LugaresService){
        //Captura los parametros de la ruta
        console.log(this.route.snapshot.params['id']);
        
        //snapshot.queryParams - Captura los parametros del query
        console.log(this.route.snapshot.queryParams['action']);
        console.log(this.route.snapshot.queryParams['referer']);
        this.id = this.route.snapshot.params['id'];
        //Estamos llendo a buscar un lugar especifico al servicio LugaresService en su metodo buscarLugar()
        this.lugar = this.lugaresService.buscarLugar(this.id);
    }
    

}
