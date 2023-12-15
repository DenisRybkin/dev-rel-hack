import React from 'react';
import { IAuthFormProps } from '@components/entities/auth/forms/common/auth-interface';
import { z } from 'zod';
import { RegistrationSchema } from '@lib/utils/validations';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
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
import { Button } from '@components/ui/button';

interface IRegistrationFormProps
  extends IAuthFormProps<z.infer<typeof RegistrationSchema>> {}

export const RegistrationForm = (props: IRegistrationFormProps) => {
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof RegistrationSchema>>({
    resolver: zodResolver(RegistrationSchema),
    defaultValues: {
      username: '',
      first_name: '',
      middle_name: '',
      last_name: '',
      city: '',
      birthdate: new Date(),
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const handleSubmit = async (fields: z.infer<typeof RegistrationSchema>) => {
    props.onSubmit(fields);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col justify-start gap-2 relative"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('ui:label.nickname')}</FormLabel>
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
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя</FormLabel>
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
          name="middle_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Отчество</FormLabel>
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
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Фамилия</FormLabel>
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
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('ui:label.email')}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('ui:placeholder.enter')}
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage number={6} />
            </FormItem>
          )}
        />
        {/*<FormField*/}
        {/*  control={form.control}*/}
        {/*  name="birthdate"*/}
        {/*  render={({ field }) => (*/}
        {/*    <FormItem className="flex flex-col">*/}
        {/*      <FormLabel>Дата рождения</FormLabel>*/}
        {/*      <Popover>*/}
        {/*        <PopoverTrigger asChild>*/}
        {/*          <FormControl>*/}
        {/*            <Button*/}
        {/*              variant={'outline'}*/}
        {/*              className={cn(*/}
        {/*                'w-[240px] pl-3 text-left font-normal text-black w-full',*/}
        {/*                !field.value && 'text-muted-foreground'*/}
        {/*              )}*/}
        {/*            >*/}
        {/*              {field.value ? (*/}
        {/*                format(field.value, 'PPP')*/}
        {/*              ) : (*/}
        {/*                <span className="text-black">Pick a date</span>*/}
        {/*              )}*/}
        {/*              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />*/}
        {/*            </Button>*/}
        {/*          </FormControl>*/}
        {/*        </PopoverTrigger>*/}
        {/*        <PopoverContent className="w-auto p-0" align="start">*/}
        {/*          <Calendar*/}
        {/*            react-day-picker*/}
        {/*            mode="single"*/}
        {/*            selected={field.value}*/}
        {/*            onSelect={field.onChange}*/}
        {/*            disabled={date =>*/}
        {/*              date > new Date() || date < new Date('1930-01-01')*/}
        {/*            }*/}
        {/*            className="w-full"*/}
        {/*          />*/}
        {/*        </PopoverContent>*/}
        {/*      </Popover>*/}
        {/*      <FormMessage />*/}
        {/*    </FormItem>*/}
        {/*  )}*/}
        {/*/>*/}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('ui:label.password')}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('ui:placeholder.enter')}
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage number={6} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('ui:label.password_confirm')}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('ui:placeholder.enter')}
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage number={6} />
            </FormItem>
          )}
        />
        {props.extraFromContent}
        <Button
          data={{ isLoading: props.isLoading }}
          className="mt-5"
          //onClick={handleSubmit}
          variant="primary"
          type="submit"
        >
          {t('ui:button.sign_up')}
        </Button>
      </form>
    </Form>
  );
};
