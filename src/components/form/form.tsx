interface FormProps {
  action: (payload: FormData) => void;
  children: React.ReactNode;
}

const Form = ({ action, children }: FormProps) => {
  return (
    <form action={action} className="flex flex-col gap-y-3">
      {children}
    </form>
  );
};
export default Form;
