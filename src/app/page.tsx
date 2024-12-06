// Next
import Image from 'next/image';

// Icons
import { MegaphoneHeroIcon } from '@/assets/icons';

// Components
import SectionTitle from '@/components/shared/SectionTitle';
import ServiceCard from '@/components/shared/ServiceCard';

const CLIENTS_LOGOS = [
	{
		image: '/images/amazon-logo.png',
		alt: 'Amazon Logo',
	},
	{
		image: '/images/dribble-logo.png',
		alt: 'Dribble Logo',
	},
	{
		image: '/images/hubspot-logo.png',
		alt: 'HubSpot Logo',
	},
	{
		image: '/images/notion-logo.png',
		alt: 'Notion Logo',
	},
	{
		image: '/images/netflix-logo.png',
		alt: 'Netflix Logo',
	},
	{
		image: '/images/zoom-logo.png',
		alt: 'Zoom Logo',
	},
];

export default function Home() {
	return (
		<main>
			<section className="max-w-layout m-auto px-[20px] lg:px-[50px] xl:px-[100px] pt-[30px] lg:pt-[50px] xl:pt-[70px] flex items-center justify-between gap-10">
				<div className="flex flex-col gap-[35px]">
					<h2 className="text-h1 font-medium leading-[70px]">
						Navigating the digital landscape for success
					</h2>

					<p className="max-w-[500px] text-[20px]">
						Our digital marketing agency helps businesses grow and
						succeed online through a range of services including
						SEO, PPC, social media marketing, and content creation.
					</p>

					<button className="w-fit bg-dark text-white py-[20px] px-[35px] rounded-xl">
						Book a consultation
					</button>
				</div>

				<div>
					<MegaphoneHeroIcon />
				</div>
			</section>

			<div className="max-w-layout m-auto px-[20px] lg:px-[50px] xl:px-[100px] py-[30px] lg:py-[50px] xl:py-[70px] flex items-center justify-between">
				{CLIENTS_LOGOS.map((logo) => (
					<Image
						src={logo.image}
						alt={logo.alt}
						key={logo.image}
						width={125}
						height={48}
						className="grayscale transition-all duration-300 hover:grayscale-0"
					/>
				))}
			</div>

			<section className="max-w-layout m-auto px-[20px] lg:px-[50px] xl:px-[100px] pt-[30px] lg:pt-[50px] xl:pt-[70px] flex flex-col gap-[80px] h-[20000px]">
				<SectionTitle
					title="Services"
					description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
				/>

				<div className="">
					<ServiceCard />
				</div>
			</section>
		</main>
	);
}
