function additionWithoutCarrying(param1, param2) {

    let r = '';
    while(param1 || param2){
    
        r = (((param1%10)+(param2%10))%10).toString() + r;
        
        param1 = Math.floor(param1/10);
        param2 = Math.floor(param2/10);
    }
    
  return Number(r);
  
}
