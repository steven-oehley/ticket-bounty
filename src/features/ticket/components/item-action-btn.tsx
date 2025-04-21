import ItemLinkButton from './item-link-btn';

interface ItemActionButtonProps {
  action: () => Promise<never>;
  icon: React.ReactNode;
}

const ItemActionButton = ({ action, icon }: ItemActionButtonProps) => {
  return (
    <form action={action}>
      <ItemLinkButton icon={icon} />
    </form>
  );
};

export default ItemActionButton;
