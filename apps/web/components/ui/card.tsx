import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@repo/ui/components/card';

import React from 'react';

type Props = {
	title: string;
	description: string;
	content: React.ReactNode;
	footer: React.ReactNode;
};

const DCard = ({ title, description, content, footer }: Props) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>{content}</CardContent>
			<CardFooter>{footer}</CardFooter>
		</Card>
	);
};

export default DCard;
