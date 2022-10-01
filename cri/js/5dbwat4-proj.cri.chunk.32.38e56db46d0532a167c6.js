"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[32],{

/***/ 889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(579);


const {
  cubicBezierEaseIn,
  cubicBezierEaseOut,
  transformDebounceScale
} = _common_common__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({
  transformOrigin = 'inherit',
  duration = '.2s',
  enterScale = '.9',
  originalTransform = '',
  originalTransition = ''
} = {}) {
  return [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)('&.fade-in-scale-up-transition-leave-active', {
    transformOrigin,
    transition: `opacity ${duration} ${cubicBezierEaseIn}, transform ${duration} ${cubicBezierEaseIn} ${originalTransition && ',' + originalTransition}`
  }), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)('&.fade-in-scale-up-transition-enter-active', {
    transformOrigin,
    transition: `opacity ${duration} ${cubicBezierEaseOut}, transform ${duration} ${cubicBezierEaseOut} ${originalTransition && ',' + originalTransition}`
  }), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)('&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to', {
    opacity: 0,
    transform: `${originalTransform} scale(${enterScale})`
  }), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)('&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to', {
    opacity: 1,
    transform: `${originalTransform} scale(${transformDebounceScale})`
  })];
}

/***/ }),

/***/ 953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFirstSlotVNode": () => (/* binding */ getFirstSlotVNode)
/* harmony export */ });
/* harmony import */ var _flatten__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(816);
/* harmony import */ var _naive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(701);


function getFirstSlotVNode(slots, slotName = 'default', props = undefined) {
    const slot = slots[slotName];
    if (!slot) {
        (0,_naive__WEBPACK_IMPORTED_MODULE_0__.warn)('getFirstSlotVNode', `slot[${slotName}] is empty`);
        return null;
    }
    const slotContent = (0,_flatten__WEBPACK_IMPORTED_MODULE_1__.flatten)(slot(props));
    // vue will normalize the slot, so slot must be an array
    if (slotContent.length === 1) {
        return slotContent[0];
    }
    else {
        (0,_naive__WEBPACK_IMPORTED_MODULE_0__.warn)('getFirstSlotVNode', `slot[${slotName}] should have exactly one child`);
        return null;
    }
}


/***/ }),

/***/ 956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keep": () => (/* binding */ keep)
/* harmony export */ });
function keep(object, keys = [], rest) {
    const keepedObject = {};
    keys.forEach((key) => {
        keepedObject[key] = object[key];
    });
    return Object.assign(keepedObject, rest);
}


/***/ }),

/***/ 939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var evtd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(750);

const ctxKey = '@@coContext';
const clickoutside = {
    mounted(el, { value }) {
        el[ctxKey] = {
            handler: undefined
        };
        if (typeof value === 'function') {
            el[ctxKey].handler = value;
            (0,evtd__WEBPACK_IMPORTED_MODULE_0__.on)('clickoutside', el, value);
        }
    },
    updated(el, { value }) {
        const ctx = el[ctxKey];
        if (typeof value === 'function') {
            if (ctx.handler) {
                if (ctx.handler !== value) {
                    (0,evtd__WEBPACK_IMPORTED_MODULE_0__.off)('clickoutside', el, ctx.handler);
                    ctx.handler = value;
                    (0,evtd__WEBPACK_IMPORTED_MODULE_0__.on)('clickoutside', el, value);
                }
            }
            else {
                el[ctxKey].handler = value;
                (0,evtd__WEBPACK_IMPORTED_MODULE_0__.on)('clickoutside', el, value);
            }
        }
        else {
            if (ctx.handler) {
                (0,evtd__WEBPACK_IMPORTED_MODULE_0__.off)('clickoutside', el, ctx.handler);
                ctx.handler = undefined;
            }
        }
    },
    unmounted(el) {
        const { handler } = el[ctxKey];
        if (handler) {
            (0,evtd__WEBPACK_IMPORTED_MODULE_0__.off)('clickoutside', el, handler);
        }
        el[ctxKey].handler = undefined;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickoutside);


/***/ }),

