
var input = document.getElementById("input"); 
var messages = document.getElementById("messages")

function send() {
    socket.emit("send message",input.value); 
}
socket.on("msg", function(data) {
    messages.innerHTML+= ("<br/>" + data )
})

