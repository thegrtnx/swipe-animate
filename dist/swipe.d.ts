import React from "react";
interface SwipeProps {
    words: string[];
    intervalDuration?: number;
    textSizes?: {
        [key: string]: string;
    };
    textColors?: string[];
}
declare const Swipe: React.FC<SwipeProps>;
export default Swipe;
