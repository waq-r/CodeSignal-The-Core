function rounders(n) {
    
    let c = 0; let r = '';
    
    while(n>9){
        
        c = ((n%10)+c >= 5)?1:0;
        n = Math.floor(n/10);
        r = 0+r;
    }
    
    return Number((c+n)+r);

}
