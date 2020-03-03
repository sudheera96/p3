 function add(x, y, z) {
            var a = document.getElementById(x).value;
            var b = document.getElementById(y).value;
            var c = document.getElementById(z).value;
            
            alert("SUM is: " + addValues(a,b,c));
            document.getElementById('sum').innerHTML="SUM is:" + addValues(a,b,c);
        }

function addValues(a,b,c){
    var add = 0;
    add = Number(a) + Number(b) + Number(c);
    return add;
}