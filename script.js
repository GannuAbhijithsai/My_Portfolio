let namein=document.querySelector('#inone > input');
let mailin=document.querySelector('#intwo > input');
let messagein=document.querySelector('#inthree > input');
const btin=document.getElementById('btn3');

btin.addEventListener('click',function(){
    namein.value="";
    mailin.value="";
    messagein.value="";
    alert("Your Message has been Sent Succesffuly")
})