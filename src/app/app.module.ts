import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import{ ClientListComponent } from './clients/components/client-list.component';
import{ ClientDetailsComponent } from './clients/components/client-details.component';
import{ AddClientComponent } from './clients/components/add-client.component';
import{ EditClientComponent } from './clients/components/edit-client.component';

import{ AddGroupComponent } from './groups/components/add-group.component';
import{ EditGroupComponent } from './groups/components/edit-group.component';
import{ GroupListComponent } from './groups/components/group-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    AddGroupComponent,
    EditGroupComponent,
    GroupListComponent,
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
