import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaGitAlt } from 'react-icons/fa6';


export const AdderGitAccount=()=>{
    return <div className='flex justify-between items-center w-[440px] my-2'>
        <FaGitAlt size={24} color="#F26357" />
        <Input variant="default" className='w-[250px] border-amber-800'/>
        <Button variant="primary">Привязать</Button>
    </div>
}