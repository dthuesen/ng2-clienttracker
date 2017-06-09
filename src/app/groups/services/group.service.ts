import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

@Injectable()
export class GroupService {
  private groups: FirebaseListObservable<any[]> ;
  private group: String[] ;

  constructor(
    db: AngularFireDatabase
  ) {
    this.groups = db.list('/groups');
  }

  addGroup(data: any) {
    console.log('from service addGroup(): ', data);
  }
}


