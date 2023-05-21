const getCookies = (tabs) => {
  const tab = tabs.pop();
  const tabDomain = tab.url.split("/")[2];

  let countCookies = 0;
  const getAllCookies = browser.cookies.getAll({
    url: tab.url,
  });

  getAllCookies.then((cookies) => {
    countCookies = cookies.length;
    const extCookiesUlElement = document.getElementById("ext-cookie-list");
    const intCookiesUlElement = document.getElementById("int-cookie-list");
    const cookiesQtdH3Element = document.getElementById("cookies-qtd");

    if (cookies.length > 0) {
      const content = document.createTextNode(
        `${countCookies} Cookies detected`
      );
      cookiesQtdH3Element.appendChild(content);

      for (const cookie of cookies) {
        const li = document.createElement("li");
        let contentNode;

        if (cookie.session) {
          contentNode = document.createTextNode(`Session - ${cookie.name}`);
        } else {
          contentNode = document.createTextNode(`Navigation - ${cookie.name}`);
        }

        li.appendChild(contentNode);

        if (
          cookie.domain === tabDomain ||
          cookie.domain === `.${tabDomain}` ||
          cookie.domain === `www.${tabDomain}` ||
          cookie.domain === `www${tabDomain}` ||
          `www.${cookie.domain}` === tabDomain ||
          `www${cookie.domain}` === tabDomain ||
          `.${cookie.domain}` === tabDomain
        ) {
          intCookiesUlElement.appendChild(li);
        } else {
          extCookiesUlElement.appendChild(li);
        }
      }
    }
  });
};

function getActiveTab() {
  return browser.tabs.query({
    currentWindow: true,
    active: true,
  });
}

getActiveTab().then(getCookies);