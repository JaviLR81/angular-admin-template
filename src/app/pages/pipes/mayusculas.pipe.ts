import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'MAYUS'
})

export class MayusculasPipe implements PipeTransform {

  transform(value: string, type: boolean = true): string {
    return (type) ?  value.toUpperCase() : value.toLowerCase();
  }

}
