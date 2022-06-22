import Winter from '../public/winter.svg';
import Spring from '../public/spring.svg';
import Summer from '../public/summer.svg';
import Fall from '../public/fall.svg';
import styled from 'styled-components';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, selectPassport } from '../features/passport/passportSlice';

export default function ThemeButtonList() {
  const dispatch = useDispatch();
  const { theme } = useSelector(selectPassport);

  return (
    <>
      <StyledSvgDisplay
        onClick={() => dispatch(setTheme('winter'))}
        isActive={theme === 'winter'}
      >
        <StyledSvgWrapper>
          <Winter />
        </StyledSvgWrapper>
      </StyledSvgDisplay>
      <StyledSvgDisplay
        onClick={() => dispatch(setTheme('spring'))}
        isActive={theme === 'spring'}
      >
        <StyledSvgWrapper>
          <Spring />
        </StyledSvgWrapper>
      </StyledSvgDisplay>
      <StyledSvgDisplay
        onClick={() => dispatch(setTheme('summer'))}
        isActive={theme === 'summer'}
      >
        <StyledSvgWrapper>
          <Summer />
        </StyledSvgWrapper>
      </StyledSvgDisplay>
      <StyledSvgDisplay
        onClick={() => dispatch(setTheme('fall'))}
        isActive={theme === 'fall'}
      >
        <StyledSvgWrapper>
          <Fall />
        </StyledSvgWrapper>
      </StyledSvgDisplay>
    </>
  );
}

const StyledSvgDisplay = styled.div`
  border-radius: 999px;
  height: 40px;
  width: 40px;
  padding: 0.4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  ${({ isActive }) => {
    if (isActive) {
      return `
        background-color: hsl(283, 100%, 80%);
        border: 2px solid hsl(283, 100%, 80%);
        `;
    } else {
      return `
        background-color: hsl(283, 100%, 85%);
        border: 2px solid hsl(283, 100%, 80%);
        `;
    }
  }}
`;
