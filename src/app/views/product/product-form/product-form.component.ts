import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Manufacturer } from 'src/app/core/models/manufacturer.model';
import { manufacturers } from 'src/app/core/mocks/manufacturers.mock';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  public productForm: FormGroup;
  public mode: string;
  public productId: string;
  public manufacturers: Array<Manufacturer> = manufacturers;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {
    this.productForm = this.createFormGroup();
  }

  ngOnInit(): void {
    this.mode = this.route.snapshot.params.mode;
    if (this.mode === 'edit') {
      this.productId = this.route.snapshot.params.id;
      this.productForm.patchValue(this.productService.getProductById(this.productId));
    }
    this.primengConfig.ripple = true;
  }

  public onSubmit() {
    this.mode === 'edit' ? this.productService.editProduct(this.productId, this.productForm.value) : this.productService.addProduct(this.productForm.value);
    this.messageService.add({severity:'success', summary: 'Success'});
    this.router.navigateByUrl('/products');
  }

  createFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      manufacturer: [null, Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      expiryDate: ['', Validators.compose([Validators.required])],
      image: [''],
    });
  }
}
