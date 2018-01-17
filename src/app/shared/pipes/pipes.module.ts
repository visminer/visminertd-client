import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveCharPipe } from './remove-char.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RemoveCharPipe],
  exports: [RemoveCharPipe]
})
export class PipesModule { }
