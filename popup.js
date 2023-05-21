const getExternalResourceUrls = () => {
    const resourceTags = ["link", "img", "script", "iframe", "source", "embed"];
    const urls = Array.from(document.querySelectorAll(resourceTags.join(","))).map(
      (tag) => tag.href || tag.src
    );
  
    return {
      urls: urls,
      count: urls.length,
    };
  };
  
  browser.runtime.onMessage.addListener((request, _, sendResponse) => {
    if (request.method === "localStorage") {
      sendResponse({
        data: Object.entries(localStorage),
      });
    } else if (request.method === "thirdPartyDomains") {
      sendResponse({
        data: Object.entries(getExternalResourceUrls()),
      });
    }
  
    return true;
  });
  