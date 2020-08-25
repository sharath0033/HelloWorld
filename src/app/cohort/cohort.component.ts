import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cohort',
  templateUrl: './cohort.component.html',
  styleUrls: ['./cohort.component.scss']
})
export class CohortComponent implements OnInit {
  data: any = {
    "heading": "Customer cohort by channel - AOV",
    "names": {
      "year": 2020,
      "title": "New Customers",
      "platform": [
        {
          "name": "Facebook",
          "image": "assets/images/plat1.png",
          "color": "#27D99C"
        },
        {
          "name": "Email",
          "image": "assets/images/plat2.png",
          "color": "#8DC95A"
        },
        {
          "name": "Marketing",
          "image": "assets/images/plat3.png",
          "color": "#DBBC29"
        },
        {
          "name": "Target",
          "image": "assets/images/plat4.png",
          "color": "#DBBC29"
        },
        {
          "name": "Document",
          "image": "assets/images/plat5.png",
          "color": "#EE8835"
        },
        {
          "name": "Search",
          "image": "assets/images/plat6.png",
          "color": "#E24056"
        }
      ]
    },
    "values": [
      {
        "month": "June",
        "newCustomerCount": 75,
        "platform": [
          "12,00,000",
          "12,00,000",
          "12,00,000",
          "12,00,000",
          "12,00,000",
          "12,00,000"
        ]
      },
      {
        "month": "July",
        "newCustomerCount": 95,
        "platform": [
          "12,00,000",
          "12,00,000",
          "12,00,000",
          "12,00,000",
          "12,00,000",
          "12,00,000"
        ]
      },
      {
        "month": "August",
        "newCustomerCount": 165,
        "platform": [
          "12,00,000",
          "12,00,000",
          "12,00,000",
          "12,00,000",
          "12,00,000",
          "12,00,000"
        ]
      },
      {
        "month": "September",
        "newCustomerCount": 391,
        "platform": [
          "12,00,000",
          "12,00,000",
          "12,00,000",
          "12,00,000",
          "12,00,000",
          "12,00,000"
        ]
      },
      {
        "month": "October",
        "newCustomerCount": 270,
        "platform": [
          "12,00,000",
          "12,00,000",
          "12,00,000",
          "12,00,000",
          "12,00,000",
          "12,00,000"
        ]
      }
    ]
  }

  constructor() { }

  ngOnInit(): void { }

}
