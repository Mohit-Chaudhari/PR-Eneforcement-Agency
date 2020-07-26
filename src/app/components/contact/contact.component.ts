import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private firebase: AngularFireDatabase) { }

  InqueryList: AngularFireList<any>;
  InqArr: any;
  submitted: boolean;
  showSuccessMessage: boolean;

  form = new FormGroup({
    $key: new FormControl(null),
    ContactFullName: new FormControl('',[Validators.required]),
    ContactEmail: new FormControl('',[Validators.required,Validators.email]),
    ContactMobile: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    ContactMeassage: new FormControl('',Validators.required)
  });

  ngOnInit() {
    this.getInquery().subscribe(
      list => {
        this.InqArr = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  // To insert inquery into firebase.
  insertInq(Inq)
  {
    this.InqueryList.push({
      FullName: Inq.ContactFullName,
      Email: Inq.ContactEmail,
      Mobile: Inq.ContactMobile,
      Inquery: Inq.ContactMeassage
    });
  }

  // To get the inquery from firebase.
  getInquery() {
    this.InqueryList = this.firebase.list('inquerylist');
    return this.InqueryList.snapshotChanges();
  }

  onSubmit(){
    this.submitted = true;

    if(this.form.valid)
    {
      if(this.form.get('$key').value == null)
      {
        this.insertInq(this.form.value);
      }

      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.form.reset();

      this.form.setValue({
        $key: null,
        ContactFullName: '',
        ContactEmail: '',
        ContactMobile: '',
        ContactMeassage: ''
      });
    }
  }

}
