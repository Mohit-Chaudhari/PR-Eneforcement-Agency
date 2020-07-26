import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('Username')
    localStorage.removeItem('Password')
    localStorage.clear()
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['pradmin']
      )
    );
  }

}
