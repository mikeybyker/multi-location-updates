import { Component, OnInit } from '@angular/core';
import {
  AngularFire,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: FirebaseObjectObservable<any>;

  // Just to display the code used within the html...
  originalData: string = `objectA: { a: 1, b: 2, c: 3, d: 4, e: 5 };
objectB: { w: 1, x: 2, y: 3, z: 4 };`;
  updateCode: string = `let update = {};
    update['test/objectA/a'] = 10;
    update['test/objectA/e'] = 50;
    update['test/objectB/x'] = 20;
    this.af.database.object('/').update(update);`;
  updateCodeBigObject: string = `let update = {
      objectA: {
        a: 10
      },
      objectB: {
        e: 50
      },
      objectC: {
        x: 20
      }
    };
    this.af.database.object('test').update(update);`;
  justA: string = `this.af.database.object('test/objectA').update({ a: 99 });`;

  constructor(private af: AngularFire) {
    this.data = af.database.object('/test');
  }

  ngOnInit() {

  }

  // This *sets*, but just does so atomically at multiple locations
  // that have no other children. So you don't notice.
  updateMultiData() {
    let update = {};
    update['test/objectA/a'] = 10;
    update['test/objectA/e'] = 50;
    update['test/objectB/x'] = 20;
    this.af.database.object('/').update(update);
  }

  // Should also work as intended, creating a giant object
  // instead of relying on firebase backend to break down paths
  updateMultiDataBigObject() {
    let update = {
      objectA: {
        a: 10
      },
      objectB: {
        e: 50
      },
      objectC: {
        x: 20
      }
    };
    this.af.database.object('test').update(update);
  }

  // This approach doesn't work either
  updateMultiDataX() {
    let update = {};
    update['objectA'] = { a: 10, e: 50 };
    update['objectB'] = { x: 20 };
    this.data.update(update);
  }

  // Updating a single object does work
  updateA() {
    this.af.database.object('test/objectA').update({ a: 99 });
  }

  resetData() {
    const objectA: any = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    const objectB: any = { w: 1, x: 2, y: 3, z: 4 };
    this.data.set({ objectA, objectB });
  }

}
