import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'merenozcan.dev@gmail.com',
    href: 'mailto:merenozcan.dev@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/mucahit-eren-ozcan',
    href: 'https://www.linkedin.com/in/mucahit-eren-ozcan/',
  },
  {
    social: 'GitHub',
    link: 'github.com/hekzanot',
    href: 'https://github.com/hekzanot',
  },
  {
    social: 'Twitter',
    link: 'twitter.com/hekzanot',
    href: 'https://twitter.com/hekzanot',
  },
  {
    social: 'Website',
    link: 'hekzanot-portfolio',
    href: 'https://hekzanot-portfolio.vercel.app/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       <p className={styles.line}>
       tag: <a>production</a>
        </p>
      <p className={styles.line}>
        <span>M. Eren</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>İletişim</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
