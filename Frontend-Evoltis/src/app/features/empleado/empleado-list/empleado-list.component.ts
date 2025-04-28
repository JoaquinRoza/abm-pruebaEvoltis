import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Empleado } from '../../../models/empleado.model';
import { EmpleadoState } from '../store/empleado.reducer';
import { selectEmpleados } from '../store/empleado.selector';
import { deleteEmpleado, loadEmpleados, addEmpleado, editEmpleado } from '../store/empleado.actions';

@Component({
  selector: 'app-empleado-list',
  standalone: false,
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  empleados$: Observable<Empleado[]>;
  filters: any = {};
  display: boolean = false;
  empleadoEditar: Empleado | null = null;

  constructor(private store: Store<EmpleadoState>) {
    this.empleados$ = this.store.pipe(select(selectEmpleados));
  }

  ngOnInit(): void {
    this.store.dispatch(loadEmpleados());
  }

  onDelete(id: number) {
    if (confirm('¿Seguro que quieres eliminar este empleado?')) {
      this.store.dispatch(deleteEmpleado({ id }));
    }
  }

  editEmpleado(empleado: Empleado) {
    this.empleadoEditar = empleado;
    this.display = true;
  }

  showOrCloseDialog(value: boolean) {
    this.display = value;
    if (!value) {
      this.empleadoEditar = null;
    }
  }
}