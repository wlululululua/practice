document.querySelectorAll(".slideshow").forEach(slideshow => {
    const items = slideshow.querySelectorAll(".slide__item");
    const btnsHtml = Array.from(items, () => {
        return `<span class="slide__btn"></span>`
    });

    slideshow.insertAdjacentHTML("beforeend", `
        <div class="slide__nav">
        ${btnsHtml.join("")}
        </div
    `);

    const btns = slideshow.querySelectorAll(".slide__btn");

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            //un-select all items
            items.forEach(item => item.classList.remove("slide__item--selected"));
            btns.forEach(btn => btn.classList.remove("slide__btn--selected"));

            //select current item
            items[i].classList.add("slide__item--selected");
            btn.classList.add("slide__btn--selected");
        })
    });

    //select the first item when page loaded
    items[0].classList.add("slide__item--selected");
    btns[0].classList.add("slide__btn--selected");

});

