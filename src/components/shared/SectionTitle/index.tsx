export default function SectionTitle({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="flex items-center gap-[40px]">
			<h3 className="bg-primary text-h2 font-medium px-[7px] rounded-md">
				{title}
			</h3>

			<p className="max-w-[580px]">{description}</p>
		</div>
	);
}
