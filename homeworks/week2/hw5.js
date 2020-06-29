function join(arr, concatStr) {
    let result = ''
    for( i = 0 ; i < arr.length - 1 ; i++ ){
        result += arr[i] + concatStr
  
    }
   return result + arr[arr.length - 1] 
  }
  
  function repeat(str, times) {
      let ans = ''
      for( let i = 0 ; i < times ; i++ ){
          ans += str
      }
    return ans
  }
  
  console.log(join(['a'], '!'));
  console.log(repeat('a', 5));
