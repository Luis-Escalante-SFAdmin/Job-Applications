
// View Applications
document.querySelectorAll('.view-applications').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('viewApplicationsModal').style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('viewApplicationsModal').style.display = 'none';
});