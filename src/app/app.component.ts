import { Component } from '@angular/core';

import{ ClientListComponent } from './clients/components/client-list.component';
import{ ClientDetailsComponent } from './clients/components/client-details.component';
import{ AddClientComponent } from './clients/components/add-client.component';
import{ EditClientComponent } from './clients/components/edit-client.component';

import{ AddGroupComponent } from './groups/components/add-group.component';
import{ EditGroupComponent } from './groups/components/edit-group.component';
import{ GroupListComponent } from './groups/components/group-list.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
