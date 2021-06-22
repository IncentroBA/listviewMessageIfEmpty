import { Component, createElement } from "react";

export default class ListviewMessageIfEmpty extends Component {
    render() {
        const className = '.' + this.props.className;
        const listView = document.querySelector(className);
        const emptyValue = this.props.textIfEmpty.value;
        const bottomBorder = this.props.deleteBottomBorder;
        
        const observer = new MutationObserver(SetInnerTextIfEmpty);
        observer.observe(listView, {childList: true});
    
        function SetInnerTextIfEmpty() {
            const listViews = listView.querySelectorAll('.mx-listview-empty');
            if (listViews) {
                listViews.forEach(listViewEmpty => {
                    listViewEmpty.innerText = emptyValue;
                    bottomBorder ? listViewEmpty.style.borderBottom = "none" : '';
                });
            }
            return;
        }

        return (<div class="widget-listview-empty"></div>);
    }
}