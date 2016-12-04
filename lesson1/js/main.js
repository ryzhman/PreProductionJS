/**
 * Created by Олександр on 29.11.2016.
 */

var str = "string"; //new Object('string')
var num = 1;
var boolean = true;
var object = {name: "Homer", gender: "male", age: 49};
var nothing = null;
var undef = undefined;

var object2 = {name: "Homer", gender: "male", age: 49};
var object3 = object;


var users = [{
    name: 'admin',
    password: 'pass'
},
    {
        name: 'user',
        password: 'pass'
    }];

function askCredential() {
    var name = prompt("enter name");
    var pass = prompt("enter pass");
    return {
        'name': name,
        'pass': pass
    };
}
var credentials = askCredential();
checkCredentials(credentials);

function checkCredentials(credentials) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].name === credentials.name) {
            var flag = true;
            alert("hello " + credentials.name + ", Enter password please");
            console.log(credentials.pass);
            if (users[i].password !== credentials.pass) {
                while (flag) {
                    alert("Repeat password,  " + credentials.name);
                    pass = prompt("enter pass");
                    if (pass === credentials.pass) {
                        flag = false;
                        alert("hello " + credentials.name);
                    }
                }
            }
        }
    }
}




