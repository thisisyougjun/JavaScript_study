const kim = {
    name : "Jun",
};

const Lee = {
    name : "Ping"
};

function logFun(){
    console.log(this.name);
}

logFun.apply(Lee);