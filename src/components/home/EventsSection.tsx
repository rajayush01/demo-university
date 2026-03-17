import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { allInfoData, DepartmentType } from '@/data/allInfoData';

const EventsSection: React.FC = () => {
	const navigate = useNavigate();
	const [activeItem, setActiveItem] = useState<string | null>(null);

	const handleViewAll = (key: DepartmentType) => {
		// Scroll to top and navigate
		window.scrollTo({ top: 0, behavior: 'smooth' });
		navigate(`/all-info/${key}`);
	};

	return (
		<div className="px-4 sm:px-10 py-20">
			{/* Top Left Heading */}
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className="mb-8 max-w-7xl mx-auto text-center"
			>
				<h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-2">
					Quick <span className="text-[#B8860B]">Information</span>
				</h2>
				<p className="sm:text-lg text-md text-gray-700 max-w-3xl mx-auto border-t-2 border-gray-300 pt-4">
					Access important resources and information about our institute's administration, policies, and
					governance.
				</p>
			</motion.div>

			{/* Cards Grid */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
				{(Object.keys(allInfoData) as DepartmentType[]).map((key, idx) => {
					const dept = allInfoData[key]!;

					return (
						<motion.div
							key={key}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							whileHover={{
								y: -8,
								boxShadow: '0px 20px 45px rgba(0,0,0,0.18)',
							}}
							whileTap={{
								scale: 0.97,
							}}
							transition={{
								duration: 0.4,
								ease: 'easeOut',
								delay: idx * 0.1,
							}}
							viewport={{ once: true }}
							className="relative bg-white/90 border rounded-xl flex flex-col overflow-hidden max-h-[420px] shadow-lg hover:shadow-xl transition-shadow"
						>
							{/* Golden border on hover */}
							<motion.span
								initial={{ opacity: 0 }}
								whileHover={{ opacity: 1 }}
								whileTap={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
								className="absolute inset-0 rounded-xl border-2 border-yellow-500 pointer-events-none"
							/>

							{/* Title */}
							<h3 className="text-xl font-semibold p-4 border-b text-[#1e3a8a] bg-white sticky top-0 z-10">
								{dept.title}
							</h3>

							{/* Scrollable List */}
							<ul className="flex-1 divide-y overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-600/70">
								{dept.items.map((item, index) => {
									const itemKey = `${key}-${index}`;

									return (
										<motion.li
											key={itemKey}
											className="relative overflow-hidden p-4 text-sm text-gray-700 hover:text-white cursor-pointer select-none"
											onMouseEnter={() => setActiveItem(itemKey)}
											onMouseLeave={() => setActiveItem(null)}
											onTapStart={() => setActiveItem(itemKey)}
											onTapCancel={() => setActiveItem(null)}
											onTap={() => setTimeout(() => setActiveItem(null), 300)}
											onClick={() => handleViewAll(key)}
										>
											{/* Blue slide background */}
											<motion.span
												initial={{ scaleX: 0 }}
												animate={{ scaleX: activeItem === itemKey ? 1 : 0 }}
												transition={{ duration: 0.35, ease: 'easeInOut' }}
												className="absolute inset-0 bg-[#B8860B]/80 origin-left z-0"
											/>

											{/* Text */}
											<span className="relative z-10">• {item}</span>
										</motion.li>
									);
								})}
							</ul>

							{/* View All Button */}
							<motion.button
								onClick={() => handleViewAll(key)}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.92 }}
								className="relative overflow-hidden bg-[#1e3a8a] text-white py-3 font-medium flex items-center justify-center gap-2"
							>
								{/* Shimmer effect */}
								<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />

								<span className="relative z-10 flex items-center gap-2">
									View All
									<motion.span
										initial={{ x: 0 }}
										whileHover={{ x: 6 }}
										transition={{ duration: 0.3 }}
									>
										→
									</motion.span>
								</span>
							</motion.button>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default EventsSection;
