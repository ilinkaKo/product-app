import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Manufacturer } from 'src/app/core/models/manufacturer.model';
import { manufacturers } from 'src/app/core/mocks/manufacturers.mock';

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
    private productService: ProductService
  ) {
    this.productForm = this.createFormGroup();
  }

  ngOnInit(): void {
    this.mode = this.route.snapshot.params.mode;
    if (this.mode === 'edit') {
      this.productId = this.route.snapshot.params.id;
      this.productForm.patchValue(this.productService.getProductById(this.productId));
    }
  }

  public onSubmit() {
    console.log(this.productForm.value)
    this.mode === 'edit' ? this.productService.editProduct(this.productId, this.productForm.value) : this.productService.addProduct(this.productForm.value);
    this.router.navigateByUrl('/products');
  }

  createFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      manufacturer: [null, Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      expiryDate: ['', Validators.compose([Validators.required])],
      image: ['', Validators.compose([Validators.required])],
    });
  }

}
