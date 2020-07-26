import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inquery',
  templateUrl: './inquery.component.html',
  styleUrls: ['./inquery.component.css']
})
export class InqueryComponent implements OnInit {

  constructor(private firebase: AngularFireDatabase, private router: Router) { }

  InqList: AngularFireList<any>;
  showDeletedMessage: boolean;
  InqArr: any;
  submitted: boolean;
  showSuccessMessage: boolean;


  ngOnInit() {
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

  // To get the inquery from firebase.
  getInquery() {
    this.InqList = this.firebase.list('inquerylist');
    return this.InqList.snapshotChanges();
  }

  onDelete($key) 
  {
    if (confirm('PR-Admin : Are you sure to remove this inquery ?')) 
    {
      this.deleteName($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

  // To delete name from firebase.
  deleteName($key: any) {
    this.InqList.remove($key);
  }

}
