import { CapitalizeFirstPipe } from './capitalize-first.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoveCharPipe } from './remove-char.pipe';
import { ExtractFilenamePipe } from './extract-filename.pipe';
import { ExtractClassnamePipe } from './extract-classname.pipe';
import { MaxLengthPipe } from './max-length.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RemoveCharPipe,
    ExtractFilenamePipe,
    ExtractClassnamePipe,
    MaxLengthPipe,
    CapitalizeFirstPipe
  ],
  exports: [
    RemoveCharPipe,
    ExtractFilenamePipe,
    ExtractClassnamePipe,
    MaxLengthPipe,
    CapitalizeFirstPipe
  ]
})
export class PipesModule { }
