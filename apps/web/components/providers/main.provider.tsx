'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PTheme } from './theme.provider';
import { NuqsAdapter } from 'nuqs/adapters/next';

const queryClient = new QueryClient();

const PMain = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<QueryClientProvider client={queryClient}>
			<NuqsAdapter>
				<PTheme attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					{children}
				</PTheme>
			</NuqsAdapter>
		</QueryClientProvider>
	);
};

export default PMain;