/***/ 952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "warnOnce": () => (/* binding */ warnOnce),
/* harmony export */   "warn": () => (/* binding */ warn)
/* harmony export */ });
const warnedMessages = new Set();
function warnOnce(location, message) {
    const mergedMessage = `[vdirs/${location}]: ${message}`;
    if (warnedMessages.has(mergedMessage))
        return;
    warnedMessages.add(mergedMessage);
}
function warn(location, message) {
    console.error(`[vdirs/${location}]: ${message}`);
}


/***/ }),

/***/ 950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _z_index_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(951);

const ctx = '@@ziContext';
// We don't expect manually bound zindex should be changed
const zindexable = {
    mounted(el, bindings) {
        const { value = {} } = bindings;
        const { zIndex, enabled } = value;
        el[ctx] = {
            enabled: !!enabled,
            initialized: false
        };
        if (enabled) {
            _z_index_manager__WEBPACK_IMPORTED_MODULE_0__["default"].ensureZIndex(el, zIndex);
            el[ctx].initialized = true;
        }
    },
    updated(el, bindings) {
        const { value = {} } = bindings;
        const { zIndex, enabled } = value;
        const cachedEnabled = el[ctx].enabled;
        if (enabled && !cachedEnabled) {
            _z_index_manager__WEBPACK_IMPORTED_MODULE_0__["default"].ensureZIndex(el, zIndex);
            el[ctx].initialized = true;
        }
        el[ctx].enabled = !!enabled;
    },
    unmounted(el, bindings) {
        if (!el[ctx].initialized)
            return;
        const { value = {} } = bindings;
        const { zIndex } = value;
        _z_index_manager__WEBPACK_IMPORTED_MODULE_0__["default"].unregister(el, zIndex);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (zindexable);


/***/ }),

/***/ 951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(952);

class ZIndexManager {
    constructor() {
        this.elementZIndex = new Map();
        this.nextZIndex = 2000;
    }
    get elementCount() {
        return this.elementZIndex.size;
    }
    ensureZIndex(el, zIndex) {
        const { elementZIndex } = this;
        if (zIndex !== undefined) {
            el.style.zIndex = `${zIndex}`;
            elementZIndex.delete(el);
            return;
        }
        const { nextZIndex } = this;
        if (elementZIndex.has(el)) {
            const currentZIndex = elementZIndex.get(el);
            if (currentZIndex + 1 === this.nextZIndex)
                return;
        }
        el.style.zIndex = `${nextZIndex}`;
        elementZIndex.set(el, nextZIndex);
        this.nextZIndex = nextZIndex + 1;
        this.squashState();
    }
    unregister(el, zIndex) {
        const { elementZIndex } = this;
        if (elementZIndex.has(el)) {
            elementZIndex.delete(el);
        }
        else if (zIndex === undefined) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.warn)('z-index-manager/unregister-element', 'Element not found when unregistering.');
        }
        this.squashState();
    }
    squashState() {
        const { elementCount } = this;
        if (!elementCount) {
            this.nextZIndex = 2000;
        }
        if (this.nextZIndex - elementCount > 2500)
            this.rearrange();
    }
    rearrange() {
        const elementZIndexPair = Array.from(this.elementZIndex.entries());
        elementZIndexPair.sort((pair1, pair2) => {
            return pair1[1] - pair2[1];
        });
        this.nextZIndex = 2000;
        elementZIndexPair.forEach(pair => {
            const el = pair[0];
            const zIndex = this.nextZIndex++;
            if (`${zIndex}` !== el.style.zIndex)
                el.style.zIndex = `${zIndex}`;
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ZIndexManager());


/***/ }),

/***/ 948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useFalseUntilTruthy)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

