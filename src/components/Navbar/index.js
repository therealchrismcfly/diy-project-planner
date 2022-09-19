import Link from 'next/link';

import StyledAddButton from '../StyledAddButton/styled';
import StyledNavbar from '../StyledNavbar/styled';

export default function Navbar() {
	return (
		<StyledNavbar>
			<Link href="/">Projects</Link>
			<Link href="/newproject">
				<a>
					<StyledAddButton>+</StyledAddButton>
				</a>
			</Link>
			<Link href="/profile">Profile</Link>
		</StyledNavbar>
	);
}
