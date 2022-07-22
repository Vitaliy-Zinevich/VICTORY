import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const ContactBlock: React.FC = () => {
  type Inputs = {
    firstName: string;
    lastName: string;
    mail: string;
    message: string;
    exampleRequired: string;
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="contact__wrapper">
      <div className="container">
        <div className="contact__block">
          <div className="content__block">
            <h3>Contact</h3>
            <p>I am currently based in Simferopol, Crimea.</p>
            <p>If you have any questions please don’t hesitate to contact me.</p>
            <p>+7 978 678 92 97</p>
            <p>Photographs on this website are available for purchase.</p>
          </div>
          <form className="form__block" onSubmit={handleSubmit(onSubmit)}>
            <div className="name__block">
              <label>
                First Name*
                <input
                  {...register('firstName', {
                    required: true,
                  })}
                />
              </label>
            </div>
            <div className="name__block">
              <label>
                Last Name*
                <input
                  {...register('lastName', {
                    required: true,
                  })}
                />
              </label>
            </div>
            <div className="email__block">
              <label>
                Email Address *
                <input
                  {...register('mail', {
                    required: true,
                  })}
                />
              </label>
            </div>
            <div className="message__block">
              <label>
                Message *
                <textarea
                  {...register('message', {
                    required: true,
                  })}>
                  {' '}
                </textarea>
              </label>
            </div>
            <input type="submit" value="SUBMIT" className="contact__button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
