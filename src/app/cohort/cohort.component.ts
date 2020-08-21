import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cohort',
  templateUrl: './cohort.component.html',
  styleUrls: ['./cohort.component.scss']
})
export class CohortComponent /*implements OnInit*/ {

  constructor() { }



  headers = ["2020", "New Customers", "P1", "P2", "P3", "P4", "P5", "P6"];

  info = [
    {
      month: 'June',
      new: 75,
      platform1: '12,00,000',
      platform2: '12,00,000',
      platform3: '12,00,000',
      platform4: '12,00,000',
      platform5: '12,00,000',
      platform6: '12,00,000'
    },

    {
      month: 'July',
      new: 95,
      platform1: '12,00,000',
      platform2: '12,00,000',
      platform3: '12,00,000',
      platform4: '12,00,000',
      platform5: '12,00,000',
      platform6: '12,00,000'
    },

    {
      month: 'August',
      new: 165,
      platform1: '12,00,000',
      platform2: '12,00,000',
      platform3: '12,00,000',
      platform4: '12,00,000',
      platform5: '12,00,000',
      platform6: '12,00,000'
    },

    {
      month: 'September',
      new: 391,
      platform1: '12,00,000',
      platform2: '12,00,000',
      platform3: '12,00,000',
      platform4: '12,00,000',
      platform5: '12,00,000',
      platform6: '12,00,000'
    },

    {
      month: 'October',
      new: 270,
      platform1: '12,00,000',
      platform2: '12,00,000',
      platform3: '12,00,000',
      platform4: '12,00,000',
      platform5: '12,00,000',
      platform6: '12,00,000'
    },

    

  ];

  ngOnInit(): void {
  }

}
