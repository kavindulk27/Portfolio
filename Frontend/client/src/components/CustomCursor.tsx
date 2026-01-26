import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Mouse position state
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for the trailing circle
    // Damping: Strength of opposing force. Stiffness: Speed of movement.
    const springConfig = { damping: 25, stiffness: 120 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Only run on client
        if (typeof window === "undefined") return;

        const moveCursor = (e: MouseEvent) => {
            // Offset by radius (16px) to center the 32px ring
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if target is clickable/interactive
            const isInteractive =
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                window.getComputedStyle(target).cursor === "pointer";

            setIsHovering(!!isInteractive);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main Dot - Follows EXACTLY (no spring) */}
            <motion.div
                className="fixed top-0 left-0 w-2.5 h-2.5 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    // Center dot inside the ring. Ring is 32px, Dot is 10px.
                    // Ring position is top-left.
                    // We want Dot center == Ring center.
                    // Ring center offset = +16.
                    // Dot center offset (from its top-left) = +5.
                    // So translation needed relative to Ring Top-Left (which is mouseX, mouseY):
                    // Ring Top-Left is at (CursorX - 16, CursorY - 16). 
                    // Actually, mouseX/Y ARE computed as (ClientX - 16).
                    // So mouseX is the Left edge of the Ring.
                    // We want Dot Left = Ring Left + (RingWidth/2 - DotWidth/2)
                    // 16 - 5 = 11px
                    translateX: "11px",
                    translateY: "11px",
                }}
            />

            {/* Trailing Ring - Follows with SPRING */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-[9998] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: 1,
                }}
                transition={{
                    scale: { duration: 0.2 },
                    opacity: { duration: 0.2 }
                }}
            />
        </>
    );
}
