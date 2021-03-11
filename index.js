var arr = [
  {
    age: 13,
    cat: "standard"
  },
  {
    age: 20,
    cat: "standard"
  },
  {
    age: 22,
    cat: "premium"
  },
  {
    age: 25,
    cat: "standard"
  },
  {
    age: 27,
    cat: "standard"
  },
  {
    age: 24,
    cat: "premium"
  }
]
var testarr = {}
arr.forEach(item => {
  if(testarr && testarr[item.cat]) {
      testarr[item.cat] = 
        { total: testarr[item.cat].total + item.age, length : testarr[item.cat].length + 1 }
  } else {
    testarr[item.cat] = { total: item.age , length : 1 }
  }
  
})
var avg = [];
for(const [key, value] of Object.entries(testarr) ){
    avg.push({
      cat: key,
      tot: (value.total / value.length)
    })
}
console.log( avg)
