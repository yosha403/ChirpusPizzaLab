import { Component } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Menu';
  items : MenuItem[] = [new MenuItem("Chicken Fingers", "Dinner", 11.99 ), new MenuItem("Pizza","Dinner", 11.99), new MenuItem("Wings","Sides", 8.99), new MenuItem("Breadsticks","Sides",4.99),new MenuItem("Ceasar Salad","Salads", 5.99), new MenuItem("Cinnamon Roll","Dessert", 8.99)];
}
