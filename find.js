function find(list,predicate){
   list.forEach(index,item){
       if(predicate(item)){
            return item
        }
    }
}