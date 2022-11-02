const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({},"",event.target.href);
    handleLocation();
};

const routes = {
    "/Home/dashboard" : "dashboard.html",
    "/Home/account": "account.html",
    "/Home/profile": "profile.html",
    "/Home/transfer": "transfer.html",
    "/Home/report": "report.html",
    "/Home": "index.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data)=>data.text());
    document.getElementById("main-page").innerHTML = html;
};

//window.onpopstate = handleLocation;
//window.route = route;

//handleLocation();

var btns = document.getElementsByClassName("deactive");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if(current.length>0){
      current[0].className = current[0].className.replace("active", "deactive");
  }
  this.className = "active";
  });
}