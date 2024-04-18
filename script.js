const dict = {
  data: [
    "No Poverty",
    "Zero Hunger",
    "Good Health and Well-being",
    "Quality Education",
    "Gender Equality",
    "Clean Water and Sanitation",
    "Affordable and Clean Energy",
    "Decent Work and Economic Growth",
    "Industry, Innovation and Infrastructure",
    "Reduced Inequalities",
    "Sustainable Cities and Communities",
    "Responsible Consumption and Production",
    "Climate Action",
    "Life Below Water",
    "Life on Land",
    "Peace, Justice and Strong Institutions",
    "Partnerships for the Goals",
  ],
  url: [
    "./Images/1.jpg",
    "./Images/2.jpg",
    "./Images/3.jpg",
    "./Images/4.jpg",
    "./Images/5.jpg",
    "./Images/6.jpg",
    "./Images/7.jpg",
    "./Images/8.jpg",
    "./Images/9.jpg",
    "./Images/10.jpg",
    "./Images/11.jpg",
    "./Images/12.jpg",
    "./Images/13.jpg",
    "./Images/14.jpg",
    "./Images/15.jpg",
    "./Images/16.jpg",
    "./Images/17.jpg",
  ],
  content: [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro totam harum magni ab, quos, hic eum iste omnis fugit pariatur dolore perferendis! Earum, corrupti id. Quasi provident dignissimos mollitia temporibus voluptate sapiente. Corrupti magnam at molestiae veritatis rerum facere iure? Delectus, id ex. Iste cupiditate ex reiciendis reprehenderit, quis aut.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro totam harum magni ab, quos, hic eum iste omnis fugit pariatur dolore perferendis! Earum, corrupti id. Quasi provident dignissimos mollitia temporibus voluptate sapiente. Corrupti magnam at molestiae veritatis rerum facere iure? Delectus, id ex. Iste cupiditate ex reiciendis reprehenderit, quis aut.",
  ],
};

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page4Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });

  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".eleme");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");

      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

function menuAnimation() {
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("nav img");
  var flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navimg.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";
      navimg.style.opacity = 1;
      flag = 0;
    }
  });
}

function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}

const render = () => {
  var container = document.querySelector(".containeric");

  dict.data.forEach((item, index) => {
    const newElem = document.createElement("div");
    newElem.classList.add("eleme");
    newElem.setAttribute("data-image", dict.url[index]);

    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlaye");
    newElem.appendChild(overlayDiv);

    const h2Elem = document.createElement("h2");
    h2Elem.textContent = item;
    newElem.appendChild(h2Elem);
    container.appendChild(newElem);
  });
};

// Array of image URLs
const imageUrls = [
  "./media/ALFREDO SFEIR-YOUNIS.jpg",
  "./media/GroHarlem Brundtland.jpg",
  "./media/JEFFREY D. SACHS.jpg",
  "./media/WANGARI MAATHAI.jpg",
  "./media/JANE GOODALL.png",
];

const imgDes = [
  "The first environmental economist (natural resource economist) hired by the World Bank in 1976.",
  "First woman Prime Minister of Norway; former Director-General of WHO; a medical doctor who champions health as a human right",
  "a world-renowned economics professor, bestselling author, innovative educator, and global leader in sustainable development.",
  "Wangari Maathai (1940-2011) was the founder of the Green Belt Movement and the 2004 Nobel Peace Prize Laureate.",
  "In July 1960, at the age of 26, Jane Goodall traveled from England to what is now Tanzania and ventured into the little-known world of wild chimpanzees.",
];
const imgTitle = [
  "Alfredo Sfeir Younis",
  "GroHarlem Brundtland",
  "JEFFREY D. SACHS",
  "WANGARI MAATHAI",
  "JANE GOODALL",
];
const imgAnchor = [
  "https://sustainableid.blogspot.com/p/experts.html",
  "https://theelders.org/profile/gro-harlem-brundtland",
  "https://janegoodall.org/our-story/about-jane/",
  "https://www.jeffsachs.org/",
  "https://www.greenbeltmovement.org/wangari-maathai",
];

const renderCards = () => {
  const cardContainer = document.getElementById("cardContainer");

  imageUrls.forEach((imageUrl, index) => {
    const cardHTML = `
          <div class="card">
              <img src="${imageUrl}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${imgTitle[index]}</h5>
                  <p class="card-text">
                  ${imgDes[index]}
                  </p>
                  <a href="${imgAnchor[index]}" target = "blank" class="btn btn-primary">Learn More</a>
              </div>
          </div>
      `;

    cardContainer.innerHTML += cardHTML;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderCards();
});

render();
swiperAnimation();
page4Animation();
menuAnimation();
loaderAnimation();

function hyperplexedEffect(element) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const text = element.dataset.value;

  let interval = null;

  element.onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = text
        .split("")
        .map((char, index) => {
          if (index < iteration) {
            return text[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };
}

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".hyperplexed");
  elements.forEach((element) => {
    hyperplexedEffect(element);
  });
});
