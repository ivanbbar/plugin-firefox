const fetchAndDisplayCookies = (tabs) => {
    let activeTab = tabs.pop();
    let tabDomain = activeTab.url.split("/")[2];
  
    let cookiesCount = 0;
    var getAllCookies = browser.cookies.getAll({
      url: activeTab.url,
    });
  
    getAllCookies.then((cookies) => {
      cookiesCount = cookies.length;
      var externalCookiesList = document.getElementById("external-cookie-list");
      var internalCookiesList = document.getElementById("internal-cookie-list");
      var cookiesCountElement = document.getElementById("cookies-count");
  
      if (cookies.length > 0) {
        let countText = document.createTextNode(
          "There are " + cookiesCount + " cookies on this page"
        );
        cookiesCountElement.appendChild(countText);
  
        for (let cookie of cookies) {
          let li = document.createElement("li");
          let content = "";
  
          if (cookie.session) {
            content = document.createTextNode("SESSION: " + cookie.name);
          } else {
            content = document.createTextNode("NAVIGATION: " + cookie.name);
          }
  
          li.appendChild(content);
  
          if (
            cookie.domain == tabDomain ||
            cookie.domain == "." + tabDomain ||
            cookie.domain == "www." + tabDomain ||
            cookie.domain == "www" + tabDomain ||
            "www." + cookie.domain == tabDomain ||
            "www" + cookie.domain == tabDomain ||
            "." + cookie.domain == tabDomain
          ) {
            internalCookiesList.appendChild(li);
          } else {
            externalCookiesList.appendChild(li);
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
  
  getActiveTab().then(fetchAndDisplayCookies);
  
