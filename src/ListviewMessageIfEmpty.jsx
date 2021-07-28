import { Component } from "react";
import "regenerator-runtime/runtime";

export default class ListviewMessageIfEmpty extends Component {
    render() {
        const className = '.' + this.props.className;
        const emptyValue = this.props.textIfEmpty.value;
        const bottomBorder = this.props.deleteBottomBorder;

        const asyncQuerySelector = async (query) => {
            try {
              return await (query ? document.querySelector(query) : document);
            } catch (error) {
              console.error(`Cannot find ${query ? `${query} in`: ''} ${document}.`, error);
              return null;
            }
        };

          asyncQuerySelector(className).then(node => {
              const listViews = node ? node.querySelectorAll('.mx-listview-empty') : '';
              
              if (listViews) {
                  listViews.forEach(listViewEmpty => {
                      listViewEmpty.innerText = emptyValue;
                      bottomBorder ? listViewEmpty.style.borderBottom = "none" : '';
                    });
                }
          })

        return null;
    }
}
