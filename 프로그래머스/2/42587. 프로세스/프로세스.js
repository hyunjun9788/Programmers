function solution(priorities, location) {
    
    let count =0 
    
    const newPriorities = priorities.map((p,i) => [p,i])

    const queue = [...newPriorities]
    
    while(true){
        const cur = queue.shift()
        

        const hasHigher = queue.some(([p]) => p > cur[0])
        
        if (hasHigher) {
            queue.push(cur)
        } else {
          count++
        if (cur[1] === location) return count
        }
        
    }
}



// [2, 1, 3, 2]
// 2

//  a b c d
 
//  b c d a
 
//  c d a b
 
 
 
 
 
