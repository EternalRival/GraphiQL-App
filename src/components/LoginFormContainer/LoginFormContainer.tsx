/* eslint-disable @typescript-eslint/no-floating-promises */
import { useContext } from 'react';
import { localizationContext } from '@context/LocalizationContext';
import { SubmitHandler } from 'react-hook-form';
import { IFormData } from '@type/interfaces/IFormData';
import { H1 } from '@components/Headings';
import { Form } from '@components/Form';
import { loginWithEmailAndPassword } from '@utils/loginWithEmailAndPassword.ts';
import classNames from 'classnames';
import styles from './loginFormContainer.module.scss';

export function LoginFormContainer() {
  const { translate } = useContext(localizationContext);
  const onSubmit: SubmitHandler<IFormData> = (data) => {
    loginWithEmailAndPassword(
      { email: data.email, password: data.password },
      translate
    );
  };

  return (
    <div className={classNames(styles.root, 'container')}>
      <H1 title={translate('Login')} />
      <Form isSignup={false} onSubmit={onSubmit} />
    </div>
  );
}
