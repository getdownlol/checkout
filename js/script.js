"use strcict";
const btns = document.querySelectorAll("button"),
        wrapper = document.querySelector(".btn-block");
        wrapper.addEventListener("click", (event) => {
           if (event.target && event.target.tagName == "BUTTON") {
            console.log("привет бич");
           }
        });
        const btn = document.createElement("button");
                btn.classList.add("red");
                wrapper.append(btn);
// // console.log(btns[0].classList.length);
// console.log(btns[1].classList.add("red", "blood"));

// btns[0].addEventListener("click", () =>{
//     // if (!btns[1].classList.contains("red")) {
//     //     btns[1].classList.add("red");
//     // } else {
//     //     btns[1].classList.remove("red");
//     // }
//     btns[1].classList.toggle("red");
// });


