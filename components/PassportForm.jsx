import { Formik, Form, Field } from 'formik';

export default function PassportForm() {
  return (
    <Formik
      initialValues={{
        island: { user: '', name: '', fruit: '', hemisphere: '' },
        code: { switch: '', dreamId: '', creatorId: '' },
      }}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <Field name="island.user" placeholder="USER NAME" />
        <Field name="island.name" placeholder="ISLAND NAME" />
        <Field name="island.fruit" placeholder="FRUIT" />
        <Field name="island.hemisphere" placeholder="HEMISPHERE" />
        <Field name="code.switch" placeholder="0000 - 0000 - 0000" />
        <Field name="code.dreamId" placeholder="0000 - 0000 - 0000" />
        <Field name="code.creatorId" placeholder="0000 - 0000 - 0000GST" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
