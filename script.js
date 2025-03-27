document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".link-btn");
    const copyMessage = document.getElementById("copy-message");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const url = this.getAttribute("data-url");

            navigator.clipboard.writeText(url)
                .then(() => {
                    copyMessage.textContent = "Tautan disalin ke clipboard!";
                    setTimeout(() => copyMessage.textContent = "", 2000);
                })
                .catch(err => console.error("Gagal menyalin: ", err));
        });
    });
});
