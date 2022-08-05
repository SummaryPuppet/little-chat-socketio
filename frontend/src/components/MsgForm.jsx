import { Field, Form, Formik } from "formik";
import { useSocket } from "../context/SocketProvider";

function MsgForm() {
  const { sendMsg } = useSocket();

  return (
    <Formik
      initialValues={{ msg: "" }}
      enableReinitialize={true}
      onSubmit={({ msg }, { resetForm, setSubmitting }) => {
        if (!msg) return "";
        sendMsg(msg);
        setSubmitting(false);
        resetForm({ msg: "" });
      }}
    >
      {({ isSubmiting, handleSubmit }) => (
        <Form
          onSubmit={handleSubmit}
          className="mx-2 lg:ml-0 flex justify-center gap-2"
        >
          <Field
            name="msg"
            autoFocus
            className="h-14 w-full pl-1 text-xl bg-slate-300 rounded-lg dark:text-neutral-200 dark:bg-slate-800 "
          />
          <button
            type="submit"
            disabled={isSubmiting}
            className="px-5 py-2 bg-slate-300 rounded-md dark:bg-slate-500 "
          >
            {">"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default MsgForm;
