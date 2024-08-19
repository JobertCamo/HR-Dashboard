const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.showModal();
});
closeModal.addEventListener("click", () => {
  modal.close();
});

const delBtn = document.getElementById("del-dia-btn");
const delModal = document.getElementById("del-modal");
const delCncl = document.getElementById("del-cncl");

delBtn.addEventListener("click", () => {
  delModal.showModal();
});
delCncl.addEventListener("click", () => {
  delModal.close();
});

