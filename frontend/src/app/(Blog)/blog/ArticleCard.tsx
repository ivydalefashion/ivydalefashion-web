'use client';

import { Card } from 'react-bootstrap';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../_styles/ArticleCard.module.scss';

export default function ArticleCard({ article }: any) {
	return (
		<div>
			<Card className={styles.card}>
				<div className={styles.imageWrapper}>
					<Image
						src={article.image}
						alt={article.title}
						layout="fill"
						objectFit="cover"
					/>
				</div>

				<motion.div
					className={styles.overlay}
					initial={{ y: '100%' }}
					whileHover={{ y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<Card.Body>
						<Card.Title>{article.title}</Card.Title>
						<Card.Text>{article.excerpt}</Card.Text>
					</Card.Body>
				</motion.div>
			</Card>
		</div>
	);
}
