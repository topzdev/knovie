let modal = document.getElementById("over-modal");
let modal_exit = document.getElementById("modal-exit");

modal_exit.addEventListener("click", () => purchase_close());

modal.addEventListener("keypress", e => {
  console.log("press");
  if (e.keyCode == 27) {
    purchase_close();
  }
});

function purchase_modal() {
  modal.classList.add("modal-show");
  modal.focus();
  scroll_lock("hidden");
}

function purchase_close() {
  modal.classList.remove("modal-show");
  scroll_lock("auto");
}

function scroll_lock(mode) {
  document.body.style.overflow = mode;
}
