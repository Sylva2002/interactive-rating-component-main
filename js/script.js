const ratingBtn = document.querySelectorAll(".rating-btn");
const rateSubmit = document.querySelector(".rate-submit");
const rateSelected = document.getElementById("rate-selected");
const thankState = document.querySelector(".thank-state")

ratingBtn.forEach(element => {
    element.addEventListener("click", ()=>{
        removeActiveState();
        element.classList.add("active");
        rateSelected.innerText = element.innerText;
    })
});

rateSubmit.addEventListener("click", ()=>{
    if(isActiveBtn()){
        thankState.classList.add("active");
    }
})

function removeActiveState(){
    ratingBtn.forEach(element => {
        element.classList.remove("active");
    });
}

function isActiveBtn(){
    let btnActive = false;
    ratingBtn.forEach(element => {
        if(element.classList.contains("active")){ btnActive = true };
    });
    return btnActive;
}