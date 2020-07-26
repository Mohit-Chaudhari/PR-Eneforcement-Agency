import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-non-movable-prop',
  templateUrl: './manage-non-movable-prop.component.html',
  styleUrls: ['./manage-non-movable-prop.component.css']
})
export class ManageNonMovablePropComponent implements OnInit {

  MovableList: AngularFireList<any>;
  MovableArr: any;
  submitted: boolean;
  showSuccessMessage: boolean;
  showDeletedMessage: boolean;

  constructor(private firebase: AngularFireDatabase, private router: Router) { }

  form = new FormGroup({
    $key: new FormControl(null),
    BriefDescription: new FormControl('',[Validators.required]),
    Area: new FormControl('',[Validators.required]),
    ReservePrice: new FormControl('',[Validators.required]),
    Possesion: new FormControl('',Validators.required)
  });


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

    this.getMovableList().subscribe(
      list => {
        this.MovableArr = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key) 
  {
    if (confirm('PR-Admin : Are you sure to remove this property ?')) 
    {
      this.deleteName($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

  // To delete name from firebase.
  deleteName($key: any) {
    this.MovableList.remove($key);
  }

  // To insert inquery into firebase.
  insertMovable(movable)
  {
    this.MovableList.push({
      BriefDescription: movable.BriefDescription,
      Area: movable.Area,
      ReservePrice: movable.ReservePrice,
      Possesion: movable.Possesion
    });
  }

  // To get the inquery from firebase.
  getMovableList() {
    this.MovableList = this.firebase.list('nonmovablelist');
    return this.MovableList.snapshotChanges();
  }

  onSubmit(){
    this.submitted = true;

    if(this.form.valid)
    {
      if(this.form.get('$key').value == null)
      {
        this.insertMovable(this.form.value);
      }

      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.form.reset();

      this.form.setValue({
        $key: null,
        BriefDescription: '',
        Area: '',
        ReservePrice: '',
        Possesion: ''
      });
    }
  }


}
