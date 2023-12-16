import { Input } from '@/components/ui/input';
import { FiEdit3 } from 'react-icons/fi';


interface IUserInfoFieldProps {
    title?: string;
    description?:string;
    isEdit?:boolean;
  }

export const UserInfoField = ({title,description,isEdit}:IUserInfoFieldProps) => {
  return (
    <div className="flex items-center">
     {isEdit&& <FiEdit3 color='#369FFF'/>}
      <div className="text-[14px] font-semibold  mx-2">{title}: </div>
      {isEdit? <Input value={description} className='w-[374px]'/>
     : <div className="text-[14px] ">{description}</div>
      }
    </div>
  );
};
