const AboutPreviewText = ({ offsetY }) => {
  return (
    <div
      style={{
        transform: `translate(-${offsetY / 18}px, -${offsetY / 2270}px)`,
      }}
      className="about__inside-prevText"
    >
      <span>ООО “РегионСнаб” </span> с 2011 года ежегодно увеличивает свое
      присутствие на рынке нефтепродуктов, продавая ежегодно более 180 тысяч
      тонн нефтепродуктов и осуществляя перевозку собственным автопарком более
      400 тысяч тонн нефтепродуктов.
    </div>
  );
};

export default AboutPreviewText;
