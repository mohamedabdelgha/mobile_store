

//defining html elements
const sellsdel = document.querySelectorAll('#sellsdel')
const sellsup = document.querySelectorAll('#sellsup')
const windowcon = document.getElementById('windowcon')
const closedetwin = document.getElementById('closedetwin')
//-----------------------------------------------------------------------------------------------------------

sellsdel.forEach((sellsdel)=>{
    sellsdel.onclick=()=>{
        const metadata = sellsdel.getAttribute('metadata')
        windowcon.style.visibility = 'visible'
        windowcon.style.opacity = '1'
        document.getElementById('detailcontainer').innerHTML=metadata
        
    }
})
sellsup.forEach((sellsup)=>{
    sellsup.onclick=()=>{
        const metadata = sellsup.getAttribute('metadata')
        windowcon.style.visibility = 'visible'
        windowcon.style.opacity = '1'
        document.getElementById('detailcontainer').innerHTML=metadata
    }
})
closedetwin.addEventListener('click',()=>{
    windowcon.style.top='0'
    windowcon.style.visibility='hidden'
    windowcon.style.opacity='0'
})
//-----------------------------------------------------------------------------------------------------------
const billbtn = document.querySelectorAll('#billbtn');
billbtn.forEach((billbtn)=>{
    billbtn.onclick=()=>{
        const metadata = billbtn.getAttribute('metadata')
        windowcon.style.visibility = 'visible'
        windowcon.style.opacity = '1'
        document.getElementById('detailcontainer').innerHTML=metadata
        document.getElementById('detailcontainer').style.minHeight="50vh"
        document.getElementById('detailcontainer').style.top="10%"
        document.getElementById('detailcontainer').style.justifyContent="start"
        // Get all date input elements
        const dateInputs = document.querySelectorAll('input[type="date"]');
        // Get today's date
        const today = new Date();
        // Loop through each input and set its value to today's date
        dateInputs.forEach(input => {
            input.value = today.toISOString().split('T')[0];
        });
    }
})
//-----------------------------------------------------------------------------------------------------------
