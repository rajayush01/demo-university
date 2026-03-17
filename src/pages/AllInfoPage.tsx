import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { allInfoData, detailedInfoData, DepartmentType } from '@/data/allInfoData';

const AllInfoPage: React.FC = () => {
	const { department } = useParams<{ department: string }>();
	const navigate = useNavigate();
	const [selectedSection, setSelectedSection] = useState<string>('');
	const [activeItem, setActiveItem] = useState<string | null>(null);

	const currentDept = department ? allInfoData[department as DepartmentType] : null;
	const sections = department ? detailedInfoData[department as DepartmentType] : null;

	// Set initial section when component mounts or department changes
	useEffect(() => {
		if (sections) {
			const firstSectionKey = Object.keys(sections)[0];
			if (firstSectionKey) {
				setSelectedSection(firstSectionKey);
			}
		}
	}, [department, sections]);

	// Scroll to top on mount
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	if (!currentDept || !sections) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
				<div className="text-center">
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.5 }}
						className="mb-4"
					>
						<span className="text-6xl">📭</span>
					</motion.div>
					<h2 className="text-2xl font-bold text-gray-800 mb-4">Department not found</h2>
					<p className="text-gray-600 mb-6">The department you're looking for doesn't exist.</p>
					<button
						onClick={() => navigate('/')}
						className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
					>
						Go Back Home
					</button>
				</div>
			</div>
		);
	}

	const currentSection = sections[selectedSection];
	const currentData = currentSection?.items || [];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 mt-40">
			{/* Header */}
			{/* <motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="bg-white shadow-md"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<button
						onClick={() => navigate('/')}
						className="text-blue-600 hover:text-blue-800 mb-4 flex items-center gap-2 transition-colors"
					>
						<span>←</span> Back to Home
					</button>
					<h1 className="text-3xl sm:text-4xl font-bold text-blue-900">{currentDept.title}</h1>
					<p className="text-gray-600 mt-2">Access all important information and updates</p>
				</div>
			</motion.div> */}

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-10">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
					{/* Left Sidebar */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="lg:col-span-3"
					>
						<div className="bg-[#2c4f6f] text-white rounded-lg overflow-hidden shadow-lg sticky top-4">
							<div className="bg-[#1e3a52] px-6 py-4">
								<h2 className="text-xl font-bold">Important Links</h2>
							</div>
							<nav className="divide-y divide-blue-800/30">
								{Object.entries(sections).map(([key, section]) => (
									<motion.button
										key={key}
										onClick={() => setSelectedSection(key)}
										whileHover={{ x: 4 }}
										whileTap={{ scale: 0.98 }}
										className={`w-full text-left px-6 py-4 transition-all duration-300 ${
											selectedSection === key
												? 'bg-blue-800/40 border-l-4 border-yellow-500'
												: 'hover:bg-blue-800/20'
										}`}
									>
										<div className="flex items-center gap-3">
											<span className="text-xl">{section.icon}</span>
											<span className="font-medium text-sm">{section.label}</span>
										</div>
									</motion.button>
								))}
							</nav>
						</div>
					</motion.div>

					{/* Right Content Area */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="lg:col-span-9"
					>
						<div className="bg-white rounded-lg shadow-lg overflow-hidden">
							{/* Content Header */}
							<div className="border-b-4 border-yellow-500 bg-gradient-to-r from-blue-50 to-white px-6 py-5">
								<h2 className="text-2xl sm:text-3xl font-bold">
									View All{' '}
									<span className="text-yellow-600">{currentSection?.label || 'Information'}</span>
								</h2>
							</div>

							{/* Content List */}
							<div className="divide-y">
								{currentData.map((item, index) => {
									const itemKey = `${selectedSection}-${item.id}`;

									return (
										<motion.div
											key={itemKey}
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.3, delay: index * 0.05 }}
											className="relative overflow-hidden cursor-pointer group"
											onMouseEnter={() => setActiveItem(itemKey)}
											onMouseLeave={() => setActiveItem(null)}
										>
											{/* Hover background */}
											<motion.div
												initial={{ scaleX: 0 }}
												animate={{ scaleX: activeItem === itemKey ? 1 : 0 }}
												transition={{ duration: 0.3, ease: 'easeInOut' }}
												className="absolute inset-0 bg-gradient-to-r from-blue-50 to-yellow-50 origin-left"
											/>

											{/* Content */}
											<div className="relative px-6 py-4 flex items-start gap-4">
												<span className="text-blue-600 font-bold text-lg mt-1 min-w-[30px]">
													»
												</span>
												<div className="flex-1">
													<div className="flex items-start gap-3 flex-wrap">
														<p className="text-gray-800 group-hover:text-blue-900 transition-colors font-medium flex-1">
															{item.title}
														</p>
														{item.isNew && (
															<span className="bg-[#2c4f6f] text-white text-xs px-3 py-1 rounded-full font-semibold">
																New
															</span>
														)}
													</div>
													{item.date && (
														<p className="text-gray-500 text-sm mt-1">
															{new Date(item.date).toLocaleDateString('en-US', {
																year: 'numeric',
																month: 'long',
																day: 'numeric',
															})}
														</p>
													)}
													{item.content && (
														<motion.p
															initial={{ opacity: 0, height: 0 }}
															animate={{
																opacity: activeItem === itemKey ? 1 : 0,
																height: activeItem === itemKey ? 'auto' : 0,
															}}
															transition={{ duration: 0.3 }}
															className="text-gray-600 text-sm mt-2 overflow-hidden"
														>
															{item.content}
														</motion.p>
													)}
												</div>

												{/* Arrow indicator */}
												<motion.span
													initial={{ x: 0, opacity: 0 }}
													animate={{
														x: activeItem === itemKey ? 0 : -10,
														opacity: activeItem === itemKey ? 1 : 0,
													}}
													transition={{ duration: 0.3 }}
													className="text-blue-600 text-xl"
												>
													→
												</motion.span>
											</div>
										</motion.div>
									);
								})}
							</div>

							{/* Empty State */}
							{currentData.length === 0 && (
								<div className="px-6 py-16 text-center text-gray-500">
									<div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
										<span className="text-4xl">📭</span>
									</div>
									<p className="text-lg font-medium">No items available at the moment.</p>
									<p className="text-sm mt-2">Check back later for updates.</p>
								</div>
							)}
						</div>

						{/* Info Box */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.5 }}
							className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg"
						>
							<div className="flex items-start gap-3">
								<span className="text-2xl">ℹ️</span>
								<div>
									<h3 className="font-semibold text-blue-900 mb-1">Need More Information?</h3>
									<p className="text-sm text-gray-700">
										For additional details or inquiries, please contact the respective department
										office or visit the university help desk.
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default AllInfoPage;