import { Component, Output, EventEmitter, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addEmpleado, editEmpleado } from '../store/empleado.actions';
import { Empleado } from '../../../models/empleado.model';

@Component({
  selector: 'app-empleado-form',
  standalone: false,
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css'],
})
export class EmpleadoFormComponent implements OnInit {
  empleadoForm: FormGroup;
  @Output() submit = new EventEmitter<Empleado>();
  @Output() cancel = new EventEmitter<boolean>(); 
  @Input() empleadoEditar: Empleado | null = null;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
    this.empleadoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      apellido: ['', [Validators.required, Validators.maxLength(50)]],
      puesto: ['', [Validators.required, Validators.maxLength(50)]],
      edad: [0, [Validators.required, Validators.min(18)]],
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['empleadoEditar'] && this.empleadoEditar) {
      this.empleadoForm.patchValue(this.empleadoEditar);
    }
  }

  onSubmit() {
    if (this.empleadoForm.valid) {
      const empleado = this.empleadoForm.value;
      if (this.empleadoEditar != null) {
        this.store.dispatch(editEmpleado({ 
          empleado: {
          id: this.empleadoEditar.id,
          nombre: empleado.nombre,
          apellido: empleado.apellido,
          puesto: empleado.puesto,
          edad: empleado.edad} }));
      } else {
        this.store.dispatch(addEmpleado({ empleado }));
      }
      this.empleadoForm.reset();
      this.closeDialog();
    }
  }

  closeDialog() {
    this.cancel.emit(false); 
  }
}
