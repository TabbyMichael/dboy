
import { Button } from '@/components/ui/button';
import { Eye, Pencil, Trash2 } from 'lucide-react';

type ActionType = 'view' | 'edit' | 'delete';

interface ActionButtonProps {
  type: ActionType;
  onClick: () => void;
  disabled?: boolean;
}

const ActionButton = ({ type, onClick, disabled = false }: ActionButtonProps) => {
  const getIcon = () => {
    switch (type) {
      case 'view':
        return <Eye size={16} />;
      case 'edit':
        return <Pencil size={16} />;
      case 'delete':
        return <Trash2 size={16} />;
    }
  };

  const getStyles = () => {
    switch (type) {
      case 'view':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'edit':
        return 'bg-amber-500 hover:bg-amber-600';
      case 'delete':
        return 'bg-red-500 hover:bg-red-600';
    }
  };

  return (
    <Button
      size="sm"
      className={`${getStyles()} text-white`}
      onClick={onClick}
      disabled={disabled}
    >
      {getIcon()}
      <span className="ml-2 sr-only md:not-sr-only">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    </Button>
  );
};

export default ActionButton;
