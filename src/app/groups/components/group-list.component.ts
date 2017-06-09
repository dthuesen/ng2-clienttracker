
import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/do';

@Component({
  selector: 'group-list',
  template: `
      <h1>Group List</h1>
      <ul>
        <li *ngFor="let group of groups | async">
          {{group.$key}} : {{group.name}}
        </li>
      </ul>
  `,
})
export class GroupListComponent {

  groups: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.groups = db.list('/groups');
  }

}
