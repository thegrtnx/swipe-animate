import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SwipeProps {
	words: string[];
	intervalDuration?: number;
	textSize?: string;
	textColors?: string[];
}

const Swipe: React.FC<SwipeProps> = ({ words, intervalDuration, textSize, textColors }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, intervalDuration);

		return () => clearInterval(interval);
	}, [intervalDuration, words.length]);

	const textColor = textColors ? textColors[activeIndex % textColors.length] : undefined;

	return (
		<div className="inline-flex overflow-hidden transition-all duration-500">
			<span className={`w-[100px]s w-auto text-center ${textSize ? `text-${textSize}` : ""} ${textColor ? `text-${textColor}` : ""} transition-all duration-500`}>
				<AnimatePresence mode="wait">
					<motion.div
						key={activeIndex}
						initial={{ y: "4rem" }}
						animate={{ y: "0rem" }}
						exit={{ y: "4rem" }}
						transition={{ duration: 1 }}>
						<p>{words[activeIndex]}</p>
					</motion.div>
				</AnimatePresence>
			</span>
		</div>
	);
};

export default Swipe;
