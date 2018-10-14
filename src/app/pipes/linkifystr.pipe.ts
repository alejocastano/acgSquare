import { Pipe, PipeTransform } from "@angular/core";//==>1

import linkifyStr from 'linkifyjs/string';//==>2 Libreria de javascript que permite convertir cadenas de texto a hipervinculos


    //Asi llamatemos al Pipe
    @Pipe({name:'linkifystr'})

        //PipeTransform se utiliza para transformar el input que tengamos y ponerle los hipervinculos a las partes del string que sean direcciones web ;
        //"PipeTransform" debe ser importado ver ==>1
    export class LinkifystrPipe implements PipeTransform{
        //Al metodo le llega un string como parametro
        transform(str:string): string{
            //target: espara indicar donde se va a abrir el vinculo (si en una nueva ventana, en un nuevo tab o en un ifram). Al poner "_system" angular decidira donde esta corriendo y que accion hará
            //En caso de que halla un string que tenga url se le aplica linkify en caso contrario se devuelve el string
            //linkifyStr: es un metodo de la libreria "linkifyjs" y debe ser importado ver ==>2
            return str ? linkifyStr(str,{target:'_system'}):str;
        }

    }
