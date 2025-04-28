import { createReducer, on } from '@ngrx/store';
import { loadEmpleadosSuccess, loadEmpleadosFailure, addEmpleadoSuccess, addEmpleadoFailure, deleteEmpleado, editEmpleadoSuccess } from './empleado.actions';
import { Empleado } from '../../../models/empleado.model';

export interface EmpleadoState {
  empleados: Empleado[];
  error: any;
}

export const initialState: EmpleadoState = {
  empleados: [],
  error: null
};

export const empleadoReducer = createReducer(
  initialState,
  on(loadEmpleadosSuccess, (state, { empleados }) => ({
    ...state,
    empleados: empleados || [] 
  })),
  on(loadEmpleadosFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(addEmpleadoSuccess, (state, { empleado }) => ({
    ...state,
    empleados: [...state.empleados, empleado]
  })),
  on(addEmpleadoFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(deleteEmpleado, (state, { id }) => ({
    ...state,
    empleados: (state.empleados || []).filter(e => e.id !== id),
  })),
  on(editEmpleadoSuccess, (state, { empleado }) => ({
    ...state,
    empleados: state.empleados?.map(emp =>
      emp.id === empleado.id ? empleado : emp
    ) ?? []
  })),
);