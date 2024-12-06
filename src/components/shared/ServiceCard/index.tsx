import { OpenExternalIcon } from '@/assets/icons';
import Image from 'next/image';

export default function ServiceCard() {
	return (
		<div
			className={`p-[50px] border w-fit rounded-[45px] flex items-center justify-between gap-[70px] shadow-default`}
		>
			<div className="flex flex-col justify-between gap-[93px]">
				<div>
					<h4 className="px-[7px] bg-primary text-h3 font-medium rounded-[7px] w-fit">
						Search engine
					</h4>
					<h3 className="px-[7px] bg-primary text-h3 font-medium rounded-[7px] w-fit">
						optimization
					</h3>
				</div>

				<button className="flex items-center gap-[15px]">
					<OpenExternalIcon />

					<p className="text-[20px]">Learn more</p>
				</button>
			</div>

			<Image
				src={'/images/seo-optimization.png'}
				alt={'SEO Optimization'}
				width={210}
				height={170}
			/>
		</div>
	);
}
