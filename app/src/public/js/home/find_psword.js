"use strict";


const name = document.querySelector("#name"),
    id = document.querySelector("#id"),
    email = document.querySelector("#email"),
    birthDay = document.querySelector("#birthDay"),
    nextBtn = document.querySelector("button");



nextBtn.addEventListener("click", find_psword);


function find_psword(){
    if(!id.value) return alert("아이디를 입력해주십시오.");
    if(!name.value) return alert("이름를 입력해주십시오.");
    if(!email.value) return alert("이메일을 입력해주십시오.");
    if(!birthDay.value) return alert("생년월일을 입력해주십시오.");
    
    const req = {
        id: id.value,
        name: name.value,
        email: email.value,
        birthDay: birthDay.value,
    };

    fetch("/find_psword", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                return location.href = "/newPsword";
            } else {
                return alert("입력한 정보를 다시 확인해주세요.");
            }
        })
        .catch((err) => {
            console.error("아이디찾기 중 에러 발생");
        });
      
}