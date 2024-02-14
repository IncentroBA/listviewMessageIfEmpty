import { createElement } from "react";

export function preview({ listviewWidget, emptyWidget }) {
    const ContentRenderer = listviewWidget.renderer;
    const EmptyContentRenderer = emptyWidget.renderer;

    return (
        <div className="listview-message-if-empty-preview">
            <ContentRenderer caption="Listview Message If Empty widget.">
                <div className="listview-message-if-empty__widget" />
            </ContentRenderer>
            <EmptyContentRenderer caption="Empty message">
                <div className="listview-message-if-empty__widget" />
            </EmptyContentRenderer>
        </div>
    );
}

export function getPreviewCss() {
    return require("./ui/ListviewMessageIfEmpty.css");
}
