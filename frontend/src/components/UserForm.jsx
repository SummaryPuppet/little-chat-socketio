import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";

function UserForm() {
  const { signIn } = useSocket();
  const navigate = useNavigate();

  const handleSubmit = ({ username }, {}) => {
    signIn(username);
    navigate("/chat");
  };

  return (
    <Formik initialValues={{ username: "" }} onSubmit={handleSubmit}>
      {({ isSubmiting }) => (
        <Form className="m-4 flex flex-col gap-2">
          <label className="text-xl dark:text-neutral-200">
            Your name:  
            <Field
              name="username"
              required
              placeholder="name e g ."
              autoFocus
              className="ml-3 bg-sky-100 rounded-sm sm:ml-0 lg:ml-3 sm:text-5xl md:text-xl dark:border-neutral-200 dark:bg-transparent"
            />
          </label>
          <button
            type="submit"
            disabled={isSubmiting}
            className="mt-4 px-3 py-3 text-white bg-sky-700 rounded-md sm:py-5 md:py-3"
          >
            Entrar
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default UserForm;
