import { FoodList } from './../module/food-list';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  public emitEvent = new EventEmitter();

  private list: Array<string> = ['X Bacon', 'Feijão', 'Ovo'];

  private url: string = 'http://localhost:3000/'; //list-food
  constructor(private http: HttpClient) {}

  //public foodList() {
  //  return this.list;
  //}

  public foodList(): Observable<Array<FoodList>> {
    //return this.http.get(this.url + "/list-food");
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
      (res) => res,
      (error) => error
    );
  }

  //public foodListAdd(value: string) {
  //  this.foodListAlert(value);
  //  return this.list.push(value);
  //}

  public foodListAdd(value: string): Observable<FoodList> {
    return this.http
      .post<FoodList>(`${this.url}list-food`, { nome: value })
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public foodListAlert(value: FoodList) {
    return this.emitEvent.emit(value);
  }
}
