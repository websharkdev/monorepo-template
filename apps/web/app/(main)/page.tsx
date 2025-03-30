import { Fragment } from 'react';
import { BClient, BServer } from './(components)';

export default function Home() {
	return (
		<Fragment>
			<BServer />
			<BClient />
		</Fragment>
	);
}
