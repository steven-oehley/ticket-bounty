'use client';

import { useActionState } from 'react';

import FieldError from '@/components/form/field-error';
import Form from '@/components/form/form';
import SubmitBtn from '@/components/form/submit-btn';
import { EMPTY_ACTION_STATE } from '@/components/form/utils/to-action-state';
import { Input } from '@/components/ui/input';

import { signUp } from '../actions/sign-up';

const SignUpForm = () => {
  const [actionState, action] = useActionState(signUp, EMPTY_ACTION_STATE);
  return (
    <Form action={action} actionState={actionState}>
      <Input
        defaultValue={actionState.payload?.get('username') as string}
        name="username"
        placeholder="Username"
        type="text"
      />
      <FieldError actionState={actionState} name="username" />
      <Input
        defaultValue={actionState.payload?.get('email') as string}
        name="email"
        placeholder="Email"
        type="email"
      />
      <FieldError actionState={actionState} name="email" />
      <Input
        defaultValue={actionState.payload?.get('password') as string}
        name="password"
        placeholder="Password"
        type="password"
      />
      <FieldError actionState={actionState} name="password" />
      <Input
        defaultValue={actionState.payload?.get('confirmPassword') as string}
        name="confirmPassword"
        placeholder="Confirm Password"
        type="password"
      />
      <FieldError actionState={actionState} name="confirmPassword" />
      <SubmitBtn label="Sign Up" />
    </Form>
  );
};
export default SignUpForm;
