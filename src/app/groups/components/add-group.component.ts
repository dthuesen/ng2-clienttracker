
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupService } from '../services/group.service';

import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'add-group',
  template: `
  
    <div class="w3-card-4">
      <div class="w3-container w3-green">
      <h2>Add Group</h2>
      </div>
      
      <form novalidate [formGroup]="addGroupForm" (ngSubmit)="onAddGroup($event); addGroupForm.reset()" class="w3-padding-16" >
        <div class="form-group">
          <label for="add-group" class="w3-label">Group Name</label>
          <input type="text" 
                 class="w3-input" 
                 placeholder="Enter a name for the new group (min. 3 characters)" 
                 formControlName="addGroup">
          <div style="color:red" 
            *ngIf="!addGroupForm.valid && (addGroupForm.dirty || addGroupForm.touched || addGroupForm.submitted)">
            
            <p *ngIf="addGroupForm.value.addGroup.length > 2">
                No special characters allowed!
            </p>
          </div>
        </div>
        
        <div class="form-group">
          <button type="submit" 
                  class="w3-button w3-light-grey"
                  [disabled]="!addGroupForm.valid"
                  >Submit Group Name</button>
        </div>
      </form>
      
    </div>
  
  
  `,
})
export class AddGroupComponent implements OnInit {

  addGroupForm: FormGroup;

  newGroup: any = {};

  constructor(
    private fbuilder: FormBuilder,
    private _groupService: GroupService,
    private db: AngularFireDatabase
  ) {}

  ngOnInit() {
    this.addGroupForm = this.fbuilder.group({
      addGroup: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[-a-zäüößÄÖÜA-Z0-9~]+')]]
    });
  }

  onAddGroup(event: any, valid: boolean ) {
    console.log('event: ', event);
    console.log('valid: ', valid);
    console.log(this.addGroupForm.value);
    console.log('length: ', this.addGroupForm.value.addGroup.length);
    console.log('Group name in onAddGroup(): ', this.addGroupForm.value.addGroup);
    console.log('this.newGroup: ', this.newGroup);

    this._groupService.addGroup(this.newGroup);
  }

}
