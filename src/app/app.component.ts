import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  arrayCopy1:any[] = [];
  constructor(
    public cdr: ChangeDetectorRef,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }
ngOnInit(){
}
  array: any[] = [
    {
      id: 1,
      department: 'it',
      manager: 'male',
      city: 'mumbai',
    },
    {
      id: 2,
      department: 'zoology',
      manager: 'male',
      city: 'patna',
    },
    {
      id: 3,
      department: 'it',
      manager: 'female',
      city: 'goa',
    },
    {
      id: 4,
      department: 'it',
      manager: 'male',
      city: 'banglore',
    },
    {
      id: 5,
      department: 'it',
      manager: 'female',
      city: 'bhopal',
    },
    {
      id: 6,
      department: 'zoology',
      manager: 'male',
      city: 'delhi',
    },
    {
      id: 7,
      department: 'zoology',
      manager: 'male',
      city: 'mumbai',
    },
  ];

  department: string[] = ['it', 'zoology'];
  manager: string[] = ['male', 'female'];
  isfilter: boolean = false;
  filteredArr: any[];

  onChange(key, event) {
    let copyArr = this.array;
    this.array = [];
    let filterString = key;
    for (let i = 0; i < copyArr.length; i++) {
      if (!this.isfilter) {
        this.array = copyArr.filter((data) => {
          this.isfilter = true;
          return data[filterString] === event.target.value;
        });
        this.filteredArr = this.array;
      } else {
        this.array = this.filteredArr.filter((data) => {
          return data[filterString] === event.target.value;
        });
      }
    }
  }

  searchArray(val) {
    this.spinner.show();
    let value = val.value;
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    //FILTER METHOD RETURN STATEMENT
    this.array = this.getArray(this.array, value);

    //FILTER METHOD WITH EXTRA COPY VARIABLE
    //let copyArr: any[] = this.array;
    // if (value === '') {
    //   console.log('array',val.value);
    //   return this.array;
    // }
    // this.array = [];
    // for (let i = 0; i < copyArr.length; i++) {
    //   if (
    //     copyArr[i].department.toLocaleLowerCase().includes(value) ||
    //     copyArr[i].manager.toLocaleLowerCase().includes(value) ||
    //     copyArr[i].city.toLocaleLowerCase().includes(value)
    //   ) {
    //     this.array.push(copyArr[i]);
    //   }
    // }
    //})
  }
  getArray(arr, val) {
    if (val == '') {
      console.log(this.copyArr)
      return this.copyArr;
    }
    return arr.filter((obj) => {
      return (
        obj.department.toLocaleLowerCase().includes(val) ||
        obj.manager.toLocaleLowerCase().includes(val) ||
        obj.city.toLocaleLowerCase().includes(val)
      );
    });
  }
}
