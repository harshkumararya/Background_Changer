let btn1=document.getElementById('mybtn1');
let btn2=document.getElementById('mybtn2');
let cpycode=document.querySelector('.copycode');
let rgb1='#6ec1da';
let rgb2='#5d5187';


//hexcode generate kr raha hai
const generatehexcode=()=>{
    let hexvalue="0123456789abcdef"
    let value="#";
    for(let i=0;i<6;i++){
     value=value+hexvalue[Math.floor(Math.random()*16)]; 
 }
 return value;
};

const handlebutton1 =()=>{
      rgb1= generatehexcode();
    console.log(generatehexcode());  
    btn1.textContent= rgb1;
    document.body.style.backgroundImage="linear-gradient(to right, #000, #fff";
    cpycode.textContent=`background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;     
};


const handlebutton2 =()=>{
     rgb2 = generatehexcode();
    console.log(generatehexcode());
    btn2.textContent= rgb2; 
    cpycode.textContent=`background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`; 

} 


btn1.addEventListener("click",()=>{
    handlebutton1();
});
btn2.addEventListener('click',handlebutton2);


