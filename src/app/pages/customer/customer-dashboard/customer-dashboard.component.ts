import { Component, OnInit } from '@angular/core';


interface Bug {
  value: string;
  viewValue: string;
}

interface Priority {
  value: string;
  viewValue: string;
}





@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  Bugs: Bug[] = [
    {value: 'ISSUE-0', viewValue: 'API ISSUE'},
    {value: 'ISSUE-1', viewValue: 'URL ISSUE'},
    {value: 'ISSUE-2', viewValue: 'SYSTEM LEVEL'},
  ];

  Priorities: Priority[] = [
    {value: 'ISSUE-3', viewValue: 'LOW'},
    {value: 'ISSUE-4', viewValue: 'MEDIUM'},
    {value: 'ISSUE-5', viewValue: 'HIGH'},
  ];


  constructor() { }
  

  ngOnInit(): void {
  }

}
