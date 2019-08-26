import React from "react"
import { Helmet } from "react-helmet"



let HeadSection = () => {
  let googleAnalyticsId = "UA-118889114-1";
  return (
    <Helmet>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}');
        `}
      </script>

      <title>Lewis Matos | Software Engineer </title>
      <link
        rel="shortcut icon"
        href="https://s3.amazonaws.com/lewismatos.com/images/_71A6572.jpg"
        hreflang="en-us"
      />

      <meta property="og:title" content="Resume | Lewis Matos" />
      <meta
        property="og:description"
        content="Love everything code. I strive for excellence, always pushing myself and learning something new."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://s3.amazonaws.com/lewismatos.com/resume/LewisResumeDraft.pdf"
      />
      <meta property="og:site_name" content="Resume | Lewis Matos" />
      <meta
        property="og:image"
        content="https://s3.amazonaws.com/lewismatos.com/images/og.png"
      />
      <meta property="og:image:width" content="3840" />
      <meta property="og:image:height" content="1964" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:locale" content="en_US" />
      <meta
        name="description"
        content="Love everything code. I strive for excellence, always pushing myself and learning something new."
      />
      <meta
        name="keywords"
        content="software,engineer, development, web, lewis, matos, matoslewis, lewismatos, javascript, react, redux, jquery, amazong web services, aws, php, developer"
      />

      <meta itemprop="name" content="Resume | Lewis Matos" />
      <meta
        itemprop="description"
        content="Love everything code. I strive for excellence, always pushing myself and learning something new."
      />
      <meta
        itemprop="image"
        content="https://s3.amazonaws.com/lewismatos.com/images/og.png"
      />

      <meta
        name="google-site-verification"
        content="9v3oLHbMUMv4mxnXzSA6SBUnLUidtwhESIGb9leUQwk"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="http://lewismatos.com" />
      <meta name="twitter:site" content="@matoslewis" />
      <meta name="twitter:creator" content="@matoslewis" />
      <meta name="twitter:title" content="Resume | Lewis Matos" />
      <meta
        name="twitter:description"
        content="Love everything code. I strive for excellence, always pushing myself and learning something new."
      />
      <meta
        name="twitter:image:src"
        content="https://s3.amazonaws.com/lewismatos.com/images/og.png"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu"
        rel="stylesheet"
      />
      <link
        rel="icon"
        type="image/x-icon"
        href="https://s3.amazonaws.com/lewismatos.com/favicon.ico"
      />
    </Helmet>
  )
}
export default HeadSection