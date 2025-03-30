import { Button } from '@repo/ui/components/button';
import Link from 'next/link';

const NotFounded = () => {
	return (
		<div className="flex h-screen w-full items-center justify-center">
			<div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#414141_1px,transparent_1px)]"></div>
			<div className="container relative z-50 mx-auto flex flex-nowrap items-center justify-center gap-10">
				<div className="rounded-xl border border-neutral-50 bg-neutral-50 px-10 py-2 dark:border-neutral-900 dark:bg-card">
					<p className="text-[10vw]">404</p>
				</div>
				<div className="grid max-w-md grid-cols-1 gap-5">
					<h2 className="text-4xl">
						<span className="uppercase">Error:</span> Page Not Found
					</h2>
					<p className="font-mono text-sm font-medium">
						Oops! The page you’re looking for doesn’t exist or may have been moved. Check the URL or return to the
						homepage to continue exploring.
					</p>
					<div className="grid grid-cols-2 items-center gap-2">
						<Button asChild>
							<Link href="/">Back to Home</Link>
						</Button>
						<Button variant="secondary" asChild>
							<Link href="/dashboard">Dashboard</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFounded;
