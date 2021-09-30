import { Component } from "react";
import { waitFor } from "./helpers/waitfor";

export default class ListviewMessageIfEmpty extends Component {
    render() {
        const className = "." + this.props.className;
        const emptyValue = this.props.textIfEmpty.value;
        const bottomBorder = this.props.deleteBottomBorder;
        const parent = document.querySelector(className);

        function callback() {
            const context = document.querySelectorAll(className);
            setTimeout(() => {
                context.forEach(contextItem => {
                    const listViews = contextItem.querySelectorAll(".mx-listview-empty");
                    if (listViews) {
                        listViews.forEach(listViewEmpty => {
                            listViewEmpty.innerText = emptyValue;
                            bottomBorder ? (listViewEmpty.style.borderBottom = "none") : "";
                        });
                    }
                });
            }, 300);
        }

        waitFor(".mx-listview-empty", callback, parent);
        return null;
    }
}
