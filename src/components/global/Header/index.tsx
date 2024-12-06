// Next
import Link from 'next/link';

// Icons
import { Logo } from '@/assets/icons';

// Components
import MobileMenu from './MobileMenu';

export type Path = Record<'label' | 'path', string>;

const PATHS: Path[] = [
	{
		label: 'About us',
		path: '#about-us',
	},
	{
		label: 'Services',
		path: '#services',
	},
	{
		label: 'Use Cases',
		path: '#use-cases',
	},
	{
		label: 'Pricing',
		path: '#pricing',
	},
	{
		label: 'Blog',
		path: '#blog',
	},
];

export default function Header() {
	return (
		<header className="max-w-layout m-auto px-[20px] lg:px-[50px] xl:px-[100px] pt-[20px] lg:pt-[40px] xl:pt-[60px] flex justify-between items-center gap-[20px]">
			<Link href="/" className="w-[160px]">
				<Logo className="w-full" />
				<h1 className="text-[0px]">Positivus</h1>
			</Link>

			<MobileMenu paths={PATHS} />

			<nav className="hidden lg:flex items-center gap-[40px] ">
				<ul className="flex items-center gap-[40px]">
					{PATHS.map((item, index) => (
						<li key={index} className="relative">
							<Link
								href={item.path}
								className="before:h-[2px] before:bg-primary before:w-0 before:transition-all before:duration-300 before:absolute before:bottom-0 hover:before:w-full"
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>

				<button className="py-[20px] px-[35px] border rounded-xl">
					Request a quote
				</button>
			</nav>
		</header>
	);
}
