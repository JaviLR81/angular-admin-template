import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  @Input() inputSearch: string = 'Hola';
  @Output() outputSearch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changingInputSearch(){
    // console.log("~ inputSearch", this.inputSearch)
    // console.log(this.inputSearch);

    this.outputSearch.emit(this.inputSearch);
  }

}
