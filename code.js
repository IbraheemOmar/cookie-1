
const cookie = document.querySelector(".cookie");

const cookieImage = document.querySelector(".cookie-img")

const buyClicker = document.querySelector(".buy-clicker");
const number = document.querySelector(".number-of-cookies");
const numberOfClickers = document.querySelector(".number-of-clickers");

const numberOfMultipliers = document.querySelector(".number-of-multipliers");

const clickerPriceElement = document.querySelector(".clicker-price");

const buyMultiplier = document.querySelector(".buy-multiplier");
const multiplierPriceElement = document.querySelector(".multiplier-price");

// shop button
const shopBtn = document.querySelector(".shop-tab");
const skinBtn = document.querySelector(".skin-tab");

const shopIcon = document.querySelector(".shop-icon");
const shop = document.querySelector(".shop");

// skin offers in shop
const buyOreo = document.querySelector(".buy-oreo");
const buyDonut = document.querySelector(".buy-donut");
const buyChocolate = document.querySelector(".buy-chocolate");

//selecting all images to remove drag
const images = document.querySelectorAll("img");



//selecting the skin list
const skinList = document.querySelector(".skin-list");
let  allSkins = document.querySelectorAll(".skin-item")
const skinIcon = document.querySelector(".skin-icon");


//selecting skin items

let cookieItem = document.querySelector('cookie-item');



let playback = false;
//selecting audio


//assigning initial values 
let count = 0;
let clickers = 0;
let multiplier = 1;
let bonus = 0;



//clicker price
let clickerPrice = 20;
clickerPriceElement.textContent = "Cost: " + clickerPrice + " 🍪";

//multiplier pricce
let multiplierPrice = 10;
multiplierPriceElement.textContent = "Cost: " + multiplierPrice + " 🍪";








  //selecting all images and making sure none can be dragged
images.forEach(element => {
  element.ondragstart = () =>{
    return false;
  }
});


  
  

// clicking cookie effect 

cookie.onmousedown = () => {
let clickUp = new Audio('ES_Switch Click 1 - SFX Producer.mp3')
 clickUp.play(); 
  
 //getting the mouse position
  let X = event.clientX;
  let Y = event.clientY;
  
  //creating the small number element that fades away (+1)
  let element = document.createElement("div");
    
   
        element.textContent = "+" + multiplier.toLocaleString(undefined, { minimumFractionDigits: 0 });;
      
  element.classList.add("cookie-click");
  //lets get the position  from the mouse and add it as a style to our element
  
  //setting the mouse position to the div element we just created
  let percX = (event.clientX/window.innerWidth)*100
  let percY = (event.clientY/window.innerHeight)*100
  
  element.style.top = `${percY-5}%`;
  element.style.left = `${percX-1.5}%`;
  
  cookie.append(element);
  
  
  
  //clicks increment cookies by number of multiplier 
  //if multiplier == 1.2 => 1 click == 1.2
  count += multiplier;
  //reassigning number of cookies after every click
  number.textContent = "";
  number.textContent = Math.floor(count) + " cookies";
  
  
 
  
  let delay = setTimeout(()=>{
    
    element.parentNode.removeChild(element)
  },5000)
  
  

  
};


//end the audio early
cookie.onmouseup = ()=>
{
  // clickUp.ended();
}


//using this to understand how the window height and width work
//what i understand from this so far:
//- i need to store the screen width as a percentage
//- i need to get the client x and store its value d

// document.onclick = ()=>{
  
//     console.log(`width `+window.innerWidth,`height ` +window.innerHeight)

//     let percX = Math.round((event.clientX/window.innerWidth)*100)
//     let percY = Math.round((event.clientY/window.innerHeight)*100)
  
//   console.log(`X:`+percX+"%",`Y:`+percY+"%");
    
// }


//END OF COOKIE CLICK EVENT



let cookiemonsterSound = new Audio('external stuff/cookiemonster.mp3');

