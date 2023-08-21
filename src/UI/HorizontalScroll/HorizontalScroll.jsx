import {useRef, useState} from "react";
import s from "./HorizontalScroll.module.scss";


const HorizontalScroll = ({children}) => {
    const scrollRef = useRef();
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        if (scrollRef && scrollRef.current && !scrollRef.current.contains(e.target)) {
            return
        }
        e.preventDefault()
        setIsDragging(true);
        setStartX(e.clientX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (scrollRef && scrollRef.current && !scrollRef.current.contains(e.target)) return;


        if (!isDragging) return;
        e.preventDefault();
        const x = e.clientX - scrollRef.current.offsetLeft;
        const walk = x - startX;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            ref={scrollRef}
            className={s.scroll_container}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            {children}
        </div>
    );
};


export default HorizontalScroll;