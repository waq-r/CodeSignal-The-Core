function pagesNumberingWithInk(current, numberOfDigits) {
    
    const n = '1'.repeat(numberOfDigits);
    let p = '';
    
    while(p.length <= n.length){
        p = p+current;
        current++;
    }
    
    return current-2;

}
