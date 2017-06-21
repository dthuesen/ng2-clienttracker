
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupService } from '../services/group.service';
import { Router } from '@angular/router';

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
                 formControlName="addGroup"
                 #addGroup>
          <div style="color:red" 
            *ngIf="!addGroupForm.valid && (addGroupForm.dirty || addGroupForm.touched || addGroupForm.submitted)">
            
            <p *ngIf="addGroupForm.value.addGroup?.length > 2">
                Minimum 3 characters and no special characters or trailing spaces allowed!
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
export class AddGroupComponent implements AfterViewInit, OnInit {

  @ViewChild("addGroup")
  private _inputElement: ElementRef;

  addGroupForm: FormGroup;

  newGroup: any = {};

  constructor(
    private fbuilder: FormBuilder,
    private _groupService: GroupService,
    private router: Router,
    private elementRef: ElementRef,
  ) {}

  ngAfterViewInit() {
    this._inputElement.nativeElement.focus();
  }

  ngOnInit() {
    const REGEX = '[-a-zäüößÄÖÜA-Z0-9~]+[" "]?[-a-zäüößÄÖÜA-Z0-9~]+[" "]?[-a-zäüößÄÖÜA-Z0-9~]+?';
    // validate form data
    this.addGroupForm = this.fbuilder.group({
      addGroup: ['', [Validators.required, Validators.minLength(3), Validators.pattern(REGEX)]],
    });
  }

  onAddGroup(event: any, valid: boolean ) {
    // call group service with current group name from form
    this.newGroup = this.addGroupForm.value.addGroup;
    this._groupService.addGroup(this.newGroup);
    this.router.navigateByUrl('/groups');
  }

}
