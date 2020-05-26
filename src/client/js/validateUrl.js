function validateUrl() {
    const url = document.getElementById('url').value;
    console.log("::: Running validateUrl :::", url);

    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    const isUrlValid = !!pattern.test(url);
    const urlValidMessage = isUrlValid ? 'Url Valid' : 'Url Invalid';

    const urlValidEl = document.getElementById('urlValidMessage');
    urlValidEl.innerHTML = urlValidMessage;
    urlValidEl.style.color = isUrlValid ? 'white' : 'red';

    return isUrlValid;
}

export { validateUrl }
