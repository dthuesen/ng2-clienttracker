import { Component } from '@angular/core';

import { DashboardComponent } from './dashboard/components/dashboard.component';

import { ClientListComponent } from './clients/components/client-list.component';
import { ClientDetailsComponent } from './clients/components/client-details.component';
import { AddClientComponent } from './clients/components/add-client.component';
import { EditClientComponent } from './clients/components/edit-client.component';

import { AddGroupComponent } from './groups/components/add-group.component';
import { EditGroupComponent } from './groups/components/edit-group.component';
import { GroupListComponent } from './groups/components/group-list.component';

import { ClientService } from './clients/services/client.service';
import { GroupService } from './groups/services/group.service';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
  providers: [
    ClientService,
    GroupService
  ]
})
export class AppComponent  {
  name = 'Angular';

}
