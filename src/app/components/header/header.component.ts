import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  Login: Boolean;

  ngOnInit() {
    if(localStorage.getItem('Username') == "PRJ-2783" && localStorage.getItem('Password') == "o5vhRXQY2PTl9r0bhNUMY")
    {
      this.Login = true;
    }
    else
    {
      this.Login = false;
    }
  }

  onClick()
  {
    location.reload()
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['pradmin/logout']
      )
    );
  }
}
