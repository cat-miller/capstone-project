import LabeledLinkButton from './LabeledLinkButton';
import Winter from '../public/winter.svg';
import Spring from '../public/spring.svg';
import Summer from '../public/summer.svg';
import Fall from '../public/fall.svg';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, selectPassport } from '../features/passport/passportSlice';

export default function ThemeButtonList() {
  const dispatch = useDispatch();
  const { theme } = useSelector(selectPassport);

  return (
    <Formik
      initialValues={{ theme }}
      onSubmit={values => dispatch(setTheme(values.theme))}
    >
      {({ values, handleChange, handleSubmit }) => (
        <StyledRadioGroup>
          <label>
            <StyledSvgDisplay isActive={values.theme === 'winter'}>
              <StyledSvgWrapper>
                <Winter />
              </StyledSvgWrapper>
            </StyledSvgDisplay>
            <StyledRadioButton
              onChange={event => {
                handleChange(event);
                handleSubmit();
              }}
              type="radio"
              name="theme"
              value="winter"
              className="themes"
            />
          </label>
          <label>
            <StyledSvgDisplay isActive={values.theme === 'spring'}>
              <StyledSvgWrapper>
                <Spring />
              </StyledSvgWrapper>
            </StyledSvgDisplay>
            <StyledRadioButton
              onChange={event => {
                handleChange(event);
                handleSubmit();
              }}
              name="theme"
              type="radio"
              value="spring"
              className="themes"
            />
          </label>
          <label>
            <StyledSvgDisplay isActive={values.theme === 'summer'}>
              <StyledSvgWrapper>
                <Summer />
              </StyledSvgWrapper>
            </StyledSvgDisplay>
            <StyledRadioButton
              onChange={event => {
                handleChange(event);
                handleSubmit();
              }}
              name="theme"
              type="radio"
              value="summer"
              className="themes"
            />
          </label>
          <label>
            <StyledSvgDisplay isActive={values.theme === 'fall'}>
              <StyledSvgWrapper>
                <Fall />
              </StyledSvgWrapper>
            </StyledSvgDisplay>
            <StyledRadioButton
              onChange={event => {
                handleChange(event);
                handleSubmit();
              }}
              name="theme"
              type="radio"
              value="fall"
              className="themes"
            />
          </label>
        </StyledRadioGroup>
      )}
    </Formik>
  );
}

const StyledRadioGroup = styled(Form)`
  display: flex;
  gap: 1.3rem;
  align-items: center;
`;

const StyledRadioButton = styled(Field)`
  display: none;
`;

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
        background-color: hsl(278, 100%, 80%);
        border: 2px solid hsl(278, 100%, 80%);
        `;
    } else {
      return `
        background-color: hsl(283, 100%, 85%);
        border: 2px solid hsl(283, 100%, 80%);
        `;
    }
  }}
`;
