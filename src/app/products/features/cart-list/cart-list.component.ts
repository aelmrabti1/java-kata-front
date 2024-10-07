import {Component, inject} from '@angular/core';
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {CurrencyPipe, DatePipe} from "@angular/common";
import {DataViewModule} from "primeng/dataview";
import {DialogModule} from "primeng/dialog";
import {PrimeTemplate} from "primeng/api";
import {ProductFormComponent} from "../../ui/product-form/product-form.component";
import {CartStore} from "../../cart-service/cart.service";
import {Product} from "../../data-access/product.model";

@Component({
  selector: 'app-cart-list',
  standalone: true,
    imports: [
        Button,
        CardModule,
        CurrencyPipe,
        DataViewModule,
        DatePipe,
        DialogModule,
        PrimeTemplate,
        ProductFormComponent
    ],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {

  protected readonly cardStore : CartStore  = inject(CartStore);

  removeFromCart(product: Product) {
    this.cardStore.removeProduct(product);
  }
}
