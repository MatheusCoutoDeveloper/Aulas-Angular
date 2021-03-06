import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  @Output() public enviarDados = new EventEmitter();

  //public list: any = [
  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Matheus Couto', idade: 24 },
    { nome: 'Nay', idade: 31 },
    { nome: 'José', idade: 58 },
  ];
  constructor() {}

  ngOnInit(): void {}

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }
}
