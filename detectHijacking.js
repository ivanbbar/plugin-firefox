function detectBrowserHijackingThreats() {
    if (window !== window.top) {
        const threatItem = document.createElement("li");
        threatItem.textContent = "Window object has been modified (potential browser hijacking threat)";
        document.getElementById("hijacking-threats-list").appendChild(threatItem);
    }
  
    if (document !== window.top.document) {
        const threatItem = document.createElement("li");
        threatItem.textContent = "Document object has been modified (potential browser hijacking threat)";
        document.getElementById("hijacking-threats-list").appendChild(threatItem);
    }
  
    if (location !== window.top.location) {
        const threatItem = document.createElement("li");
        threatItem.textContent = "Document object has been modified (potential browser hijacking threat)";
        document.getElementById("hijacking-threats-list").appendChild(threatItem);
    }
  
    if (navigator !== window.top.navigator) {
        const threatItem = document.createElement("li");
        threatItem.textContent = "Document object has been modified (potential browser hijacking threat)";
        document.getElementById("hijacking-threats-list").appendChild(threatItem);
    }
  }
  

  
  detectBrowserHijackingThreats();
  