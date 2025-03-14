import { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface FormModalProps {
  title: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
  children: ReactNode;
}

const FormModal = ({
  title,
  description,
  isOpen,
  onClose,
  onSubmit,
  isSubmitting = false,
  children,
}: FormModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95%] max-w-[95%] sm:max-w-[500px] p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[90vh]">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-lg sm:text-xl font-semibold">{title}</DialogTitle>
          {description && <DialogDescription className="text-sm sm:text-base">{description}</DialogDescription>}
        </DialogHeader>
        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}>
          <div className="py-4 space-y-4">{children}</div>
          <DialogFooter className="flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose} 
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? 'Saving...' : 'Save'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;