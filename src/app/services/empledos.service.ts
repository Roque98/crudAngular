import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Empleado } from '../interface/empleado.interface';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmpledosService{

  URLAPI = environment.serverURL + '/empleados';
  empleados: Empleado[];


  constructor(
    private httpClient: HttpClient,
  ) {
    
  }
  
  postEmpleado(empleado: Empleado) {
    return this.httpClient.post( this.URLAPI, empleado );
  }

  getEmpleados() {
    return this.httpClient.get( this.URLAPI );
  }

  putEmpleado(id: string, empleado: Empleado) {
    return this.httpClient.put( this.URLAPI + '/' + id , empleado);
  }

  deleteEmpleado(id: string) {
    return this.httpClient.delete( this.URLAPI + '/' + id );

  }


}
