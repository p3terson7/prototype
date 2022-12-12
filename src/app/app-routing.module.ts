import { GetStartedComponent } from './get-started/get-started.component';
import { HomeComponent } from './home/containers/home/home.component';
import { AvantageComponent } from './avantage/avantage.component';
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
  {path: 'nouvelOrdiNoob', component: NewpcnoobComponent},
  {path: 'avantage', component: AvantageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'getstarted', component: GetStartedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NewpcComponent, OldpcComponent]
