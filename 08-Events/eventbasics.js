//Events invoke on some action

// document.getElementById("owl").onclick = function(){
//     alert("owl")
// }
//but we should use event listeners approach as it not only provides onclick but also propagstion features!!

// document.querySelector("#owl").addEventListener('click' , function(e){
//    console.log(e) //e is event obj here and outputing it will give pointer event 
//    console.log(e.target.width)
// },false)

//event propagation

// Event propagation in JavaScript is the mechanism that defines how events travel through the Document Object Model (DOM) tree. There are three phases of event propagation:

// Capturing Phase (Event Capturing): The event starts from the root of the DOM tree and propagates downwards to the target element.

// Bubbling Phase (Event Bubbling): The event propagates back up from the target element to the root of the DOM tree.


//  2 contexts
//  1)Event bubbling ==>inner to outer like clicked owl and clicked in ul (keep false in addEventListener)
//  2)Event capturing ==> outer to inner (keep false in addEventListener)

// document.querySelector("#images").addEventListener('click' , function(e){
//     console.log("clicked in ul")
    
// },false)

// document.querySelector("#owl").addEventListener('click' , function(e){
//     console.log("clicked on owl")
//     e.stopPropagation(); // to stop propagating further in both bubbling and capturing mode
// },false)

document.querySelector("#google").addEventListener('click' ,function(e){
    // console.log("google clicked")
     e.preventDefault();
    //  this prevents the defaluts as an example we can take the corresponding google link which will be prevented to open !

    // e.stopPropagation();
})

document.querySelector("#images").addEventListener('click' , function(e){
    // console.log(e.target.parentNode);

    let removeIt=e.target.parentNode

    if(e.target.tagName === 'IMG'){
       removeIt.remove();
    } //if we dont use the if block here and if we click on google elemnt whole ul will be delted as the parent node of google is ul .
    
    else{
        e.target.remove(); //this is to remove the google elemrnt
    }
    // removeIt.parentNode.removeChild(removeIt);
})