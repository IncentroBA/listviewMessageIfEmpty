import { Component } from "react";
import "regenerator-runtime/runtime";

export default class ListviewMessageIfEmpty extends Component {
    render() {
        const className = '.' + this.props.className;
        const emptyValue = this.props.textIfEmpty.value;
        const bottomBorder = this.props.deleteBottomBorder;

        async function SetInnerTextIfEmpty() {
            const listView = await document.querySelector(className);
            if (!listView) {
                return;
            }

            const listViews = listView ? listView.querySelectorAll('.mx-listview-empty') : '';
            if (listViews) {
                listViews.forEach(listViewEmpty => {
                    listViewEmpty.innerText = emptyValue;
                    bottomBorder ? listViewEmpty.style.borderBottom = "none" : '';
                });
            }
        }

        SetInnerTextIfEmpty();

        return null;
    }
}
