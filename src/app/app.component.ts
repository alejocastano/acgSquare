import { Component } from '@angular/core';
import { AutorizacionService } from './Services/autorizacion.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'acg square';
  a     = 1;
  b     = 2;

  loggedIn = false;
  loggedUser:any =null;
  constructor(private autorizacionService: AutorizacionService){
    this.autorizacionService.isLogged()
      .subscribe((result)=>{
          if (result && result.uid) {
            this.loggedIn = true;
            //Esperamos medio segundo a que nos devuleva los datos del usuario logeado
            setTimeout(() => {
                this.loggedUser = this.autorizacionService.getUser().currentUser.email;
                console.log(this.loggedUser);  
            }, 500);
          } else {
            this.loggedIn = false;
          }
      },(error)=>{
        this.loggedIn = false;
      })
  }
  

  logOut(){
    this.autorizacionService.logOut();
  }

}

