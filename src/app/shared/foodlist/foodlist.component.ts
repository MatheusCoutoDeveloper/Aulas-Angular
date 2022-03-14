import { FoodList } from './../../module/food-list';
//Services
import { FoodListService } from './../../services/food-list.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.scss'],
})
export class FoodlistComponent implements OnInit {
  //public foodList: any;
  public foodList: Array<FoodList> = [];
  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      (res) => (this.foodList = res),
      (error) => console.log(error)
    );

    this.foodListService.emitEvent.subscribe((res) => {
      alert(`Olha, você add => ${res.nome}`);
      return this.foodList.push(res);
    });
  }

  public foodListDelete(id: number) {
    return this.foodListService.foodListDelete(id).subscribe(
      (res) => {
        this.foodList = this.foodList.filter((item) => {
          return id !== item.id;
        });
      },
      (error) => error
    );
  }

  public foodListEdit(value: string, id: number) {
    this.foodListService.foodListEdit(value, id).subscribe(
      (res) => alert('Editado com sucesso!'),
      (error) => error
    );
  }
}
