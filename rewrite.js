window.addEventListener("load", () => {
  const img_to_remove = document.querySelector(".system-logo");
  const parent = img_to_remove.parentElement;

  const svg_url = chrome.runtime.getURL("img/onny-black.svg");
  const new_node = document.createElement("img");
  new_node.src = svg_url;
  new_node.classList.add("onny-logo", "w-100");

  img_to_remove.remove();
  parent.appendChild(new_node);
  parent.classList.add("onny-logo-container");

  // change the background of the header
  const header = document.querySelector(".navbar-theme");
  header.style="background-color:white";

  header.parentElement.classList.remove("fixed-top");

  // add no-print to close tab section
  const close_div = document.querySelector(".fst-italic");
  close_div.classList.add("hidden-print");
});