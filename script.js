//nav bar menu button
let nav = document.getElementById("nav");
let a = document.createElement("a");
a.href = "https://www.burgerking.co.uk/account";
a.style.marginTop = "-2px";
nav.appendChild(a);

//nav bar menu button image
let menu = document.createElement("img");
menu.src = "menu.png";
menu.width = "25";
menu.alt = "Menu";
a.appendChild(menu);

//nav bar "Order" button
let a1 = document.createElement("a");
a1.textContent = "Order";   
a1.href = "https://www.burgerking.co.uk/store-locator";
nav.appendChild(a1);

//nav bar "Offers" button
let a2 = document.createElement("a");
a2.textContent = "Offers";   
a2.href = "https://www.burgerking.co.uk/offers";
nav.appendChild(a2);

//nav bar "Menu" button
let a3 = document.createElement("a");
a3.textContent = "Menu";   
a3.href = "https://www.burgerking.co.uk/menu";
nav.appendChild(a3);

//nav bar "Delivery" button
let a4 = document.createElement("a");
a4.textContent = "Delivery";   
a4.href = "https://www.burgerking.co.uk/store-locator/address";
nav.appendChild(a4);

//nav bar "More" button
let a5 = document.createElement("a");
a5.textContent = "More";
nav.appendChild(a5);

//nav bar logo link
let a6 = document.createElement("a");
a6.id = "bk-logo";
a6.href = "https://www.burgerking.co.uk/";
nav.appendChild(a6);

//nav bar logo image
let bk = document.createElement("img");
bk.src = "bk-logo.png";
bk.width = "95";
bk.alt = "Burger King";
a6.appendChild(bk);

//nav bar cart button
let button1 = document.createElement("button");
button1.id = "button2";
button1.textContent = "£0.00";
button1.style.position = "relative";
button1.style.float = "right";
button1.style.border = "0px";
button1.style.padding = "7px 25px";
button1.style.borderRadius = "20px";
button1.style.backgroundColor = "#2b0000";
button1.style.color = "#f5e0c6";
button1.style.fontFamily = "Titan One, cursive";
button1.style.margin = "5px 30px 0px 10px"
nav.appendChild(button1);

//cart button mini image
let cart = document.createElement("img");
cart.src = "cart.png"
cart.alt = "Cart";
cart.width = "9";
cart.style.position = "relative";
cart.style.float = "left";
cart.style.padding = "0px 10px";
button1.appendChild(cart);

//nav bar "Sign Up" button
let button2 = document.createElement("button");
button2.id = "button2";
button2.textContent = "Sign Up";
nav.appendChild(button2);

//main image container
let katsu = document.getElementById("katsu");
katsu.style.margin = "auto";

//main image
let katsu1 = document.createElement("img");
katsu1.src = "katsu.jpg";
katsu1.alt = "Katsu Curry";
katsu1.id = "katsu_img";
katsu1.style.margin = "auto";
katsu1.style.position = "relative";
katsu1.style.float = "top";
katsu.appendChild(katsu1);

//button over main image container
let b4link = document.createElement("a");
b4link.href = "https://www.burgerking.co.uk/katsu-range";
katsu.appendChild(b4link);

//button over main image
let button4 = document.createElement("button");
button4.id = "button4";
button4.textContent = "Find out more";
button4.style.backgroundColor = "#f5e0c6";
button4.style.fontFamily = "Titan One, cursive";
button4.style.fontSize = "20px";
button4.style.color = "firebrick";
button4.style.fontWeight = "light";
button4.style.border = "0px";
button4.style.borderRadius = "25px";
button4.style.padding = "13px 37px";
button4.style.position = "relative";
button4.style.float = "left";
button4.style.marginTop = "-11%";
button4.style.marginLeft = "3%";
button4.style.cursor = "pointer";
b4link.appendChild(button4);

//first pane container
let pane1 = document.getElementById("pane1");
let pane1a = document.createElement("a");
pane1a.href = "https://www.burgerking.co.uk/meat-free-restaurant";
pane1.appendChild(pane1a);

//first pane image
let pane1Img = document.createElement("img");
pane1Img.src = "twist.jpg";
pane1a.appendChild(pane1Img);

