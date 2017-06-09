import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="w3-bar w3-green">
      <a class="w3-bar-item w3-button w3-mobile w3-hover-yellow" routerLink="dashboard">Home</a>
      <a class="w3-bar-item w3-button w3-mobile w3-hover-yellow" routerLink="clients">Clients</a>
      <a class="w3-bar-item w3-button w3-mobile w3-hover-yellow" routerLink="groups">Groups</a>
    </div>
    
    <div class="w3-container w3-padding">
        <div class="w3-row">
          <div class="w3-col m4 l3">
              <h1 class="logo"><span>Client</span>Tracker</h1>
              <ul class="w3-ul w3-border-bottom">
                <li><a routerLink="client/add">Add Client</a></li>
                <li><a routerLink="group/add">Add Group</a></li>
              </ul>
          </div>
          <div class="w3-col m8 l9 w3-padding-16" >
            <router-outlet></router-outlet>
          </div>
        </div>
    </div>
  `,
})
export class AppComponent  {
}
