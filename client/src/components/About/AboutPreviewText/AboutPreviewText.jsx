import { useParallax } from "@hooks/useParallax";
import { useMobile } from "@hooks/useMobile";

const AboutPreviewText = () => {
  const isMobile = useMobile();
  const offsetY = useParallax();
  return (
    <div
      style={{ transform: !isMobile && `translateX(-${offsetY / 18}px)` }}
      className="about__inside-prevText"
    >
      <span>ООО “РегионСнаб” </span> с 2011 года ежегодно увеличивает свое
      присутствие на рынке нефтепродуктов, продавая ежегодно более 180 тысяч
      тонн нефтепродуктов и осуществляя перевозку собственным автопарком более
      400 тысяч тонн нефтепродуктов
    </div>
  );
};

export default AboutPreviewText;
