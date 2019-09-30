import { Component } from '@angular/core';
import { Empleado } from './interface/empleado.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular crud';
  msg = 'mensaje aqui';

  empleados: Empleado[] = [
    { nombre: 'Roque', puesto: 'Administrador', editar: false },
    { nombre: 'Cesar', puesto: 'Diseñador', editar: false },
    { nombre: 'Angelo', puesto: 'Programador', editar: false }
  ];

  model: Empleado = {
    nombre : '',
    puesto : ''
  };

  closeAlert() {
    
  }

  agregarEmpleado(): void {
    this.empleados.push({...this.model});
    this.model.nombre = '';
    this.model.puesto = '';

  }

  eliminarEmpleado(nombre: string) {
    this.empleados = this.empleados.filter( empleado => empleado.nombre !== nombre );
  }

  actualizarEmpleado(empleado: Empleado, i: number) {
    this.empleados[i] = empleado;
    console.log('Empleado', empleado, i);
    console.log('Lista', this.empleados);
    
    
  }

}
