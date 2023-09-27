import { Component, OnInit, Input } from '@angular/core';
import { Jogos } from '../jogos.model';

@Component({
  selector: 'app-grade-jogos',
  templateUrl: './grade-jogos.component.html',
  styleUrls: ['./grade-jogos.component.css']
})
export class GradeJogosComponent implements OnInit {

  @Input()
  jogos!: Jogos;
  
  constructor() { }

  ngOnInit(): void {
  }

}
