import React from 'react';
import { Grid, Heading, Text } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';
import { ImageWrapper } from './ImageWrapper';

export const REASONS_DATA = [
	{
		title: 'For Employees',
		reasons: [
			{
				title: 'Headline',
				subText: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat.',
			},
			{
				title: 'Headline',
				subText: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat.',
			},
			{
				title: 'Headline',
				subText: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat.',
			},
		],
		img: {
			src: '/img/reasons/growth.png',
			alt: 'Rocket ship on graph',
		},
	},
	{
		title: 'For Managers',
		reasons: [
			{
				title: 'Headline',
				subText: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat.',
			},
			{
				title: 'Headline',
				subText: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat.',
			},
			{
				title: 'Headline',
				subText: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat.',
			},
		],
		img: {
			src: '/img/reasons/optimize.png',
			alt: 'Magnifying Glass',
		},
	},
	{
		title: 'For Businesses',
		reasons: [
			{
				title: 'Headline',
				subText: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat.',
			},
			{
				title: 'Headline',
				subText: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat.',
			},
			{
				title: 'Headline',
				subText: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat.',
			},
		],
		img: {
			src: '/img/reasons/building.png',
			alt: 'Building',
		},
	},
];

interface ReasonItemProps {
	isEven?: boolean;
	number: number;
	title: string;
	reasons: {
		title: string;
		subText: string;
	}[];
	img: {
		src: string;
		alt: string;
	};
}

const ReasonItem: React.FC<ReasonItemProps> = ({ isEven, number, title, reasons, img }) => {
	const Graphic = () => <ImageWrapper src={img.src} alt={img.alt} display={{ base: 'none', sm: 'block' }} />;

	const ListNumber = () => (
		<Text fontSize='4rem' mr={2} color='gray.500' fontWeight='700' lineHeight='1'>
			{number}.
		</Text>
	);

	const Info = () => (
		<Grid
			templateColumns={{
				base: isEven ? 'max-content 1fr' : 'max-content 1fr',
				md: isEven ? 'max-content 1fr' : '1fr',
			}}
		>
			{!isEven && <ListNumber />}
			<Grid
				templateColumns={{ base: isEven ? '1fr max-content' : 'max-content 1fr', md: 'max-content 1fr' }}
				gridColumn={isEven ? '1 / -1' : '2 / 3'}
				alignSelf='end'
				gap={2}
			>
				<Heading pb={2} size='lg' alignSelf='end' justifySelf={{ base: isEven ? 'end' : 'start', md: 'start' }}>
					{title}
				</Heading>
				{isEven && <ListNumber />}
			</Grid>
			<Grid gap={6} gridColumn={{ base: '1 / 3', md: '2 / 3' }} mt={4}>
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
		<Wrapper bg={isEven ? 'brand' : 'none'}>
			<Grid
				justifyContent='space-between'
				templateColumns={{ base: '1fr', sm: isEven ? '60% 40%' : "40% 60%", lg: '50% 50%' }}
				templateRows='1fr'
				py={6}
				gap={4}
				bg={isEven ? 'brand' : 'white'}
			>
				{!isEven && <Info />}
				<Graphic />
				{isEven && <Info />}
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
			{REASONS_DATA.map((section, index) => (
				<ReasonItem number={index + 1} key={index} {...section} isEven={index % 2 === 1} />
			))}
		</Grid>
	);
};
