import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Injectable()

export class AutorizacionService{

constructor(private angularFireAuth: AngularFireAuth,private router: Router){
    this.isLogged();
}

    public facebookLogin(){
        this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then((result)=>{
                console.log(result);
                alert('Usuario loggeado con Facebook!');
                this.router.navigate(['lugares']);

            }).catch((error)=>{
                console.log(error);
            })   
    }

    //Metodo tipo TypeScript
    public login = (email,password) =>{
        this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
        .then((response)=>{
            alert('Usuario logeado con éxito!');
            this.router.navigate(['lugares']);
        })
        .catch((error)=>{
            alert('Un error ha ocurrido Error: '+error);
            console.log(error);
        })
    }

    public registro = (email,password) =>{
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
        .then((response)=>{
            alert('Usuario registrado con éxito!');
            this.router.navigate(['lugares']);
        })
        .catch((error)=>{
            alert('Un error ha ocurrido Error: '+error);
            console.log(error);
        })
    }

    public isLogged(){
        //"authState" solo existe cuando el usuario esta logeado
        return this.angularFireAuth.authState;
    }

    public logOut(){
        this.angularFireAuth.auth.signOut();
        alert('Sesión cerrada');
        this.router.navigate(['lugares']);
    }

    public getUser(){
         return this.angularFireAuth.auth;
    }

}