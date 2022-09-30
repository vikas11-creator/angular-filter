import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  constructor(public cdr: ChangeDetectorRef) {}

  array: any[] = [
    {
      id: 1,
      department: 'it',
      manager: 'male',
      city: 'mumbai',
    },
    {
      id: 1,
      department: 'zoology',
      manager: 'male',
      city: 'patna',
    },
    {
      id: 1,
      department: 'it',
      manager: 'female',
      city: 'goa',
    },
    {
      id: 1,
      department: 'it',
      manager: 'male',
      city: 'banglore',
    },
    {
      id: 1,
      department: 'it',
      manager: 'female',
      city: 'bhopal',
    },
    {
      id: 1,
      department: 'zoology',
      manager: 'male',
      city: 'delhi',
    },
    {
      id: 1,
      department: 'zoology',
      manager: 'male',
      city: 'mumbai',
    },
  ];
  newArr: object[];
  department: string[] = ['it', 'zoology'];
  manager: string[] = ['male', 'female'];

  onChange(key, event) {
    //console.log(event.target.value);
    debugger;
    switch (key) {
      case 'department':
        this.newArr = this.array.filter((data) => {
          return data.department === event.target.value;
        });
        console.log('67', this.newArr);
        this.array === this.newArr;
        this.cdr.detectChanges();
        break;
      case 'manager':
        this.newArr = this.array.filter((data) => {
          return (data.manager = event.target.value);
        });
        console.log('73', this.newArr);
        this.array === this.newArr;
        break;
    }
    //console.log(this.array);
  }
}
