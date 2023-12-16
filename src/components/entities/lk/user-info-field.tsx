
interface IUserInfoFieldProps {
    title?: string;
    description?:string;
  }

export const UserInfoField = ({title,description}:IUserInfoFieldProps) => {
  return (
    <div className="flex">
      <div className="text-[14px] font-semibold mb-3 mr-1">{title}: </div>
      <div className="text-[14px]  mb-3">{description}</div>
    </div>
  );
};
