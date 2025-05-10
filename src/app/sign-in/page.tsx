import Link from 'next/link';

import CardCompact from '@/components/card-compact';
import { passwordForgotPath, signUpPath } from '@/constants/paths';
import SignInForm from '@/features/auth/components/sign-in-form';

const SignInPage = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <CardCompact
        className="animate-fade-from-top"
        description="Enter your details to sign In "
        footer={
          <>
            <Link
              className="text-muted-foreground hover:text-primary text-sm"
              href={signUpPath}
            >
              No account yet?
            </Link>

            <Link
              className="text-muted-foreground hover:text-primary text-sm"
              href={passwordForgotPath}
            >
              Forgot Password?
            </Link>
          </>
        }
        title="Sign In"
      >
        <SignInForm />
      </CardCompact>
    </div>
  );
};
export default SignInPage;
