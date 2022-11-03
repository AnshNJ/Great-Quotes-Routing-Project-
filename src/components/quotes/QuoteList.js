import { Fragment } from 'react';
import { useHistory, useLocation, useReactMatch } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

// sorting function
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

// component
const QuoteList = (props) => {
  const history = useHistory()
  const location = useLocation()


  // default browser constructor, this helps us get the sort=asc from url
  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  function changeSortingHandler() {
    history.push({
      path: location.pathname,
      search: `?sort=${(isSortingAscending ? 'des' : 'asc')}`
    })
    // history.push('/quotes?sort=' + (isSortingAscending ? 'des' : 'asc'))
  }

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);


  return (
    <Fragment>
    <div className={classes.sorting}>
      <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
    </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
