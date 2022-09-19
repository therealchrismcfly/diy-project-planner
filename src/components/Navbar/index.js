import Link from 'next/link';

import StyledNavbar from '../StyledNavbar/styled';

export default function Navbar() {
	return (
		<StyledNavbar>
			<Link href="/">Projects</Link>
			<Link href="/newproject">+</Link>
			<Link href="/profile">Profile</Link>
		</StyledNavbar>
	);
}
