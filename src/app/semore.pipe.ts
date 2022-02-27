import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semore'
})
export class SemorePipe implements PipeTransform {

  transform(text:string,seeMoreIndex:number): any {
    let output:string

    if (seeMoreIndex) {
      output = text.slice(0)
       return output
    }
    else {
      output = text.slice(0,20)
       return output
    }
  }

}
