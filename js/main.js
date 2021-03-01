{
    const accordionItemHeaders = document.querySelectorAll(".question__itemHeader");
    const elko = document.querySelectorAll(".question__item")

    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", () => {

        const currentlyActiveAccordionItemHeader = document.querySelector(".question__itemHeader.active");
        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        };

        accordionItemHeader.classList.toggle("active");

        const accordionItemBody = accordionItemHeader.nextElementSibling;

        if(accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else { accordionItemBody.style.maxHeight = 0};
        });
    });
}