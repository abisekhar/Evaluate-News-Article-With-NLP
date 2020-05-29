import { validateUrl } from './validateUrl';


test("should call validateUrl", () => {
    document.body.innerHTML = '<p id="urlValidMessage"></p>';

    const inputs = [
        { url: "https://www.nytimes.com/2020/05/26/us/coronavirus-crime.html" },
        { url: "https://www.goodnewsnetwork.org/school-bus-drivers-arrange-aerial-tribute-to-grads-in-quarantine/" }
    ];

    inputs.forEach(input => {
        expect(validateUrl(input.url)).toBe(true);
    });
});
