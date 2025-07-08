window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("imgid").addEventListener("mouseover", function () {
    setTimeout(function () {
      window.location.href = "second.html";
    }, 500);
  });
});
    