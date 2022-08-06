import { Formik, Form, Field } from "formik";
import Navbar from "../components/Navbar";

function CreateRoomForm() {
  return (
    <Formik initialValues={{ roomName: "" }}>
      {({ isSubmiting }) => (
        <div className="h-screen dark:bg-slate-700">
          <header>
            <Navbar text="Volver" />
          </header>
          <main className="my-5 flex justify-center items-center">
            <Form className="px-9 py-7 flex flex-col gap-5 dark:bg-slate-800 rounded-sm dark:shadow-md dark:shadow-emerald-700">
              <h1 className="text-5xl dark:text-neutral-200">Create room</h1>

              <label className="text-2xl dark:text-neutral-200">
                Room name
              </label>
              <Field
                type="text"
                name="roomName"
                autoFocus
                required
                className="h-8 text-xl bg-slate-900 rounded-md"
              />

              <button
                type="submit"
                disabled={isSubmiting}
                className="px-4 py-3 text-xl text-neutral-200 bg-emerald-600 rounded-md"
              >
                Create Room
              </button>
            </Form>
          </main>
        </div>
      )}
    </Formik>
  );
}

export default CreateRoomForm;
