import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPassport,
  setPassport,
} from '../features/passport/passportSlice';

export default function PassportForm() {
  const dispatch = useDispatch();
  const passport = useSelector(selectPassport);
  return (
    <Formik
      enableReinitialize
      initialValues={passport}
      onSubmit={values => dispatch(setPassport(values))}
    >
      <StyledForm>
        <StyledField
          maxlength="10"
          name="island.user"
          placeholder=" USER NAME"
        />
        <StyledField
          maxlength="10"
          name="island.name"
          placeholder=" ISLAND NAME"
        />
        <StyledInputWrapper>
          <StyledLabel>Fruit</StyledLabel>
          <Field as="select" name="island.fruit">
            <option value="Apple">APPLE</option>
            <option value="Peach">PEACH</option>
            <option value="Cherry">CHERRY</option>
            <option value="Orange">ORANGE</option>
            <option value="Pear">PEAR</option>
          </Field>
          <StyledLabel>Switch Code</StyledLabel>
          <StyledField
            maxlength="12"
            type="number"
            name="code.switch"
            placeholder=" 0000 - 0000 - 0000"
          />
          <StyledLabel>Dream ID</StyledLabel>
          <StyledField
            maxlength="12"
            type="number"
            name="code.dreamId"
            placeholder=" 0000 - 0000 - 0000"
          />
          <StyledLabel>Creator ID</StyledLabel>
          <StyledField
            maxlength="12"
            type="number"
            name="code.creatorId"
            placeholder=" 0000 - 0000 - 0000"
          />
        </StyledInputWrapper>
        <StyledSubmit type="submit">Submit</StyledSubmit>
      </StyledForm>
    </Formik>
  );
}

const StyledForm = styled(Form)`
  display: grid;
  gap: 0.5rem;
  justify-items: end;
`;

const StyledField = styled(Field)`
  border: 2px solid hsl(273, 100%, 80%);
  border-radius: 26px;
  padding: 0.1rem 0.4rem;
`;

const StyledSubmit = styled.button`
  border: 2px solid hsl(273, 100%, 80%);
  border-radius: 26px;
  color: white;
  background-color: hsl(273, 100%, 80%);
  justify-self: center;
`;

const StyledLabel = styled.label`
  border: 2px solid hsl(273, 100%, 80%);
  border-radius: 26px;
  color: white;
  background-color: hsl(273, 100%, 80%);
  padding: 0.1rem 0.4rem;
  font-size: 0.8rem;
  text-align: center;
`;

const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.8rem;

  & > select {
    border: 2px solid hsl(273, 100%, 80%);
    border-radius: 26px;
    padding: 0.1rem 0.4rem;
  }
`;
