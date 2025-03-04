'use client';
import { useCallback } from 'react';
import Head from 'next/head';
import styles from '@/app/styles/Home.module.css';
import FHIR from 'fhirclient';
import { launchOptions } from '@/config/config';
import IMeldRxLaunchData from '@/config/IMeldRxLaunchData';

export default function Page() {
	// When a button is pressed, tries to authorize based on the given configuration data...
	const onLaunchClick = useCallback(
		(launchData: IMeldRxLaunchData) => {
			console.log(JSON.stringify(launchData));
			const fhirUrl = launchData.workspaceUrl;
			FHIR.oauth2.authorize({
				clientId: launchData.clientId,
				scope: launchData.scope,
				redirectUri: launchData.redirectUrl,
				iss: fhirUrl,
			});
		},
		[FHIR]
	);

	return (
		<>
			<Head>
				<title>Florence AI</title>
				<meta
					name='description'
					content='Florence AI, your AI health companion'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<div className='min-h-screen flex flex-col items-center bg-gray-50 p-6 relative overflow-hidden sm:py-12'>
					<img
						src='/images/florence-ai.png'
						className='rounded-lg'
						style={{ maxHeight: '50px' }}
					/>
					<h1 className='text-3xl font-bold text-center'>
						Welcome to the Florence
					</h1>
					<div className='mt-6'></div>

					<div className='flex justify-center overflow-x-auto sm:rounded-lg my-2 w-3/4'>
						{/* Loop through launch configuration */}
						{launchOptions.map(
							(launchConfiguration: IMeldRxLaunchData, index: number) => {
								return (
									<LaunchButton
										key={`launch-button-${index}`}
										label='Launch with MeldRx'
										color='green'
										onClick={() => onLaunchClick(launchConfiguration)}
									/>
								);
							}
						)}
					</div>
				</div>
			</main>
		</>
	);
}

// Button that launches the app...
interface ILaunchButtonProps {
	label: string;
	color: 'blue' | 'green' | 'red' | 'orange' | 'indigo';
	onClick: () => void;
}
function LaunchButton(props: ILaunchButtonProps) {
	const cssBlue =
		'my-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300';
	const cssGreen =
		'my-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300';
	const cssRed =
		'my-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300';
	const cssOrange =
		'my-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:ring-orange-300';
	const cssIndigo =
		'my-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300';

	// Select CSS based on passed in color...
	let css = cssBlue;
	if (props.color === 'blue') {
		css = cssBlue;
	} else if (props.color === 'green') {
		css = cssGreen;
	} else if (props.color === 'red') {
		css = cssRed;
	} else if (props.color === 'orange') {
		css = cssOrange;
	} else if (props.color === 'indigo') {
		css = cssIndigo;
	}

	return (
		<button onClick={props.onClick} className={css}>
			{props.label}
		</button>
	);
}
