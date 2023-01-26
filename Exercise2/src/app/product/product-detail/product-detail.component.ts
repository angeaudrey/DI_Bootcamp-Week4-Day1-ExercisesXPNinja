import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  product!: Product;

  constructor(public route: ActivatedRoute, public productService: ProductService) {

   }

  ngOnInit(): void {
    this.product = this.productService.getListUsers()[ Number(this.route.snapshot.paramMap.get("id")) ];
  }

}
