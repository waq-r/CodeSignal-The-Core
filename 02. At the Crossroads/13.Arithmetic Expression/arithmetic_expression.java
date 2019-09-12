boolean arithmeticExpression(int a, int b, int c) {
    
    if((float) a/b == (float) c){
        return true;
    }

    int[] arr = {a+b, a-b, a*b};
    
    for(int i = 0; i < arr.length; i++){

        if(arr[i] == c){
            
            return true;
        }
    }
    
    return false;
}
