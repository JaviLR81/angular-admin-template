import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  @ViewChild('inputSearch') inputSearch!: ElementRef<HTMLInputElement>;
  inputSharedSearch: string = '';
  outputSearchReceived: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  changingInputSearch(){

    const value = this.inputSearch.nativeElement.value;
    // console.log(value);
    this.inputSharedSearch = value;
  }

  outputSearch(value: string){
    console.log("~ value", value)
    this.outputSearchReceived = value;
  }


}
