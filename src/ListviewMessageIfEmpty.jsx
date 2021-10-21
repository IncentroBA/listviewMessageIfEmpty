// import "./ui/ListviewMessageIfEmpty.css";
import { waitFor } from "./helpers/waitfor";
import { createElement, useState, useEffect } from "react";

export default function ListviewMessageIfEmpty({ className, context, textIfEmpty }) {
    const [canRender, setCanRender] = useState(false);
    // const borderUsage = deleteBottomBorder ? "" : "";

    useEffect(() => {
        if (context && context.status === "available" && context.items.length === 0) {
            setCanRender(true);
        }
    });

    function callback() {
        document.querySelectorAll(`.${className}`).forEach(contextItem => {
            const listViews = contextItem.querySelectorAll(".mx-listview-empty");
            listViews &&
                listViews.forEach(listViewEmpty => {
                    listViewEmpty.classList.add("hidden");
                    // (listViewEmpty.style.borderBottom = "none") : "";
                });
        });
    }

    waitFor(`.${className} .mx-listview-empty`, callback, document);

    if (canRender) {
        return <div className="listview-message-if-empty">{textIfEmpty.value}</div>;
    } else {
        return null;
    }
}
