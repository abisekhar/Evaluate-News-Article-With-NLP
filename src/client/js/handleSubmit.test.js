import { jestHandleSubmit } from './handleSubmit';

describe("jestHandleSubmit function", () => {
    test("should call jestHandleSubmit", () => {
        document.body.innerHTML = '<form onsubmit="return Client.handleSubmit(event)">' +
        '<input id="url" type="url" name="input" value="https://www.nytimes.com/2020/05/26/us/coronavirus-crime.html" placeholder="Article Url" required>' +
        '<p id="urlValidMessage"></p>' +
        '<input id="submit" type="submit" name="" value="submit" onclick="return Client.handleSubmit(event)" onsubmit="return Client.handleSubmit(event)"></form>' +
        '<div id="results"></div>';
        expect(jestHandleSubmit()).toBe(true);
    });
});