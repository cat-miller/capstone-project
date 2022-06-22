import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPassport,
  setPassport,
} from '../features/passport/passportSlice';
import PalmTree from '../public/palm-tree.svg';
import { useState } from 'react';
import normalizeCodeId from '../services/normalizeCodeId';

export default function PassportForm() {
  const dispatch = useDispatch();
  const passport = useSelector(selectPassport);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Formik
      enableReinitialize
      initialValues={passport}
      onSubmit={values => {
        setIsEdit(false);
        dispatch(setPassport(values));
      }}
    >
      <StyledForm>
        <StyledInputWrapper>
          <StyledIcon>
            <PalmTree />
          </StyledIcon>
          <StyledNameWrapper>
            <StyledField
              maxlength="10"
              name="island.user"
              placeholder="USER NAME"
              disabled={!isEdit}
            />

            <StyledField
              maxlength="10"
              name="island.name"
              placeholder="ISLAND NAME"
              disabled={!isEdit}
            />
          </StyledNameWrapper>

          <StyledLabel>Fruit</StyledLabel>
          <Field as="select" name="island.fruit" disabled={!isEdit}>
            <option value="Apple">APPLE</option>
            <option value="Peach">PEACH</option>
            <option value="Cherry">CHERRY</option>
            <option value="Orange">ORANGE</option>
            <option value="Pear">PEAR</option>
          </Field>
          <StyledLabel>Switch Code</StyledLabel>
          {isEdit ? (
            <StyledField
              maxlength="12"
              type="number"
              name="code.switch"
              placeholder="0000 - 0000 - 0000"
            />
          ) : (
            <StyledField
              disabled
              placeholder="0000 - 0000 - 0000"
              value={normalizeCodeId(passport.code.switch)}
            />
          )}
          <StyledLabel>Dream ID</StyledLabel>
          {isEdit ? (
            <StyledField
              maxlength="12"
              type="number"
              name="code.dreamId"
              placeholder="0000 - 0000 - 0000"
            />
          ) : (
            <StyledField
              disabled
              placeholder="0000 - 0000 - 0000"
              value={normalizeCodeId(passport.code.dreamId)}
            />
          )}
          <StyledLabel>Creator ID</StyledLabel>
          {isEdit ? (
            <StyledField
              maxlength="12"
              type="number"
              name="code.creatorId"
              placeholder="0000 - 0000 - 0000"
            />
          ) : (
            <StyledField
              disabled
              placeholder="0000 - 0000 - 0000"
              value={normalizeCodeId(passport.code.creatorId)}
            />
          )}
        </StyledInputWrapper>
        {isEdit ? (
          <StyledSubmit type="submit">Submit</StyledSubmit>
        ) : (
          <StyledSubmit
            onClick={event => {
              event.preventDefault();
              setIsEdit(true);
            }}
            type="button"
          >
            Edit
          </StyledSubmit>
        )}
      </StyledForm>
    </Formik>
  );
}

const StyledForm = styled(Form)`
  display: grid;
  gap: 0.5rem;
  justify-items: end;
  padding: 0.4rem 0;
`;

const StyledField = styled(Field)`
  border: 2px solid hsl(153, 70%, 50%);
  border-radius: 26px;
  padding: 0.1rem 0.4rem;
  color: hsl(153, 70%, 35%);
  letter-spacing: 1px;
`;

const StyledSubmit = styled.button`
  border: 2px solid hsl(153, 70%, 50%);
  border-radius: 26px;
  color: white;
  background-color: hsl(153, 70%, 50%);
  justify-self: center;
  letter-spacing: 1px;
`;

const StyledLabel = styled.label`
  border: 2px solid hsl(153, 70%, 50%);
  border-radius: 26px;
  color: white;
  background-color: hsl(153, 70%, 50%);
  padding: 0.1rem 0.4rem;
  font-size: 0.8rem;
  text-align: center;
  letter-spacing: 1px;
`;

const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.8rem;

  & > select {
    border: 2px solid hsl(153, 70%, 50%);
    border-radius: 26px;
    padding: 0.1rem 0.4rem;
    color: hsl(153, 70%, 35%);
  }
`;

const StyledIcon = styled.div`
  border: 2px solid hsl(153, 70%, 50%);
  border-radius: 50px;
  background-color: hsl(153, 100%, 88%);
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;
`;

const StyledNameWrapper = styled.div`
  display: grid;
  gap: 0.9rem;
`;
