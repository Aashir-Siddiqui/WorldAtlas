"use client";
import { cn } from "../lib/utils";
import { motion } from "motion/react";
import React from "react";

export const BackgroundBeamsWithCollision = ({
    children,
    className,
}) => {
    const beams = [
        {
            initialX: 10,
            translateX: 10,
            duration: 7,
            repeatDelay: 3,
            delay: 2,
        },
        {
            initialX: 600,
            translateX: 600,
            duration: 3,
            repeatDelay: 3,
            delay: 4,
        },
        {
            initialX: 100,
            translateX: 100,
            duration: 7,
            repeatDelay: 7,
            className: "h-6",
        },
        {
            initialX: 400,
            translateX: 400,
            duration: 5,
            repeatDelay: 14,
            delay: 4,
        },
        {
            initialX: 800,
            translateX: 800,
            duration: 11,
            repeatDelay: 2,
            className: "h-20",
        },
        {
            initialX: 1000,
            translateX: 1000,
            duration: 4,
            repeatDelay: 2,
            className: "h-12",
        },
        {
            initialX: 1200,
            translateX: 1200,
            duration: 6,
            repeatDelay: 4,
            delay: 2,
            className: "h-6",
        },
    ];

    return (
        <div
            className={cn(
                "h-full bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 relative flex items-center w-full justify-center overflow-hidden",
                className
            )}
        >
            {beams.map((beam) => (
                <motion.div
                    key={beam.initialX + "beam-idx"}
                    animate="animate"
                    initial={{
                        translateY: beam.initialY || "-200px",
                        translateX: beam.initialX || "0px",
                        rotate: beam.rotate || 0,
                    }}
                    variants={{
                        animate: {
                            translateY: beam.translateY || "5000px",
                            translateX: beam.translateX || "0px",
                            rotate: beam.rotate || 0,
                        },
                    }}
                    transition={{
                        duration: beam.duration || 8,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        delay: beam.delay || 0,
                        repeatDelay: beam.repeatDelay || 0,
                    }}
                    className={cn(
                        "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-blue-800 via-blue-950 to-transparent",
                        beam.className
                    )}
                />
            ))}
            {children}
        </div>
    );
};