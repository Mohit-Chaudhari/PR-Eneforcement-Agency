import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    //console.log("Username : ",localStorage.getItem('Username'))
    if(localStorage.getItem('Username') === "PRJ-2783" && localStorage.getItem('Password') === "o5vhRXQY2PTl9r0bhNUMY"){

    }
    if(localStorage.getItem('Username') === null && localStorage.getItem('Password') === null){
      //Navigate to Dashboard.
      this.router.navigateByUrl(
        this.router.createUrlTree(
          ['pradmin']
        )
      );
    }
  }
}
