import React from 'react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ContentBlock from './ContentBlock';

const ContactBlock: React.FC = () => {
  type Inputs = {
    firstName: string;
    lastName: string;
    mail: string;
    messages: string;
    exampleRequired: string;
  };

  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<Inputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(JSON.stringify(data));
    reset();
    setValue('');
  };

  return (
    <div className="contact__wrapper">
      <div className="container__contact">
        <div className="contact__block">
          <ContentBlock />
          <form
            className="form__block"
            onSubmit={handleSubmit(onSubmit)}
            action="sent_mail.php"
            method="POST">
            <div className="name__block">
              <label>
                First Name*
                <input
                  {...register('firstName', {
                    required: 'Required field!',
                    minLength: {
                      value: 4,
                      message: 'Minimum of 4 characters!',
                    },
                  })}
                />
              </label>
              <div>
                {errors?.firstName && <p>{errors?.firstName?.message || Error!.toString()}</p>}
              </div>
            </div>
            <div className="name__block">
              <label>
                Last Name*
                <input
                  {...register('lastName', {
                    required: 'Required field!',
                    minLength: {
                      value: 4,
                      message: 'Minimum of 4 characters!',
                    },
                  })}
                />
              </label>
              <div>
                {errors?.lastName && <p>{errors?.lastName?.message || Error!.toString()}</p>}
              </div>
            </div>
            <div className="email__block">
              <label>
                Email Address *
                <input
                  {...register('mail', {
                    required: 'Required field!',
                    minLength: {
                      value: 8,
                      message: 'Minimum of 8 characters!',
                    },
                  })}
                />
              </label>
              <div>{errors?.mail && <p>{errors?.mail?.message || Error!.toString()}</p>}</div>
            </div>
            <div className="message__block">
              <label>
                Message *
                <textarea
                  value={value}
                  {...register('messages', {
                    onChange: handleChange,
                    required: 'Required field!',
                    minLength: {
                      value: 10,
                      message: 'Minimum of 10 characters!',
                    },
                  })}>
                  S{' '}
                </textarea>
              </label>
              <div>
                {errors?.messages && <p>{errors?.messages?.message || Error!.toString()}</p>}
              </div>
            </div>
            <input type="submit" value="SUBMIT" className="contact__button" disabled={!isValid} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
