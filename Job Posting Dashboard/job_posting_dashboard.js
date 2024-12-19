//Get modal
let modal = document.getElementById('viewApplicationsModal');

//Get button that opens modal
let btn = document.getElementById('viewApplications');

//Get the span element that closes modal
let span = document.getElementsByClassName('close')[0];

//When user click on the button, open the modal
btn.onclick = function() {
    modal.style.display = 'block';
}

//When user clicks on the span (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

//When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if(event.taget == modal) {
        modal.style.display = 'none';
    }
}

document.querySelectorAll('.view-applications').forEach (button => {
    button.addEventListener('click', () => {
        document.getElementById('viewApplicationsModal').style.display = 'block';
        const jobId = button.getAttribute('data-job-id');
        window.location.href = `/applicants?jobId=${jobId}`;
    });
});

document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('viewApplicationsModal').style.display = 'none';
});
