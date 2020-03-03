 function add(x, y, z) {
            x = document.getElementById(x).value;
            y = document.getElementById(y).value;
            z = document.getElementById(z).value;
            var add = 0;
            add = Number(x) + Number(y) + Number(z);
            console.log(typeof(add));
            alert("SUM is: " + add);
            document.getElementById('sum').innerHTML="SUM is:" +add;
        }