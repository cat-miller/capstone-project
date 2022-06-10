import PageWrapper from '../components/PageWrapper';
import StyledHeader from '../components-styled/StyledHeader';
import StyledButton from '../components-styled/StyledButton';
import StyledCardsWrapper from '../components-styled/StyledCardsWrapper';
import StyledIconList from '../components-styled/StyledIconList';
import StyledIcon from '../components-styled/StyledIcon';
import { useSelector } from 'react-redux';
import { selectVillagers } from '../features/villagers/villagerSlice';
import { selectSeaCreatures } from '../features/seaCreatures/seaCreatureSlice';
import { selectBugs } from '../features/bugs/bugSlice';
import { selectFishes } from '../features/fishes/fishSlice';
import Link from 'next/link';
import StyledLink from '../components-styled/StyledLink';

export default function Home({ toggleTheme }) {
  const {
    favorites,
    neighbors,
    data: villagers,
  } = useSelector(selectVillagers);

  const { data: seaCreatures } = useSelector(selectSeaCreatures);

  const { data: bugs } = useSelector(selectBugs);

  const { data: fishes } = useSelector(selectFishes);

  return (
    <PageWrapper>
      <StyledHeader>ANIMAL CROSSING JOURNAL</StyledHeader>

      <StyledCardsWrapper>
        <StyledButton className="themebutton" onClick={toggleTheme}>
          Switch Theme
        </StyledButton>
        <h3>VILLAGERS</h3>
        <StyledIconList className="villager">
          {villagers?.slice(0, 9).map(villager => (
            <Link key={villager.id} passHref href={`/villagers/${villager.id}`}>
              <StyledIcon
                className="villager"
                src={villager.iconUri}
                alt=""
                key={villager.id}
              />
            </Link>
          ))}
          <Link passHref href="/villagers">
            <StyledLink className="villager">...</StyledLink>
          </Link>
        </StyledIconList>
        <h3>NEIGHBORS</h3>
        <StyledIconList className="villager">
          {neighbors.length ? (
            neighbors?.slice(0, 10).map(id => {
              const neighbor = villagers.find(villager => villager.id === id);
              if (!neighbor) return;
              return (
                <Link
                  key={neighbor.id}
                  passHref
                  href={`/villagers/${neighbor.id}`}
                >
                  <StyledIcon
                    className="villager"
                    src={neighbor.iconUri}
                    alt=""
                    key={neighbor.id}
                  />
                </Link>
              );
            })
          ) : (
            <p>
              You haven&apos;t chosen any neighbors yet. Go to and{' '}
              <Link passHref href="/villagers">
                villagers
              </Link>{' '}
              and choose some.
            </p>
          )}
        </StyledIconList>
        <h3>FAVORITES</h3>
        <StyledIconList className="villager">
          {favorites.length ? (
            <>
              {favorites?.slice(0, 9).map(id => {
                const favorite = villagers.find(villager => villager.id === id);
                if (!favorite) return;
                return (
                  <StyledIcon
                    className="villager"
                    src={favorite.iconUri}
                    alt=""
                    key={favorite.id}
                  />
                );
              })}

              <Link passHref href="/villagers">
                <StyledLink className="villager">...</StyledLink>
              </Link>
            </>
          ) : (
            <p>
              You haven&apos;t chosen any neighbors yet. Go to and{' '}
              <Link passHref href="/villagers">
                villagers
              </Link>{' '}
              and choose some.
            </p>
          )}
        </StyledIconList>
        <h3>SEA CREATURES</h3>
        <StyledIconList className="seaCreature">
          {seaCreatures?.slice(0, 9).map(seaCreature => (
            <StyledIcon
              className="seaCreature"
              src={seaCreature.iconUri}
              alt=""
              key={seaCreature.id}
            />
          ))}
          <Link passHref href="/seacreatures">
            <StyledLink className="seaCreature">...</StyledLink>
          </Link>
        </StyledIconList>
        <h3>FISHES</h3>
        <StyledIconList className="fish">
          {fishes?.slice(0, 9).map(fish => (
            <StyledIcon
              className="fish"
              src={fish.iconUri}
              alt=""
              key={fish.id}
            />
          ))}
          <Link passHref href="/fishes">
            <StyledLink className="fish">...</StyledLink>
          </Link>
        </StyledIconList>
        <h3>BUGS</h3>
        <StyledIconList className="bug">
          {bugs?.slice(0, 9).map(bug => (
            <StyledIcon className="bug" src={bug.iconUri} alt="" key={bug.id} />
          ))}
          <Link passHref href="/bugs">
            <StyledLink className="bug">...</StyledLink>
          </Link>
        </StyledIconList>
      </StyledCardsWrapper>
    </PageWrapper>
  );
}
