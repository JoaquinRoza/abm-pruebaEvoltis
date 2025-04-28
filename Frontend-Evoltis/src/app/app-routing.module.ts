import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoFormComponent } from './features/empleado/empleado-form/empleado-form.component';
import { EmpleadoListComponent } from './features/empleado/empleado-list/empleado-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'empleados', pathMatch: 'full' },
  { path: 'empleados', component: EmpleadoListComponent },
  { path: 'nuevo-empleado', component: EmpleadoFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}