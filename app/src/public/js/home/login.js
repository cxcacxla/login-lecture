"use strict";


const id = document.querySelector("#id"),
    paword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

    console.log(id);
    console.log("hello");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        psword: psword.value,
    };
    
    fetch("/login", {
       method: "POST",
       headers: {
        "Content-Type": "application/json"
       },
       body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("로그인 중 에러 발생");
    });
    
}