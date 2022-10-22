import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';


@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient) { }
    
    cargarPersonas() {
        return this.httpClient.get('https://listado-personas-60f31-default-rtdb.firebaseio.com/.json');
    }
    
        //Guardar personas
        guardarPersonas(personas: Persona[]){
            this.httpClient.post('https://listado-personas-60f31-default-rtdb.firebaseio.com/.json', personas)
            .subscribe(
                response => 
                    console.log("resultado guardar Personas" + response),
                    error => console.log("Error al guardar personas: " + error)
            );
        }
    
}


