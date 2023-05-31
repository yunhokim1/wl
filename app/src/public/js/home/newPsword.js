"use strict";


const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    nextBtn = document.querySelector("button");



nextBtn.addEventListener("click", newPsword);


function newPsword(){
    const pattern = new RegExp("^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}");
    if(!id.value) return alert("아이디를 입력해주십시오.");
    if(!psword.value) return alert("비밀번호를 입력해주십시오.");
    if(!pattern.test(psword.value)) return alert("비밀번호를 특수문자, 영문, 숫자 조합 6~16자리로 입력해주십시오.");
    if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");
    
    const req = {
        id: id.value,
        psword: psword.value,
    };

    fetch("/newPsword", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                return alert("비밀번호가 성공적으로 변경되었습니다.", location.href = "/login");
            } else {
                return alert("입력한 정보를 다시 확인해주세요.");
            }
        })
        .catch((err) => {
            console.error("비밀번호 변경 중 에러 발생");
        });
      
}