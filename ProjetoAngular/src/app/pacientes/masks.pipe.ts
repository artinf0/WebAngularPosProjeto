import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'masks'
})
export class MasksPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let cpf = value;

    if(value.length === 11)
    
    return null;
  }

}
