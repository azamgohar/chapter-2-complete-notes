


// Symbol()  ✅
// CodeExample:
// library's code 
// let react = {
//     uid: 12,
//     model: "React Js",
//     // registrationId: ....... using uid here somehow
// }

// my code 
// react.uid  = 2;

// for example: we are using some library and it has this code in which it has setted the value of uid as 12 and I set uid as 2  in  my code no matter I know about the library's uid or not my ui's value will overwrite on that library's value and let suppose that I want registrationId from that library's code which depends on the uid that we have changed  by our own,  so the registrationId's value will also be changed and will return some wrong data because it is usingour given uid not the library's original one! and in these kind of cases Symbol works.

// For example:
// in library's code there is an object of agsmentor's details
let agsmentor = {
    name: "Äzam Gohar",
    uid: 1,
    age: 17,
    email:  "azamt149@gmmil.com",
};

// and let suppose my habbit is I always create a uid in  every object  so Icreate my own I didn't noticed or maybe I  don't  know that my library's  code already  have it's uid. so I'll use symbol for that so that It won't overwrite the already existed  data.

let myUid = Symbol("uid");
agsmentor[myUid] = "001";

let adminEmail = Symbol("aemail");
agsmentor[adminEmail] = "azamt149@gmail.com";

// So here my code  will  create a variable and then add  it into agsmentor object as a value and we havesetted it's value as 001 so  myUid which has name exactly same "uid will not overwrite already existed uid. but it will  add my uid as Symbol(uid): "001", it  is a little confusing but too good to use to be aware of these kinds  of mistakes

// in simple words: by using symbol we can create unique values and  we can use them anywhere as an identifier.
