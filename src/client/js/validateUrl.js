function validateUrl(url) {
  console.log("::: Running validateUrl :::", url);

  const pattern = new RegExp('^(https?:\\/\\/)?' +
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    '((\\d{1,3}\\.){3}\\d{1,3}))' +
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
    '(\\?[;&a-z\\d%_.~+=-]*)?' +
    '(\\#[-a-z\\d_]*)?$', 'i');
  const isUrlValid = !!pattern.test(url);

  const urlValidMessage = isUrlValid ? 'Url Valid' : 'Url Invalid';
  const urlValidEl = document.getElementById('urlValidMessage');
  urlValidEl.innerHTML = urlValidMessage;
  urlValidEl.style.color = isUrlValid ? 'white' : 'red';


  return isUrlValid;
}

export { validateUrl }