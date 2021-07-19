function newwind() {
  var newin = document.getElementById("sparewin");
  newin.style.display = "block";
}
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("ip2").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  li.className = "liunder";
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("ip2").value = "";

  var span = document.createElement("SPAN");
  // var txt = document.createTextNode("\u1F5D1");
  span.innerHTML = "&#x1F5D1;";
  span.className = "close";
  // span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
  var newin = document.getElementById("sparewin");
  newin.style.display = "none";
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
