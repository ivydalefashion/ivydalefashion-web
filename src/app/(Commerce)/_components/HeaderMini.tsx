'use clinet';

import styles from './_styles_components/HeaderMini.module.scss';

const MiniNavbar = () => {
	return (
		<div>
			<nav className={`navbar ${styles.navbarContainerStyles}`}>
				<div className="container-fluid justify-content-center ">
					<span className={`navbar-brand ${styles.navbarBrandStyle}`}>IVY</span>
				</div>
			</nav>
		</div>
	);
};

export default MiniNavbar;