//BUY CLICKER EVENT
buyClicker.onclick = () => {

  
  
  if (count >= clickerPrice) {
    
//sound
    if(!playback){
      playback = true;
      
      cookiemonsterSound.src ='ES_Cash Register Open 5 - SFX Producer.mp3';
      
      cookiemonsterSound.play();
      playback= false;
    }
//sound

  //  push in button
  buyClicker.style.transform = "scale(.9)";
    let pushIn = setTimeout(()=>{
    buyClicker.style.transform = "";

    },80)
  //  push in button
    
    //displaying an image everytime user buys clicker
  //  displays cookie monster image for 2 seconds
  
  // cookiemonster sound effect when you buy a clicker

  
  
  
  let element = document.createElement('div')

   
   

   
    count = count - clickerPrice;
    number.textContent = Math.floor(count) + " cookies";

    clickerPrice = Math.floor(clickerPrice + (clickerPrice/10));
    clickers++;

    numberOfClickers.style.top = "-20px";
    let bounce = setTimeout(()=>{
      numberOfClickers.style.top="0px";

    },80)
    clickerPriceElement.textContent =
      "Cost: " + Math.floor(clickerPrice) + " 🍪";

    numberOfClickers.textContent = "clickers: " + clickers;


  //  CREATES ONE INTERVAL THAT CLICKS THE COOKIE, THIS INTERVAL RUNS FOREVER AND CAN BE STACKED
    let intervals = setInterval(AutoClick, 1100);

//using this to get rid of image after some time
   




   
  }
};

// END OF BUY CLICKER EVENT




// BUY MULTIPLIER EVENT

buyMultiplier.onclick = () => {
 
  if (count >= multiplierPrice) 
  {  count = count - multiplierPrice;
    // sound
    if(!playback){
      playback = true;
      
      cookiemonsterSound.src ='ES_Cash Register Open 5 - SFX Producer.mp3';
      
      cookiemonsterSound.play();
      playback= false;
    }
// sound
numberOfMultipliers.style.top = "-20px";
let bounce = setTimeout(()=>{
  
  numberOfMultipliers.style.top="0px";
},80)

// push in button
    buyMultiplier.style.transform = "scale(.9)";
    let pushIn = setTimeout(()=>{
    buyMultiplier.style.transform = "";

    },80)
// push in button


    multiplierPrice = Math.floor(multiplierPrice + 4);
    Math.round(multiplier += .2);


    
    number.textContent = Math.floor(count) + " cookies";

    // hate seeing decimals, this helps keep em to a minimum
    numberOfMultipliers.textContent = "multiplier: x" + multiplier.toLocaleString(undefined, { minimumFractionDigits: 0 });
    
    //lets make the numberofmultipliers jump everytime it is updated

    
    
    multiplierPriceElement.textContent = "Cost: " + multiplierPrice + " 🍪";
  }
};

// END OF BUY MULTIPLIER EVENT

// interval method that adds a cookie every 1 second
function AutoClick() {
  if (clickers > 0) {
    count++;

    number.textContent = Math.floor(count) + " cookies";
  }
}

//makes sure that when the screen is resized, the buttons are reset to the original position

// const positionReset = setInterval(function(){

//   console.log("hello");
//     shopBtn.style.top =="95%";
//     skinBtn.style.top +="95%";
  
// },1000) 

// skin section
let skinFlag = false;
skinBtn.onclick = () =>{
  if(window.innerWidth<=1000){
   

    if(!skinFlag&&!shopFlag)
    {
      skinFlag=true;
      skinList.style.animation  = "enter .3s linear forwards";
      skinList.style.zIndex = "5";
  
    }
    else{
    }
  }
  else{
  
    if(skinBtn.style.top== "75%"){
      skinBtn.style.top="95%";
      shopBtn.style.opacity= "1";
      shopBtn.style.transform= "";
      
      skinList.style.top = "100%";
      
      skinIcon.classList.remove("fa-angle-down");
      skinIcon.classList.add("fa-angle-up");
      
      
      
    }
    
  else{
    skinBtn.style.top = "75%";
    shopBtn.style.opacity= "0";
    
    skinList.style.top = "80%";
    skinList.style.zIndex = "5"
    
    skinIcon.classList.remove("fa-angle-up");
    skinIcon.classList.add("fa-angle-down");
    
    
    
  }
}
}

// end of skin section












