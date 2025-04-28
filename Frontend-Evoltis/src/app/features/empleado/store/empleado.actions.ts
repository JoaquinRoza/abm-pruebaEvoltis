import { Empleado } from '../../../models/empleado.model';
import { createAction, props } from '@ngrx/store';

export const loadEmpleados = createAction('[Empleado] Load Empleados');

export const loadEmpleadosSuccess = createAction(
  '[Empleado] Load Empleados Success',
  props<{ empleados: Empleado[] }>()
);

export const loadEmpleadosFailure = createAction(
  '[Empleado] Load Empleados Failure',
  props<{ error: any }>()
);

export const addEmpleado = createAction(
  '[Empleado] Add Empleado',
  props<{ empleado: Empleado }>()
);

export const addEmpleadoSuccess = createAction(
  '[Empleado] Add Empleado Success',
  props<{ empleado: Empleado }>()
);

export const addEmpleadoFailure = createAction(
  '[Empleado] Add Empleado Failure',
  props<{ error: any }>()
);

export const deleteEmpleado = createAction(
  '[Empleado] Delete Empleado',
  props<{ id: number }>()
);

export const deleteEmpleadoSuccess = createAction(
  '[Empleado] Delete Success',
  props<{ id: number }>()
);

export const deleteEmpleadoFailure = createAction(
  '[Empleado] Delete Failure',
  props<{ error: any }>()
);

export const editEmpleado = createAction(
  '[Empleado] Edit Empleado',
  props<{ empleado: Empleado }>()
);

export const editEmpleadoSuccess = createAction(
  '[Empleado] Edit Empleado Success',
  props<{ empleado: Empleado }>()
);

export const editEmpleadoFailure = createAction(
  '[Empleado] Edit Empleado Failure',
  props<{ error: any }>()
);
