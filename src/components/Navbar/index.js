import Link from 'next/link';
import {useRouter} from 'next/router';

import Icon from '../Icons';
import StyledAddButton from '../StyledAddButton/styled';
import StyledNavbar from '../StyledNavbar/styled';

export default function Navbar() {
	const router = useRouter();
	return (
		<StyledNavbar>
			<Link href="/">
				<a>
					{router.pathname == '/' ? (
						<Icon variant="listFilled" />
					) : (
						<Icon variant="list" />
					)}
				</a>
			</Link>
			<Link href="/newproject">
				<a>
					<StyledAddButton>
						<Icon variant="add" size="25px" />
					</StyledAddButton>
				</a>
			</Link>
			<Link href="/profile">
				<a>
					{router.pathname === '/profile' ? (
						<Icon variant="profileFilled" />
					) : (
						<Icon variant="profile"></Icon>
					)}
				</a>
			</Link>
		</StyledNavbar>
	);
}
