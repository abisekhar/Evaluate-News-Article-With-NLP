function handleSubmit(event) {
    event.preventDefault();

    console.log("::: Form Submitted :::");
    const url = document.getElementById('url').value;
    // check what text was put into the form field
    if (Client.validateUrl(url)) {
        fetch('http://localhost:4200/sentiment?url=' + url)
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('results').innerHTML = '<p> Polarity: ' + res.polarity + '</p>'
                    + '<p> Subjectivity: ' + res.subjectivity + '</p>'
                    + '<p> Polarity Confidence: ' + res.polarity_confidence + '</p>'
                    + '<p> Subjectivity Confidence: ' + res.subjectivity_confidence + '</p>'
                    + '<p> Text: ' + res.text + '</p>';

                return true;
            });
    }
    else {
        document.getElementById('results').innerHTML = '';
        return false;
    }
}

import { validateUrl } from './validateUrl';

function jestHandleSubmit() {
    console.log("::: Form Submitted :::");
    const url = document.getElementById('url').value;
    // check what text was put into the form field
    if (validateUrl(url)) {
        document.getElementById('results').innerHTML = '<p> Polarity: Positive</p>'
            + '<p> Subjectivity: Unknown </p>'
            + '<p> Polarity Confidence: 0.5740143060684204 </p>'
            + '<p> Subjectivity Confidence: 0 </p>'
            + '<p> Text: In React Native I use to perform network requests, however is not an explicit</p>';
        return true;
    }
    else {
        document.getElementById('results').innerHTML = '';
        return false;
    }
}

export { handleSubmit, jestHandleSubmit }