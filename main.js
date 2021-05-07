const parseNum = () => {
    let val = prompt('add value 1');
    let base = prompt('add value 2');

    if(!val?.trim() || !base?.trim() || isNaN(val) || isNaN(base)) return "Некорректный ввод!";
    
    return Number((+ val).toString(base))
  }
  
console.log(parseNum());