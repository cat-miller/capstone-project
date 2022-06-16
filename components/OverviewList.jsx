import Link from 'next/link';
import StyledOverviewImage from '../components-styled/StyledOverviewImage';
import StyledShowMore from '../components-styled/StyledShowMore';
import StyledOverviewList from '../components-styled/StyledOverviewList';
import StyledListWrapper from '../components-styled/StyledListWrapper';

function OverviewList({ origin, bookmarks, target, title }) {
  const length = bookmarks.length === 10 ? 10 : 9;
  return (
    <StyledListWrapper>
      <h3>{title.toUpperCase()}</h3>
      <StyledOverviewList className={target}>
        {bookmarks.length ? (
          <>
            {bookmarks?.slice(0, length).map(id => {
              const bookmark = origin.find(element => element.id === id);
              if (!bookmark) return;
              return (
                <Link
                  key={bookmark.id}
                  passHref
                  href={`/${target}/${bookmark.id}`}
                >
                  <StyledOverviewImage
                    className={target}
                    src={bookmark.iconUri}
                    alt=""
                    key={bookmark.id}
                  />
                </Link>
              );
            })}
            {length === 9 && (
              <Link passHref href={`/${target}`}>
                <StyledShowMore className={target}>...</StyledShowMore>
              </Link>
            )}
          </>
        ) : (
          <p>
            You haven&apos;t chosen any {title} yet. Go to{' '}
            <Link passHref href={`/${target}`}>
              {target}
            </Link>{' '}
            and choose some.
          </p>
        )}
      </StyledOverviewList>
    </StyledListWrapper>
  );
}

export default OverviewList;
