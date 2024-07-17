import "./style.css";

import { Pacientes, pacientes } from './model';

// Apartado 1: 
// a) extraer la lista de pacientes que están asignados a la especialidad de Pediatría

const pacientesAsignadosAPediatria : Pacientes[] = pacientes.filter(
  (paciente: Pacientes) => paciente.especialidad === "Pediatra"
);

console.log("Lista de pacientes de Pediatria: ", pacientesAsignadosAPediatria);

// b) extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años

const pacientesAsignadosAPediatriaYMenorDeDiezAnios : Pacientes[] = pacientes.filter(
  (paciente: Pacientes) => paciente.especialidad === "Pediatra" && paciente.edad < 10
);

console.log("Lista de pacientes de Pediatria menores de 10 años: ", pacientesAsignadosAPediatriaYMenorDeDiezAnios);
