const fetchAndDisplayLocalStorage = async (tabs) => {
    let activeTab = tabs.pop();
    const localStorageList = document.getElementById("local-storage-list");
  
    const response = await browser.tabs.sendMessage(activeTab.id, {
      method: "localStorage",
    });
    const localStorageData = response.data;
    const localStorageLength = localStorageData.length;
  
    if (localStorageLength > 0) {
      for (let item of localStorageData) {
        let li = document.createElement("li");
        let content = document.createTextNode(item[0]);
        li.appendChild(content);
        localStorageList.appendChild(li);
      }
    } else {
      let li = document.createElement("li");
      let content = document.createTextNode("No local storage detected");
      li.appendChild(content);
      localStorageList.appendChild(li);
    }
  
  };
  
  function getActiveTab() {
    return browser.tabs.query({
      currentWindow: true,
      active: true,
    });
  }
  
  getActiveTab().then(fetchAndDisplayLocalStorage);
  