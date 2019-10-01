import { Component, OnInit } from '@angular/core';
import { Empleado } from './interface/empleado.interface';
import { EmpledosService } from './services/empledos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Angular crud';
  msg = 'mensaje aqui';


  model: Empleado = {
    nombre : '',
    puesto : ''
  };

  constructor(public empledosService: EmpledosService) {}

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    this.empledosService.getEmpleados().subscribe((res) => {
      this.empledosService.empleados = res['usuarios'] as Empleado[];
      
    });
  }

  closeAlert() {
  }

  crearEmpleado() {
    this.empledosService.postEmpleado(this.model)
      .subscribe(data => {
        console.log(data);
        this.getEmpleados();
      });
  }

  eliminarEmpleado(id: string) {
    this.empledosService.deleteEmpleado(id)
      .subscribe(data => {
        console.log(data);
        this.getEmpleados();
      });

    
    
  }

  actualizarEmpleado(empleado: Empleado, id: string) {
    this.empledosService.putEmpleado(id, this.model);
  }

}

