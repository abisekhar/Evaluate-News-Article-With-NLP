function handleSubmit(event) {
    event.preventDefault();
    console.log("::: Form Submitted :::");
    // check what text was put into the form field
    if (Client.validateUrl()) {
        const url = document.getElementById('url').value;
        fetch('http://localhost:4200/sentiment?url=' + url)
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('results').innerHTML = '<p> Polarity: ' + res.polarity + '</p>'
                    + '<p> Subjectivity: ' + res.subjectivity + '</p>'
                    + '<p> Polarity Confidence: ' + res.polarity_confidence + '</p>'
                    + '<p> Subjectivity Confidence: ' + res.subjectivity_confidence + '</p>'
                    + '<p> Text: ' + res.text + '</p>';
            });
    }
    else {
        document.getElementById('results').innerHTML = '';
    }
}

export { handleSubmit }
