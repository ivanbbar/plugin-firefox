function detectHijackingThreats() {
    const hijackingThreats = [];
    const currentHostname = window.location.hostname;
  
    const anchorTags = Array.from(document.getElementsByTagName('a'));
    anchorTags.forEach((anchor) => {
      const href = anchor.getAttribute('href');
      if (href && !href.startsWith('#')) {
        const url = new URL(href, window.location.href);
        const { hostname } = url;
        if (hostname !== currentHostname && !hijackingThreats.includes(hostname)) {
          hijackingThreats.push(hostname);
        }
      }
    });
  
    const scriptTags = Array.from(document.getElementsByTagName('script'));
    scriptTags.forEach((script) => {
      const src = script.getAttribute('src');
      if (src) {
        const url = new URL(src, window.location.href);
        const { hostname } = url;
        if (hostname !== currentHostname && !hijackingThreats.includes(hostname)) {
          hijackingThreats.push(hostname);
        }
      }
    });
  
    const hijackingThreatsList = document.getElementById('hijacking-threats-list');
    hijackingThreatsList.innerHTML = ''; // Clear the list before adding new threats
  
    hijackingThreats.forEach((threat) => {
      const listItem = document.createElement('li');
      listItem.textContent = threat;
      hijackingThreatsList.appendChild(listItem);
    });
  
    return hijackingThreats;
  }
  
  // Usage example:
  window.addEventListener('DOMContentLoaded', detectHijackingThreats);
  