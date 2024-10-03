const output = document.getElementById('out');
const answer = document.getElementById('answer');
const clear = document.getElementById('clear');
const deletet = document.getElementById('deletet');

deletet.onclick = ()=> {
  output.value = output.value.slice(0,-1);
}

 clear.onclick = ()=> {
  output.value = "";
  answer.value = 0;
}
function number(value){
  output.value += value;
  answer.value = "=" + eval(output.value);
}
function equal(){
  try{
  output.value = eval(output.value);
  }
  catch(error){
    output.value = "Error";
  }
  answer.value ="";
}


