import { addWishlist, getBrandBySlug } from '../api';
import Button from '../components/Button';
import Container from '../components/Container';
import Card from '../components/Card';
import BrandIcon from '../components/BrandIcon';
import getBrandColor from '../utils/getBrandColor';
import styles from './BrandPage.module.css';

function BrandPage() {
  const brand = getBrandBySlug('react-frontend-development');
  const brandColor = getBrandColor(brand?.code);

  const headerStyle = {
    borderTopColor: brandColor,
  };

  const handleAddWishlistClick = () => {
    addWishlist(brand?.slug);
  };

  return (
    <>
      <div className={styles.header} style={headerStyle}>
        <Container className={styles.content}>
          <BrandIcon photoUrl={brand.photoUrl} />
          <h1 className={styles.title}>{brand.title}</h1>
          <Button variant="round" onClick={handleAddWishlistClick}>
            + 코스 담기
          </Button>
          <p className={styles.summary}>{brand.summary}</p>
        </Container>
      </div>
      <Container className={styles.topics}>
        {brand.topics.map(({ topic }) => (
          <Card className={styles.topic} key={topic.slug}>
            <h3 className={styles.title}>{topic.title}</h3>
            <p className={styles.summary}>{topic.summary}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default BrandPage;
