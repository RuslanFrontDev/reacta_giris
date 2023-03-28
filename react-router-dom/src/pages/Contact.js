import React, { useEffect } from "react";
import { Formik, Field, Form, useFormikContext } from "formik";
import Input from "../components/form/Input";
import File from "../components/form/File";
import Checkbox from "../components/form/Checkbox";
import TextArea from "../components/form/TextArea";
import SelectBox from "../components/form/SelectBox";
import Radio from "../components/form/Radio";
import { SampleSchema, ContactSchema } from "../validations";
const AutoSubmitToken = () => {
  const { values, submitForm } = useFormikContext();
  useEffect(() => {
    if (values.code.length === 6) {
      submitForm();
    }
  }, [values, submitForm]);
  return null;
};
const Contact = () => {
  return (
    <div>
      <h3>iletisim</h3>
      {/* <Formik
        initialValues={{
          code: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={SampleSchema}
      >
        {({ values }) => (
          <Form className="hidden">
            <Input label="Kodu Girin" name="code" /><br/>
            <button type="submit">Gonder</button>
            <AutoSubmitToken />
          </Form>
        )}
      </Formik> */}

      <Formik
        initialValues={{
          name: "",
          accept: false,
          skills: [],
          about: "",
          avatar: "",
          gender: 1,
          level: "Sr",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={ContactSchema}
      >
        {({ values }) => (
          <Form className="grid gap-y-4  border rounded p-4 m-4 shadow-lg">
            <Input label="Ad-soyad" name="name" /> <br />
            <TextArea label="Haqqinda" rows="5" cols="20" name="about" /> <br />
            <SelectBox
              label="Cinsiyyet"
              original={true}
              name="gender"
              options={[
                { key: 1, value: "Qadin" },
                { key: 2, value: "Kisi" },
              ]}
            />
            <br />
            <Field component="select" name="skills" multiple={true}>
              <option value="php">PhP</option>
              <option value="css">CSS</option>
              <option value="js">JS</option>
              <option value="html">HTML</option>
            </Field>
            <br />
            <File label="Avatar" name="avatar" />
            <label>
            <Field type='checkbox' name='accept'/> <br/>
            qaydalari qebul edirem
            </label>
            <Checkbox label="Qaydalri qebul edirem" name="accept" />
            <Radio
              label="Seviyyenizi secin"
              name="level"
              options={[
                { key: "Jr", value: "JR.Developer" },
                { key: "Sr", value: "SR.Developer" },
                { key: "Ninja", value: "Ninja.Developer" },
              ]}
            />
            <button
              className="h-10 rounded bg-black text-sm text-white px-5"
              type="submit"
            >
              Gonder
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
