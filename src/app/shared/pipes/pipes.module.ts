import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoveCharPipe } from './remove-char.pipe';
import { ExtractFilenamePipe } from './extract-filename.pipe';
import { ExtractClassnamePipe } from './extract-classname.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RemoveCharPipe, ExtractFilenamePipe, ExtractClassnamePipe],
  exports: [RemoveCharPipe, ExtractFilenamePipe, ExtractClassnamePipe]
})
export class PipesModule { }
