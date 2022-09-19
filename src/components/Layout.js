import Navbar from '../components/Navbar/index';

export default function Layout({children}) {
	return (
		<>
			<main>{children}</main>
			<Navbar />
		</>
	);
}
