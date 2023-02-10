import s from './Pagination.module.css';

const Pagination = ({ totalCount, pageSize, currentPage, onSetCurrent }) => {
  let pagesCount = Math.ceil(totalCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let curP = currentPage;
  let curPF = ((curP - 5) < 0 ? 0 : curP - 4); // current page first
  let slicedPages = [
    (curP !== 1 && curP > 4) ? 1 : undefined,
    ...pages.slice(curPF, curPF + 5),
    (curP !== pagesCount && curP < pagesCount - 5) ? pagesCount : undefined];

  return (
    <div className={s.pagesBlock}>
      {slicedPages.map(p => <span className={`${p === curP && s.pageItem_active} ${s.pageItem}`}
        onClick={e => { onSetCurrent(p) }}>{p}</span>)
      }
    </div>
  )
};

export default Pagination;