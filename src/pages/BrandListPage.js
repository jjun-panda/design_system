import { useState } from 'react';
import ListPage from '../components/ListPage';
import Warn from '../components/Warn';
import BrandItem from '../components/BrandItem';
import { getBrand } from '../api';
import styles from './BrandListPage.module.css';
import searchBarStyles from '../components/SearchBar.module.css';
import searchIcon from '../assets/search.svg';

function BrandListPage() {
  const [keyword, setKeyword] = useState('');
  const brand = getBrand();

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  return (
    <ListPage
      variant="catalog"
      title="모든 코스"
      description="자체 제작된 코스들로 기초를 쌓으세요."
    >
      <form className={searchBarStyles.form}>
        <input
          name="keyword"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="검색으로 코스 찾기"
        ></input>
        <button type="submit">
          <img src={searchIcon} alt="검색" />
        </button>
      </form>

      <p className={styles.count}>총 {brand.length}개 코스</p>

      {brand.length === 0 ? (
        <Warn
          className={styles.emptyList}
          title="조건에 맞는 코스가 없어요."
          description="올바른 검색어가 맞는지 다시 한 번 확인해 주세요."
        />
      ) : (
        <div className={styles.brandList}>
          {brand.map((brand) => (
            <BrandItem key={brand.id} brand={brand} />
          ))}
        </div>
      )}
    </ListPage>
  );
}

export default BrandListPage;
