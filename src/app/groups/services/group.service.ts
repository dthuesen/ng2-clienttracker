import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

@Injectable()
export class GroupService implements OnInit {
  private groups: FirebaseListObservable<any[]> ;
  private group: String[] ;
  lastGroupObservable: any;
  lastId = 0;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.groups = db.list('/groups');
  }
  ngOnInit() {
  }

  addGroup(group: any): void {
    if (!this.db.list('/groups')) {
      this.groups.push({
        name: 'first',
        id: 0
      });
    }
    this.lastGroupObservable = this.db.list('/groups', {
      query: {
        limitToLast: 1,
      }
    });

    this.lastGroupObservable.subscribe( (queriedItem: any): void => {
      // retrieve Id from last stored group
      this.lastId = queriedItem[0].id;
    });
      let newId = this.lastId + 1 || 0;
      this.groups.push({
        name: group,
        id: newId
      }).then( ret => {
        console.log('Group name successfully saved');
      }, (error: Error) => {
        console.error(error);
      });
  }
}
