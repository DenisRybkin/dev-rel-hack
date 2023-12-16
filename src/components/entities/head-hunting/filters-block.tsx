import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/ui/select';
import { Button } from '@components/ui/button';

const FiltersBlock = () => {
  return (
    <div className='flex items-center gap-x-4 mt-1 ml-1 mb-4'>
      <Select>
        <SelectTrigger className="w-[210px]">
          <SelectValue placeholder="Вид деятельности" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Fruits</SelectItem>
          <SelectItem value="dark">Apple</SelectItem>
          <SelectItem value="system">Grape</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Уровень" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Формат 1</SelectItem>
          <SelectItem value="dark">Формат 2</SelectItem>
          <SelectItem value="system">Формат 3</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Город" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Пенза</SelectItem>
          <SelectItem value="dark">Москва</SelectItem>
          <SelectItem value="system">Екатеринбург</SelectItem>
        </SelectContent>
      </Select>
      <Button variant='reset'>Сбросить</Button>
    </div>
  );
};

export default FiltersBlock;