import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-non-movable-prop',
  templateUrl: './non-movable-prop.component.html',
  styleUrls: ['./non-movable-prop.component.css']
})
export class NonMovablePropComponent implements OnInit {

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
    this.MovableList = this.firebase.list('nonmovablelist');
    return this.MovableList.snapshotChanges();
  }

}
