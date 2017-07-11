import React from 'react'

export default ({markup, initialState, isDev}) =>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Server side Awesome React Refast</title>
      <meta name="description" content="Server side Awesome React Refast" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/favicon.ico"></link>
      <link href="styles.css" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    </head>
    <body>
      {
        // isDev? null : <div> put some prod script: google analytics etc</div>
      }
      <div className="app-container" dangerouslySetInnerHTML={{ __html: markup }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__APOLLO_STATE__=${JSON.stringify(initialState).replace(/</g, '\\u003c')};`,
        }}
      />
      <script type="text/javascript" src="frontend.bundle.js" />
    </body>
  </html>
