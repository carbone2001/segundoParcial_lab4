import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarTipo'
})
export class FiltrarTipoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
