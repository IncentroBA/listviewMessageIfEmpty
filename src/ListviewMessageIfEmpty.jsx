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
                console.info("empty listview");
                setDisplayWidget(returnType.emptyText);
                setDisplayClass("hidden");
            } else {
                console.info("show listview");
                setDisplayWidget(returnType.widget);
                setDisplayClass(null);
            }
        }, 10);
    }

    useEffect(() => {
        console.info("useEffect");
        console.info({ listviewWidgetRef });
        if (listviewWidgetRef && listviewWidgetRef.current) {
            waitFor(".mx-listview-empty", callback, listviewWidgetRef.current);
        }

        const listview = listviewWidgetRef.current.querySelector(".mx-listview");
        console.info(listview);
        listview.ref = listviewRef;

        console.info(listviewRef);
    });

    return (
        <div className="listview-message-if-empty">
            {console.info({ displayClass })}
            {console.info("-----")}
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
