import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product: Product;
  @Output() deleteProduct: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onDelete(): void {
    this.deleteProduct.emit(this.product.id);
  }
}
