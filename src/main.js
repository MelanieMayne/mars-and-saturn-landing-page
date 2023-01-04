function changeTheme(event) {
    let body = document.querySelector("body");
    event.preventDefault();

    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
    } else {
      body.classList.add("dark");
    }
  }

  let themeButton = document.querySelector(".theme-button");
  themeButton.addEventListener("click", changeTheme);