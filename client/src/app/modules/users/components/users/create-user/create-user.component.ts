import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AuthStorageService} from '@core/services/auth-storage.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {UserService} from '@core/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {

  @Input() editUser: EventEmitter<any>;

  @Output() closeRegisterUser = new EventEmitter<any>();
  @Output() newUserRegistered = new EventEmitter<any>();

  isLoading = false;
  public afuConfig = {
    multiple: true,
    maxSize: '1',
    theme: 'dragNDrop',
    uploadAPI: {
      url: 'https://example-file-upload-api',
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
      },
      params: {
        page: '1'
      },
      responseType: 'blob',
    },
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };
  public errorMessages = {
    firstname: [{type: 'required', message: 'First name is required.'}],
    lastname: [{type: 'required', message: 'Last name is required.'}],
    username: [{type: 'required', message: 'User name is required.'}],
    email: [{type: 'required', message: 'Email is required.'}, {
      type: 'email',
      message: 'must enter valid email address.'
    }],
    password: [
      {type: 'required', message: 'Password is required.'},
      {type: 'pattern', message: 'Password is not strong enough.'},
    ],
    role: [{type: 'required', message: 'Role is required.'}],
  };

  public title = 'Register new user';
  roles = [{code: 1, desc: 'Admin'}, {code: 2, desc: 'Teacher'}, {code: 3, desc: 'Printer'}];

  public createUserForm = this._fb.group({
      firstname: new FormControl('ee', Validators.compose([Validators.required])),
      lastname: new FormControl('ee', Validators.compose([Validators.required])),
      username: new FormControl('ee', Validators.compose([Validators.required])),
      email: new FormControl('ee@ee.com', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('12345678', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}')])),
      role: new FormControl('Admin', Validators.compose([Validators.required])),
    },
    {updateOn: 'submit'});

  constructor(
    private _authStorageService: AuthStorageService,
    private _toasterService: ToastrService,
    private _fb: FormBuilder,
    private _router: Router,
    private _navLocation: Location,
    private _userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.editUser.subscribe((data) => {
      if (data) {
        this.createUserForm.patchValue(data);
        this.title = 'Edit user';
      } else {
        this.createUserForm.reset();
      }
    });
  }

  // Choose staple details using select dropdown
  changeStaple(e) {
    this.createUserForm.patchValue({staple: e.target.checked});
  }

  public registerNewUser(): void {
    console.log(this.createUserForm);
    this.createUserForm.markAllAsTouched();
    if (this.createUserForm.invalid) {
      return;
    }
    this.isLoading = true;
    this._userService.registerNewUser(this.createUserForm.value)
      .subscribe((data) => {
          this.newUserRegistered.emit();
          this._toasterService.success('New user registered successfully!', 'Success!');
        },
        (err) => {
          this.isLoading = false;
          // error
        },
        () => {
          this.isLoading = false;
          // @todo:: hide loader here
        }
      );
  }

}
