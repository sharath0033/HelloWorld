import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'HelloWorld';

  menu = [
    {
      icon: 'img',
      soft: 'Facebook Ads',
      softtype: 'Advertising',
    },

    {
      icon: 'img',
      soft: 'Google Analytics',
      softtype: 'Analytics',
    },

    {
      icon: 'img',
      soft: 'Capillary',
      softtype: 'eCommerce',
    },

    {
      icon: 'img',
      soft: 'Shopify',
      softtype: 'eCommerce',
    },

    {
      icon: 'img',
      soft: 'Magento',
      softtype: 'eCommerce',
    }

  ];

}
