import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '@core/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@app/core/models/user.model';
import { Observable } from 'rxjs';
import { UserStoreSelectors } from '@app/root-store/user-store';
import { RootStoreState } from '@app/root-store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {

  @Output() closeRegisterUser = new EventEmitter<any>();
  @Output() newUserRegistered = new EventEmitter<any>();

  isLoading = false;
  
  public errorMessages = {
    firstName: [{type: 'required', message: 'First name is required.'}],
    lastName: [{type: 'required', message: 'Last name is required.'}],
    email: [
      {type: 'required', message: 'Email is required.'},
    {      type: 'email',      message: 'must enter valid email address.'    }
  ],
    gender: [      {type: 'required', message: 'Gender is required.'}    ],
    age: [{type: 'required', message: 'Age is required.'}],
  };

  public title = 'Add new user';
  public editUser = {};
  public mode;

  public createUserForm = this._fb.group({
      firstName: new FormControl('ee', Validators.compose([Validators.required])),
      lastName: new FormControl('ee', Validators.compose([Validators.required])),
      email: new FormControl('ee@ee.com', Validators.compose([Validators.required, Validators.email])),
      gender: new FormControl('Male', Validators.compose([Validators.required])),
      age: new FormControl(30, Validators.compose([Validators.required])),
      id: new FormControl(null),
    },
    {updateOn: 'submit'});

  constructor(
    private _toasterService: ToastrService,
    private _fb: FormBuilder,
    private _userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.editUser = JSON.parse(params['user']);
      this.mode = params['mode'];
    });
   
    switch(this.mode){
      case 'Edit':
        this.title = 'Edit User';
        this.createUserForm.patchValue(this.editUser);
        break;
      case 'View':
        this.title = 'View User';
        this.createUserForm.patchValue(this.editUser);
      break;
      default:
        this.createUserForm.reset();
          this.title = 'Add New User';
      break;
    }    
  }

  onSave(){
    const obj = {...this.createUserForm.value};
    this.createUserForm.markAllAsTouched();
    if (this.createUserForm.invalid) {
      return;
    }
    if(this.mode === 'New'){
      this.addNewUser(obj);
    } else if(this.mode === 'Edit'){
      this.editExistingUser(obj);
    }
  }

  addNewUser(obj){
    this._userService.addNewUser(obj)
        .subscribe((data) => {
          this._toasterService.success('New user registered successfully!', 'Success!');
          setTimeout(()=>{
            this.router.navigate(['/users']);
          }, 1000)
          },
          (err) => {
            this._toasterService.error(err.message, 'Error!');
            this.isLoading = false;
          },
          () => {
            this.isLoading = false;
          });
  }

  editExistingUser(obj){
    this._userService.editUser(obj)
    .subscribe((data) => {
      this._toasterService.success('user updated successfully!', 'Success!');
      setTimeout(()=>{
        this.router.navigate(['/users']);
      }, 1000)
      },
      (err) => {
        this._toasterService.error(err.message, 'Error!');
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      });
  }

  backToUsers(){
    this.router.navigate(['/users']);
    this.createUserForm.reset();
  }
  

}
