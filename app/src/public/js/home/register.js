"use strict";


const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    email = document.querySelector("#email"),
    birthDay = document.querySelector("#birthday"),
    phoneNumb = document.querySelector("#phonenumb"),
    registerBtn = document.querySelector("#button");



registerBtn.addEventListener("click", register);


function register(){
    const pattern = new RegExp("^[a-zA-Z][0-9a-zA-Z]{4,9}$");
    if(!id.value) return alert("아이디를 입력해주십시오.");
    if(!pattern.test(id.value)) return alert("아이디를 영문+숫자 5~10 글자로 입력해주십시오.");
    if(!name.value) return alert("이름를 입력해주십시오.");
    if(!psword.value) return alert("비밀번호를 입력해주십시오.");
    if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");
    if(!email.value) return alert("이메일을 입력해주십시오.");
    if(!birthDay.value) return alert("생년월일을 입력해주십시오.");
    
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        email: email.value,
        birthDay: birthDay.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                return alert("정상적으로 회원가입 되었습니다." ,location.href = "/login");
            } else {
                if (res.err) return alert("이미 존재하는 아이디 입니다.");
            }
        })
        .catch((err) => {
            console.error("회원가입 중 에러 발생");
        });
      
}
