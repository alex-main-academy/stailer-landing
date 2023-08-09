// timer
function updateTimer() {
  const timerElement = document.querySelector(".js-sale-end");
  const timerDisplay = document.querySelectorAll(".js-sale-timer");

  if (!timerElement) return;

  const endDateString = timerElement.textContent;
  const endDateParts = endDateString.split(".");

  if (endDateParts.length !== 3) {
    timerDisplay.forEach((elem) => {
      elem.textContent = "Invalid date format";
    });
    return;
  }

  const endTime = new Date(
    `20${endDateParts[2]}-${endDateParts[1]}-${endDateParts[0]} 23:59:59`
  ).getTime();
  const currentTime = new Date().getTime();
  const timeRemaining = Math.max(0, endTime - currentTime);

  const seconds = Math.floor((timeRemaining / 1000) % 60);
  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  const hours = Math.floor((timeRemaining / 1000 / 3600) % 24);
  const days = Math.floor(timeRemaining / 1000 / 3600 / 24);

  const formattedTime = `${String(days).padStart(2, "0")} : ${String(
    hours
  ).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(
    seconds
  ).padStart(2, "0")}`;
  timerDisplay.forEach((elem) => {
    elem.textContent = formattedTime;
  });

  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    timerDisplay.forEach((elem) => {
      elem.textContent = "00 : 00 : 00 : 00";
    });
  }
}

updateTimer();
const timerInterval = setInterval(updateTimer, 1000);

// menu burger
const menuOpenButton = document.querySelector(".js-menu-open");
const menuElement = document.querySelector(".js-menu");
let toggleMenu = false;

const handleChangeMenuToggle = () => {
  toggleMenu = !toggleMenu;
};

menuOpenButton.addEventListener("click", () => {
  handleChangeMenuToggle();

  if (toggleMenu) {
    menuOpenButton.classList.add("is-open");
    menuElement.classList.add("is-open");
    document.body.classList.add("is-menu-open");
  } else {
    menuElement.classList.remove("is-open");
    menuOpenButton.classList.remove("is-open");
    document.body.classList.remove("is-menu-open");
  }
});

// video
const videoElement = document.querySelector(".js-video");
const videoPlayButton = document.querySelector(".js-video-play");

videoPlayButton.addEventListener("click", () => {
  videoElement.classList.add("is-open");
  setTimeout(() => {
    videoElement.play();
  }, 500);
});

// anchors
document.addEventListener("click", function (event) {
  const target = event.target.closest(".order__link");

  if (target && target.getAttribute("href").startsWith("#")) {
    event.preventDefault();
    const targetId = target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const targetOffset =
        targetElement.getBoundingClientRect().top + window.scrollY - 50;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
  } else if (
    event.target.tagName === "A" &&
    event.target.getAttribute("href").startsWith("#")
  ) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const targetOffset =
        targetElement.getBoundingClientRect().top + window.scrollY - 50;

      handleChangeMenuToggle();
      menuElement.classList.remove("is-open");
      menuOpenButton.classList.remove("is-open");
      document.body.classList.remove("is-menu-open");

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
  }
});

// animation
if (window.innerWidth <= 1200) {
  const animatedElemets = document.querySelectorAll("[data-aos]");

  animatedElemets.forEach((elem) => {
    elem.setAttribute("data-aos", "");
  });

  const elements = document.querySelectorAll("li, img, h3, p, input, button");

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-viewport");
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.25,
  });

  elements.forEach((element) => {
    observer.observe(element);
  });
}
