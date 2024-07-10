'use client';
import React from 'react';
import Image from 'next/image';

interface ResponsiveImageProps {
	src: string;
	alt: string;
	width: number;
	height: number;
}

const ResponsiveImage = ({ src, alt, width, height }: ResponsiveImageProps) => {
	return (
		<div className={``}>
			<Image
				src={src}
				alt={alt}
				layout="responsive"
				width={width}
				height={height}
				sizes="(max-width: 768px) 100vw, 
				 (max-width: 1200px) 50vw, 
				 33vw"
			/>
		</div>
	);
};

export default ResponsiveImage;
