function lineUp(commands) {
    
    const cmd = commands.split('');
    let sameDirection = true; let count = 0;
    
    for(var i = 0; i < cmd.length; i++){
        
        if(cmd[i] == 'A' ){
            if(sameDirection === true){
            count += 1;
            }
        }
        else {
            if(sameDirection === false){
            count += 1;
            sameDirection = true;
            }
            else{
                sameDirection = false;
            }
        }
    }
    
    return count;
}
