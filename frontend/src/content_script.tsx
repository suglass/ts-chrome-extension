import React from "react";
import ReactDOM from "react-dom";
import Popup from "./popup";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if(request.message === 'clicked_browser_action') {
    console.log("message received");
    toggle();
  }
});


const app = document.createElement('div');
app.id = "my-extension-root";
// app.setAttribute("style", "display: none");
app.style.display = "none";

document.body.appendChild(app);

ReactDOM.render(<><Popup/></>, app);

const toggle = () => {
  if(app.style.display === "none"){
    app.style.display = "flex";
  }else{
    app.style.display = "none";
  }
}
