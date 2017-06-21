
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'add-client',
  template: `
  <div class="w3-card-4">
    <div class="w3-container w3-green">
      <h2>Add Client</h2>
    </div>
    <form novalidate [formGroup]="addClientForm" (ngSubmit)="onAddClient($event); addClientForm.reset()" class="w3-padding-16">
      <div class="form-group">
          <label for="add-first-name" class="w3-label">First Name</label>
          <input type="text" 
                 class="w3-input" 
                 placeholder="Enter your first name (min. 2 characters)" 
                 [formGroup]="addClientForm"
                 formControlName="addLastName"
                 #addFirstName>
      </div>
      <div class="form-group">
          <label for="add-last-name" class="w3-label">Last Name</label>
          <input type="text" 
                 class="w3-input" 
                 placeholder="Enter your last name" 
                 [formGroup]="addClientForm"
                 formControlName="addLastName"
                 #addLastName>
      </div>
      <div class="form-group">
          <label for="group" class="w3-label">Group</label>
          <select class="w3-select"
                  [formGroup]="addClientForm"
                  formControlName="selectGroup"
                  #selectGroup>
            <option value="" disabled selected>Choose a Group</option>
            <option *ngFor="let group of groups | async" [value]="group.name">{{ group.name }}</option>
          </select>
      </div>
      <div class="form-group">
          <label for="add-last-name" class="w3-label">Email</label>
          <input type="text" 
                 class="w3-input" 
                 placeholder="Enter your Email Address" 
                 [formGroup]="addClientForm"
                 formControlName="addEmail"
                 #addEmail>
      </div>
      <div class="form-group">
          <label for="add-last-name" class="w3-label">Phone</label>
          <input type="text" 
                 class="w3-input" 
                 placeholder="Enter your Phone Number" 
                 [formGroup]="addClientForm"
                 formControlName="addPhoneNumber"
                 #addPhone>
      </div>
    </form>
  </div>
  `,
})
export class AddClientComponent implements OnInit {
  @ViewChild('addFirstName')
  private _inputElementFirstName: ElementRef;
  @ViewChild('addLastName')
  private _inputElementLastName: ElementRef;
  @ViewChild('selectGroup')
  private _inputElementGroup: ElementRef;
  @ViewChild('addEmail')
  private _inputElementEmail: ElementRef;
  @ViewChild('addPhone')
  private _inputElementPhone: ElementRef;

  addClientForm = new FormGroup({
       addFirstName: new FormControl(),
       addLastName: new FormControl(),
       selectGroup: new FormControl(),
       addEmail: new FormControl(),
       addPhoneNumber: new FormControl(),
    });
  newClient: any;

  groups: FirebaseListObservable<any[]>;

  constructor(
    private fbuilder: FormBuilder,
    private _groupService: ClientService,
    private router: Router,
    private elementRef: ElementRef,
    private db: AngularFireDatabase
  ) {
    this.groups = db.list('/groups');
    this.newClient = new FormGroup({
       firstName: new FormControl(),
       lastName: new FormControl(),
       group: new FormControl(),
       email: new FormControl(),
    });
  }

  ngOnInit() {
    this._inputElementFirstName.nativeElement.focus();
  }

}