//first pane button
let p1btn = document.createElement("button")
p1btn.className = "pbtn";
p1btn.id = "p1btn";
p1btn.textContent = "Find out more";
p1btn.style.margin = "-8% auto 0 75%";
p1btn.style.position = "relative";
p1btn.style.float = "left";
pane1a.appendChild(p1btn);

//second pane container
let pane2 = document.getElementById("pane2");
let pane2a = document.createElement("a");
pane2a.href = "https://www.burgerking.co.uk/offers/386656a0-9d06-4806-b90d-e0c5b48dc6de";
pane2.appendChild(pane2a);

//second pane image
let pane2Img = document.createElement("img");
pane2Img.src = "whopper.jpg";
pane2a.appendChild(pane2Img); 

//third pane container
let pane3 = document.getElementById("pane3");
let pane3a = document.createElement("a");
pane3a.href = "https://www.burgerking.co.uk/offers";
pane3.appendChild(pane3a);

//third pane image
let pane3Img = document.createElement("img");
pane3Img.src = "offers.png";
pane3Img.textContent = "Great offers";
pane3a.appendChild(pane3Img);

//third pane button
let p3btn = document.createElement("button")
p3btn.className = "pbtn";
p3btn.id = "p3btn";
p3btn.textContent = "See offers";
p3btn.style.margin = "-8% auto 0 40%";
p3btn.style.position = "relative";
p3btn.style.float = "left";
pane3a.appendChild(p3btn);

//third pane's first line of text
let pane3Txt1 = document.createElement("p");
pane3Txt1.textContent = "GREAT OFFERS";
pane3Txt1.style.fontFamily = "Titan One, cursive";
pane3Txt1.style.fontSize = "60px";
pane3Txt1.style.color = "#2b0000";
pane3Txt1.style.marginTop = "-300px";
pane3Txt1.style.marginLeft = "120px";
pane3a.appendChild(pane3Txt1);

//third pane's first line of text
let pane3Txt2 = document.createElement("p");
pane3Txt2.textContent = "Flame grilled vouchers";
pane3Txt2.style.fontFamily = "Titan One, cursive";
pane3Txt2.style.fontSize = "30px";
pane3Txt2.style.color = "#2b0000";
pane3Txt2.style.marginTop = "-50px";
pane3Txt2.style.marginLeft = "190px";
pane3a.appendChild(pane3Txt2);

//fourth pane container
let pane4 = document.getElementById("pane4");
let pane4a = document.createElement("a");
pane4a.href = "https://www.burgerking.co.uk/responsiblebusiness";
pane4.appendChild(pane4a);

//fourth pane image
let pane4Img = document.createElement("img");
pane4Img.src = "free-from.png";
pane4a.appendChild(pane4Img);

//fourth pane button
let p4btn = document.createElement("button")
p4btn.className = "pbtn";
p4btn.id = "p4btn";
p4btn.textContent = "Find out more";
p4btn.style.margin = "-8% auto 0 2%";
p4btn.style.position = "relative";
p4btn.style.float = "left";
pane4a.appendChild(p4btn);

//phone image container
let phone = document.getElementById("phone");
phone.style.marginTop = "200px";

//phone image
let phoneImg = document.createElement("img");
phoneImg.src = "phone.png";
phoneImg.style.width = "25%";
phoneImg.style.margin = " -6% auto 0 39%";
phone.appendChild(phoneImg);

//store badges first line of text
let store = document.getElementById("store");
let st1 = document.createElement("p");
st1.innerHTML = "Save £££ <br/ >With offers on demand"
st1.style.fontFamily = "Titan One, cursive";
st1.style.fontSize = "50px";
st1.style.color = "#2b0000";
st1.style.width = "400px";
st1.style.margin = "-28% 10% 0 auto";
store.appendChild(st1);

//app store container
let appStore = document.createElement("a");
appStore.href = "https://apps.apple.com/gb/app/burger-king-uk-ireland/id1062524641";
appStore.style.width = "50";
appStore.style.margin = "0 auto 0 67%";
store.appendChild(appStore);

