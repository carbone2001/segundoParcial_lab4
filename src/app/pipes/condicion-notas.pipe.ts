import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'condicionNotas'
})
export class CondicionNotasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
