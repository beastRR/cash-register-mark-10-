const input= document.querySelectorAll(".inp");
const notes=[1, 5, 10, 20, 100, 500, 2000];
var remainingAmount= cash-bill;
subBtn.addEventListener("click",callBack);

function callBack(){
    var bill=Number(input[0].value);
    var cash=Number(input[1].value);
    // console.log("1");

    if(bill>0){

        document.querySelector("#output").innerHTML='';

    }
    else
    document.querySelector("#output").innerHTML='Enter a valid bill amount';

    if(cash>=bill){
        // console.log("1");
        document.querySelector("#output1").innerHTML='';
        document.querySelector("#output1").innerHTML=calculateChange(bill,cash,notes);
        document.querySelector("#output").innerHTML=`<u>Return: ${cash-bill}</u>`;

    }
    else
    document.querySelector("#output1").innerHTML='cash given is less than the bill amount';
}

//----------------------------------------------------------------------------------------------------------------
function calculateChange(bill,cash,arr){
    let amountToBeReturned=cash-bill;
    var resp=[];
    console.log(amountToBeReturned);
    i=6;
    while(i>=0){
       var noOfNotes= Math.floor(amountToBeReturned/arr[i]);
       console.log(`no of notes of ${arr[i]} is ${noOfNotes}`);
       amountLeftToBeReturned=amountToBeReturned%arr[i];
       amountToBeReturned=amountLeftToBeReturned;
       if(noOfNotes>=1){
       resp.push(` NOTES OF ${arr[i]} is ${noOfNotes}<br>`);
        // console.log(noOfNotes);
        
    }
       i--;

       
    
    }
    return resp;
    //noOfNotes
}