// shop section
let shopFlag = false;
shopBtn.onclick = () =>{

  //not doing anything right now
  //the idea was to reset the position of the shop and skin tab
  //when the the window size was changed since the desktop view has them both move up and down

//   shopBtn.style.top =="95%";
// skinBtn.style.top =="95%";

if(window.innerWidth<=1000){

  if(!shopFlag&&!skinFlag)
  {
    shopFlag=true;
    shop.style.animation  = "enter .3s linear forwards";
    shop.style.zIndex = "5";

  }
  else{
  }
}
else{

  if(shopBtn.style.top== "75%"){
    shopBtn.style.top="95%";
    skinBtn.style.opacity= "1";
    
    
    shop.style.top = "100%";
    shop.style.zIndex = "-5"
    shopIcon.classList.remove("fa-angle-down");
    shopIcon.classList.add("fa-angle-up");
    
    
    
  }else{
    shopBtn.style.top = "75%";
    
    shop.style.top = "80%";
    skinBtn.style.opacity= "0";
    shop.style.zIndex = "5";
    
    shopIcon.classList.remove("fa-angle-up");
    shopIcon.classList.add("fa-angle-down");
    
    
    
  }
}
}
// end of shop section
























// buying oreo section
var oreoPurchases=0
buyOreo.onclick = ()=>{
if(count>=2000&&oreoPurchases==0)
{
  oreoPurchases++;
  if(!playback){
    playback = true;
    
    cookiemonsterSound.src ='ES_Cash Register Open 5 - SFX Producer.mp3';

    
    cookiemonsterSound.play();
    playback= false;
  }
  count = Math.floor(count-2000);
  number.textContent = count + " cookies";
  cookie.style.transform= "scale(0) rotate(-60deg)";
  buyOreo.style.transform = "scale(.9)";
 



 let purchase = setTimeout(()=>{
  buyOreo.style.transform = "scale(1)";

 },80)
 
 
 
  let appear = setTimeout(()=>{
    
    cookieImage.src = "—Pngtree—oreo biscuit hand drawn cartoon_7384054 (1).png";
  
    
    cookie.style.transform= "";
  
    },500)


    buyOreo.classList.remove("buy-oreo");
    buyOreo.classList.add("sold");
    
    for(let i=0;i<allSkins.length;i++)
    {

      allSkins[i].classList.remove('selected')
      allSkins[i].style.transform= "";
    
    }


    let oreo= (document.querySelector('.oreo-item'));
    let lock = oreo.querySelector('.locked')

    oreo.classList.add('selected');
    oreo.classList.remove('lock');

//remove 'selected' styling on other items and put it on oreo
 oreo.removeChild(lock)
}
}
//end of buying oreo section























// donut buying section


var donutPurchases = 0;
buyDonut.onclick = ()=>{
if(count>=1000&&donutPurchases==0)
{
  donutPurchases++
  if(!playback){
    playback = true;
    
    cookiemonsterSound.src ='ES_Cash Register Open 5 - SFX Producer.mp3';

    
    cookiemonsterSound.play();
    playback= false;
  }
  count = Math.floor(count-1000);
  number.textContent = count + " cookies";
  cookie.style.transform= "scale(0) rotate(-60deg)";
  buyDonut.style.transform = "scale(.9)";
 

   

 let purchase = setTimeout(()=>{
  buyDonut.style.transform = "scale(1.0)";

 },80)
 
 
 
  let appear = setTimeout(()=>{
    
    cookieImage.src = "https://pngimg.com/uploads/donut/donut_PNG71.png";
  
    
    cookie.style.transform= "";
  
    },500)

    
  
  
  

    
    buyDonut.classList.remove("buy-donut");
    buyDonut.classList.add("sold");

    for(let i=0;i<allSkins.length;i++)
    {
      
      allSkins[i].classList.remove('selected')
      allSkins[i].style.transform= "";
      
    }

    
    let donut= (document.querySelector('.donut-item'));
    let lock = donut.querySelector('.locked')

    donut.classList.add('selected');
    donut.classList.remove('lock');

//remove 'selected' styling on other items and put it on oreo
 donut.removeChild(lock)

    }
    // for the skins section show that the new skin has been selected

  }
  

// end of donut buying section




















