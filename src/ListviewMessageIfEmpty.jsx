// import "./ui/ListviewMessageIfEmpty.css";
import { waitFor } from "./helpers/waitfor";
import { createElement, useState, useEffect } from "react";

export default function ListviewMessageIfEmpty({ className, sections, textIfEmpty }) {
    const [canRender, setCanRender] = useState(false);

    useEffect(() => {
        if (sections && sections.status === "available" && sections.items.length === 0) {
            setCanRender(true);
        }
    });

    function callback() {
        document.querySelectorAll(`.${className}`).forEach(contextItem => {
            const listViews = contextItem.querySelectorAll(".mx-listview-empty");
            listViews &&
                listViews.forEach(listViewEmpty => {
                    listViewEmpty.classList.add("hidden");
                    // deleteBottomBorder ? (listViewEmpty.style.borderBottom = "none") : "";
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
