import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe2'
})
export class Pipe2Pipe implements PipeTransform {

  transform(list: any[], write:string, word:string): any {
    if(!write || !word){
      return list;
    }

    return list.filter(item=>{
      const k = item.toLowerCase();
      return k.indexOf(word)>=0;
    })
  }

}
