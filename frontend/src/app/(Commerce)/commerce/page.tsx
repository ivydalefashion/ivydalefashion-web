import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Lazy load heavy components
const CommerceComponent = dynamic(() => import('./_commerceComponent'), { ssr: false });
const Header = dynamic(() => import('../_components/Header'));
const Footer = dynamic(() => import('../_components/Footer'));


export const metadata: Metadata = {
	title: 'IvydaleFashion - Home of Fashion',
	description: 'Discover the latest fashion trends at IvydaleFashion.',
	keywords: ['fashion', 'clothing', 'trendy wear', 'IvydaleFashion'],
	openGraph: {
	  title: 'IvydaleFashion',
	  description: 'IvydaleFashion, the home of fashion',
	  type: 'website',
	  url: 'https://www.ivydalefashion.netlify.app',
	  images: [
		{
		  url: 'https://www.ivydalefashion.com/og-image.jpg', // Must be a valid image
		  secure_url: 'https://www.ivydalefashion.com/og-image.jpg',
		  width: 1200,
		  height: 630,
		  alt: 'IvydaleFashion - Trendy Fashion Wear',
		  type: 'image/jpeg', // Specify the image format
		},
	  ],
	},
	twitter: {
	  card: 'summary_large_image',
	  site: '@ivydaleFashion',
	  title: 'IvydaleFashion',
	  description: 'IvydaleFashion, the home of fashion',
	  images: ['https://www.ivydalefashion.com/twitter-card.jpg'],
	},
  };
  

const LandingPage = () => {
	return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<CommerceComponent></CommerceComponent>
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default LandingPage;
