import "./style.css";

import { Pacientes, pacientes } from './model';

// Apartado 1: 
// a) extraer la lista de pacientes que están asignados a la especialidad de Pediatría

const pacientesAsignadosAPediatria : Pacientes[] = pacientes.filter(
  (paciente: Pacientes) => paciente.especialidad === "Pediatra"
);

console.log("Lista de pacientes de Pediatria: ", pacientesAsignadosAPediatria);