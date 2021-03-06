import { Component } from '@angular/core';
import { AutorizacionService } from '../Services/autorizacion.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

    export class LoginComponent {
        loginParams:any={};
        constructor(private autorizacionService: AutorizacionService){
            
        }
    login(){
        this.autorizacionService.login(this.loginParams.email,this.loginParams.password);
    }

    facebookLogin(){
        this.autorizacionService.facebookLogin();
    }

}
