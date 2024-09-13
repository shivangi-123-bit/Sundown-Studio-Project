function load() {
  let loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4000);
}
load();

gsap.from("#elem-container h2", {
  // scale : 0,
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: "#elem-container h2",
  scroller: "body",
  stagger: 1,
  overflow: "hidden",
});
gsap.from(".page4 .page4-top h1,.page4 .page4-top p", {
  y: 50,
  opacity: 0,
  delay: 1,
  duration: 1,
  scrollTrigger: ".page4 .page4-top h1,.page4 .page4-top p",
  stagger: 0.8,
});

function page3() {
  let fixedImg = document.querySelector(".fixed-images");
  let elemCont = document.querySelector("#elem-container");
  elemCont.addEventListener("mouseenter", function () {
    fixedImg.style.display = "block";
  });
  fixedImg.addEventListener("mouseenter", function () {
    fixedImg.style.display = "block";
  });
  fixedImg.addEventListener("mouseleave", function () {
    fixedImg.style.display = "none";
  });
  elemCont.addEventListener("mouseleave", function () {
    fixedImg.style.display = "none";
  });
  let elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      let image = e.getAttribute("data-image");
      fixedImg.style.backgroundImage = `url(${image})`;
    });
  });
}
page3();

function page4() {
  let page4Right = document.querySelector(".page4-top .right");
  let page4LeftDesign = document.querySelector(".page4-top .left .Design ");
  let page4LeftProject = document.querySelector(".page4-top .left .Project ");
  let page4LeftExecution = document.querySelector(
    ".page4-top .left .Execution"
  );
  let paraDesign = document.querySelector(".page4-top .left .para-design ");
  let paraProject = document.querySelector(".page4-top .left .para-project ");
  let paraExecution = document.querySelector(
    ".page4-top .left .para-execution"
  );

  page4LeftDesign.style.borderLeft = "3px solid #fe330ab5";
  page4LeftDesign.style.color = "white";
  let designImage = page4LeftDesign.getAttribute("data-Design-image");
  page4Right.style.backgroundImage = `url(${designImage})`;
  paraDesign.style.display = "block";

  page4LeftDesign.addEventListener("click", function () {
    let designImage = page4LeftDesign.getAttribute("data-Design-image");
    page4Right.style.backgroundImage = `url(${designImage})`;
    page4LeftDesign.style.borderLeft = "3px solid #fe330ab5";
    page4LeftDesign.style.color = "white";
    paraDesign.style.display = "block";

    let projectImage = page4LeftProject.getAttribute("data-Project-image");
    page4LeftProject.style.borderLeft = "3px solid #efeae475";
    page4LeftProject.style.color = "#efeae475";
    paraProject.style.display = "none";

    let executionImage = page4LeftExecution.getAttribute(
      "data-Execution-image"
    );
    page4LeftExecution.style.borderLeft = "3px solid #efeae475";
    page4LeftExecution.style.color = "#efeae475";
    paraExecution.style.display = "none";
  });

  page4LeftProject.addEventListener("click", function () {
    let projectImage = page4LeftProject.getAttribute("data-Project-image");
    page4Right.style.backgroundImage = `url(${projectImage})`;
    page4LeftProject.style.borderLeft = "3px solid #fe330ab5";
    page4LeftProject.style.color = "white";
    paraProject.style.display = "block";

    let designImage = page4LeftDesign.getAttribute("data-Design-image");
    page4LeftDesign.style.borderLeft = "3px solid #efeae475";
    page4LeftDesign.style.color = "#efeae475";
    paraDesign.style.display = "none";

    let executionImage = page4LeftExecution.getAttribute(
      "data-Execution-image"
    );
    page4LeftExecution.style.borderLeft = "3px solid #efeae475";
    page4LeftExecution.style.color = "#efeae475";
    paraExecution.style.display = "none";
  });

  page4LeftExecution.addEventListener("click", function () {
    let executionImage = page4LeftExecution.getAttribute(
      "data-Execution-image"
    );
    page4Right.style.backgroundImage = `url(${executionImage})`;
    page4LeftExecution.style.borderLeft = "3px solid #fe330ab5";
    page4LeftExecution.style.color = "white";
    paraExecution.style.display = "block";

    let designImage = page4LeftDesign.getAttribute("data-Design-image");
    page4LeftDesign.style.borderLeft = "3px solid #efeae475";
    page4LeftDesign.style.color = "#efeae475";
    paraDesign.style.display = "none";

    let projectImage = page4LeftProject.getAttribute("data-Project-image");
    page4LeftProject.style.borderLeft = "3px solid #efeae475";
    page4LeftProject.style.color = "#efeae475";
    paraProject.style.display = "none";
  });
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
  });
}
page4();

function menu() {
  let menuSlant = document.querySelector("nav .menu .menu-icon p");
  let menuCross = document.querySelector("nav .menu .menu-icon a");
  let navImg = document.querySelector("nav img");
  let fullScreen = document.querySelector(".full-screen");
  let menu = document.querySelector("nav .menu");
  let flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      fullScreen.style.top = 0;
      navImg.style.opacity = 0;
      menuCross.style.display = "block";
      menuSlant.style.display = "none";
      flag == 1;
    } else {
      fullScreen.style.top = "-100%";
      navImg.style.opacity = 1;
      menuCross.style.display = "none";
      menuSlant.style.display = "block";
      flag == 0;
    }
  });
}
menu();
