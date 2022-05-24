import { UserService } from 'src/app/core/service/user.service';
import { Component, OnInit } from '@angular/core';
import { finalize, pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isUserFetched = false;
  title = 'angular-messenger';
  constructor(private userService: UserService) { }

    ngOnInit(): void {
      this.userService.fetchUser().pipe(
        finalize(() => {
          this.isUserFetched = true;
        })
      ).subscribe();
    }

}
