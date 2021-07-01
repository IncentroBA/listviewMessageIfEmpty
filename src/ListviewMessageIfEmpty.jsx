import { Component, createElement } from "react";
import {observe} from "./helpers/observe";

export default class ListviewMessageIfEmpty extends Component {
    render() {
        const className = '.' + this.props.className;
        const emptyValue = this.props.textIfEmpty.value;
        const bottomBorder = this.props.deleteBottomBorder;
        
        function SetInnerTextIfEmpty() {
            const listView = document.querySelector(className);
            const listViews = listView.querySelectorAll('.mx-listview-empty');
            if (listViews) {
                listViews.forEach(listViewEmpty => {
                    listViewEmpty.innerText = emptyValue;
                    bottomBorder ? listViewEmpty.style.borderBottom = "none" : '';
                });
            }
            return;
        }

        observe(className, SetInnerTextIfEmpty);

        return (<div class="widget-listview-empty"></div>);
    }
}
  