import Link from 'next/Link';
/* import {useRouter} from 'next/router'; */

import StyledAddButton from '../StyledAddButton/styled';
import StyledNavbar from '../StyledNavbar/styled';

export default function Navbar() {
	return (
		<StyledNavbar>
			<Link href="/">Projects</Link>
			<Link href="/newproject">
				<StyledAddButton>+</StyledAddButton>
			</Link>
			<Link href="/profile">Profile</Link>
		</StyledNavbar>
	);
}
