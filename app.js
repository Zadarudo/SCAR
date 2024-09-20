const faqs = document.querySelectorAll(".faq");
const answ = document.querySelectorAll(".answers");

faqs.forEach((faq) => {
  faq.addEventListener("mouseover", () => {
    faq.classList.toggle("active");
  });
});


function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}