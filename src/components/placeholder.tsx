import { LucideTriangleAlert } from 'lucide-react';

interface PlaceholderProps {
  label: string;
  renderIcon?: (props: { className: string }) => React.ReactNode;
  button?: React.ReactNode;
}

const Placeholder = ({
  label,
  renderIcon = (props) => <LucideTriangleAlert {...props} />,
  // placeholder icon same height as button
  button = <div className="h-10" />,
}: PlaceholderProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-2">
      {/* Clone element is an older api */}
      {/* {cloneElement(icon, {
        className: 'w-16 h-16',
      })} */}
      {renderIcon({
        className: 'w-16 h-16 dark:text-yellow-300 text-orange-400',
      })}
      <h2 className="text-center text-lg">{label}</h2>
      {button}
    </div>
  );
};
export default Placeholder;
