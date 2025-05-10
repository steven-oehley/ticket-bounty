'use client';

import { useActionState } from 'react';

import FieldError from '@/components/form/field-error';
import Form from '@/components/form/form';
import SubmitBtn from '@/components/form/submit-btn';
import { EMPTY_ACTION_STATE } from '@/components/form/utils/to-action-state';
import { Input } from '@/components/ui/input';

import { signIn } from '../actions/sign-in';

const SignInForm = () => {
  const [actionState, action, isPending] = useActionState(
    signIn,
    EMPTY_ACTION_STATE,
  );
  return (
    <Form action={action} actionState={actionState}>
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
      <SubmitBtn isPending={isPending} label="Sign In" />
    </Form>
  );
};
export default SignInForm;
