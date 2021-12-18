const quoteText=document.querySelector(".quote"),
quoteBtn=document.querySelector("button"),
authorName=document.querySelector(".name"),
speechBtn=document.querySelector(".speech"),
copyBtn=document.querySelector(".copy"),
twitterBtn=document.querySelector(".twitter"),

synth=speechSynthesis;
  function randomQuote(){quoteBtn.classList.add("loading");
  quoteBtn.innerText="Loading...";
  fetch("https://free-quotes-api.herokuapp.com/").then(response=>response.json()).then(result=>{quoteText.innerText=result.quote;authorName.innerText=result.author||"Unknown";
  quoteBtn.classList.remove("loading");
  quoteBtn.innerText="Generate";});}

speechBtn.addEventListener("click",()=>{if(!quoteBtn.classList.contains("loading")){let utterance=new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);

synth.speak(utterance);
setInterval(()=>{!synth.speaking?speechBtn.classList.remove("active"):speechBtn.classList.add("active");},10);}});

copyBtn.addEventListener("click",()=>{navigator.clipboard.writeText(quoteText.innerText);});

twitterBtn.addEventListener("click",()=>{let twitterUrl=`https://twitter.com/intent/tweet?url=${quoteText.innerText} _${authorName.innerText}_`;window.open(twitterUrl,"_blank");});

quoteBtn.addEventListener("click",randomQuote);
