import "./ui/ListviewMessageIfEmpty.css";
import { createElement, useEffect, useRef, useState } from "react";
import { waitFor } from "./helpers/waitfor";

export default function ListviewMessageIfEmpty({ listviewWidget, emptyWidget, ...rest }) {
    const style = rest.class || "";
    const listviewMessageRef = useRef(null);
    const listviewWidgetRef = useRef(null);
    const returnType = { widget: "widget", emptyText: "text" };
    const [displayWidget, setDisplayWidget] = useState(returnType.widget);
    const [displayClass, setDisplayClass] = useState(null);
    const listviewRef = useRef(null);

    function callback() {
        console.info("callback");
        setTimeout(() => {
            if (listviewWidgetRef.current.querySelector(".mx-listview-empty")) {
                setDisplayWidget(returnType.emptyText);
                setDisplayClass("hidden");
            } else {
                setDisplayWidget(returnType.widget);
                setDisplayClass(null);
            }
        }, 10);
    }

    useEffect(() => {
        if (listviewWidgetRef && listviewWidgetRef.current) {
            waitFor(".mx-listview-empty", callback, listviewWidgetRef.current);
        }

        const listview = listviewWidgetRef.current.querySelector(".mx-listview");
        listview.ref = listviewRef;
    });

    return (
        <div className="listview-message-if-empty">
            <div className={`listview-message-if-empty__widget`} ref={listviewWidgetRef}>
                {/* <div className={`listview-message-if-empty__widget ${displayClass}`} ref={listviewWidgetRef}> */}
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
