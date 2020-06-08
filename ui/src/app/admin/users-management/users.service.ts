import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {User} from '../../models/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private UsersUrl = 'api/fullUsers';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private http: HttpClient) {}

  getUsers(query = ''): Observable<User[]> {
    console.log('get');
    return this.http.get<User[]>(`${this.UsersUrl}${query}`);
  }

  addUsers(User: User): Observable<User> {
    console.log('added');
    return this.http.post<User>(this.UsersUrl, User, this.httpOptions);
  }

  deleteUsers(User: User): Observable<User> {
    console.log('deleted');
    const url = `api/fullUsers/${User.userId}`;
    return this.http.delete<User>(url, this.httpOptions);
  }
}
