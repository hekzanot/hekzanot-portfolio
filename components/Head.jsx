import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Mücahit's Profolio."
      />
      <meta
        name="keywords"
        content="Mücahit Eren Özcan, Mücahit, Özcan, frontend developer portfolio, software engineer, m. eren portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Mücahit's Portfolio" />
      <meta
        property="og:description"
        content="Mücahit Eren Özcan's Profolio."
      />
      <meta property="og:image" content="#" />
      <meta property="og:url" content="https://hekzanot.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Mücahit Eren Özcan',
};
