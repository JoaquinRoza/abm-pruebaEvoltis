import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { EmpleadoService } from '../../../services/empleado.service';
import { 
        loadEmpleados,
        loadEmpleadosSuccess,
        loadEmpleadosFailure,
        addEmpleado,
        addEmpleadoSuccess,
        addEmpleadoFailure,
        deleteEmpleado,
        deleteEmpleadoSuccess,
        deleteEmpleadoFailure,
        editEmpleado,
        editEmpleadoSuccess,
        editEmpleadoFailure,
} from './empleado.actions';

@Injectable({ 
  providedIn: 'root',
})
export class EmpleadoEffects {
  private actions$ = inject(Actions);
  private empleadoService = inject(EmpleadoService);

  loadEmpleados$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEmpleados),
      switchMap(() =>
        this.empleadoService.getEmpleados().pipe(
          map(empleados => {
            return loadEmpleadosSuccess({ empleados });
          }),
          catchError(error => {
            return of(loadEmpleadosFailure({ error }));
          })
        )
      )
    )
  );
  
  addEmpleado$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addEmpleado),
      switchMap(action =>
        this.empleadoService.crearEmpleado(action.empleado).pipe(
          map(empleado => addEmpleadoSuccess({ empleado })),
          catchError(error => {
            return of(addEmpleadoFailure({ error }));
          })
        )
      )
    )
  );

  editEmpleado$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editEmpleado),
      switchMap(action =>
        this.empleadoService.actualizarEmpleado(action.empleado.id, action.empleado).pipe(
          switchMap(() => [
            editEmpleadoSuccess({ empleado: action.empleado }),
            loadEmpleados()
          ]),
          catchError(error => of(editEmpleadoFailure({ error })))
        )
      )
    )
  );
  
  deleteEmpleado$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteEmpleado),
      switchMap(action =>
        this.empleadoService.eliminarEmpleado(action.id).pipe(
          switchMap(() => [
            deleteEmpleadoSuccess({ id: action.id }),
            loadEmpleados()
          ]),
          catchError(error => of(deleteEmpleadoFailure({ error })))
        )
      )
    )
  );
}