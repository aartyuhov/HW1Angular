import { Component } from '@angular/core';
import { Product } from '../product';
import { Products } from '../mock-products';
import { NgFor } from '@angular/common';
import {FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-my-item',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './my-item.component.html',
  styleUrl: './my-item.component.css'
})
export class MyItemComponent {
  myProducts = Products; 
  private _selectedPr: Product = { name: "name1", price: 100, description: "some description",onStock: true };
  public get selectedPr(): Product {
    return this._selectedPr;
  }
  public set selectedPr(value: Product) {
    this._selectedPr = value;
  }
  onSelect(product: Product): void { this.selectedPr = product;}

}
