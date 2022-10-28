/* Add your JavaScript to this file */
window.onload = function(){
    var inputEnter = document.querySelector('input');
    var butn = document.querySelector('button');
    var displayMsg = document.getElementsByClassName('message');
    var frm = document.querySelector('form');
    var emailKeeper="";

   
    inputEnter.addEventListener('input', function (){
        emailKeeper = inputEnter.value
    })

    butn.addEventListener('click', function(e){
        e.preventDefault()
        if (emailKeeper.length == 0){
            var emptyMsg = document.createTextNode("Please enter a valid email address.")
            displayMsg[0].append(emptyMsg)
        }
        else{
            var msg = document.createTextNode('Thank you! Your email address ' + emailKeeper + ' has been added to our mailing list!')
            displayMsg[0].append(msg)
        }
    })
}