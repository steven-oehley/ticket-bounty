'use client';

import Placeholder from '@/components/placeholder';

const Error = ({ err }: { err: Error }) => {
  return <Placeholder label={err?.message || 'Something went wrong'} />;
};
export default Error;
