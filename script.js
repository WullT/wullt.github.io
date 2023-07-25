var encEmail = "dGltZW8ud3VsbHNjaGxlZ2VyQGdtYWlsLmNvbQ==";
const form = document.getElementById("mail_form");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));