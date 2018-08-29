document.getElementById("contactForm").addEventListener("submit", submitForm);
function submitForm(e){
    e.preventDefault();


var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var message = getInputVal('message');
document.getElementById('contactForm').reset();

}

function getInputVal(id){
  return document.getElementById(id).value;
}

var config = {
    apiKey: "AIzaSyBSdmU619I6ZnshCsI4gDRA2C0D2uxWZUs",
    authDomain: "honest-feedback-8ade1.firebaseapp.com",
    databaseURL: "https://honest-feedback-8ade1.firebaseio.com",
    projectId: "honest-feedback-8ade1",
    storageBucket: "honest-feedback-8ade1.appspot.com",
    messagingSenderId: "936424540730"
  };
  firebase.initializeApp(config);

  var messagesRef = firebase.database().ref('messages');


function saveMessage(name, company, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    message:message
  });
}
saveMessage(name, company, email, message);
var newMessageref = messagesRef.push() 


// Show alert
document.querySelector('.alert').style.display = 'block';
// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';},3000);
