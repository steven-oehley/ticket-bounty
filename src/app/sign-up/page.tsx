import Link from 'next/link';

import CardCompact from '@/components/card-compact';
import { signInPath } from '@/constants/paths';
import SignUpForm from '@/features/auth/components/sign-up-form';

const SignUpPage = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <CardCompact
        className="animate-fade-from-top"
        description="Enter your details to sign up"
        footer={
          <Link
            className="text-muted-foreground hover:text-primary text-sm"
            href={signInPath}
          >
            Have an account? Sign in now
          </Link>
        }
        title="Sign Up"
      >
        <SignUpForm />
      </CardCompact>
    </div>
  );
};
export default SignUpPage;
