import React from 'react';
import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';

export const REASONS_DATA = [
	{
		title: "For Employees",
		reasons: [
			{
				title: "Headline",
				subText: "Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat."
			},
			{
				title: "Headline",
				subText: "Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat."
			},
			{
				title: "Headline",
				subText: "Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat."
			}
		]
	},
	{
		title: "For Managers",
		reasons: [
			{
				title: "Headline",
				subText: "Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat."
			},
			{
				title: "Headline",
				subText: "Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat."
			},
			{
				title: "Headline",
				subText: "Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat."
			}
		]
	},
	{
		title: "For Businesses",
		reasons: [
			{
				title: "Headline",
				subText: "Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat."
			},
			{
				title: "Headline",
				subText: "Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat."
			},
			{
				title: "Headline",
				subText: "Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat."
			}
		]
	},
]

interface ReasonItemProps {
	isOdd?: boolean;
	number: number;
	title: string;
	reasons: {
		title: string;
		subText: string;
	}[];
}

const ReasonItem: React.FC<ReasonItemProps> = ({ isOdd, number, title, reasons }) => {
	const Graphic = () => <Box />;

	const ListNumber = () => (
		<Text fontSize='4rem' mr={2} color='gray.500' fontWeight='700' lineHeight='1'>
			{number}.
		</Text>
	);

	const Info = () => (
		<Grid templateColumns={isOdd ? 'max-content 1fr' : '1fr'}>
			{!isOdd && <ListNumber />}
			<Grid templateColumns='max-content 1fr' gridColumn={isOdd ? '1 / -1' : '2 / 3'} alignSelf='end' gap={2}>
				<Heading pb={2} size='lg' alignSelf='end'>
					{title}
				</Heading>
				{isOdd && <ListNumber />}
			</Grid>
			<Grid gap={6} gridColumn='2 / 3' mt={4}>
				{reasons.map((reason, index) => (
					<Grid key={index}>
						<Heading size='md'>{reason.title}</Heading>
						<Text>{reason.subText}</Text>
					</Grid>
				))}
			</Grid>
		</Grid>
	);

	return (
		<Wrapper bg={isOdd ? 'brand' : 'none'}>
			<Grid justifyContent='space-between' templateColumns='50% 50%' py={6} gap={4} bg={isOdd ? 'brand' : 'white'}>
				{ !isOdd && <Info /> }
				<Graphic />
				{ isOdd && <Info /> }
			</Grid>
		</Wrapper>
	);
};

export const Reasons: React.FC = () => {
	return (
		<Grid id='why-promovere'>
			<Wrapper>
				<Heading as='h2' px={2} py={1} bg='brand' borderRadius='full' width='max-content'>
					Why Promovere
				</Heading>
			</Wrapper>
			{ REASONS_DATA.map((section, index) => (
				<ReasonItem number={index + 1} key={index} title={section.title} reasons={section.reasons} isOdd={index % 2 === 1} />
			))}
		</Grid>
	);
};
