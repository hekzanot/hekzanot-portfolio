import { pdfjs, Document, Page, PDFDownloadLink } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './MucahitErenOzcan-CV.pdf';

const AboutPage = () => {
  return (
    <>
      <h3>Hakkımda</h3><br/>
      <ul>
        <li><span role="img" aria-label="book">📖</span> Yazılım Mühendisliği @ <a href='#'>Fırat Üniversitesi</a>.</li>
        <li><span role="img" aria-label="graduate-hat">🎓 </span> Güncel Fronted Teknolojileri üzerine araştırmalar.</li>
        <li><span role="img" aria-label="light-bulb">💡</span> Freelance işlere ve iş tekliflerine açık.</li>
        <li><span role="img" aria-label="laptop">💻</span> Şuan da VueJS ve NodeJS Framework'leri üzerinde çalışıyor.</li>
      </ul>
      <br/>
      <center>
        <h3>CV (<a href={myResume} download="MucahitErenOzcan-CV-TR.pdf">İndir</a>)</h3>
        <br />
        <Document file={myResume}>
          <Page pageIndex={0} />
        </Document>
      </center>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
