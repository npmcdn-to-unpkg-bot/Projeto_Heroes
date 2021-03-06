import { Component }       from '@angular/core';

import { SalesTaxService } from './sales-tax.service';
import { TaxRateService }  from './tax-rate.service';

@Component({
  selector:    'sales-tax',
  template: `
    <h2>Sales Tax Calculator</h2>
    Amount: <input #amountBox (change)="0">

    <div *ngIf="amountBox.value">
    The sales tax is
     {{ getTax(amountBox.value) | currency:'USD':true:'1.2-2' }}
    </div>
  `,
  providers:   [SalesTaxService, TaxRateService]
})
/*
export class SalesTaxComponent { ... }
*/
export class SalesTaxComponent {
  constructor(private salesTaxService: SalesTaxService) { }

  getTax(value:string | number){
    return this.salesTaxService.getVAT(value);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/