import LabeledLinkButton from './LabeledLinkButton';
import Winter from '../public/winter.svg';
import Spring from '../public/spring.svg';
import Summer from '../public/summer.svg';
import Fall from '../public/fall.svg';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';
import { useDispatch } from 'react-redux';
import { setTheme } from '../features/passport/passportSlice';

export default function ThemeButtonList() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ theme: 'spring' }}
      onSubmit={values => dispatch(setTheme(values.theme))}
    >
      {({ values, handleChange, handleSubmit }) => (
        <StyledRadioGroup>
          <label>
            <StyledSvgWrapper>
              <Winter />
            </StyledSvgWrapper>
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
            <StyledSvgWrapper>
              <Spring />
            </StyledSvgWrapper>
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
            <StyledSvgWrapper>
              <Summer />
            </StyledSvgWrapper>
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
            <StyledSvgWrapper>
              <Fall />
            </StyledSvgWrapper>
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
  gap: 2.5rem;
  align-items: center;
`;

const StyledRadioButton = styled(Field)`
  display: none;
`;
