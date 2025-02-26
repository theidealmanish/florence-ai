import React from 'react';
import Image from 'next/image';
import { Center, Text } from '@mantine/core';

export default function Logo(props: any) {
	return (
		<Center style={{ display: 'flex' }}>
			<img
				src='/images/florence-ai.png'
				className='rounded-lg'
				style={{ maxHeight: '50px' }}
			/>
		</Center>
	);
}
