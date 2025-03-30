'use client';

import ErrorLayout from '@repo/ui/components/error-layout';

const Error = (error: { error: Error & { digest?: string }; reset: () => void }) => <ErrorLayout {...error} />;

export default Error;
