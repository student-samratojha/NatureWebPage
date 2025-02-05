let loginBox = document.querySelector(".login");
let loginBtn = document.querySelector(".lobtn");
let htxt = document.querySelector(".headtxt");
let loginClose = document.querySelector(".login i");
let bgCon = document.querySelector(".headPage");
loginBtn.addEventListener("click", () => {
  loginBox.style.transform = "scale(1)";
  document.querySelector(".part2").style.right = "-100%";
  bgCon.style.backgroundImage =
    "url('https://1.bp.blogspot.com/-RvjsPdey3xE/T31P8mBLdhI/AAAAAAAAAGE/G-GqthsYc98/s1600/black%2Bwallpaper%2B17.jpg')";
  htxt.style.opacity = "0";
});
loginClose.addEventListener("click", () => {
  loginBox.style.transform = "scale(0)";
  bgCon.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1468386735537-1488fd34c89b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3Jlc2NlbnR8ZW58MHx8MHx8fDA%3D')";
  htxt.style.opacity = "1";
});


let crs = document.querySelector(".crs");
let ors = document.querySelector(".ors");
ors.addEventListener("click", () =>  {
  document.querySelector(".part2").style.right = "0%";
  loginBox.style.transform = "scale(0)";
  bgCon.style.backgroundImage =
  "url('https://images.unsplash.com/photo-1468386735537-1488fd34c89b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3Jlc2NlbnR8ZW58MHx8MHx8fDA%3D')";
htxt.style.opacity = "1";
})
crs.addEventListener("click", () =>  {
  document.querySelector(".part2").style.right = "-100%";
})