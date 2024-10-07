import {
  Component, inject,
} from "@angular/core";
import {Router, RouterModule} from "@angular/router";
import { SplitterModule } from 'primeng/splitter';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";
import {CartStore} from "./products/cart-service/cart.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [RouterModule, SplitterModule, ToolbarModule, PanelMenuComponent],
})
export class AppComponent {
  title = "ALTEN SHOP";

  protected readonly cardStore : CartStore  = inject(CartStore);

  constructor(private router: Router) {}

  navigateToCart() {
    this.router.navigate(['/cart']).then(r => {});
  }
}
