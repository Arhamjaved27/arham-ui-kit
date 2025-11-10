'use strict';

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".btn {\r\n  padding: 10px 20px;\r\n  font-weight: bold;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.btn-primary { background: #007bff; color: white; border: none; }\r\n.btn-primary:hover { background: #0056b3; }\r\n\r\n.btn-outline { background: transparent; color: #007bff; border: 2px solid #007bff; }\r\n.btn-outline:hover { background: #007bff; color: white; }\r\n\r\n.btn-ghost { background: transparent; color: #007bff; border: none; }\r\n.btn-ghost:hover { background: #e7f1ff; }\r\n";
styleInject(css_248z$2);

const Button = ({
  variant = "primary",
  children,
  onClick
}) => {
  return /*#__PURE__*/React.createElement("button", {
    className: `btn btn-${variant}`,
    onClick: onClick
  }, children);
};

var css_248z$1 = ".card {\r\n  border: 1px solid #ddd;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  width: 250px;\r\n  box-shadow: 0 2px 6px rgba(0,0,0,0.1);\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.card:hover { transform: translateY(-5px); }\r\n\r\n.card img { width: 100%; height: 150px; object-fit: cover; }\r\n\r\n.card-body { padding: 10px; }\r\n\r\n.card-body h3 { margin: 0 0 10px; }\r\n\r\n.card-body p { font-size: 14px; margin-bottom: 10px; }\r\n";
styleInject(css_248z$1);

const Card = ({
  title,
  description,
  imgUrl,
  onAction
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("img", {
    src: imgUrl || "https://via.placeholder.com/150",
    alt: title
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("h3", null, title || "Card Title"), /*#__PURE__*/React.createElement("p", null, description || "This is a description for the card."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onAction
  }, "Action")));
};

var css_248z = ".modal-overlay {\r\n  position: fixed; top: 0; left: 0; width: 100%; height: 100%;\r\n  background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center;\r\n  animation: fadeIn 0.3s ease;\r\n}\r\n\r\n.modal-content {\r\n  background: white; padding: 20px; border-radius: 8px;\r\n  min-width: 300px; max-width: 500px;\r\n  animation: slideIn 0.3s ease;\r\n}\r\n\r\n.modal-close {\r\n  position: absolute; top: 10px; right: 10px;\r\n  background: transparent; border: none; font-size: 20px; cursor: pointer;\r\n}\r\n\r\n@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }\r\n@keyframes slideIn { from { transform: translateY(-20px); opacity:0 } to { transform: translateY(0); opacity:1 } }\r\n";
styleInject(css_248z);

const Modal = ({
  isOpen,
  onClose,
  children
}) => {
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  if (!isOpen) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, "\xD7"), children));
};

exports.Button = Button;
exports.Card = Card;
exports.Modal = Modal;
