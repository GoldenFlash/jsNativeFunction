function reduce(arr,iteratee){
   for(var i=0;i<arr.length;i++){
       result =iteratee(arr[i],arr[i+1])
       arr[i+1]=result
   }
   return result
}