const staffBtn = document.getElementById("open-staff");
const staffModal = document.getElementById("staff-modal");
const staffCls = document.getElementById("staff-cncl");

staffBtn.addEventListener("click", () => {
   staffModal.showModal(); 
});
staffCls.addEventListener("click", () => {
    staffModal.close();
});