import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewpcComponent } from './newpc/newpc.component';
import { OldpcComponent } from './oldpc/oldpc.component';
import { NouvelOrdinateurComponent } from './nouvel-ordinateur/nouvel-ordinateur.component';
import { NewpcproComponent } from './newpcpro/newpcpro.component';
import { NewpcnoobComponent } from './newpcnoob/newpcnoob.component';


const routes: Routes = [
  {path: 'newpcs', component: NewpcComponent,},
  {path: 'oldpcs', component: OldpcComponent},
  {path: 'nouvelOrdi', component: NouvelOrdinateurComponent},
  {path : 'nouvelOrdiPro', component: NewpcproComponent},
  {path: 'nouvelOrdiNoob', component: NewpcnoobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NewpcComponent, OldpcComponent]
