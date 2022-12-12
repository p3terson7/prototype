import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/containers/home/home.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewpcnoobComponent } from './newpcnoob/newpcnoob.component';
import { NewpcproComponent } from './newpcpro/newpcpro.component';
import { NewpcComponent } from './newpc/newpc.component';
import { NouvelOrdinateurComponent } from './nouvel-ordinateur/nouvel-ordinateur.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AvantageComponent } from './avantage/avantage.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { InformatifComponent } from './informatif/informatif.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NewpcComponent,
    NewpcnoobComponent,
    NewpcproComponent,
    NouvelOrdinateurComponent,
    HomeComponent,
    AvantageComponent,
    GetStartedComponent,
    InformatifComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'info', component: InformatifComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
