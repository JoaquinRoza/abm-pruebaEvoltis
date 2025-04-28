import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EmpleadoState } from './empleado.reducer';

export const selectEmpleadoState = createFeatureSelector<EmpleadoState>('empleados');

export const selectEmpleados = createSelector(
  selectEmpleadoState,
  (state: EmpleadoState) => state.empleados ?? []
);
