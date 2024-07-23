import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedComponentProps {
	children: React.ReactNode;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children }) => {
	return (
		<div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				{children}
			</motion.div>
		</div>
		
	);
};

export default AnimatedComponent;
