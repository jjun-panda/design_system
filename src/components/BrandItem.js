import Card from './Card';
import BrandIcon from './BrandIcon';
import Tags from './Tags';
import getBrandColor from '../utils/getBrandColor';
import styles from './BrandItem.module.css';

const DIFFICULTY = ['입문', '초급', '중급', '고급'];

function BrandItem({ brand }) {
  const showSummary = brand.summary && brand.title !== brand.summary;
  const brandColor = getBrandColor(brand.code);
  const difficulty = DIFFICULTY[brand.difficulty || 0];
  const thumbStyle = {
    borderColor: brandColor,
  };

  return (
    <Card className={styles.brandItem}>
      <div className={styles.thumb} style={thumbStyle}>
        <BrandIcon photoUrl={brand.photoUrl} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{brand.title}</h2>
        <p className={styles.description}>{showSummary && brand.summary}</p>
        <div>
          <Tags values={[brand.language, difficulty]} />
        </div>
      </div>
    </Card>
  );
}

export default BrandItem;
