import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LostComponent } from './pages/lost/lost.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '**', component: LostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
