import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechdayFormularComponent } from './techday-formular/techday-formular.component';

const routes: Routes = [
  { path: '', component: TechdayFormularComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
