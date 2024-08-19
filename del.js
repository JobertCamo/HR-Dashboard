const delBtn = document.querySelector("[del-modal-btn]");
const delModal = document.querySelector("[del-modal]");
const delCncl = document.querySelector("[del-cncl]");

delBtn.addEventListener("click", () => {
  delModal.showModal();
});
delCncl.addEventListener("click", () => {
  delModal.close();
});