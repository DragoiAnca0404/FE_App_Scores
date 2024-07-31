import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Importează ReactiveFormsModule

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule // Adaugă ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule // Exportă ReactiveFormsModule
  ]
})
export class SharedModule {}