function useFalseUntilTruthy(originalRef) {
    const currentRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!!originalRef.value);
    if (currentRef.value)
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.readonly)(currentRef);
    const stop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(originalRef, (value) => {
        if (value) {
            currentRef.value = true;
            stop();
        }
    });
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.readonly)(currentRef);
}


/***/ }),

/***/ 941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusTrap": () => (/* binding */ FocusTrap)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var seemly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(724);
/* harmony import */ var evtd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(943);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(942);





let stack = [];
const FocusTrap = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'FocusTrap',
    props: {
        disabled: Boolean,
        active: Boolean,
        autoFocus: {
            type: Boolean,
            default: true
        },
        onEsc: Function,
        initialFocusTo: String,
        finalFocusTo: String,
        returnFocusOnDeactivated: {
            type: Boolean,
            default: true
        }
    },
    setup(props) {
        const id = (0,seemly__WEBPACK_IMPORTED_MODULE_1__.createId)();
        const focusableStartRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const focusableEndRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        let activated = false;
        let ignoreInternalFocusChange = false;
        const lastFocusedElement = document.activeElement;
        function isCurrentActive() {
            const currentActiveId = stack[stack.length - 1];
            return currentActiveId === id;
        }
        function handleDocumentKeydown(e) {
            var _a;
            if (e.code === 'Escape') {
                if (isCurrentActive()) {
                    (_a = props.onEsc) === null || _a === void 0 ? void 0 : _a.call(props);
                }
            }
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.active, (value) => {
                if (value) {
                    activate();
                    (0,evtd__WEBPACK_IMPORTED_MODULE_2__.on)('keydown', document, handleDocumentKeydown);
                }
                else {
                    (0,evtd__WEBPACK_IMPORTED_MODULE_2__.off)('keydown', document, handleDocumentKeydown);
                    if (activated) {
                        deactivate();
                    }
                }
            }, {
                immediate: true
            });
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
            (0,evtd__WEBPACK_IMPORTED_MODULE_2__.off)('keydown', document, handleDocumentKeydown);
            if (activated)
                deactivate();
        });
        function handleDocumentFocus(e) {
            if (ignoreInternalFocusChange)
                return;
            if (isCurrentActive()) {
                const mainEl = getMainEl();
                if (mainEl === null)
                    return;
                if (mainEl.contains(e.target))
                    return;
                // I don't handle shift + tab status since it's too tricky to handle
                // Not impossible but I need to sleep
                resetFocusTo('first');
            }
        }
        function getMainEl() {
            const focusableStartEl = focusableStartRef.value;
            if (focusableStartEl === null)
                return null;
            let mainEl = focusableStartEl;
            while (true) {
                mainEl = mainEl.nextSibling;
                if (mainEl === null)
                    break;
                if (mainEl instanceof Element && mainEl.tagName === 'DIV') {
                    break;
                }
            }
            return mainEl;
        }
        function activate() {
            var _a;
            if (props.disabled)
                return;
            stack.push(id);
            if (props.autoFocus) {
                const { initialFocusTo } = props;
                if (initialFocusTo === undefined) {
                    resetFocusTo('first');
                }
                else {
                    (_a = (0,_shared__WEBPACK_IMPORTED_MODULE_3__.resolveTo)(initialFocusTo)) === null || _a === void 0 ? void 0 : _a.focus();
                }
            }
            activated = true;
            document.addEventListener('focus', handleDocumentFocus, true);
        }
        function deactivate() {
            var _a;
            if (props.disabled)
                return;
            document.removeEventListener('focus', handleDocumentFocus, true);
            stack = stack.filter((idInStack) => idInStack !== id);
            if (isCurrentActive())
                return;
            const { finalFocusTo } = props;
            if (finalFocusTo !== undefined) {
                (_a = (0,_shared__WEBPACK_IMPORTED_MODULE_3__.resolveTo)(finalFocusTo)) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else if (props.returnFocusOnDeactivated) {
                if (lastFocusedElement instanceof HTMLElement) {
                    ignoreInternalFocusChange = true;
                    lastFocusedElement.focus({ preventScroll: true });
                    ignoreInternalFocusChange = false;
                }
            }
        }
        function resetFocusTo(target) {
            if (!isCurrentActive())
                return;
            if (props.active) {
                const focusableStartEl = focusableStartRef.value;
                const focusableEndEl = focusableEndRef.value;
                if (focusableStartEl !== null && focusableEndEl !== null) {
                    const mainEl = getMainEl();
                    if (mainEl == null || mainEl === focusableEndEl) {
                        ignoreInternalFocusChange = true;
                        focusableStartEl.focus({ preventScroll: true });
                        ignoreInternalFocusChange = false;
                        return;
                    }
                    ignoreInternalFocusChange = true;
                    const focused = target === 'first'
                        ? (0,_utils__WEBPACK_IMPORTED_MODULE_4__.focusFirstDescendant)(mainEl)
                        : (0,_utils__WEBPACK_IMPORTED_MODULE_4__.focusLastDescendant)(mainEl);
                    ignoreInternalFocusChange = false;
                    if (!focused) {
                        ignoreInternalFocusChange = true;
                        focusableStartEl.focus({ preventScroll: true });
                        ignoreInternalFocusChange = false;
                    }
                }
            }
        }
        function handleStartFocus(e) {
            if (ignoreInternalFocusChange)
                return;
            const mainEl = getMainEl();
            if (mainEl === null)
                return;
            if (e.relatedTarget !== null && mainEl.contains(e.relatedTarget)) {
                // if it comes from inner, focus last
                resetFocusTo('last');
            }
            else {
                // otherwise focus first
                resetFocusTo('first');
            }
        }
        function handleEndFocus(e) {
            if (ignoreInternalFocusChange)
                return;
            if (e.relatedTarget !== null &&
                e.relatedTarget === focusableStartRef.value) {
                // if it comes from first, focus last
                resetFocusTo('last');
            }
            else {
                // otherwise focus first
                resetFocusTo('first');
            }
        }
        return {
            focusableStartRef,
            focusableEndRef,
            focusableStyle: 'position: absolute; height: 0; width: 0;',
            handleStartFocus,
            handleEndFocus
        };
    },
    render() {
        const { default: defaultSlot } = this.$slots;
        if (defaultSlot === undefined)
            return null;
        if (this.disabled)
            return defaultSlot();
        const { active, focusableStyle } = this;
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div', {
                'aria-hidden': 'true',
                tabindex: active ? '0' : '-1',
                ref: 'focusableStartRef',
                style: focusableStyle,
                onFocus: this.handleStartFocus
            }),
            defaultSlot(),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div', {
                'aria-hidden': 'true',
                style: focusableStyle,
                ref: 'focusableEndRef',
                tabindex: active ? '0' : '-1',
                onFocus: this.handleEndFocus
            })
        ]);
    }
});


