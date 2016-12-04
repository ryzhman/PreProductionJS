// var parent = document.getElementById('Hello');
// var lastChild = parent.child[parent.children.length-1];

// console.log(parent.children.length);
// var lastChild = parent.child[parent.children.length - 1];
//
// document.querySelector('div .divClass');
// document.querySelectorAll('div .divClass');
//
// var divClass = document.getElementsByClassName("divClass");
// console.log(divClass);


// console.log(parent);
/*array with links to all elements of node + text, comments etc*/
// console.log(parent.childNodes);

/*returns only elems*/
// var child = parent.children[0];
// console.log(child);

/*adding new elem to page*/
// var newElem = document.createElement('a');
// parent.appendChild(newElem); /*add element to the end of child array*/

// newElem.innerText = "New elem 'a'";
// newElem.setAttribute("href", "http://google.com");
// var href = newElem.getAttribute('href');
// console.log(href);
// parent.insertBefore(newElem, parent.children[1]); /*add elem to position*/

/*REMOVING ELEMENTS*/
// parent.removeChild(lastChild);

var menuItems = [
    {
        title: 'Home',
        href: '/home',
    },
    {
        title: 'Contacts',
        href: '/contacts',
        active: true
    }, {
        title: 'About',
        href: '/about'
    }];

(function () {
    renderMenu(menuItems);


    function renderMenu(menuItems) {
        var div = document.getElementById('parent');
        var list = document.createElement('ul');
        list.setAttribute('class', 'menu');
        /*creation of header for ul*/
        var header = document.createElement('h3');
        header.innerText = 'Useful links';

        for (var i = 0; i < menuItems.length - 1; i++) {
            createLi(menuItems[i], list);

        }

    }

    function createLi(item, list) {
        var li = document.createElement('li');
        if (item.active) {
            li.setAttribute('class', 'active');
        }
        list.appendChild(listElement1);

        addHref(item);
    }

    function addHref(item) {
        var href = document.createElement('a');
    }
}());




