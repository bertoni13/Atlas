import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];
    show: boolean = false
    food: any[] = [
      {
        "id": 0,
        "name": "Restaurante 1",
        "type": "Carne",
        "desc": "loren ipusum la lala allalalallala",
        "vote": "70%"
      },
      {
        "id": 1,
        "name": "Restaurante 2",
        "type": "Frango",
        "desc": "loren ipusum la lala allalalallala",
        "vote": "20%"
      },
      {
        "id": 2,
        "name": "Restaurante 3",
        "type": "Chines",
        "desc": "loren ipusum la lala allalalallala",
        "vote": "90%"
      },
      {
        "id": 3,
        "name": "Restaurante 4",
        "type": "Japones",
        "desc": "loren ipusum la lala allalalallala",
        "vote": "34%"
      },
      {
        "id": 4,
        "name": "Restaurante 5",
        "type": "Frances",
        "desc": "loren ipusum la lala allalalallala",
        "vote": "55%"
      },
      {
        "id": 5,
        "name": "Restaurante 6",
        "type": "Rodizio",
        "desc": "loren ipusum la lala allalalallala",
        "vote": "40%"
      }
    ];
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllUsers();
    }
    sendVote(id) {
      console.info(id)
      this.show = true
      alert('Obrigado pelo seu voto')
    }
    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }
}
