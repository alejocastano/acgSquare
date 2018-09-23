
/* Injeccion de componentes a utilizar el primero es Directive
-Es mejor poner separados por comas todos los elementos a requerir
*/
import { Directive,OnInit,ElementRef, Renderer2,Input } from "@angular/core";

/*
@Directive: Es algo propio de typeScript, esto es de las pocas cosas
que deben ser escritas en TypeScript
*/
@Directive({
    selector:'[resaltar]'/*Palabra a usar en el HTML 'nombre de la directiva' */
})
/*Se exporta la clase para poder usarla fuera del archivo */
/*Implementa la funcion OnInit: tener en cuenta que hay que importarlo arriba en los imports */
export class ResaltarDirective implements OnInit{
    /* 
    Como vamos a estar manipulando el DOM ('codigo HTML') vamos necesitar un
    modulo de angular llamado ElementRef el cual permite crear una referencia
    de html pero que podemos manipular en codigo TypeScript - Tambien se importa arriba en los imports 

    Renderer2 el renderer permitira modificar los elmentos de html pero mas
    enfocado hacia los atributos de css- Tambien se importa arriba en los imports 

    */
    constructor(private elRef: ElementRef, private renderer: Renderer2){}

    /* Se declara la variable plan utilizando @Input (que tambien se debe de importar)
    la variable de plan va estar asignada a resaltar
    */
    @Input('resaltar') plan : string = '';

    ngOnInit(){
        /*Aqui dentro del ngOnInit vamos a escribir el codigo para obtener el elemento
        donde aplicaremos nuestro atributo y vamos a darle un cierto estilo segun el 'plan' */
        if(this.plan == 'pagado'){
            /*setStyle recibe tres parametros: 1) elemento nativo, 2) atributo css a modificar,3) valor para ese atributo */
             this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
             this.renderer.setStyle(this.elRef.nativeElement,'font-weight','bold');

        }
        /*!IMPORTANTE! PARA PODER USAR ESTA DIRECTIVA SE DEBE DECLARAR EN EL ARCHIVO 
        app.modules.ts en la parte de declarations (ojo que tambien alli se debe de importar)  */
    }
}