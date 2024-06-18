const asyncExample = async (a) => {
    console.log(a, "started") // 2
  
   tmp = await new Promise((resolve,reject) => { // 3
    setTimeout(()=>{ // 4
      console.log(a, "timeout")
    },0)
    let n = a
    for (let i =0;i<10000000;i++) n+=0.0000001
    console.log(n) // 5
    return resolve(a)
  })
  
  console.log(a, "finished") // 11
  return tmp
  }
   
  for (let i = 0; i <2; i++) {
   asyncExample(i).then((d)=>console.log(d,"done")); // 1, 6, 8
   console.log(i, "executed") // 7
  }
  
  console.log("DONE") // 9
  // 10
  // 12
  // 13