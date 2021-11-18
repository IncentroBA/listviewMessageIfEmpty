import "./ui/ListviewMessageIfEmpty.css";
import { createElement, useEffect, useRef, useState } from "react";
import { waitFor } from "./helpers/waitfor";

export default function ListviewMessageIfEmpty({ className, context, textIfEmpty, ...rest }) {
    const style = rest.class || "";
    const [canRender, setCanRender] = useState(false);
    const listviewMessage = useRef(null);

    useEffect(() => {
        if (context && context.status === "available" && listviewMessage.current) {
            if (context.items.length === 0) {
                setCanRender(true);
                listviewMessage.current.classList.remove("hidden");
            } else {
                setCanRender(false);
                listviewMessage.current.classList.add("hidden");
            }
        }
    }, [context]);

    function callback() {
        document.querySelectorAll(`.${className}`).forEach(contextItem => {
            const listViews = contextItem.querySelectorAll(".mx-listview-empty");
            if (listViews) {
                listViews.forEach(listViewEmpty => listViewEmpty.classList.add("hidden"));
            }
        });
    }

    waitFor(`.${className} .mx-listview-empty`, callback, document);

    if (canRender) {
        return (
            <div className={`listview-message-if-empty ${style}`} ref={listviewMessage}>
                {textIfEmpty.value}
            </div>
        );
    } else {
        return <div className="listview-message-if-empty" ref={listviewMessage}></div>;
    }
}