/***/ }),

/***/ 943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusFirstDescendant": () => (/* binding */ focusFirstDescendant),
/* harmony export */   "focusLastDescendant": () => (/* binding */ focusLastDescendant)
/* harmony export */ });
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// ref https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/js/dialog.js
function isHTMLElement(node) {
    return node instanceof HTMLElement;
}
function focusFirstDescendant(node) {
    for (let i = 0; i < node.childNodes.length; i++) {
        const child = node.childNodes[i];
        if (isHTMLElement(child)) {
            if (attemptFocus(child) || focusFirstDescendant(child)) {
                return true;
            }
        }
    }
    return false;
}
function focusLastDescendant(element) {
    for (let i = element.childNodes.length - 1; i >= 0; i--) {
        const child = element.childNodes[i];
        if (isHTMLElement(child)) {
            if (attemptFocus(child) || focusLastDescendant(child)) {
                return true;
            }
        }
    }
    return false;
}
function attemptFocus(element) {
    if (!isFocusable(element)) {
        return false;
    }
    try {
        element.focus();
    }
    catch (e) { }
    return document.activeElement === element;
}
function isFocusable(element) {
    if (element.tabIndex > 0 ||
        (element.tabIndex === 0 && element.getAttribute('tabIndex') !== null)) {
        return true;
    }
    if (element.getAttribute('disabled')) {
        return false;
    }
    switch (element.nodeName) {
        case 'A':
            return (!!element.href &&
                element.rel !== 'ignore');
        case 'INPUT':
            return (element.type !== 'hidden' &&
                element.type !== 'file');
        case 'BUTTON':
        case 'SELECT':
        case 'TEXTAREA':
            return true;
        default:
            return false;
    }
}


