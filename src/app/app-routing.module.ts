import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/no-connected/no-connected.module').then(m => m.NoConnectedModule) },
  { path: 'kounji', loadChildren: () => import('./modules/connected/connected.module').then(m => m.ConnectedModule) }
  ];




@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
