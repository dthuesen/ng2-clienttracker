import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// AngularFire2 4.0
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent }  from './app.component';

import { DashboardComponent } from './dashboard/components/dashboard.component';

import{ ClientListComponent } from './clients/components/client-list.component';
import{ ClientDetailsComponent } from './clients/components/client-details.component';
import{ AddClientComponent } from './clients/components/add-client.component';
import{ EditClientComponent } from './clients/components/edit-client.component';

import{ AddGroupComponent } from './groups/components/add-group.component';
import{ EditGroupComponent } from './groups/components/edit-group.component';
import{ GroupListComponent } from './groups/components/group-list.component';

import { ClientService} from './clients/services/client.service';
import { GroupService} from './groups/services/group.service';

import { environment } from '../environments/environment.js';



@NgModule({
  imports:      [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  declarations: [
    AddClientComponent,
    AddGroupComponent,
    AppComponent,
    ClientDetailsComponent,
    ClientListComponent,
    DashboardComponent,
    EditClientComponent,
    EditGroupComponent,
    GroupListComponent,
  ],
    providers: [
      ClientService,
      GroupService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
