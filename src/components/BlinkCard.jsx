import { motion } from 'framer-motion';
import { useState } from 'react';

const BlinkCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFlip = () => {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    };

    return (
        <div className="w-full flex items-center justify-center p-8 perspective-1000">
            <div
                className="relative w-full max-w-sm aspect-[1.586/1] cursor-pointer group"
                onClick={handleFlip}
            >
                <motion.div
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, animationDirection: "normal" }}
                    onAnimationComplete={() => setIsAnimating(false)}
                    className="w-full h-full relative preserve-3d shadow-2xl rounded-xl"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden bg-white text-black rounded-xl p-8 flex flex-col justify-between overflow-hidden border-2 border-gray-200">
                        {/* Subtle noise or texture could go here */}
                        <div className="text-xs font-bold tracking-[0.2em] text-gray-500">IDENTIFICATION</div>

                        <div className="flex flex-col items-center justify-center flex-grow space-y-2">
                            <h1 className="text-5xl font-black tracking-tighter">BLINK</h1>
                            <div className="h-px w-12 bg-black/20"></div>
                            <p className="text-xs font-bold tracking-widest uppercase mt-1">Chief Executive Officer</p>
                        </div>

                        <div className="flex justify-between items-end">
                            <div className="text-[0.6rem] font-mono text-gray-400">NON-TRANSFERABLE</div>
                            <div className="h-8 w-8 rounded-full border border-black/10 flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-black/5"></div>
                            </div>
                        </div>
                    </div>

                    {/* Back */}
                    <div
                        className="absolute inset-0 backface-hidden bg-zinc-900 text-white rounded-xl p-8 flex flex-col justify-between overflow-hidden border-2 border-zinc-800"
                        style={{ transform: 'rotateY(180deg)' }}
                    >
                        <div className="text-[0.6rem] font-bold tracking-[0.2em] text-zinc-500 uppercase">Conditions of Entry</div>

                        <div className="flex flex-col justify-center flex-grow space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Valid During Events Only</h3>
                            </div>
                            <ul className="text-sm space-y-2 font-medium">
                                <li className="flex items-start gap-2">
                                    <span className="text-zinc-500">•</span> Decide fast
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-zinc-500">•</span> No spectators
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-zinc-500">•</span> No future planning
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-zinc-500">•</span> Act as if this matters
                                </li>
                            </ul>
                        </div>

                        <div className="text-[0.6rem] font-mono text-zinc-600 self-end">
                            BLINK.CEO
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                .preserve-3d { transform-style: preserve-3d; }
                .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
                .perspective-1000 { perspective: 1000px; }
            `}</style>
        </div>
    );
};

export default BlinkCard;
