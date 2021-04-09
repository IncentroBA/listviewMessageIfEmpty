export default function ListviewMessageIfEmpty(props) {
    const className = '.' + props.className;
    const listView = document.querySelector(className);

    const observer = new MutationObserver( SetInnerTextIfEmpty );

    observer.observe(listView, {childList: true});

    function SetInnerTextIfEmpty() {
        const listViewEmpty = listView.querySelector('.mx-listview-empty');
        if (listViewEmpty) {
            listViewEmpty.innerText = props.textIfEmpty.value;
            props.deleteBottomBorder ? listViewEmpty.style.borderBottom = "none" : '';
        }
        return;
    }
}