/***/ }),

/***/ 947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(948);
/* harmony import */ var _shared_v_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(949);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'LazyTeleport',
    props: {
        to: {
            type: [String, Object],
            default: undefined
        },
        disabled: Boolean,
        show: {
            type: Boolean,
            required: true
        }
    },
    setup(props) {
        return {
            showTeleport: (0,vooks__WEBPACK_IMPORTED_MODULE_1__["default"])((0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'show')),
            mergedTo: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                const { to } = props;
                return to !== null && to !== void 0 ? to : 'body';
            })
        };
    },
    render() {
        return this.showTeleport
            ? this.disabled
                ? (0,_shared_v_node__WEBPACK_IMPORTED_MODULE_2__.getSlot)('lazy-teleport', this.$slots)
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
                    disabled: this.disabled,
                    to: this.mergedTo
                }, (0,_shared_v_node__WEBPACK_IMPORTED_MODULE_2__.getSlot)('lazy-teleport', this.$slots))
            : null;
    }
}));


/***/ }),

/***/ 942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveTo": () => (/* binding */ resolveTo)
/* harmony export */ });
function resolveTo(selector) {
    if (typeof selector === 'string') {
        return document.querySelector(selector);
    }
    return selector();
}


/***/ }),

/***/ 949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSlot": () => (/* binding */ getSlot),
/* harmony export */   "flatten": () => (/* binding */ flatten),
/* harmony export */   "getFirstVNode": () => (/* binding */ getFirstVNode)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

function getSlot(scope, slots, slotName = 'default') {
    const slot = slots[slotName];
    if (slot === undefined) {
        throw new Error(`[vueuc/${scope}]: slot[${slotName}] is empty.`);
    }
    return slot();
}
// o(n) flatten
function flatten(vNodes, filterCommentNode = true, result = []) {
    vNodes.forEach((vNode) => {
        if (vNode === null)
            return;
        if (typeof vNode !== 'object') {
            if (typeof vNode === 'string' || typeof vNode === 'number') {
                result.push((0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(String(vNode)));
            }
            return;
        }
        if (Array.isArray(vNode)) {
            flatten(vNode, filterCommentNode, result);
            return;
        }
        if (vNode.type === vue__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
            if (vNode.children === null)
                return;
            if (Array.isArray(vNode.children)) {
                flatten(vNode.children, filterCommentNode, result);
            }
            // rawSlot
        }
        else if (vNode.type !== vue__WEBPACK_IMPORTED_MODULE_0__.Comment) {
            result.push(vNode);
        }
    });
    return result;
}
function getFirstVNode(scope, slots, slotName = 'default') {
    const slot = slots[slotName];
    if (slot === undefined) {
        throw new Error(`[vueuc/${scope}]: slot[${slotName}] is empty.`);
    }
    const content = flatten(slot());
    // vue will normalize the slot, so slot must be an array
    if (content.length === 1) {
        return content[0];
    }
    else {
        throw new Error(`[vueuc/${scope}]: slot[${slotName}] should have exactly one child.`);
    }
}


/***/ })

}]);