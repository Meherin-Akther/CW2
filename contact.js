$(document).ready(function(){

// open chat (using fadeIn for smooth feel)
$("#chatToggle").click(function(){
    $("#chatBox").fadeIn().css("display","flex");
});

// close chat
$("#closeChat").click(function(){
    $("#chatBox").fadeOut();
});

// add message to chat UI
function addMsg(sender,text){

    let cls = (sender==="user") ? "user-msg" : "bot-msg";

    $("#chatMessages").append("<div class='"+cls+"'>"+text+"</div>");

    let box = $("#chatMessages")[0];
    box.scrollTop = box.scrollHeight;
}

// simple reply logic (basic AI simulation)
function getReply(msg){

    msg = msg.toLowerCase();

    if(msg.includes("payment")){
        return "Payment issue 💳. Our support team will contact you soon!";
    }

    if(msg.includes("booking")){
        return "Booking issue 🏠. Our support team will contact you soon!";
    }

    if(msg.includes("issue")){
        return "Thanks for reporting 👍 Our support team will contact you soon!";
    }

    return "I can help with booking, payment or issues. Our support team will contact you soon!";
}

// send message
$("#sendChat").click(function(){

    let val = $("#chatInput").val();

    if(!val) return;
    if(val.trim()==="") return;

    addMsg("user",val);

    $("#chatInput").val("");

    let delay = 400 + Math.random()*300;

    setTimeout(function(){
        addMsg("bot", getReply(val));
    },delay);
});

// enter key support
$("#chatInput").keypress(function(e){
    if(e.which==13){
        $("#sendChat").click();
    }
});

// suggestion buttons
$("#chatSuggestions button").click(function(){

    let text = $(this).text();

    addMsg("user",text);

    setTimeout(function(){
        addMsg("bot", getReply(text));
    },500);
});

// form submit (frontend only)
$("#contactForm").submit(function(e){
    e.preventDefault();
    $("#successMsg").text("Issue submitted successfully!");
});

// toggle sections with fade effect
$(".toggle-btn").click(function(){

    let target = $(this).data("target");

    $(".toggle-content").not("#"+target).fadeOut();
    $("#"+target).fadeToggle();

});

});
