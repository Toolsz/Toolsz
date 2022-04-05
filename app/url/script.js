function submit() {
  fetch('https://www.freecodecamp.com')
      .then(response =>console.log( response))
  .catch(err=>{console.log(err.message)})
}
console.log(submit());
/*
var name = "codemzy";$.get('https://www.freecodecamp.com/' + name, function(response) {  console.log(response);});

