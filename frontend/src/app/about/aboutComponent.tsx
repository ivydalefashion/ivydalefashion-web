'use client';
import React from 'react';
import { Metadata } from 'next';
import { Container, Row } from 'react-bootstrap';
import MainNavbar from '../(Commerce)/_components/Header';

const AboutComponent = () => {
	return (
		<div>
			<MainNavbar></MainNavbar>
			<Container>
				<Row>
					<h1> About IVYDALEFASHION</h1>
					<hr />
					<p>
						Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
						adipisci velit... There is no one who loves pain itself, who seeks after it
						and wants to have it, simply because it is pain...
					</p>

					<hr />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta
						tincidunt arcu, tincidunt lacinia ipsum finibus id. Suspendisse at nunc sed
						sem sagittis volutpat. Nam vitae sem aliquam, vulputate mauris et, congue
						erat. Fusce nec accumsan quam. Cras maximus nibh ut erat suscipit auctor.
						Aenean dignissim nisi id imperdiet pretium. Fusce ac enim eu felis efficitur
						cursus sed ac leo. Fusce facilisis velit id dui pretium, sit amet
						pellentesque diam porttitor. Phasellus sed ex tristique, feugiat velit
						venenatis, commodo arcu. Aliquam turpis nulla, pellentesque ac pretium et,
						suscipit non ligula. Nulla sollicitudin eleifend elementum. Suspendisse
						dapibus, leo sit amet aliquam varius, felis nulla congue magna, non
						sollicitudin neque elit commodo diam. Sed interdum non ipsum in malesuada.
						Nam aliquam, tellus vel fringilla rhoncus, justo lorem dapibus erat, quis
						tincidunt nisl erat eget diam. Integer fringilla, felis nec sollicitudin
						tincidunt, odio neque mattis felis, a pulvinar nisi erat nec odio. Proin in
						eros feugiat, porttitor lorem non, egestas eros. Nullam orci turpis,
						pellentesque sed leo vitae, rutrum fringilla metus. Morbi cursus metus quis
						elementum semper. Aliquam nec mauris pretium nisl egestas tincidunt. Fusce
						at purus non elit tincidunt cursus. Sed ipsum odio, laoreet non enim ac,
						semper gravida lorem.
					</p>
				</Row>
			</Container>
		</div>
	);
};

export default AboutComponent;
