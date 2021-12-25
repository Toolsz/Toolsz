const cookieBox = document.querySelector(".cookie"),
    acceptBtn = cookieBox.querySelector("button");

    acceptBtn.onclick = ()=>{
      document.cookie = "CookieBy=Danska; max-age="+60*60*24*30;
      if(document.cookie){
        cookieBox.classList.add("hide");
      }else{
        alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
      }
    }
    let checkCookie = document.cookie.indexOf("CookieBy=Danska");
    checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
