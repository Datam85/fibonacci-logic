var n = +(prompt("say a number please"));
var arrey = [];
function fibonachiL(){
    for(var i = 0; i < n; i++){
        if(i === 0){
            arrey.push(0)
        }
        else if(i === 1){
            arrey.push(1)
        }
        else{
            arrey.push(arrey[i - 1] + arrey[i - 2]);
        }
    }
}
fibonachiL();
console.log(arrey);