let display = document.getElementById("display");

function appendValue(val) {
  if (display.innerText === "0") {
    display.innerText = val;
  } else {
    display.innerText += val;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function backspace() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch (e) {
    display.innerText = "Error";
  }
}

function closeApp() {
  // Close for web (simulate). Works only in hybrid apps or Android WebView
  alert("Closing app...");
  window.close(); // May not work on all mobile browsers
}

