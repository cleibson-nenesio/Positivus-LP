'use client';

import { useState } from 'react';
// Icons
import { CiMenuFries } from 'react-icons/ci';
import { Path } from '.';
import Link from 'next/link';

export default function MobileMenu({ paths }: { paths: Path[] }) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const openMenu = () => setIsOpen(true);
	const closeMenu = () => setIsOpen(false);

	return (
		<>
			<button onClick={openMenu} className="lg:hidden">
				<CiMenuFries size={20} strokeWidth={1} />
			</button>

			<div
				className={`${
					isOpen ? 'block' : 'hidden'
				} fixed bg-black transition-all duration-300 opacity-50 top-0 left-0 right-0 bottom-0`}
				onClick={closeMenu}
			/>

			<div
				className={`fixed h-full ${
					isOpen ? 'w-2/3' : 'w-0'
				} bg-white transition-all duration-300 right-0 top-0 shadow overflow-hidden`}
			>
				<nav
					className={`${
						isOpen ? 'flex' : 'hidden'
					} flex-col gap-[20px] items-center justify-center`}
				>
					<ul className="flex flex-col gap-[20px] items-center justify-center pt-10">
						{paths.map((item, index) => (
							<li key={index} className="relative">
								<Link
									href={item.path}
									className="text-nowrap before:h-[2px] before:bg-primary before:w-0 before:transition-all before:duration-300 before:absolute before:bottom-0 hover:before:w-full"
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>

					<button className="py-[20px] px-[35px] border rounded-xl text-nowrap whitespace-nowrap">
						Request a quote
					</button>
				</nav>
			</div>
		</>
	);
}
