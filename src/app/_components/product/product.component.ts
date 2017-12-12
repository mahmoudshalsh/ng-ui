import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ProductService } from '../../_services';
import { Product } from '../../_models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

    products: Product[];

    constructor(private service: ProductService) { }

    ngOnInit() {
        this.service.getAll().then(products => this.products = products);
  }

}
