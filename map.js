function map(arr,iteratee){
	var arr2=[];
    arr.forEach(function(index,item,arr){
        arr2[index]=itertee(item,index,arr)
    })
    return arr2
}