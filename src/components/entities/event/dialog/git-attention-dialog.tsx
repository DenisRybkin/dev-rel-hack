import type { IBaseDialogProps } from '@components/shared/dialog';
import { DialogAdapter } from '@components/shared/dialog';
import { IoWarningOutline } from 'react-icons/io5';

interface IGitAttentionDialogProps extends IBaseDialogProps {}

export const GitAttentionDialog = (props: IGitAttentionDialogProps) => {
  const handleOpenChange = (open: boolean) => {
    props.onOpenChange(open);
  };

  return (
    <DialogAdapter isOpen={props.isOpen} onOpenChange={handleOpenChange}>
      <div className="flex w-full justify-center ">
        <IoWarningOutline size={64} color="#000000" />
      </div>
      <div className='text-[#000000] text-[24px] text-center'>Внимание!</div>
      <div className='text-[#000000] text-[16px]'>
        К вашему профилю не привязан аккаунт git. Из-за этого шансы на одобрение
        заявки уменьшается, так как мы не сможем увидеть ваше портфолио.
      </div>
    </DialogAdapter>
  );
};
