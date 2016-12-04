/**
 * Created by Олександр on 01.12.2016.
 */

/*var btn = document.getElementById('btn');
 var divForList = document.getElementById('divForList');
 var link = document.getElementById('link');

 /!*not the best practice*!/
 // btn.onclick = function(){
 //     console.log('click1');
 // };
 // btn.onmouseover = function(){
 //     console.log('on mouse over');
 // }

 btn.addEventListener('click', btnClickListener);
 // divForList.addEventListener('click', divClickListener/!*, true*!/); //third param
 // divForList.addEventListener('click', btnClickListener2/!*, true*!/); //third param
 // divForList.addEventListener('click', btnClickListener2/!*, true*!/); //third param
 link.addEventListener('click', linkClickListener/!*, true*!/); //third param

 function btnClickListener(event){
 // event.stopPropagation(); //stops bubbling up
 // event.stopImmediatePropagation(); // - stops all listeners for this event + no bubbling
 console.log('btn');
 }
 function btnClickListener2(event){
 // event.stopPropagation(); //stops bubbling up
 event.stopImmediatePropagation(); // - stops all listeners for this event + no bubbling of event
 console.log('btn#2');
 }
 function divClickListener(event){
 console.log('div');
 }

 function linkClickListener(event){
 event.preventDefault(); //prevent going to link
 console.log('link');
 }*/

//addEventListener doesn't work in some old Browsers - use attachEvent

var box = document.getElementsByClassName('box');
var parent = document.getElementsByClassName('parent')[0];

// divForList.addEventListener('click', btnClickListener2/!*, true*!/); //third param
for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('click', boxListener);
}
parent.addEventListener('click', parentListener);

function parentListener(event) {
    var newBox = document.createElement('div');
    newBox.setAttribute('class', 'box');
    newBox.addEventListener('click', boxListener);
    parent.appendChild(newBox);

}

function boxListener(event) {
    event.stopPropagation();
    parent.removeChild(event.target); //event.target - exact target that was invoked
}


