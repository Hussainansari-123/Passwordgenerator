const upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset="abcdefghijklmnopqrstuvwxyz";
const numberset="123456789";
const symbolset="~!@#$%^&*()_+";
  
const getrandomno=(dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)]
}
const passbox=document.querySelector("#pass-box");
const lengthinput=document.querySelector("#total-char");
const upperinput=document.querySelector("#upper-case");
const lowerinput=document.querySelector("#lower-case");
const numberinput=document.querySelector("#number");
const symbolinput=document.querySelector("#symbol");

const genpassword=(password= "")=>{
if(upperinput.checked){
password += getrandomno(upperset);
}
if(lowerinput.checked){
password += getrandomno(lowerset);
}
if(numberinput.checked){
password += getrandomno(numberset);
}
if(symbolinput.checked){
password += getrandomno(symbolset);
}
if(password.length<lengthinput.value){
    return genpassword(password);
}
passbox.innerText=truncateString(password,lengthinput.value);
}

document.querySelector(".btn").addEventListener("click",
function (){
    genpassword();
    
}
)

function truncateString(str,num){
    if(str.length=num){
        let subStr=str.substring(0,num);
        return subStr;
    }else{
        return str;
    }
}

