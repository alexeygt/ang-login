import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatInputModule, MatIconModule, ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher, MatFormFieldModule
} from '@angular/material';

const materialModules = [
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
];

@NgModule({
  declarations: [],
  imports: [materialModules],
  exports: [materialModules],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
})
export class MaterialModule { }
