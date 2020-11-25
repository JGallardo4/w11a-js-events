let blocks = Array.from(document.getElementsByClassName("block"));

blocks.forEach(b => {
    b.addEventListener("mouseover", function() {
        this.style.border = "3px solid green";
    });

    b.addEventListener("mouseout", function() {
        this.style.border = "0 none";
    });

    b.addEventListener("click", function() {
        this.classList.toggle("on");
    });
});

document.addEventListener("keydown", event => {
    if (event.code == "Space") {
        blocks.forEach((b) => {
            if (b.classList.contains("on")) {
                b.classList.toggle("happy");
            }
        });
    }
});