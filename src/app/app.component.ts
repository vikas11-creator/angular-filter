import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

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
}
