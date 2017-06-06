import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

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



@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientListComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    AddGroupComponent,
    EditGroupComponent,
    GroupListComponent,
  ],
    providers: [
      ClientService,
      GroupService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
