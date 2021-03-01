const accordionItemHeaders = document.querySelectorAll(".question__itemHeader");

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
    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";}
    else { accordionItemBody.style.maxHeight = 0};
    });
});


const arrowRight = document.querySelector(".pricing__arrowRight");
const arrowLeft = document.querySelector(".pricing__arrowLeft");
const slider = document.querySelector(".pricing__slider");
let marginValue = -100;

if(document.body.offsetWidth < 700) {
    arrowRight.addEventListener("click", () => { 
        if(marginValue === -300) {
            marginValue = 0;
        };
        slider.style.marginLeft = marginValue + "vw";
        slider.style.transition = "0.5s"
        marginValue = marginValue - 100;
    });
    
    arrowLeft.addEventListener("click", () => {
        if(marginValue === -100) {
            marginValue = -400;
        };
        slider.style.marginLeft = marginValue + 200 + "vw";
        slider.style.transition = "0.5s"
        marginValue = marginValue + 100;
    });
}

if(document.body.offsetWidth > 700) {
    arrowRight.addEventListener("click", () => { 
        if(marginValue === -100) {
            marginValue = 0;
        };
        slider.style.marginLeft = marginValue + "vw";
        slider.style.transition = "0.5s"
        marginValue = marginValue - 50;
        console.log(marginValue)
    });
    
    arrowLeft.addEventListener("click", () => {
        if(marginValue === 0) {
            marginValue = -100;
        };
        slider.style.marginLeft = marginValue + 50 + "vw";
        slider.style.transition = "0.5s"
        marginValue = marginValue + 50;
        console.log(marginValue)
    });
}

const phoneImageOne = document.querySelector(".js-imageOne");
const phoneImageTwo = document.querySelector(".js-imageTwo");
const phoneImageThree = document.querySelector(".js-imageThree");
const phoneImageFour = document.querySelector(".js-imageFour");

phoneImageOne.addEventListener("click", () => {
    phoneImageOne.classList.add("information__active");
    phoneImageTwo.classList.add("information__passive");

    phoneImageOne.classList.remove("information__passive");
    phoneImageTwo.classList.remove("information__active");
})

phoneImageTwo.addEventListener("click", () => {
    phoneImageOne.classList.add("information__passive");
    phoneImageTwo.classList.add("information__active");

    phoneImageTwo.classList.remove("information__passive");
    phoneImageOne.classList.remove("information__active");
})

phoneImageThree.addEventListener("click", () => {
    phoneImageThree.classList.add("information__active");
    phoneImageFour.classList.add("information__passive");

    phoneImageThree.classList.remove("information__passive");
    phoneImageFour.classList.remove("information__active");
})

phoneImageFour.addEventListener("click", () => {
    phoneImageThree.classList.add("information__passive");
    phoneImageFour.classList.add("information__active");

    phoneImageFour.classList.remove("information__passive");
    phoneImageThree.classList.remove("information__active");
})