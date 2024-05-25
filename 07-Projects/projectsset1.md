# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-gpxbrg?file=01-colorSwitcher%2Findex.html)

# Solution code

## Project 1

```javascript
const body = document.querySelector("body");

const buttons=document.querySelectorAll(".button");
console.log(buttons)

buttons.forEach(function(button){
  button.addEventListener('click' , function(e){
    console.log(e);
    console.log(e.target);

    if(e.target.id == "grey"){
      body.style.background = e.target.id;
    }
    if(e.target.id == "white"){
      body.style.background = e.target.id;
    }
    if(e.target.id == "yellow"){
      body.style.background = e.target.id;
    }
    if(e.target.id == "aqua"){
      body.style.background = e.target.id;
    }
  })
})
