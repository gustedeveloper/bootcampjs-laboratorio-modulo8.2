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

// Apartado 2: protocolo de urgencia

const activarProtocoloUrgencia : boolean = pacientes.some(
  (paciente: Pacientes) => paciente.frecuenciaCardiaca > 100 || paciente.temperatura > 39
);

console.log(`Protocolo urgencia activado: ${activarProtocoloUrgencia}`); 

// Apartado 3: reasignar pacientes de Pediatria a Médico de familia

const reasignaPacientesAMedicoFamilia: Pacientes[] = pacientesAsignadosAPediatria.map(
  (paciente: Pacientes): Pacientes => ({
    ...paciente,
    especialidad: "Medico de familia"
  }));

console.log("Lista de pacientes de Pediatria reasignados a Médico de Familia: ", reasignaPacientesAMedicoFamilia);

// Apartado 4: comprobar si en la lista hay algún paciente asignado a pediatría

const hayPacientesDePediatria: boolean = pacientes.some(
  (paciente: Pacientes) => paciente.especialidad === "Pediatra"
);
  
  console.log(`¿Hay pacientes de pedriatría? ${hayPacientesDePediatria}`);

// Apartado 5:  calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a Cardiología
  
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {

  let numeroPacientesPorEspecialidad : NumeroPacientesPorEspecialidad = {
      medicoDeFamilia: 0,
      pediatria: 0,
      cardiologia: 0
      }

  pacientes.forEach((paciente) => {
    if (paciente.especialidad === "Medico de familia") {
      numeroPacientesPorEspecialidad.medicoDeFamilia++;
    } else if (paciente.especialidad === "Pediatra") {
      numeroPacientesPorEspecialidad.pediatria++;
    } else if (paciente.especialidad === "Cardiólogo") {
      numeroPacientesPorEspecialidad.cardiologia++;
    }
  })

    return numeroPacientesPorEspecialidad;
}

console.log("Total de pacientes por especialidad: ", cuentaPacientesPorEspecialidad(pacientes));
