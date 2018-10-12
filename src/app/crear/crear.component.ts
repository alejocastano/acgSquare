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
        this.lugaresService.guardarLugar(this.lugar);
    }
}
