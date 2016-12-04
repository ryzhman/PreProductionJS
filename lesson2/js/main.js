// // var parent = document.getElementById('Hello');
// // var lastChild = parent.child[parent.children.length-1];
//
// // console.log(parent.children.length);
// // var lastChild = parent.child[parent.children.length - 1];
// //
// // document.querySelector('div .divClass');
// // document.querySelectorAll('div .divClass');
// //
// // var divClass = document.getElementsByClassName("divClass");
// // console.log(divClass);
//
//
// // console.log(parent);
// /*array with links to all elements of node + text, comments etc*/
// // console.log(parent.childNodes);
//
// /*returns only elems*/
// // var child = parent.children[0];
// // console.log(child);
//
// /*adding new elem to page*/
// // var newElem = document.createElement('a');
// // parent.appendChild(newElem); /*add element to the end of child array*/
//
// // newElem.innerText = "New elem 'a'";
// // newElem.setAttribute("href", "http://google.com");
// // var href = newElem.getAttribute('href');
// // console.log(href);
// // parent.insertBefore(newElem, parent.children[1]); /*add elem to position*/
//
// /*REMOVING ELEMENTS*/
// // parent.removeChild(lastChild);
//
// var menuItems = [
//     {
//         title: 'Home',
//         href: '/home',
//     },
//     {
//         title: 'Contacts',
//         href: '/contacts',
//         active: true
//     }, {
//         title: 'About',
//         href: '/about'
//     }];
//
// (function () {
//     /*creating ul elem in the div*/
//
//     renderMenu(menuItems);
//
//
//     function renderMenu(menuItems) {
//         var div = document.getElementById('divForList');
//         var list = document.createElement('ul');
//         list.setAttribute('class', 'menu');
//         /*creation of header for ul*/
//         var header = document.createElement('h3');
//         header.innerText = 'Useful links';
//
//         for (var i = 0; i < menuItems.length - 1; i++) {
//             createLi(menuItems[i], list);
//
//         }
//
//     }
//
//     function createLi(item, list) {
//         var li = document.createElement('li');
//         if (item.active) {
//             li.setAttribute('class', 'active');
//         }
//         list.appendChild(listElement1);
//
//         addHref(item);
//     }
//
//     function addHref(item) {
//         var href = document.createElement('a');
//     }
//
//     //todo from here!!!!
//
//     /*butch creation of li elems or optimization*/
//     listElem.appendChild(listElement2);
//     listElem.appendChild(listElement3);
//
//     /*adding a href to each li*/
//     var firstListElem = listElem.children[0];
//     var homeHref = document.createElement('a');
//     homeHref.setAttribute('href', '/home');
//     homeHref.innerText = "Home";
//
//     var secondListElem = listElem.children[1];
//     var contactsHref = document.createElement('a');
//     contactsHref.setAttribute('href', '/contacts');
//     contactsHref.innerText = "Contacts";
//
//     var thirdListElem = listElem.children[2];
//     var aboutHref = document.createElement('a');
//     aboutHref.setAttribute('href', '/home');
//     aboutHref.innerText = "Home";
//
//     /*butch adding a href to each li*/
//     div.insertBefore(header, div.children[div.childElementCount - 1]);
//     div.setAttribute('class', 'myDiv');
//     firstListElem.appendChild(homeHref);
//     secondListElem.appendChild(contactsHref);
//     thirdListElem.appendChild(aboutHref);
//
//     /*adding ul to div*/
//     div.appendChild(list);
// })();
//

