var button=document.getElementById("btn");
button.onclick=function(e){
    e.preventDefault();
    var num=document.getElementById("num").value;
    var num1=document.getElementById("num1").value;
    var results=document.getElementById("results");
    var resulted=document.getElementById("resulted");
    var result=document.getElementById("result");
    var formula=document.getElementById("formula");
   
    var math=document.getElementById("math");
    let a=num;
    let b=num1;
    if(math.value=="1")
    {
        results.innerHTML="Here a = "+ num;
        resulted.innerHTML="Here b = "+ num1;
        result.innerHTML= "Answer of (a + b)2  is : "+((a*a)+(2*a*b)+(b*b));
        formula.innerHTML="Formula of  (a + b)2 is : a2 + 2ab + b2";
       
    }
    if(math.value=="2")
    {
        results.innerHTML="Here a = "+ num;
        resulted.innerHTML="Here b = "+ num1;
        result.innerHTML="Answer of (a - b)2 is : "+((a*a)-(2*a*b)+(b*b));
        formula.innerHTML="Formula of (a - b)2 is :  a2 – 2ab + b2";
    }
    if(math.value=="3")
    {
        results.innerHTML="Here a = "+ num;
        resulted.innerHTML="Here b = "+ num1;
        result.innerHTML="Answer of (a2 – b2) is : "+((parseInt(a)+parseInt(b))*(parseInt(a)-parseInt(b)));
        formula.innerHTML="Formula of (a2 – b2) is : (a – b)(a + b)";
    }
    if(math.value=="4")
    {
        results.innerHTML="Here a = "+ num;
        resulted.innerHTML="Here b = "+ num1;
        result.innerHTML="Answer of (a2 + b2) is : "+((a*a)+(2*a*b)+(b*b)-(2*a*b));
        formula.innerHTML="Formula of  (a2 + b2) is : (a + b)2 – 2ab";
    }
    if(math.value=="5")
    {
        results.innerHTML="Here a = "+ num;
        resulted.innerHTML="Here b = "+ num1;
        result.innerHTML="Answer of (a3 + b3) is : "+((parseInt(a)+parseInt(b))*((a*a)-(a*b)+(b*b)));
        formula.innerHTML="Formula of (a3 + b3) is : (a + b)(a2 – ab + b2) ";
    }
    if(math.value=="6")
    {
        results.innerHTML="Here a = "+ num;
        resulted.innerHTML="Here b = "+ num1;
        result.innerHTML="Answer of (a3 - b3) is : "+((parseInt(a)-parseInt(b))*((a*a)+(a*b)+(b*b)));
        formula.innerHTML="Formula of (a3 - b3) is : (a – b)(a2 + ab + b2)";
    }
    if(math.value=="7")
    {
        results.innerHTML="Here a = "+ num;
        resulted.innerHTML="Here b = "+ num1;
        result.innerHTML="Answer of (a4 + b4) is : "+((parseInt(a)+parseInt(b))*(parseInt(a)-parseInt(b))*[((a*a)+(2*a*b)+(b*b))-(2*a*b)]);
        formula.innerHTML="Formula of  (a4 + b4) is : (a + b)(a - b)[(a + b)2 - 2ab] ";
    }
    if(math.value=="8")
    {
        results.innerHTML="Here a = "+ num;
        resulted.innerHTML="Here b = "+ num1;
        result.innerHTML="Answer of (a  + b)3 is : "+(((a)*(a)*(a))+(3*(a)*(a)*(b))+(3*(a)*(b)*(b)+(b)*(b)*(b)));
        forumla.innerHTML="Formula of (a  + b)3 is :  a3 + 3a2b + 3ab2 + b3";
    }
    if(math.value=="8.5")
    {
        results.innerHTML="Here a = "+ num;
        resulted.innerHTML="Here b = "+ num1;
        result.innerHTML="Answer of (a  - b)3 is : "+(((a)*(a)*(a))-(3*(a)*(a)*(b))+(3*(a)*(b)*(b)-(b)*(b)*(b)));
        formula.innerHTML="Formula of  (a  - b)3 is :  a3 - 3a2b + 3ab2 - b3";
    }
    
    if(math.value=="9")
    {
        results.innerHTML="Here a = "+ num;
        resulted.innerHTML="Here b = "+ num1;
        result.innerHTML="Answer of (a  + b)4 is : "+(((a)*(a)*(a)*(a))+(4*(a)*(a)*(a)*(b))+(6*((a)*(a)*(b)*(b))+(4*(a)*(b)*(b)*(b)))+((b)*(b)*(b)*(b)));
        formula.innerHTML="Formula of (a  + b)4 is :  a4 + 4a3b + 6a2b2 + 4ab3 + b4 ";
    }
    if(math.value=="10")
    {
        results.innerHTML="Here a = "+ num;
        resulted.innerHTML="Here b = "+ num1;
        result.innerHTML="Answer of (a  - b)4 is : "+(((a)*(a)*(a)*(a))-(4*(a)*(a)*(a)*(b))+(6*((a)*(a)*(b)*(b))-(4*(a)*(b)*(b)*(b)))+((b)*(b)*(b)*(b)));
        formula.innerHTML="Formula of  (a  - b)4 is :  a4 – 4a3b + 6a2b2 – 4ab3 + b4";
    }
    if(math.value=="11")
    {
        results.innerHTML="Here a = "+ num;
        resulted.innerHTML="Here b = "+ num1;
        result.innerHTML="Answer of (a4 - b4) is : "+((parseInt(a)-parseInt(b))*(parseInt(a)+parseInt(b))*((a*a)+(2*a*b)+(b*b)-(2*a*b)));
        formula.innerHTML="Formula of (a4 - b4) is : (a – b)(a + b)(a2 + b2)";
    }
    if(math.value=="12")
    {
        results.innerHTML="Here a = "+ num;
        resulted.innerHTML="Here b = "+ num1;
        result.innerHTML="Answer of (a5 - b5) is : "+((a-b)*((a)*(a)*(a)*(a)+(a)*(a)*(a)*(b)+(a)*(a)*(b)*(b)+(a)*(b)*(b)*(b)+(b)*(b)*(b)*(b)));
        formula.innerHTML="Formula of  (a5 - b5) is : (a – b)(a4 + a3b + a2b2 + ab3 + b4)";
    }
    if(num1=="" && num=="")
    {
       result.innerHTML="";
       formula.innerHTML="";
       results.innerHTML="";
       resulted.innerHTML="";
        
    }


}
var buttons=document.getElementById("btns");
buttons.onclick=function(e){
    e.preventDefault();
    {
        var num=document.getElementById("num");
        var num1=document.getElementById("num1");
        var results=document.getElementById("results");
        var resulted=document.getElementById("resulted");
        var result=document.getElementById("result");
        var formula=document.getElementById("formula");
   num.value="";
   num1.value="";
        result.innerHTML="";
        formula.innerHTML="";
        results.innerHTML="";
        resulted.innerHTML="";
    }
}