// buying chocolate section
var chocolatePurchases = 0;
buyChocolate.onclick = ()=>{
if(count>=500&&chocolatePurchases==0)
{
  chocolatePurchases++
  if(!playback){
    playback = true;
    
    cookiemonsterSound.src ='ES_Cash Register Open 5 - SFX Producer.mp3';

    cookiemonsterSound.play();
    playback= false;
  }

//remove locked image on skin



  count = Math.floor(count-500);
  number.textContent = count + " cookies";
  cookie.style.transform= "scale(0) rotate(-60deg)";
  buyChocolate.style.transform = "scale(.9)";
 



 let purchase = setTimeout(()=>{
  buyChocolate.style.transform = "scale(1.0)";

 },80)
 
 
 
  let appear = setTimeout(()=>{
    
    cookieImage.src = "—Pngtree—colorful swirl vector candies design_8663668.png";
  
    
    cookie.style.transform= "";
  
    },500)


    buyChocolate.classList.remove("buy-chocolate");
    buyChocolate.classList.add("sold");


    for(let i=0;i<allSkins.length;i++)
    {

      allSkins[i].classList.remove('selected')
      allSkins[i].style.transform= "";

      
      
    
    }


    let chocolate= (document.querySelector('.chocolate-item'));
    chocolate.classList.add('selected');

    chocolate.classList.add('selected');
    chocolate.classList.remove('lock');
    
    //remove 'selected' styling on other items and put it on oreo
    
    
    let lock = chocolate.querySelector('.locked')

    chocolate.classList.add('selected');
    chocolate.classList.remove('lock');

//remove 'selected' styling on other items and put it on oreo
 chocolate.removeChild(lock)

   //remove the locked div inside the skin
  
  
}
}

// end of buying chocolate section
















// skin selection 

allSkins.forEach((e)=>{
  
  e.onclick= ()=>{
    if(e.classList.contains('lock'))
    {
  
    }
    else{
      allSkins.forEach((e)=>{



        e.classList.remove('selected')
        e.style.transform= "";

       
      })
      
      
      if(!playback){
        playback = true;
        
        // cookiemonsterSound.src ="/external stuff/ES_Vending Machine 24 - SFX Producer.mp3";
        
        cookiemonsterSound.src = "ES_PREL Glitch 82 - SFX Producer.mp3";
        cookiemonsterSound.play();
        playback= false;
      }
      
      e.style.transform = "scale(.9)";
      
      let time = setTimeout(()=>{
        e.classList.add('selected')
        e.style.transform = "scale(1)";
      },80)
      
      cookie.style.transform= "scale(0) rotate(-60deg)";
      let appear = setTimeout(()=>{
        
        
        cookieImage.src = "best-cookie.png";
        
  
         if(e.classList.contains('donut-item'))
        {
          cookieImage.src = "https://pngimg.com/uploads/donut/donut_PNG71.png";
        }
        
        if(e.classList.contains('oreo-item'))
        {
          cookieImage.src = "—Pngtree—oreo biscuit hand drawn cartoon_7384054 (1).png";
        }
        if(e.classList.contains('chocolate-item')){
          cookieImage.src = "—Pngtree—colorful swirl vector candies design_8663668.png";
        }
        
        cookie.style.transform= "";
      },200)
    }
  }
})



//reset button

let restart = ()=>{
  let audio = new Audio('external stuff/ES_Vending Machine 24 - SFX Producer.mp3')
  audio.play();
  let reset = document.querySelector('.reset');

  reset.style.transform = 'scale(.9)'

  let timeout = setTimeout(()=>{
  reset.style.transform = ''

  window.location.reload();
  },1000)
  
}


//free cookies
let free = ()=>{
  let freeBtn = document.querySelector(".free");
  let audio = new Audio('external stuff/ES_Vending Machine 24 - SFX Producer.mp3')
  audio.play();
  count += 500;



  number.textContent = "";
  number.textContent = Math.floor(count) + " cookies";

  freeBtn.style.transform = 'scale(.9)';

  let freeTimeOut = setTimeout(()=>{
  freeBtn.style.transform = ''

  },100)


}

//mobile exit button for shop and skin section
let shopExitBtn = document.getElementById("shop-exit-btn")

shopExitBtn.onclick= ()=>{ 
  shopFlag=false;
  shop.style.animation  = "exit .3s linear forwards";

  let hide = setTimeout(()=>{
    shop.style.zIndex = -5;
  },400)

  
}

let skinExitBtn = document.getElementById("skin-exit-btn")

skinExitBtn.onclick= ()=>{
  skinFlag=false;
  skinList.style.animation  = "exit .3s linear forwards";

  let hide = setTimeout(()=>{
    skinList.style.zIndex = -5;
  },400)

 
}

//prevents drag on mobile devices

document.addEventListener('touchmove', function(event) {
  event.preventDefault();
}, { passive: false });