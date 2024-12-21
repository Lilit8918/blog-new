
const createElement = (tag, attributes = {}, children = []) => {
  if (typeof tag !== 'string') {
    console.error('Invalid tag: Must be a string');
    return null;
  }
  const element = document.createElement(tag);
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  if (typeof children === 'string') {
    element.textContent = children;
  } else if (Array.isArray(children)) {
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child instanceof Element) {
        element.appendChild(child);
      }
    });
  }

  return element;
};
const render = (element, target) => {
  if (!(element instanceof Element)) {
    console.error("Invalid element: Must be a DOM node.");
    return;
  }
  if (!(target instanceof Element)) {
    console.error("Invalid target: Must be a DOM node.");
    return;
  }
  target.appendChild(element);
};
window.UI = { createElement, render };
