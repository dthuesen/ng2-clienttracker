import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/components/dashboard.component';

import{ ClientListComponent } from './clients/components/client-list.component';
import{ ClientDetailsComponent } from './clients/components/client-details.component';
import{ AddClientComponent } from './clients/components/add-client.component';
import{ EditClientComponent } from './clients/components/edit-client.component';

import{ AddGroupComponent } from './groups/components/add-group.component';
import{ EditGroupComponent } from './groups/components/edit-group.component';
import{ GroupListComponent } from './groups/components/group-list.component';


const routes: Routes = [
  { path: '',                   redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'home',               redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',          component: DashboardComponent },
  { path: 'clients',            component: ClientListComponent },
  { path: 'groups',             component: GroupListComponent },
  { path: 'client/add',         component: AddClientComponent },
  { path: 'group/add',          component: AddGroupComponent },
  { path: 'client/details/:id', component: ClientDetailsComponent },
  { path: 'client/edit/:id',    component: EditClientComponent },
  { path: 'group/edit/:id',     component: EditGroupComponent },
  { path: '**',                 redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
