import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//Components
import { NewComponentComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { FoodAddComponent } from './food-add/food-add.component';

@NgModule({
  declarations: [
    NewComponentComponent,
    InputComponent,
    OutputComponent,
    FoodlistComponent,
    FoodAddComponent,
  ],
  exports: [
    NewComponentComponent,
    InputComponent,
    OutputComponent,
    FoodlistComponent,
    FoodAddComponent,
  ],
  imports: [CommonModule, HttpClientModule],
})
export class SharedModule {}
