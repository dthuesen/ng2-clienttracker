import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

@Injectable()
export class ClientService implements OnInit {
  private groups: FirebaseListObservable<any[]> ;
  private clients: String[] ;
  private client: String[] ;
  
  constructor(
    private db: AngularFireDatabase
  ) {
    this.groups = db.list('/groups');
  }

  ngOnInit() {
    this.groups = this.db.list('/groups');
  }

  getGroups() {
    this.groups = this.db.list('/groups');
  }
}
