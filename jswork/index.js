// console.log("Hello js");

// const a=12;
// if(a>10){
//     let b=23;
//     a=40
//     console.log("a="+a);
// }
// console.log("Hi, a="+a);

// function fun(a,b){
//     console.log("HEEEE");
//     return a+b;
// }
// fun();
// let data1=fun();
// console.log(data1);
// let data=fun(10,2);
// console.log(data);


// function selectlanguage(language="no language selected"){
//     let data=language;
//     if(language=="c"){
//         function cCompiler(){
//             return " C compiler";
        
//         }
//         data=cCompiler
//     }
//     if (language=="java"){
//         function javaCompiler(){
//             return " Java compiler";
//         }
//         data=javaCompiler
//     }
    
    
//     return data;
// }

// const result=selectlanguage("java");
// console.log(result);

console.dir(document);
const div=document.getElementsByClassName("parent");
console.dir(div);
// div[0].innerHTML="ABES ENGINEERING COLLEGE";
div[0].innerHTML="<h2 style=color:red>Hello World</h2>";
const h1=document.createElement("h1");
h1.innerText="this is generated by dom";
h1.style.backgroundColor="cyan";
console.log(h1);
div[0].appendChild(h1);
const img=document.createElement('img');
img.src="./bird.jpeg";
img.setAttribute("height",200);
console.log(img);
div[0].appendChild(img);