import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    EmpleadoFormComponent,
    EmpleadoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    PaginatorModule,
  ],
  exports: [
    EmpleadoFormComponent,
    EmpleadoListComponent
  ]
})
export class EmpleadoModule {}