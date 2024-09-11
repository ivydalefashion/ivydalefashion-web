import React from 'react';
import ArticleComponent from './articleComponent';
import BlogNavbarComponent from '../_components/BlogNavbarComponent';
import Footers from '@/app/(Commerce)/_components/Footer';

const Articlepage = () => {
	return (
		<div>
			<BlogNavbarComponent></BlogNavbarComponent>
			<ArticleComponent></ArticleComponent>
			<Footers></Footers>
		</div>
	);
};

export default Articlepage;
