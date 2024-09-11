import Image from 'next/image';

const ResponsiveImage = ({ src, alt, width, height, className }: any) => {
	return (
		<div className={className}>
			<Image src={src} alt={alt} layout="fill" objectFit="cover" quality={100} />
		</div>
	);
};

export default ResponsiveImage;
