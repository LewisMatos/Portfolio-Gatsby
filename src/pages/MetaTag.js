import React from "react"
import { Helmet } from "react-helmet"
import portfolio_1200x628 from "../../public/static/c65edfcd9b49f02e6398047a50f06286/3fa08/portfolio_1200x628.png"

let Metatag = () => {
  let googleAnalyticsId = "UA-118889114-1"
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

      {`<!-- Primary Meta Tags -->`}
      <title>Lewis Matos | Software Engineer </title>
      <meta name="title" content="Lewis Matos | Software Engineer " />
      <meta
        name="description"
        content="Love everything code. I strive for excellence, always pushing myself and learning something new."
      />

      <meta
        name="keywords"
        content="software,engineer, Software Engineer, Web developer,development, web, lewis, matos, matoslewis, lewismatos, javascript, react, redux, jquery, amazong web services, aws, php, developer"
      />

      {`<!-- Google Verification -->`}
      <meta
        name="google-site-verification"
        content="9v3oLHbMUMv4mxnXzSA6SBUnLUidtwhESIGb9leUQwk"
      />

      {`<!-- Open Graph / Facebook -->`}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://lewismatos.com/" />
      <meta property="og:title" content="Lewis Matos | Software Engineer " />
      <meta
        property="og:description"
        content="Love everything code. I strive for excellence, always pushing myself and learning something new."
      />
      <meta property="og:image" content={portfolio_1200x628} />

      {`<!-- Twitter -->`}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://lewismatos.com" />
      <meta name="twitter:site" content="@matoslewis" />
      <meta name="twitter:creator" content="@matoslewis" />
      <meta
        property="twitter:title"
        content="Lewis Matos | Software Engineer "
      />
      <meta
        property="twitter:description"
        content="Love everything code. I strive for excellence, always pushing myself and learning something new."
      />
      <meta property="twitter:image" content={portfolio_1200x628} />
    </Helmet>
  )
}
export default Metatag
