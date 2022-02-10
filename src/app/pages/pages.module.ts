import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PokeapiComponent } from './pokeapi/pokeapi.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { FormsModule } from '@angular/forms';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { AddStylesDirective } from './directives/add-styles.directive';


@NgModule({
  declarations: [
    PokeapiComponent,
    InputSearchComponent,
    MayusculasPipe,
    AddStylesDirective
  ],
  exports: [
    InputSearchComponent,
    FormsModule,
    MayusculasPipe,
    AddStylesDirective
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
