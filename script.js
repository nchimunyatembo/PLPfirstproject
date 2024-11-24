document.getElementById('frm-register').addEventListener('submit', async function(e) {
    e.preventDefault();

    const Id = document.getElementById('id').value; 
    const facility = document.getElementById('facility').value; 
    const patient = document.getElementById('patient').value; 
    const diagnosis = document.getElementById('diagnosis').value; 
    const admission = document.getElementById('admission').value; 
    const discharge = document.getElementById('discharge').value; 

    //send the request to the server
    const response = await fetch('/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ id,facility,patient,diagnosis,admission,discharge,})
    });

    const data = await response.json();

    alert(data.message);

});

document.getElementById('frm-search').addEventListener('submit', async function(e) {
    e.preventDefault();

    const id = document.getElementById('id').value; 
    const patient = document.getElementById('patient').value; 

    //send the request to the server
    const response = await fetch('/auth/search', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ id, patient })
    });

    const data = await response.json();

    alert(data.message + 'Welcome ' + data.id + ' of email address: ' + data.patient);

       
});