import './globals.css'

export const metadata = {
  title: 'MD Abul Ala Moududi | Portfolio',
  description: 'Undergraduate CSE Student | Research Enthusiast | ML & AI Learner',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="MD Abul Ala Moududi - Undergraduate CSE Student | Research Enthusiast | ML & AI Learner | National Institute of Textile Engineering & Research (NITER)" />
        <meta name="keywords" content="MD Abul Ala Moududi, CSE Student, Research, ML, AI, NITER" />
        <meta name="author" content="MD Abul Ala Moududi" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="MD Abul Ala Moududi | Portfolio" />
        <meta property="og:description" content="Undergraduate CSE Student | Research Enthusiast | ML & AI Learner" />
        <meta property="og:image" content="https://moududi.researchustad.org/moududi (2).jpeg" />
        <meta property="og:url" content="https://moududi.researchustad.org/" />
        <meta property="og:type" content="profile" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MD Abul Ala Moududi | Portfolio" />
        <meta name="twitter:description" content="Undergraduate CSE Student | Research Enthusiast | ML & AI Learner" />
        <meta name="twitter:image" content="https://moududi.researchustad.org/moududi (2).jpeg" />
        
        <link rel="icon" type="image/png" href="/images/moududilogo-circle.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;family=Charter:wght@400;700&amp;display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}