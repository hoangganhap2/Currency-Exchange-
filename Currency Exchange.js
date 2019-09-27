
function changemoney() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result =0;
    if ( from=="VND"&& to=="USD"){
        result= amount/23000;
        let hehe= document.getElementById("hello").innerHTML =result;
    }else if(from=="USD"&& to=="VND"){
        result= amount*23000;
        let hehe= document.getElementById("hello").innerHTML =result;
    }else {
        result=amount;
        let hehe= document.getElementById("hello").innerHTML =result;
    }


}
