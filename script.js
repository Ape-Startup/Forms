function saveDataAndContinue() {
    const form1 = document.getElementById('evaluation-form1');
    const data = new FormData(form1);
    
    // Save data to localStorage
    for (const [key, value] of data.entries()) {
        localStorage.setItem(key, value);
    }
    
    // Redirect to the next page
    window.location.href = 'avaliacao.html';
}

function saveDataAndFinish() {
    const form2 = document.getElementById('evaluation-form2');
    const data = new FormData(form2);
    
    // Save data to localStorage
    for (const [key, value] of data.entries()) {
        localStorage.setItem(key, value);
    }
    
    // Redirect to the completion page
    window.location.href = 'completo.html';
}
