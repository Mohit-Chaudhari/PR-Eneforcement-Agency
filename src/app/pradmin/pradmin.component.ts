import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pradmin',
  templateUrl: './pradmin.component.html',
  styleUrls: ['./pradmin.component.css']
})
export class PradminComponent implements OnInit {
  submitted: boolean;
  showSuccessMessage: boolean;
  showFailureMessage: boolean;

  constructor(private router: Router) { }

  form = new FormGroup({
    UserName: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  });

  ngOnInit() {
    if(localStorage.getItem('Username') == "PRJ-2783" && localStorage.getItem('Password') == "o5vhRXQY2PTl9r0bhNUMY"){
      //Navigate to Dashboard.
      this.router.navigateByUrl(
        this.router.createUrlTree(
          ['pradmin/admin-dashboard']
        )
      );
    }
  }

  onSubmit(){
    this.submitted = true;

    if(this.form.valid)
    {
      if(this.form.controls.UserName.value == "PRJ-2783" && this.form.controls.Password.value == "o5vhRXQY2PTl9r0bhNUMY")
      {
      this.showSuccessMessage = true;
      //Setting local Storage
      localStorage.setItem('Username', this.form.controls.UserName.value);
      localStorage.setItem('Password', this.form.controls.Password.value);
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.form.reset();

      this.form.setValue({
        UserName: '',
        Password: ''
      });

      location.reload();

      setTimeout(() => 500000);
        //Navigate to Dashboard.
        this.router.navigateByUrl(
          this.router.createUrlTree(
            ['pradmin/admin-dashboard']
          )
        );
      }
      else{
        this.showFailureMessage = true;
        this.form.setValue({
          UserName: '',
          Password: ''
        });
      }
    }
  }
}
