import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase'

@Component({
  selector: 'app-fire1',
  templateUrl: './fire1.component.html',
  styleUrls: ['./fire1.component.css']
})
export class Fire1Component implements OnInit {
  items: Observable<any[]>;
  constructor(public db: AngularFirestore) { }

  ngOnInit() {
    this.items = this.db.collection('items').valueChanges();
  }

}
