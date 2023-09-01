function Calc(){
    var val1 = parseInt (document.getElementById("val1").value);
    var val2 = parseInt (document.getElementById("val2").value);
    var opt = document.getElementById("opt").value;
    
    var ans;
    
    if (opt == "+") {
        ans = val1 + val2;
       
    }
    else if (opt == "-") {
        ans = val1-val2;
        
    }
    else if (opt == "*") {
        ans = val1*val2;
        
    }
    else if (opt == "/") {
        ans = val1/val2;
        
    }
    
document.getElementById("ans").value= ans;
    
}

document.getElementById("result").addEventListener("click",Calc);