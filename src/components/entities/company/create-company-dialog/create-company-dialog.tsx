import { DialogAdapter, IBaseDialogProps } from '@components/shared/dialog';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CreateCompanySchema } from '@lib/utils/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form';
import { Input } from '@components/ui/input';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { api } from '@lib/api/plugins';
import { toast } from '@components/ui/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { FileUploader } from '@components/entities/static-field/misc/file-uploader';
import { Button } from '@components/ui/button';
import { FiCamera, FiPhone } from 'react-icons/fi';

interface ICreateCompanyDialogProps extends IBaseDialogProps {}

export const CreateCompanyDialog = (props: ICreateCompanyDialogProps) => {
  const { t } = useTranslation();

  const [uploadedFile, setUploadedFile] = useState<{
    id: number;
    src: string;
  }>();

  const handleError = () =>
    toast({
      variant: 'destructive',
      title: t('toast:error.default'),
    });
  const handleSuccess = () => {
    toast({
      title: 'Компания создалась успешно!',
      variant: 'success',
    });
    props.onOpenChange(false);
  };

  const companyMutation = useMutation({
    mutationKey: [api.company.toString()],
    mutationFn: async (dto: z.infer<typeof CreateCompanySchema>) =>
      await api.company.create(dto, handleSuccess, handleError),
  });

  const form = useForm<z.infer<typeof CreateCompanySchema>>({
    resolver: zodResolver(CreateCompanySchema),
    defaultValues: {
      title: '',
      city: '',
      description: '',
      avatar_id: 0,
    },
  });

  const fileId = form.watch('avatar_id');

  console.log(uploadedFile, fileId);

  const handleSubmit = async (fields: z.infer<typeof CreateCompanySchema>) =>
    companyMutation.mutate(fields);

  return (
    <DialogAdapter
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      title="Создание компании"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col justify-start gap-4 w-full"
        >
          <div className="w-full flex items-center justify-center">
            <FileUploader
              onSuccess={file => {
                form.setValue('avatar_id', file.id);
                setUploadedFile({ src: file.url, id: file.id });
              }}
              onError={handleError}
              accept="image/*"
              formDataName="file"
            >
              <Avatar className="h-20 w-20">
                <AvatarImage src={uploadedFile?.src} />
                <AvatarFallback className="bg-gray" content="">
                  <FiCamera size={25} />
                </AvatarFallback>
              </Avatar>
            </FileUploader>
          </div>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Название</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('ui:placeholder.enter')}
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage number={3} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Описание</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('ui:placeholder.enter')}
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage number={3} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Город</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('ui:placeholder.enter')}
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage number={3} />
              </FormItem>
            )}
          />
          <Button
            variant="primary"
            type="submit"
            data={{ isLoading: companyMutation.isLoading }}
          >
            Создать
          </Button>
        </form>
      </Form>
    </DialogAdapter>
  );
};
