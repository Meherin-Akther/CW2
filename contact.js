$(document).ready(function(){

/* CHAT */
$("#chatToggle").click(()=>$("#chatBox").fadeIn().css("display","flex"));
$("#closeChat").click(()=>$("#chatBox").fadeOut());

function addMessage(sender,text){
let cls = sender==="user"?"user-msg":"bot-msg";
$("#chatMessages").append(`<div class="${cls}">${text}</div>`);
}

/* BOT */
function reply(msg){
msg=msg.toLowerCase();

if(msg.includes("payment")) return "Payment issues 💳: check your card or contact support.";
if(msg.includes("booking")) return "Booking problems 🏠: please check availability or try again.";
if(msg.includes("issue")) return "Please describe your issue clearly so we can assist.";
return "I can help with issues, payments, or booking problems.";
}

/* SEND */
$("#sendChat").click(()=>{
let val=$("#chatInput").val();
if(!val) return;
addMessage("user",val);
$("#chatInput").val("");

setTimeout(()=>{
addMessage("bot",reply(val));
},500);
});

/* ENTER */
$("#chatInput").keypress(e=>{
if(e.which==13) $("#sendChat").click();
});

/* SUGGESTIONS */
$("#chatSuggestions button").click(function(){
let text=$(this).text();
addMessage("user",text);
setTimeout(()=>{
addMessage("bot",reply(text));
},500);
});

/* FORM */
$("#contactForm").submit(function(e){
e.preventDefault();
$("#successMsg").text("Issue submitted successfully!");
});

/* TOGGLE */
$(".toggle-title").click(function(){
$(this).next().slideToggle();
});

});
