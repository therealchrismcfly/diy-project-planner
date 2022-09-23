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
						<Icon variant="listFilled" color="var(--loveVessel)" />
					) : (
						<Icon variant="list" color="var(--plainWhite)" />
					)}
				</a>
			</Link>
			<Link href="/newproject">
				<a>
					<StyledAddButton>
						<Icon variant="add" size="25px" color="var(--plainWhite)" />
					</StyledAddButton>
				</a>
			</Link>
			<Link href="/profile">
				<a>
					{router.pathname === '/profile' ? (
						<Icon variant="profileFilled" color="var(--loveVessel)" />
					) : (
						<Icon variant="profile" color="var(--plainWhite)"></Icon>
					)}
				</a>
			</Link>
		</StyledNavbar>
	);
}
