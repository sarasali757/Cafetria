import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';

import { ClientComponent } from './client/client.component';
import { AddClientComponent} from './client/add-client/add-client.component';
import { ClientsListComponent} from './client/clients-list/clients-list.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { ManualOrderComponent } from './manual-order/manual-order.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminNavbarComponent,
    ManualOrderComponent,
    ProductsComponent,
    AddProductComponent,
    ProductListComponent,
    ClientComponent,
    AddClientComponent,
    ClientsListComponent,

  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    MatGridListModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
