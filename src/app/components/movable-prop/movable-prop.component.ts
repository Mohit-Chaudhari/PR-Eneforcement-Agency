import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-movable-prop',
  templateUrl: './movable-prop.component.html',
  styleUrls: ['./movable-prop.component.css']
})
export class MovablePropComponent implements OnInit {

  constructor(private firebase: AngularFireDatabase) { }
  MovableList: AngularFireList<any>;
  MovableArr: any;
  submitted: boolean;
  showSuccessMessage: boolean;


  ngOnInit() {
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

  getMovableList() {
    this.MovableList = this.firebase.list('movablelist');
    return this.MovableList.snapshotChanges();
  }

}
