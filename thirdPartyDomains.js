const fetchAndDisplayThirdPartyDomains = async (tabs) => {
    let activeTab = tabs.pop();
    const thirdPartyDomainsCountElement = document.getElementById(
      "third-party-domains-qtd"
    );
  
    const response = await browser.tabs.sendMessage(activeTab.id, {
      method: "thirdPartyDomains",
    });
  
    const numberOfDomains = response.data[1][1];
    const thirdPartyDomains = response.data[0][1];
  
    if (numberOfDomains > 0) {
      let content = document.createTextNode(
        "There are " + numberOfDomains + " third-party domains on this page"
      );
      thirdPartyDomainsCountElement.appendChild(content);
    } else {
      let content = document.createTextNode(
        "There are no third-party domains on this page"
      );
      thirdPartyDomainsCountElement.appendChild(content);
    }

  };
  
  function getActiveTab() {
    return browser.tabs.query({
      currentWindow: true,
      active: true,
    });
  }
  
  getActiveTab().then(fetchAndDisplayThirdPartyDomains);
  