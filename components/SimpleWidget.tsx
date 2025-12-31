interface Props {
	label: string;
	title: string;
	subtitle?: string;
	icon?: React.ReactNode;
	link?: string;
}

export const SimpleWidget = ({ label, title, subtitle, icon, link }: Props) => {
	return (
		<div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 m-2 ">
			<div className="flex flex-col">
				<div>
					<h2 className="font-bold text-gray-600 text-center">{label}</h2>
				</div>
				<div className="my-3">
					<div className="flex flex-row items-center justify-center space-x-1 ">
						<div id="icon">
							{/* Icono irá aquí */}
							{icon}
						</div>
						<div id="temp" className="text-center">
							<h4 className="text-4xl text-blue-600">{title}</h4>
							{subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
						</div>
					</div>
				</div>

				<div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
					{link && (
						<a href={link} className="text-blue-600 text-xs font-medium">
							Más
						</a>
					)}
				</div>
			</div>
		</div>
	);
};
