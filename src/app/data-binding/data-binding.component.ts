import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBidingComponent implements OnInit {
  public nome: string = 'Matheus';
  public idade: number = 24;
  public maisUm: number = 1;

  public checkedDisabled: boolean = false;
  public imgSrc: string =
    'https://coudev.com/wp-content/uploads/2021/03/woman-801872_1920-768x516.jpg';
  public imgTitle: string = 'Propety Binding';
  public imgAlt: string = 'Propety Binding';

  public position: { x: number; y: number } = { x: 0, y: 0 };
  //public position:any;
  constructor() {}

  ngOnInit(): void {}

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  //public mouseMoveTeste(valor: any)
  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
