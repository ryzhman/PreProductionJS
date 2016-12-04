/**
 * Created by Олександр on 01.12.2016.
 */
var box = document.getElementsByClassName('box');
var parent = document.getElementsByClassName('parent')[0];

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