//appstore img
let appStoreImg = document.createElement("img");
appStoreImg.src = "app-store.png";
appStoreImg.style.width = "150px";
appStoreImg.style.marginTop = "2%";
appStore.appendChild(appStoreImg);

//google play container
let googlePlay = document.createElement("a");
googlePlay.href = "https://apps.apple.com/gb/app/burger-king-uk-ireland/id1062524641";
googlePlay.style.width = "50";
googlePlay.style.margin = "-5 auto 0 85%";
googlePlay.style.paddingLeft = "40px";
store.appendChild(googlePlay);

//google play img
let googlePlayImg = document.createElement("img");
googlePlayImg.src = "google-play.svg";
googlePlayImg.style.width = "150px";
googlePlay.appendChild(googlePlayImg);

//store badges second line of text
let st2 = document.createElement("p");
st2.innerHTML = "Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply."
st2.style.fontFamily = "Poppins, sans-serif";
st2.style.fontSize = "12px";
st2.style.fontWeight = "bolder";
st2.style.color = "#2b0000";
st2.style.width = "400px";
st2.style.margin = "2% 10% 0 auto";
st2.style.paddingBottom = "5%";
store.appendChild(st2);

//location bar
let loc = document.getElementById("location");
loc.style.backgroundColor = "whitesmoke";
loc.style.position = "fixed";
loc.style.bottom = "0";
loc.style.zIndex = "1";
loc.style.paddingLeft = "250px";

//locbar icon container
let locIcon = document.createElement("a");
locIcon.href = "https://www.burgerking.co.uk/store-locator/service-mode";
locIcon.style.marginTop = "20px";
locIcon.style.marginRight = "20px";
locIcon.style.position = "relative";
locIcon.style.float = "left";
loc.appendChild(locIcon);

//locbar pin icon
let locImg = document.createElement("img");
locImg.id = "pin";
locImg.src = "pin.png";
locIcon.appendChild(locImg);

//locbar first line of text
let locbar = document.createElement("p");
locbar.textContent = "For item availibility";
locbar.style.fontFamily = "Titan One, cursive";
locbar.style.marginTop = "5px";
loc.appendChild(locbar);

//locbar second line of text
let locbar1 = document.createElement("p");
locbar1.textContent = "Choose location";
locbar1.style.fontFamily = "Poppins, sans-serif";
locbar1.style.fontSize = "16px";
locbar1.style.fontWeight = "bolder";
locbar1.style.marginTop = "-15px";
loc.appendChild(locbar1);

//locbar arrow icon
let locArrow = document.createElement("img");
locArrow.src = "arrow.png";
locArrow.style.position = "relative";
locArrow.style.float = "right";
locArrow.style.width = "15px";
locArrow.style.margin = "-2% 34.5% 0 0";
loc.appendChild(locArrow);

//locbar line
let lochr = document.createElement("hr");
lochr.style.marginTop = "-15px";
lochr.style.marginLeft = "40px";
lochr.style.width = "63%";
lochr.style.border = "1px #2b0000 solid";
loc.appendChild(lochr);

//locbar button container
let locButton = document.createElement("a");
locButton.href = "https://www.burgerking.co.uk/store-locator/service-mode";
loc.appendChild(locButton);

//locbar button
let button3 = document.createElement("button");
button3.id = "button3";
button3.textContent = "0";
button3.style.backgroundColor = "firebrick";
button3.style.fontFamily = "Titan One, cursive";
button3.style.fontSize = "14px";
button3.style.color = "whitesmoke";
button3.style.border = "0px";
button3.style.borderRadius = "25px";
button3.style.padding = "6px 20px";
button3.style.position = "relative";
button3.style.float = "left";
button3.style.marginTop = "-45px";
button3.style.marginLeft = "66%";
button3.style.cursor = "pointer";
locButton.appendChild(button3);

//locbar button image
let locImg2 = document.createElement("img");
locImg2.src = "cart1.png";
locImg2.width = "9";
locImg2.style.position = "relative";
locImg2.style.float = "left";
locImg2.style.padding = "0px 10px 0px 0px";
button3.appendChild(locImg2);