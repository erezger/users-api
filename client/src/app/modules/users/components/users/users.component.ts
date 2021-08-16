import {Component, EventEmitter, OnInit} from '@angular/core';
import {TableHeaderModel} from '@app/core/models/tableHeader.model';
import {User} from '@app/core/models/user.model';
import {UserService} from '@app/core/services/user.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {ToastrService} from 'ngx-toastr';
import {Store} from '@ngrx/store';
import {RootStoreState} from '@app/root-store';
import {Observable} from 'rxjs';
import { UserStoreActions, UserStoreSelectors } from '@app/root-store/user-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity: 0}))
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {

  userHeaders: TableHeaderModel[] = [
    {text: 'First Name', property: 'firstName'},
    {text: 'Last Name', property: 'lastName'},
    {text: 'Email', property: 'email'},
    {text: 'Gender', property: 'gender'},
    {text: 'Age', property: 'age'},
  ];
  isLoading: boolean;
  toggleRegisterUser: boolean;
  users: Array<User>;
  userItems$: Observable<User[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  constructor(
    private _userService: UserService,
    private _toasterService: ToastrService,
    private router: Router,
    private store$: Store<RootStoreState.State>,
  ) {
  }

  userToEdit: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.userItems$ = this.store$.select(
      UserStoreSelectors.selectUserUsers,
    );
    console.log('user items');
    this.userItems$.subscribe(users => {
      this.users = users;
      console.log(users);
    });

    this.store$.dispatch(
      new UserStoreActions.loadUsersRequestAction()
    );
  }

  navigateToUser(){
    this.router.navigate(['/users/user/', {mode:'New'}]);
  }
  
  editClicked(data) {
    this.router.navigate(['/users/user/' + data.id, {mode:'Edit', user: JSON.stringify(data)}]);
  }
  
  viewClicked(data) {
    this.router.navigate(['/users/user/' + data.id, {mode:'View', user: JSON.stringify(data)}]);
  }

  deleteClicked(obj) {
    this._userService.deleteUser(obj.id)
    .subscribe(() => {
      this._toasterService.success('user deleted successfully!', 'Success!');
      this.store$.dispatch(
        new UserStoreActions.loadUsersRequestAction()
      );
      },
      (err) => {
        this._toasterService.error(err.message, 'Error!');
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      });
  }

}
