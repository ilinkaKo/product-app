import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/models/product.model';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Array<Product> = [];
  public productId: string;
  constructor(private productService: ProductService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  public deleteProduct(id: string): void {
    this.productId = id;
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure you want to delete?'});
  }

  onConfirm() {
    this.messageService.clear('c');
    this.productService.deleteProduct(this.productId);
    this.products = this.productService.getProducts();
  }

  onReject() {
      this.messageService.clear('c');
  }

  clear() {
      this.messageService.clear();
  }

}
