import "./ui/ListviewMessageIfEmpty.css";
import { createElement, useEffect, useRef, useState } from "react";

export default function ListviewMessageIfEmpty({ listviewWidget, emptyWidget, ...rest }) {
    const style = rest.class || "";
    const listviewMessageRef = useRef(null);
    const listviewWidgetRef = useRef(null);
    const returnType = { widget: "widget", emptyText: "text" };
    const [displayWidget, setDisplayWidget] = useState(returnType.widget);
    const [displayClass, setDisplayClass] = useState(null);
    const config = {
        // attributes: true,
        // attributeOldValue: true,
        childList: true, // This is a must have for the observer with subtree
        subtree: true // Set to true if changes must also be observed in descendants.
    };

    function callback() {
        const listview = listviewWidgetRef.current.querySelector(".mx-listview:first-of-type");
        const emptyList = listview.querySelectorAll(":scope > ul > li:only-child.mx-listview-empty");

        if (emptyList.length) {
            setDisplayWidget(returnType.emptyText);
            setDisplayClass("hidden");
        } else {
            setDisplayWidget(returnType.widget);
            setDisplayClass("show");
        }
    }

    useEffect(() => {
        const observer = new MutationObserver(() => {
            observer.disconnect();
            if (listviewWidgetRef.current) {
                callback();
            }
            observer.observe(listviewWidgetRef.current, config);
        });

        if (listviewWidgetRef && listviewWidgetRef.current) {
            observer.observe(listviewWidgetRef.current, config);
        }

        return () => observer.disconnect();
    });

    return (
        <div className="listview-message-if-empty">
            <div className={`listview-message-if-empty__widget ${displayClass}`} ref={listviewWidgetRef}>
                {listviewWidget}
            </div>
            {displayWidget === returnType.emptyText && (
                <div className={`listview-message-if-empty__text ${style}`} ref={listviewMessageRef}>
                    {emptyWidget}
                </div>
            )}
        </div>
    );
}
