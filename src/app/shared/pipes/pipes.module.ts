import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveCharPipe } from './remove-char.pipe';
import { ExtractFilenamePipe } from './extract-filename.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RemoveCharPipe, ExtractFilenamePipe],
  exports: [RemoveCharPipe, ExtractFilenamePipe]
})
export class PipesModule { }
