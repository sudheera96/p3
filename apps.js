 function add(x, y, z) {
            var a = document.getElementById(x).value;
            var b = document.getElementById(y).value;
            var c = document.getElementById(z).value;
            var add = 0;
            add = Number(a) + Number(b) + Number(c);
            console.log(typeof(add));
            alert("SUM is: " + add);
            document.getElementById('sum').innerHTML="SUM is:" +add;
        }