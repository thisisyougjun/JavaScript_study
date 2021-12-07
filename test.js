const test = {
    name: '영준',
    age: '18',
    birthday : "040625",
    pId : "123456",
    fullId:function() {
        return this.birthday + this.pId;
    }
};
console.log(test.fullId);//[Function: fullId]
console.log(test.fullId());//040625123456
