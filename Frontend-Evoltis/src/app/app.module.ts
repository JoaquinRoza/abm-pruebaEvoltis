import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmpleadoModule } from './features/empleado/empleado.module';
import { AppRoutingModule } from './app-routing.module';
import { empleadoReducer } from './features/empleado/store/empleado.reducer';
import { StoreModule } from '@ngrx/store';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { EmpleadoEffects } from './features/empleado/store/empleado.effects';
import { HttpClientModule } from '@angular/common/http';
import { appConfig } from './app.config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    EmpleadoModule,
    AppRoutingModule,
    StoreModule.forRoot({ empleados: empleadoReducer }),
    EffectsModule.forRoot([EmpleadoEffects]),
    TableModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ...appConfig.providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}