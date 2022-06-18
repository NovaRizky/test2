// Question
// Given a object data, return the data multiple by 3 and sort the data.
// Expected output : { j: 0, k: 9, i: 18, l: 36 }

const data = { i: 6, j: null, k: 3, l: 12 };

function result(data) {
    for(let key in data){
        let result = 0
        result = data[key] * 3
        console.log(result);
    }
  // write your code here
}

console.log(result(data));