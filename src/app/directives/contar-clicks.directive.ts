import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector:'li[contar-clicks]'/* Al anteponerle li que se refiere a los elementos de lista
    <li>lo estamos condicionando para que funcione solo con ese tipo de elemento HTML */
})

export class ContarClicksDirective{
    /*clickN: Esta seria una variable simple que llevara el conteo de todos los clics que se
    estaran haciendo. */
    clickN = 0;
    /*@HostBinding:Permite editar el elemento del DOM o del HTML desde nuestra propia directiva 
    Parametros:
    1)Que atributo del elemento HTML queremos estar editando en este caso la opacidad "opacity"
    2)
    */
    @HostBinding('style.opacity') opacity: number=.1;/*La propiedad opacity varia entre 0-totalmente transparente y
    1-Totalmente Opaco */

    /*@HostListener: Cuando se agregue una directiva al elemento HTML con el HostListener
    se podran escuchar los eventos de una manera sencilla */
    /*@HostListener: Recibe tres parametros:
    1)el primero es el evento (todos los eventos de html se pueden) 
    2)el segundo es un arreglo con el $event.target lo cual captura el evento
    y solo hace uso del target el cual puede ser el boton o el elemento de la lista html
    con la que se esta interactuando
    3) En que momento se dispara el evento y cual va a ser a funcion a desempeñar
    en este caso se recibe el boton como parametro*/
    @HostListener('click',['$event.target']) onClick(btn){
        /*parametros:(Son para debugging) a es anchor, btn es el boton y
         el otro es el mensaje
         */
        console.log('a',btn,"Número de clicks:",this.clickN++);
        this.opacity +=.1;//Cada que se le de clic aumentara la opacidad gracias al @HostBinding
    }

}