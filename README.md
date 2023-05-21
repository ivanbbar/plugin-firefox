# Green Cool Fox Plugin

![Green Cool Fox Logo](greencoolfox.png)

The Green Cool Fox plugin enhances your browsing experience by providing essential features related to privacy and security. It helps you stay informed about various aspects of web navigation and protects you from potential browser hijacking threats. This plugin offers the following functionalities:

## Features

1. **Third-Party Domain Connections**
   - The plugin tracks and displays connections to third-party domains during web navigation, giving you insights into the external resources loaded by websites.

2. **Potential Browser Hijacking Threats**
   - The plugin detects and alerts you about potential browser hijacking threats, including hijacking and hooking attempts, to ensure a secure browsing experience.

3. **Data Storage Detection**
   - The plugin identifies and notifies you about data storage on your device, specifically focusing on local storage using HTML5 technology. This helps you stay aware of the information stored by websites.

4. **Cookies**
   - The plugin provides information about the number and types of cookies injected when loading a page. It differentiates between first-party and third-party cookies, as well as session and navigation cookies, providing you with insights into the tracking mechanisms employed by websites.

## Scripts

1. **Third-Party Domain Connections**
    - Retrieves the active tab from the browser.
    - Sends a message to the active tab using the sendMessage function, requesting information about third-party domains.
    - Waits for the response from the active tab.
    - Extracts the number of third-party domains and the list of domains from the response.
    - Updates the user interface to display the number of third-party domains detected.

2. **Potential Browser Hijacking Threats**
    - Retrieves the current hostname of the web page.
    - Iterates through all anchor tags (`<a>`) in the document.
    - Checks the href attribute of each anchor tag and extracts the URL.
    - Compares the hostname of the extracted URL with the current hostname.
    - If the hostname differs and is not already present in the list of hijacking threats, it is added to the list.
    - Iterates through all script tags (`<script>`) in the document.
    - Checks the src attribute of each script tag and extracts the URL.
    - Compares the hostname of the extracted URL with the current hostname.
    - If the hostname differs and is not already present in the list of hijacking threats, it is added to the list.
    - Updates the user interface by populating the "Hijacking Threats" list with the identified threats.

3. **Data Storage Detection**
    - Retrieves the active tab from the browser.
    - Sends a message to the active tab using the browser API to request local storage data.
    - Receives the response, which contains the local storage data.
    - Determines the length of the local storage data array.
    - If local storage data is found: 
        - Iterates through each item in the local storage data array; 
        - Creates a list item (`<li>`) element for each item; 
        - Sets the content of the list item with the data item; 
        - Appends the list item to the local storage list in the user interface.
    - If no local storage data is found: 
        - Creates a list item (`<li>`) element with a message indicating no local storage is detected; 
        - Appends the list item to the local storage list in the user interface.

4. **Cookies**
    - Retrieves the active tab from the browser.
    - Extracts the domain from the URL of the active tab.
    - Initializes a counter variable to track the number of cookies.
    - Uses the browser API to fetch all cookies associated with the active tab's URL.
    - Receives the cookie data in the form of an array.
    - Determines the number of cookies by checking the length of the array.
    - Retrieves the HTML elements required for displaying the cookie information.
    - If cookies are found: 
        - Creates a text node with the count of detected cookies; 
        - Appends the text node to the "Cookies Quantity" heading element in the user interface; 
        - Iterates through each cookie in the array.; Creates a list item (`<li>`) element for each cookie; 
        - Sets the content of the list item to display the cookie name and type (session or navigation); 
        - Appends the list item to either the internal or external cookie list based on the cookie domain.
    - If no cookies are found: 
        - Creates a text node indicating that no cookies are detected; 
        - Appends the text node to the "Cookies Quantity" heading element in the user interface.

## License

The Green Cool Fox plugin is released under the Green Cool Company License. Green Cool Company (greencool.co) is a fictional holding that encompasses a diverse portfolio of companies, all driven by a shared commitment to sustainability, innovation, and making a positive impact on the environment. At the heart of the holding is a vision to create a greener and cooler future for generations to come. Join the Green Cool Movement.
