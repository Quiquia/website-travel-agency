const $headerMenu = document.querySelector(".header-menu");
const $headerNavbar = document.querySelector(".header-navbar");
const $searchContainer = document.querySelector(".search-bar-container");
const $searchIcon = document.querySelector(".icon-search");
const $loginContainer = document.querySelector(".login-container");
const $loginIcon = document.querySelector(".icon-login");
const $loginClose = document.querySelector(".login-icon-close");
const $btnVideos = document.querySelectorAll(".vid-btn");

const statesGlobals = {
  show_menu: "show_menu",
  show_search: "show_search",
  show_login: "show_login",
};

let STATE_CURRENT_SHOW = ""; //show_menu, show_search, show_user

function onClickMenu() {
  const isIconClose = $headerMenu
    .querySelector("i")
    .classList.contains("fa-xmark");

  STATE_CURRENT_SHOW = isIconClose ? "" : statesGlobals.show_menu;
  showCurrentContainer();
}

$headerMenu.addEventListener("click", onClickMenu);

function onClickSearch() {
  const isIconClose = $searchIcon.classList.contains("fa-xmark");
  STATE_CURRENT_SHOW = isIconClose ? "" : statesGlobals.show_search;
  showCurrentContainer();
}

$searchIcon.addEventListener("click", onClickSearch);

function onClickLogin() {
  STATE_CURRENT_SHOW = statesGlobals.show_login;
  showCurrentContainer();
}

$loginIcon.addEventListener("click", onClickLogin);

function onClickLoginClose() {
  STATE_CURRENT_SHOW = "";
  showCurrentContainer();
}

$loginClose.addEventListener("click", onClickLoginClose);

function showCurrentContainer() {
  if (STATE_CURRENT_SHOW === statesGlobals.show_menu) {
    $headerNavbar.classList.add("showMenu");
    const $icon = $headerMenu.querySelector("i");
    $icon.classList.add("fa-xmark");
  } else {
    $headerNavbar.classList.remove("showMenu");
    const $icon = $headerMenu.querySelector("i");
    $icon.classList.remove("fa-xmark");
  }

  if (STATE_CURRENT_SHOW === statesGlobals.show_search) {
    $searchContainer.classList.add("showSearchMenu");
    $searchIcon.classList.add("fa-xmark");
  } else {
    $searchContainer.classList.remove("showSearchMenu");
    $searchIcon.classList.remove("fa-xmark");
  }

  if (STATE_CURRENT_SHOW === statesGlobals.show_login) {
    $loginContainer.classList.add("showLoginForm");
  } else {
    $loginContainer.classList.remove("showLoginForm");
  }
}

$btnVideos.forEach((btn) => {
  btn.addEventListener("click", () => {
    const $controlBtnVideo = document.querySelector(".home-controls .active");
    const $videoSlider = document.querySelector("#video-slider");

    const src = btn.getAttribute("data-src");
    const currentSrc = $videoSlider.getAttribute("src");

    if (currentSrc !== src) {
      $videoSlider.src = src;
      btn.classList.add("active");
      $controlBtnVideo.classList.remove("active");
    }
  });
});
