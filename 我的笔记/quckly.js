var quickSort = function(arr){
    if(arr.length<=1){return arr ;}
    var len = Math.floor(arr.length/2);console.log(len)
    var basic =arr.splice(len,1)[0];
    var left = [],right=[];
    for(var i = 0;i<arr.length;i++){
        if(arr[i]>basic){
            right.push(arr[i]);
        }else{
            left.push(arr[i]);
        }
    }
    return quickSort(left).concat(basic,quickSort(right));
}
var arr = [1,2,3,2,5,4,9,2,3];
quickSort(arr);