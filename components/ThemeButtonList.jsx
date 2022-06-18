import LabeledLinkButton from './LabeledLinkButton';
import Winter from '../public/winter.svg';
import Spring from '../public/spring.svg';
import Summer from '../public/summer.svg';
import Fall from '../public/fall.svg';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import StyledSvgWrapper from '../components-styled/StyledSvgWrapper';

export default function ThemeButtonList() {
  return (
    <Formik
      initialValues={{ picked: '' }}
      onSubmit={values => console.log(values)}
    >
      <StyledRadioGroup>
        <label>
          <StyledSvgWrapper>
            <Winter />
          </StyledSvgWrapper>
          <StyledRadioButton
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
            checked
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
            name="theme"
            type="radio"
            value="fall"
            className="themes"
          />
        </label>
      </StyledRadioGroup>
    </Formik>
  );
}

const StyledRadioGroup = styled(Form)`
  display: flex;
  gap: 2.5rem;
  align-items: center;
`;

const StyledRadioButton = styled(Field)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
