import { Fragment } from 'react';

const Layout = ({ children }: { children: Readonly<React.ReactNode> }) => {
	return <Fragment>{children}</Fragment>;
};

export default Layout;
