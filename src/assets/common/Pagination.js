import s from './Pagination.module.css';

const Pagination = ({ totalCount, pageSize, currentPage, onSetCurrent }) => {
  let pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionsCount = Math.ceil(pagesCount / 10);
  let currentPortion = Math.ceil(currentPage / 10);

  let firstPage = Math.floor((currentPage - 1) / 10) * 10;
  let lastPage = firstPage + 9 + 1;
  const slicedPages = pages.slice(firstPage, lastPage);
  
  let nextPage = (currentPortion + 1) * 10 - 9;
  let previousPage = (currentPortion - 1) * 10;

  return (
    <div className={s.pagesBlock}>
      { currentPage > 10 && <span className={`${s.switchPages} ${s.firstPage}`} onClick={e => { onSetCurrent(1) }}></span> }
      { currentPage > 10 && <span className={`${s.switchPortion} ${s.previousPage}`} onClick={e => { onSetCurrent(previousPage) }} >PREV</span> }
      {slicedPages.map(p => <span className={`${p === currentPage && s.pageItem_active} ${s.pageItem}`}
        onClick={e => { onSetCurrent(p) }}>{p}</span>)
      }
      { currentPortion < portionsCount && <span className={`${s.switchPortion} ${s.nextPage}`} onClick={e => { onSetCurrent(nextPage) }}>NEXT</span> }
      { currentPortion < portionsCount && <span className={`${s.switchPages} ${s.lastPage}`} onClick={e => { onSetCurrent(pagesCount) }}></span> }
    </div>
  )
};

export default Pagination;