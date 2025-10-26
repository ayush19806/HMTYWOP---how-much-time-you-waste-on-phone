
// main funtcion of app
// that will calculate time that you waste on phone

document.getElementById("Btn").addEventListener("click", function () {
  // Get values inside the click event handler
  let screentime = document.getElementById("Screentime").value;
  let days = document.getElementById("days").value;

  // Convert to numbers
  days = parseInt(days);
  screentime = parseInt(screentime);

  // Calculate time
  let sscreentime = (screentime * days) / 24;
  sscreentime = sscreentime.toFixed(2);

  // Display result
  document.getElementById("demo").innerText = sscreentime + " Days";
  console.log(sscreentime);
});

// reload button function
// reload web page

document.getElementById("Reload-btn").addEventListener("click", function () {
  location.reload();
});

