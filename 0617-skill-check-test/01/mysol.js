function solution(answers) {
  var answer = [];
  const counts = [0,0,0]
  
  
  answers.forEach(
       (x, index) => {
         if (x === student1(index) ) {
             counts[0] += 1
         }
       if (x === student2(index) ) {
             counts[1] += 1
         }
           if (x === student3(index) ) {
             counts[2] += 1
         }
       }
  )
  
  const max = Math.max(...counts)
  
  counts.forEach(  (c,index) => {
      if (c === max ){
          answer.push(index+1)
      }
  })
  
  return answer;
}

function student1 ( n ){
  return n%5 +1
}

function student2 ( n ){
  if (n % 2 === 0 ) return 2
  const arr = [1,3,4,5];
  const x = (n-1)/2 
  return arr[ x%4 ]   
}

function student3 (n ){
  const arr = [3,1,2,4,5] 
  console.log(arr) 
  if (n % 2 === 0 ) {  
      return arr[(n/2)%5]
  }
  return arr[ (n-1)/2 %5  ] 
}