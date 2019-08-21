
var input = document.getElementById("input"); 
var messages = document.getElementById("messages")

var name = prompt("what is your name","");

function send() {
    socket.emit("send message",({
        name: window.name,
        txt: input.value
    })); 
    input.value = "";
}
socket.on("msg", function(data) {
    messages.innerHTML = ( "<div class='message'> <p class = 'name'>" + data.name + ":</p>" +
                           "<p class = 'txt' >"+ data.txt + "</p></div>" + 
                            messages.innerHTML );
})

