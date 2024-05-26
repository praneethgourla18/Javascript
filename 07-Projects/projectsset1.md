# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-gpxbrg?file=01-colorSwitcher%2Findex.html)

# Solution code

## Project 1

```javascript
 
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
```

## project 2 solution

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```