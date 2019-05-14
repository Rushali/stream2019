((window.gitter = {}).chat = {}).options = {
  room: 'thesis2019/thesis2019', 
  activationElement: '',
  targetElement: '.chatContainer',
  showChatByDefault: true,
  useStyles: true
}

var chatContainer = document.querySelector("#wrapperRight .chatContainer");
var right = document.getElementById("wrapperRight");
var left = document.getElementById("wrapperLeft");
let buttonText = document.querySelector("#joinChat p");


let chatVisible = false;

function adjustChatSize(){
  let thirdW = window.innerWidth * 0.33;
  let h = window.innerHeight;
  chatContainer.style.width = thirdW - 5;
  chatContainer.style.height = h - 20;
}
function showChat(){
  TweenLite.to(right, 0.5, {width:"33%", flexGrow: "0.33"});
  TweenLite.to(left, 0.5, {width:"66%", flexGrow: "0.66"});
  let chat = document.querySelector("#wrapperRight iframe");
  setTimeout(function(){
    chat.src = chat.src;
  }, 100);
  setTimeout(function(){
    adjustChatSize();
    chatContainer.style.visibility = "visible";
  }, 600);
  buttonText.innerHTML = "close chat";

}
function hideChat(){
  chatContainer.style.visibility = "hidden";
  TweenLite.to(right, 0.5, {width:"0%", flexGrow: "0"});
  TweenLite.to(left, 0.5, {width:"100%", flexGrow: "1"});
  buttonText.innerHTML = "open chat";
}
function toggleChat(){
  if(chatVisible){
    hideChat();
    chatVisible = false;
  }else{
    showChat();
    chatVisible = true;
  }
  setTimeout(function(){
    resizePlayer();
  }, 500);
}
document.getElementById("joinChat").addEventListener("click", toggleChat);
