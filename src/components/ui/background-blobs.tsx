'use client'

import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundBlobs = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-10]">
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, 50, 100, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{
                    x: [0, -80, 60, 0],
                    y: [0, 120, -40, 0],
                    scale: [1, 0.9, 1.2, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[140px]"
            />
            <motion.div
                animate={{
                    x: [0, 40, -60, 0],
                    y: [0, -100, 50, 0],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[30%] left-[20%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]"
            />
        </div>
    );
};
