import { Pipe, PipeTransform } from '@angular/core';
import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroarrayimpuro',
  pure: false
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {


}
