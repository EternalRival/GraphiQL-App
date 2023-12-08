 
import { H1 } from '@components/Headings';
import { useContext } from 'react';
import classNames from 'classnames';
import { localizationContext } from '@context/LocalizationContext';
import { Form } from 'src/components/Form';
import { SubmitHandler } from 'react-hook-form';
import { IFormData } from '@type/interfaces/IFormData';
// import { signupWithEmailAndPassword } from '@utils/signupWithEmailAndPassword.ts';
import styles from './singupFormContainer.module.scss';

export function SignupFormContainer() {
  const { translate } = useContext(localizationContext);

  const className = classNames('container', {
    [styles.container]: true,
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    // eslint-disable-next-line no-console
    console.log('submitted: ', data);
    // signupWithEmailAndPassword(
    //   { name: data.name ?? '', email: data.email, password: data.password },
    //   translate
    // );
  };

  return (
    <div className={className}>
      <H1 title={translate('Signup')} />
      <Form isSignup onSubmit={onSubmit} />
    </div>
  );
}
