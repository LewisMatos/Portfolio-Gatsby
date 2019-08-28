import React from "react"
import { Helmet } from "react-helmet"
import portfolio_1200x628 from '../images/portfolio_1200x628.png';

let Metatag = () => {
  return (
    <Helmet>
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

      {`<!-- pinterest -->`}
      <meta name="p:domain_verify" content="19c2df8d74ee3fadfc189ef6c3786630" />

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
      <link rel="stylesheet" href="https://indestructibletype.com/fonts/Jost.css"/>
    </Helmet>
  )
}
export default Metatag
