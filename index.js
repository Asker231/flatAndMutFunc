function flatAndMut(){
    let arr  = [[1,1],2,3,[1,1],4,5,[6,6],[7,7],[6,6],[7,7]]
    return function(){
        const maxNum = Math.max(...arr.flat())
        for(let i = 0; i < arr.length;i++){
                if(Array.isArray(arr[i])){
                    for(let j = 0; j < arr[i].length;j++){
                        if(arr[i][j] == maxNum){
                          arr[i][j] = 0
                        }
                        arr[i][j]+=1 
                    }
                }
                if(arr[i] == maxNum) arr[i] = 0
                if( typeof arr[i] === 'number')arr[i] += 1    
       }
       console.table(arr);
       return arr
    }
}

let closure = flatAndMut()
closure()
closure()
closure()
closure()
closure()
closure()
closure()