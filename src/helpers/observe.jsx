// Check and keep checking for DOM changes
export function observe (elementClass, callback) {
    const element = document.querySelector(elementClass);
    
    const config = {
        attributes: true,
        attributeOldValue: true,
        childList: true, // This is a must have for the observer with subtree
        subtree: true, // Set to true if changes must also be observed in descendants.
    };
    
    const observer = new MutationObserver(() => {
        observer.disconnect();
        element && callback();
        observer.observe(element, config);
    });
    
    observer.observe(element, config);
};