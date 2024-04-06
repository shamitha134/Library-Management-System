import { Formik, ErrorMessage } from "formik";
import NumberInput from "./NumberInput";
import TextInput from "./TextInput";

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Title is required";
  }

  if (!values.author) {
    errors.author = "Author is required";
  }

  if (!values.publicationYear) {
    errors.publicationYear = "Publication Year is required";
  } else if (values.publicationYear < 1000) {
    errors.publicationYear =
      "Publication Year must be greater than or equal to 1000";
  }

  if (!values.quantity) {
    errors.quantity = "Quantity is required";
  } else if (values.quantity < 1) {
    errors.quantity = "Quantity must be greater than or equal to 1";
  }

  if (!values.coverPhoto) {
    errors.coverPhoto = "Cover Photo is required";
  }

  return errors;
}

const currentYear = new Date().getFullYear();

const BookForm = () => {
  const initialValues = {
    title: "",
    author: "",
    publicationYear: "",
    quantity: "",
    coverPhoto: null,
  };

  async function submitHandler(formData, { setSubmitting }) {
    console.log(formData);
    try {
      const response = await fetch("http://localhost:8000/add-book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log("Server Response:", data);

      setSubmitting(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitting(false);
    }
  }

  const handleFileChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setFieldValue("coverPhoto", file);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitHandler}
    >
      {(formikProps) => (
        <div className="max-w-md mx-auto md:mx-0">
          <form className="space-y-3" onSubmit={formikProps.handleSubmit}>
            <TextInput id="title" name="title" label="Title" />

            <TextInput id="author" name="author" label="Author" />

            <NumberInput
              id="publicationYear"
              name="publicationYear"
              label="Publication Year"
              min="1000"
              max={currentYear}
            />

            <NumberInput
              id="quantity"
              name="quantity"
              label="Quantity"
              min="1"
            />

            <div>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="coverPhoto"
                  className="mt-1 flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-2 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm font-semibold text-gray-500">
                      <span>Upload Cover Photo</span>
                    </p>
                  </div>
                  <input
                    className="hidden"
                    type="file"
                    id="coverPhoto"
                    name="coverPhoto"
                    accept="image/*"
                    onChange={(event) =>
                      handleFileChange(event, formikProps.setFieldValue)
                    }
                  />
                </label>
              </div>
              <ErrorMessage
                name="coverPhoto"
                component="div"
                className="text-error italic mt-1"
              />
            </div>

            <div>
              <button
                className="w-full mt-4 py-3 bg-accent/80 hover:bg-accent rounded-md text-white font-semibold"
                type="submit"
                disabled={formikProps.isSubmitting}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

BookForm.propTypes = {};

export default BookForm;
