import { Component, createElement } from "react";

export class preview extends Component {
    render() {
        return <div className="widget-hello-world">Hello {this.props.messageText.value}</div>;
    }
}

export function getPreviewCss() {
    return;
}
