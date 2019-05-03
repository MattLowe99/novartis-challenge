# Novartis Coding Challenge
by Matthew Lowe


The following implements the New York Times Search API (https://developer.nytimes.com/docs/articlesearch-product/1/overview) to return article results matching a search query. 

There is three files included:
- server.js: Using Node.js, creates an HTTP server on http://localhost:8080/ to host the webpage and allow user interaction.
- index.html: Built with Bootstrap, displays all the content in a simple, but organized webpage.
- localScripts.js: Handles all calls to New York Times' API using Ajax requests via GET method. Using the response, all relevant information is wrapped with HTML and shown on the webpage.  

## Features
- Headline, thumbnail (if available), publication date, and document type displayed for each result.
- Compact card display system for each result.
- User specified start and end dates to filter search results.
- Accessible with http: protocol using Node.js server.
- Page backward and forward through large result sets.
- Snippet of article displayed when hovering over headline.