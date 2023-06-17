// Wrong
function solution(id_list, report, k) {
  var answer = [];
  const countReport = {}
  const countMailed = {}
  const newReport = [...new Set(report)]; 

  id_list.forEach( ( id ) => {
      countReport[id] = 0;
      countMailed[id] = 0;
  } )
  
  newReport.forEach( r => {
    const [ reporter , bad ] = r.split(' ');
    countReport[bad] += 1 ;
  })

  Object.keys(countReport).map(badId => {
    if (countReport[badId] >= 2){
      newReport.forEach(r => {
        const [reporter, bad] = r.split(' ');
        if (bad === badId){
          countMailed[reporter] += 1;
        }
      })

    }
  })

  return Object.values(countMailed)
}

let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
let k =2 

solution(id_list, report, k)

function rep( input ) {
  const [ reporter, badGuy] = input.split(' ')

}