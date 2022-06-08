import { Parallax } from "react-scroll-parallax";
import { useMobile } from "@hooks/useMobile";

const AboutPreviewText = () => {
  const isMobile = useMobile();

  return (
    <Parallax
      translateX={!isMobile && [30, -40]}
      className="about__inside-prevText"
    >
      <span>ООО “РегионСнаб” </span> с 2011 года ежегодно увеличивает свое
      присутствие на рынке нефтепродуктов, продавая ежегодно более 180 тысяч
      тонн нефтепродуктов и осуществляя перевозку собственным автопарком более
      400 тысяч тонн нефтепродуктов
    </Parallax>
  );
};

export default AboutPreviewText;
