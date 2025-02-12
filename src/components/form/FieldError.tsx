export interface FieldErrorProps {
  error?: string;
}

const FieldError = ({ error }: FieldErrorProps) => {
  if (!error) return null;

  return <span className="text-sm text-red-500">{error}</span>;
};

export default FieldError;
