function Sub() {
    var exp = document.calc.textview.value;
    document.calc.textview.value = exp.substring(0, exp.length - 1)
}
function add(){
    var exp=document.calc.textview.value;
    document.calc.textview.value=document.calc.textview.value+'+';
}
function subtract(){
    var exp=document.calc.textview.value;
    document.calc.textview.value=document.calc.textview.value+'-';
}
function multiply(){
    var exp=document.calc.textview.value;
    document.calc.textview.value=document.calc.textview.value+'*';
}
function equal(){
    var exp=document.calc.textview.value;
    document.calc.textview.value=eval(document.calc.textview.value);
}
function sqrt(){
    var exp=document.calc.textview.value;
    document.calc.textview.value=Math.sqrt(document.calc.textview.value);
}