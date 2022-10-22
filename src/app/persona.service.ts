import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataServices } from './data.services';

@Injectable()
export class PersonasService {
  personas: Persona[] = [];

    saludar = new EventEmitter<number>();

    constructor(private loggingService: LoggingService, private dataServices: DataServices){}

  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }
  
  obtenerPersonas() {
    return this.dataServices.cargarPersonas();
  }
  
    agregarPersona(persona: Persona){
        this.loggingService.enviaMensajeAConsola("agregamos persona:" + persona.nombre);
      this.personas.push(persona);
      this.dataServices.guardarPersonas(this.personas);
    }

    encontrarPersona(index: number){
        let persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index:number, persona:Persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
    }

    eliminarPersona(index:number){
        this.personas.splice(index,1);
    }
}