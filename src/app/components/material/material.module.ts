import { NgModule } from '@angular/core';

import { MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';

const materialModules = [
  MatButtonModule,
  MatInputModule,
  MatIconModule,
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules],
  declarations: []
})
export class MaterialModule { }
