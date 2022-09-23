import { createElement } from "react";

export function preview() {
    return (
        <div className="listview-message-if-empty-preview">
            <div className="listview-message-if-empty__widget">Listview Message If Empty widget</div>
        </div>
    );
}

export function getPreviewCss() {
    return require("./ui/ListviewMessageIfEmpty.css");
}
