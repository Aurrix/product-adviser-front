import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryFormComponent } from './recommendations/entry-form/entry-form.component';
import { ListComponent } from './products/list/list.component';


const routes: Routes = [
  {path:"",redirectTo:"recommendations/entry-form",pathMatch:"full"},
  {path:"recommendations/entry-form",component:EntryFormComponent},
  {path:"product/list",component:ListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
