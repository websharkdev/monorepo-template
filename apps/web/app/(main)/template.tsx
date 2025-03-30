const Template = ({ children }: { children: Readonly<React.ReactNode> }) => {
	return (
		<div className="flex h-full min-h-screen w-full flex-col items-center justify-between">
			<div className="container">{children}</div>
		</div>
	);
};

export default Template;
