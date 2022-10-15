import mock from './mock.json';
const { brand, questions } = mock;

function filterByKeyword(items, keyword) {
  const lowered = keyword.toLowerCase();
  return items.filter(({ title }) => title.toLowerCase().includes(lowered));
}

export function getBrand(keyword) {
  if (!keyword) return brand;
  return filterByKeyword(brand, keyword);
}

export function getBrandBySlug(brandSlug) {
  return brand.find((brand) => brand.slug === brandSlug);
}

export function getQuestions(keyword) {
  if (!keyword) return questions;
  return filterByKeyword(questions, keyword);
}

export function getQuestionById(questionId) {
  return questions.find((question) => question.id === questionId);
}

const WISHLIST_KEY = 'codethat-wishlist';
const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '{}');

export function addWishlist(brandSlug) {
  wishlist[brandSlug] = true;
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

export function deleteWishlist(brandSlug) {
  delete wishlist[brandSlug];
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

export function getWishlist() {
  return brand.filter((brand) => wishlist[brand.slug]);
}
