import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, ReplaySubject, tap } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUserMock: UserModel = {
    username: 'Steve Bangalter',
    last_seen: 'online',
    id: '62154955353e6c41ea0348ee',
  };
  currentUser$ = new ReplaySubject<UserModel | null>();

  constructor(private http: HttpClient) { }

  getCurrentUser() {
    return this.currentUserMock;
  }

  fetchUser() {
    return this.http.get<UserModel>('/user/me').pipe(
      tap(user => this.setCurrentUser(user)),
      catchError(error => {
        this.currentUser$.next(null);
        return of(error);
      }),
    );
  }

  setCurrentUser(user: UserModel) {
    this.currentUser$.next(user)
  }
}
