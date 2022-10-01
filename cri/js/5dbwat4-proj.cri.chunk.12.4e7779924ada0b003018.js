"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[12],{

/***/ 829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(767);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(772);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(831);
/* harmony import */ var _styles_index_cssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(830);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'BaseClose',
    props: {
        clsPrefix: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            default: undefined
        },
        onClick: Function
    },
    setup(props) {
        (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('-base-close', _styles_index_cssr__WEBPACK_IMPORTED_MODULE_2__["default"], (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'clsPrefix'));
        return () => {
            const { clsPrefix, disabled } = props;
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], { role: "button", ariaDisabled: disabled, ariaLabel: "close", clsPrefix: clsPrefix, class: [
                    `${clsPrefix}-base-close`,
                    disabled && `${clsPrefix}-base-close--disabled`
                ], onClick: disabled ? undefined : props.onClick }, {
                default: () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_icons__WEBPACK_IMPORTED_MODULE_4__["default"], null)
            }));
        };
    }
}));


/***/ }),

/***/ 830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
 // vars:
// --n-close-color
// --n-close-color-hover
// --n-close-color-pressed
// --n-close-color-disabled

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-close', `
 cursor: pointer;
 color: var(--n-close-color);
`, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', {
  color: 'var(--n-close-color-hover)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:active', {
  color: 'var(--n-close-color-pressed)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('disabled', {
  cursor: 'not-allowed!important',
  color: 'var(--n-close-color-disabled)'
})]));

/***/ }),

/***/ 827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Add',
    render() {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { width: "512", height: "512", viewBox: "0 0 512 512", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M256 112V400M400 256H112", stroke: "currentColor", "stroke-width": "32", "stroke-linecap": "round", "stroke-linejoin": "round" })));
    }
}));


/***/ }),

/***/ 831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _replaceable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(775);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_replaceable__WEBPACK_IMPORTED_MODULE_1__.replaceable)('close', (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { viewBox: "0 0 12 12", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true },
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: "currentColor", "fill-rule": "nonzero" },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z" }))))));


/***/ }),

/***/ 816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flatten": () => (/* binding */ flatten)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

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


/***/ }),

/***/ 826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "omit": () => (/* binding */ omit)
/* harmony export */ });
function omit(object, keys = [], rest) {
    const omitedObject = {};
    const originalKeys = Object.getOwnPropertyNames(object);
    originalKeys.forEach((originalKey) => {
        if (!keys.includes(originalKey)) {
            omitedObject[originalKey] = object[originalKey];
        }
    });
    return Object.assign(omitedObject, rest);
}


/***/ }),

/***/ 828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const render = (r, ...args) => {
    if (typeof r === 'function') {
        return r(...args);
    }
    else if (typeof r === 'string') {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(r);
    }
    else if (typeof r === 'number') {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(String(r));
    }
    else {
        return null;
    }
};


/***/ }),

/***/ 825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _internal_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(827);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(772);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(829);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(826);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(828);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(810);
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(809);






const typeProps = Object.assign({ internalLeftPadded: Boolean, internalAddable: Boolean, internalCreatedByPane: Boolean }, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.omit)(_TabPane__WEBPACK_IMPORTED_MODULE_2__.tabPaneProps, ['displayDirective']));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __TAB__: true,
    inheritAttrs: false,
    name: 'Tab',
    props: typeProps,
    setup(props) {
        const { mergedClsPrefixRef, valueRef, typeRef, closableRef, tabStyleRef, tabChangeIdRef, onBeforeLeaveRef, handleAdd, handleTabClick, handleClose
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
         } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_interface__WEBPACK_IMPORTED_MODULE_3__.tabsInjectionKey);
        return {
            mergedClosable: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                if (props.internalAddable)
                    return false;
                const { closable } = props;
                if (closable === undefined)
                    return closableRef.value;
                return closable;
            }),
            style: tabStyleRef,
            clsPrefix: mergedClsPrefixRef,
            value: valueRef,
            type: typeRef,
            handleClose(e) {
                e.stopPropagation();
                if (props.disabled)
                    return;
                handleClose(props.name);
            },
            handleClick() {
                if (props.disabled)
                    return;
                if (props.internalAddable) {
                    handleAdd();
                    return;
                }
                const { name: nameProp } = props;
                const id = ++tabChangeIdRef.id;
                if (nameProp !== valueRef.value) {
                    const { value: onBeforeLeave } = onBeforeLeaveRef;
                    if (!onBeforeLeave) {
                        handleTabClick(nameProp);
                    }
                    else {
                        void Promise.resolve(onBeforeLeave(props.name, valueRef.value)).then((allowLeave) => {
                            if (allowLeave && tabChangeIdRef.id === id) {
                                handleTabClick(nameProp);
                            }
                        });
                    }
                }
            }
        };
    },
    render() {
        const { internalAddable, clsPrefix, name, disabled, label, tab, value, mergedClosable, style, $slots: { default: defaultSlot } } = this;
        const mergedTab = label !== null && label !== void 0 ? label : tab;
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-tabs-tab-wrapper` },
            this.internalLeftPadded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-tabs-tab-pad` })) : null,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", Object.assign({ key: name, "data-name": name, "data-disabled": disabled ? true : undefined }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
                class: [
                    `${clsPrefix}-tabs-tab`,
                    value === name && `${clsPrefix}-tabs-tab--active`,
                    disabled && `${clsPrefix}-tabs-tab--disabled`,
                    mergedClosable && `${clsPrefix}-tabs-tab--closable`,
                    internalAddable && `${clsPrefix}-tabs-tab--addable`
                ],
                onClick: this.handleClick,
                style: internalAddable ? undefined : style
            }, this.internalCreatedByPane
                ? (this.tabProps || {})
                : this.$attrs)),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: `${clsPrefix}-tabs-tab__label` }, internalAddable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_4__["default"], { clsPrefix: clsPrefix }, {
                    default: () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal_icons__WEBPACK_IMPORTED_MODULE_5__["default"], null)
                })) : defaultSlot ? (defaultSlot()) : typeof mergedTab === 'object' ? (mergedTab // VNode
                ) : ((0,_utils__WEBPACK_IMPORTED_MODULE_6__.render)(mergedTab !== null && mergedTab !== void 0 ? mergedTab : name))),
                mergedClosable && this.type === 'card' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_7__["default"], { clsPrefix: clsPrefix, class: `${clsPrefix}-tabs-tab__close`, onClick: this.handleClose, disabled: disabled })) : null)));
    }
}));


/***/ }),

/***/ 809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabPaneProps": () => (/* binding */ tabPaneProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(810);



const tabPaneProps = {
    tab: [String, Number, Object, Function],
    name: {
        type: [String, Number],
        required: true
    },
    disabled: Boolean,
    displayDirective: {
        type: String,
        default: 'if'
    },
    closable: {
        type: Boolean,
        default: undefined
    },
    tabProps: Object,
    /** @deprecated */
    label: [String, Number, Object, Function]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __TAB_PANE__: true,
    name: 'TabPane',
    alias: ['TabPanel'],
    props: tabPaneProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
                if (props.label !== undefined) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.warnOnce)('tab-pane', '`label` is deprecated, please use `tab` instead.');
                }
            });
        }
        const NTab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_interface__WEBPACK_IMPORTED_MODULE_2__.tabsInjectionKey, null);
        if (!NTab) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.throwError)('tab-pane', '`n-tab-pane` must be placed inside `n-tabs`.');
        }
        return {
            style: NTab.paneStyleRef,
            class: NTab.paneClassRef,
            mergedClsPrefix: NTab.mergedClsPrefixRef
        };
    },
    render() {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: [`${this.mergedClsPrefix}-tab-pane`, this.class], style: this.style }, this.$slots));
    }
}));


/***/ }),

/***/ 811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var vueuc__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(762);
/* harmony import */ var vueuc__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(832);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(817);
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(815);
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(747);
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(823);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(575);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(690);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(755);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(816);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(749);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(591);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(756);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(813);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(810);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(825);
/* harmony import */ var _styles_index_cssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(812);










const tabsProps = Object.assign(Object.assign({}, _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].props), { value: [String, Number], defaultValue: [String, Number], type: {
        type: String,
        default: 'bar'
    }, closable: Boolean, justifyContent: String, size: {
        type: String,
        default: 'medium'
    }, tabStyle: [String, Object], barWidth: Number, paneClass: String, paneStyle: [String, Object], addable: [Boolean, Object], tabsPadding: {
        type: Number,
        default: 0
    }, onBeforeLeave: Function, onAdd: Function, 'onUpdate:value': [Function, Array], onUpdateValue: [Function, Array], onClose: [Function, Array], 
    // deprecated
    labelSize: String, activeName: [String, Number], onActiveNameChange: [Function, Array] });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Tabs',
    props: tabsProps,
    setup(props, { slots }) {
        var _a, _b;
        if (process.env.NODE_ENV !== 'production') {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
                if (props.labelSize !== undefined) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.warnOnce)('tabs', '`label-size` is deprecated, please use `size` instead.');
                }
                if (props.activeName !== undefined) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.warnOnce)('tabs', '`active-name` is deprecated, please use `value` instead.');
                }
                if (props.onActiveNameChange !== undefined) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.warnOnce)('tabs', '`on-active-name-change` is deprecated, please use `on-update:value` instead.');
                }
            });
        }
        const { mergedClsPrefixRef, inlineThemeDisabled } = (0,_mixins__WEBPACK_IMPORTED_MODULE_3__["default"])(props);
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('Tabs', '-tabs', _styles_index_cssr__WEBPACK_IMPORTED_MODULE_4__["default"], _styles__WEBPACK_IMPORTED_MODULE_5__["default"], props, mergedClsPrefixRef);
        const tabsElRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const barElRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const scrollWrapperElRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const addTabInstRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const xScrollInstRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const leftReachedRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
        const rightReachedRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
        const compitableSizeRef = (0,vooks__WEBPACK_IMPORTED_MODULE_6__["default"])(props, ['labelSize', 'size']);
        const compitableValueRef = (0,vooks__WEBPACK_IMPORTED_MODULE_6__["default"])(props, ['activeName', 'value']);
        const uncontrolledValueRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((_b = (_a = compitableValueRef.value) !== null && _a !== void 0 ? _a : props.defaultValue) !== null && _b !== void 0 ? _b : (slots.default
            ? (0,_utils__WEBPACK_IMPORTED_MODULE_7__.flatten)(slots.default())[0].props.name
            : null));
        const mergedValueRef = (0,vooks__WEBPACK_IMPORTED_MODULE_8__["default"])(compitableValueRef, uncontrolledValueRef);
        const tabChangeIdRef = { id: 0 };
        const tabWrapperStyleRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            if (!props.justifyContent || props.type === 'card')
                return undefined;
            return {
                display: 'flex',
                justifyContent: props.justifyContent
            };
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(mergedValueRef, () => {
            tabChangeIdRef.id = 0;
            updateCurrentBarStyle();
        });
        function getCurrentEl() {
            var _a;
            const { value } = mergedValueRef;
            if (value === null)
                return null;
            const tabEl = (_a = tabsElRef.value) === null || _a === void 0 ? void 0 : _a.querySelector(`[data-name="${value}"]`);
            return tabEl;
        }
        function updateBarStyle(tabEl) {
            if (props.type === 'card')
                return;
            const { value: barEl } = barElRef;
            if (!barEl)
                return;
            if (tabEl) {
                const disabledClassName = `${mergedClsPrefixRef.value}-tabs-bar--disabled`;
                const { barWidth } = props;
                if (tabEl.dataset.disabled === 'true') {
                    barEl.classList.add(disabledClassName);
                }
                else {
                    barEl.classList.remove(disabledClassName);
                }
                if (barWidth && tabEl.offsetWidth >= barWidth) {
                    const offsetDiffLeft = Math.floor((tabEl.offsetWidth - barWidth) / 2) + tabEl.offsetLeft;
                    barEl.style.left = `${offsetDiffLeft}px`;
                    barEl.style.maxWidth = `${barWidth}px`;
                }
                else {
                    barEl.style.left = `${tabEl.offsetLeft}px`;
                    barEl.style.maxWidth = `${tabEl.offsetWidth}px`;
                }
                barEl.style.width = '8192px';
            }
        }
        function updateCurrentBarStyle() {
            if (props.type === 'card')
                return;
            const tabEl = getCurrentEl();
            if (tabEl) {
                updateBarStyle(tabEl);
            }
        }
        function handleTabClick(panelName) {
            doUpdateValue(panelName);
        }
        function doUpdateValue(panelName) {
            const { onActiveNameChange, onUpdateValue, 'onUpdate:value': _onUpdateValue } = props;
            if (onActiveNameChange) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_9__.call)(onActiveNameChange, panelName);
            }
            if (onUpdateValue)
                (0,_utils__WEBPACK_IMPORTED_MODULE_9__.call)(onUpdateValue, panelName);
            if (_onUpdateValue)
                (0,_utils__WEBPACK_IMPORTED_MODULE_9__.call)(_onUpdateValue, panelName);
            uncontrolledValueRef.value = panelName;
        }
        function handleClose(panelName) {
            const { onClose } = props;
            if (onClose)
                (0,_utils__WEBPACK_IMPORTED_MODULE_9__.call)(onClose, panelName);
        }
        let firstTimeUpdatePosition = true;
        const handleNavResize = (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(function handleNavResize() {
            var _a;
            const { type } = props;
            if ((type === 'line' || type === 'bar') &&
                (firstTimeUpdatePosition || props.justifyContent)) {
                const { value: barEl } = barElRef;
                if (!barEl)
                    return;
                if (!firstTimeUpdatePosition)
                    firstTimeUpdatePosition = false;
                const disableTransitionClassName = `${mergedClsPrefixRef.value}-tabs-bar--transition-disabled`;
                barEl.classList.add(disableTransitionClassName);
                updateCurrentBarStyle();
                // here we don't need to force layout after update bar style
                // since deriveScrollShadow will force layout
                barEl.classList.remove(disableTransitionClassName);
            }
            if (type !== 'segment') {
                deriveScrollShadow((_a = xScrollInstRef.value) === null || _a === void 0 ? void 0 : _a.$el);
            }
        }, 64);
        const addTabFixedRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        function _handleTabsResize(entry) {
            var _a;
            const { target, contentRect: { width } } = entry;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const containerWidth = target.parentElement.offsetWidth;
            if (!addTabFixedRef.value) {
                if (containerWidth < width) {
                    addTabFixedRef.value = true;
                }
            }
            else {
                const { value: addTabInst } = addTabInstRef;
                if (!addTabInst)
                    return;
                if (containerWidth - width > addTabInst.$el.offsetWidth) {
                    addTabFixedRef.value = false;
                }
            }
            deriveScrollShadow((_a = xScrollInstRef.value) === null || _a === void 0 ? void 0 : _a.$el);
        }
        const handleTabsResize = (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(_handleTabsResize, 64);
        function handleAdd() {
            const { onAdd } = props;
            if (onAdd)
                onAdd();
            void (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
                const currentEl = getCurrentEl();
                const { value: xScrollInst } = xScrollInstRef;
                if (!currentEl || !xScrollInst)
                    return;
                xScrollInst.scrollTo({
                    left: currentEl.offsetLeft,
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
        function deriveScrollShadow(el) {
            if (!el)
                return;
            const { scrollLeft, scrollWidth, offsetWidth } = el;
            leftReachedRef.value = scrollLeft <= 0;
            rightReachedRef.value = scrollLeft + offsetWidth >= scrollWidth;
        }
        const handleScroll = (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])((e) => {
            deriveScrollShadow(e.target);
        }, 64);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(_interface__WEBPACK_IMPORTED_MODULE_11__.tabsInjectionKey, {
            tabStyleRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'tabStyle'),
            paneClassRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'paneClass'),
            paneStyleRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'paneStyle'),
            mergedClsPrefixRef,
            typeRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'type'),
            closableRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'closable'),
            valueRef: mergedValueRef,
            tabChangeIdRef,
            onBeforeLeaveRef: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'onBeforeLeave'),
            handleTabClick,
            handleClose,
            handleAdd
        });
        (0,vooks__WEBPACK_IMPORTED_MODULE_12__["default"])(() => {
            updateCurrentBarStyle();
        });
        // avoid useless rerender
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
            const { value: el } = scrollWrapperElRef;
            if (!el)
                return;
            const { value: clsPrefix } = mergedClsPrefixRef;
            const shadowBeforeClass = `${clsPrefix}-tabs-nav-scroll-wrapper--shadow-before`;
            const shadowAfterClass = `${clsPrefix}-tabs-nav-scroll-wrapper--shadow-after`;
            if (leftReachedRef.value) {
                el.classList.remove(shadowBeforeClass);
            }
            else {
                el.classList.add(shadowBeforeClass);
            }
            if (rightReachedRef.value) {
                el.classList.remove(shadowAfterClass);
            }
            else {
                el.classList.add(shadowAfterClass);
            }
        });
        const exposedMethods = {
            syncBarPosition: () => {
                updateCurrentBarStyle();
            }
        };
        const cssVarsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { value: size } = compitableSizeRef;
            const { type } = props;
            const typeSuffix = {
                card: 'Card',
                bar: 'Bar',
                line: 'Line',
                segment: 'Segment'
            }[type];
            const sizeType = `${size}${typeSuffix}`;
            const { self: { barColor, closeColor, closeColorHover, closeColorPressed, tabColor, tabBorderColor, paneTextColor, tabFontWeight, tabBorderRadius, tabFontWeightActive, colorSegment, fontWeightStrong, tabColorSegment, [(0,_utils__WEBPACK_IMPORTED_MODULE_13__.createKey)('panePadding', size)]: panePadding, [(0,_utils__WEBPACK_IMPORTED_MODULE_13__.createKey)('tabPadding', sizeType)]: tabPadding, [(0,_utils__WEBPACK_IMPORTED_MODULE_13__.createKey)('tabGap', sizeType)]: tabGap, [(0,_utils__WEBPACK_IMPORTED_MODULE_13__.createKey)('tabTextColor', type)]: tabTextColor, [(0,_utils__WEBPACK_IMPORTED_MODULE_13__.createKey)('tabTextColorActive', type)]: tabTextColorActive, [(0,_utils__WEBPACK_IMPORTED_MODULE_13__.createKey)('tabTextColorHover', type)]: tabTextColorHover, [(0,_utils__WEBPACK_IMPORTED_MODULE_13__.createKey)('tabTextColorDisabled', type)]: tabTextColorDisabled, [(0,_utils__WEBPACK_IMPORTED_MODULE_13__.createKey)('tabFontSize', size)]: tabFontSize }, common: { cubicBezierEaseInOut } } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-color-segment': colorSegment,
                '--n-bar-color': barColor,
                '--n-tab-font-size': tabFontSize,
                '--n-tab-text-color': tabTextColor,
                '--n-tab-text-color-active': tabTextColorActive,
                '--n-tab-text-color-disabled': tabTextColorDisabled,
                '--n-tab-text-color-hover': tabTextColorHover,
                '--n-pane-text-color': paneTextColor,
                '--n-tab-border-color': tabBorderColor,
                '--n-tab-border-radius': tabBorderRadius,
                '--n-close-color': closeColor,
                '--n-close-color-hover': closeColorHover,
                '--n-close-color-pressed': closeColorPressed,
                '--n-tab-color': tabColor,
                '--n-tab-font-weight': tabFontWeight,
                '--n-tab-font-weight-active': tabFontWeightActive,
                '--n-tab-padding': tabPadding,
                '--n-tab-gap': tabGap,
                '--n-pane-padding': panePadding,
                '--n-font-weight-strong': fontWeightStrong,
                '--n-tab-color-segment': tabColorSegment
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0,_mixins__WEBPACK_IMPORTED_MODULE_14__.useThemeClass)('tabs', (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                return `${compitableSizeRef.value[0]}${props.type[0]}`;
            }), cssVarsRef, props)
            : undefined;
        return Object.assign({ mergedClsPrefix: mergedClsPrefixRef, mergedValue: mergedValueRef, renderedNames: new Set(), tabsElRef,
            barElRef,
            addTabInstRef,
            xScrollInstRef,
            scrollWrapperElRef, addTabFixed: addTabFixedRef, tabWrapperStyle: tabWrapperStyleRef, handleNavResize, mergedSize: compitableSizeRef, handleScroll,
            handleTabsResize, cssVars: inlineThemeDisabled ? undefined : cssVarsRef, themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass, onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender }, exposedMethods);
    },
    render() {
        const { mergedClsPrefix, type, addTabFixed, addable, mergedSize, onRender, $slots: { default: defaultSlot, prefix: prefixSlot, suffix: suffixSlot } } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        const tabPaneChildren = defaultSlot
            ? (0,_utils__WEBPACK_IMPORTED_MODULE_7__.flatten)(defaultSlot()).filter((v) => {
                return v.type.__TAB_PANE__ === true;
            })
            : [];
        const tabChildren = defaultSlot
            ? (0,_utils__WEBPACK_IMPORTED_MODULE_7__.flatten)(defaultSlot()).filter((v) => {
                return v.type.__TAB__ === true;
            })
            : [];
        const showPane = !tabChildren.length;
        const isCard = type === 'card';
        const isSegment = type === 'segment';
        const mergedJustifyContent = !isCard && !isSegment && this.justifyContent;
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: [
                `${mergedClsPrefix}-tabs`,
                this.themeClass,
                `${mergedClsPrefix}-tabs--${type}-type`,
                `${mergedClsPrefix}-tabs--${mergedSize}-size`,
                mergedJustifyContent && `${mergedClsPrefix}-tabs--flex`
            ], style: this.cssVars },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: [
                    // the class should be applied here since it's possible
                    // to make tabs nested in tabs, style may influence each
                    // other. adding a class will make it easy to write the
                    // style.
                    `${mergedClsPrefix}-tabs-nav--${type}-type`,
                    `${mergedClsPrefix}-tabs-nav`
                ] },
                (0,_utils__WEBPACK_IMPORTED_MODULE_15__.resolveWrappedSlot)(prefixSlot, (children) => children && ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-tabs-nav__prefix` }, children))),
                isSegment ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-tabs-rail` }, showPane
                    ? tabPaneChildren.map((tabPaneVNode, index) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_Tab__WEBPACK_IMPORTED_MODULE_16__["default"], Object.assign({}, tabPaneVNode.props, { internalCreatedByPane: true, internalLeftPadded: index !== 0 }), tabPaneVNode.children
                            ? {
                                default: tabPaneVNode.children.tab
                            }
                            : undefined));
                    })
                    : tabChildren.map((tabVNode, index) => {
                        if (index === 0) {
                            return tabVNode;
                        }
                        else {
                            return createLeftPaddedTabVNode(tabVNode);
                        }
                    }))) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vueuc__WEBPACK_IMPORTED_MODULE_17__["default"], { onResize: this.handleNavResize }, {
                    default: () => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-tabs-nav-scroll-wrapper`, ref: "scrollWrapperElRef" },
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vueuc__WEBPACK_IMPORTED_MODULE_18__["default"], { ref: "xScrollInstRef", onScroll: this.handleScroll }, {
                            default: () => {
                                const rawWrappedTabs = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: this.tabWrapperStyle, class: `${mergedClsPrefix}-tabs-wrapper` },
                                    mergedJustifyContent ? null : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-tabs-scroll-padding`, style: { width: `${this.tabsPadding}px` } })),
                                    showPane
                                        ? tabPaneChildren.map((tabPaneVNode, index) => {
                                            return justifyTabDynamicProps((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_Tab__WEBPACK_IMPORTED_MODULE_16__["default"], Object.assign({}, tabPaneVNode.props, { internalCreatedByPane: true, internalLeftPadded: index !== 0 && !mergedJustifyContent }), tabPaneVNode.children
                                                ? {
                                                    default: tabPaneVNode.children.tab
                                                }
                                                : undefined));
                                        })
                                        : tabChildren.map((tabVNode, index) => {
                                            if (index !== 0 &&
                                                !mergedJustifyContent) {
                                                return justifyTabDynamicProps(createLeftPaddedTabVNode(tabVNode));
                                            }
                                            else {
                                                return justifyTabDynamicProps(tabVNode);
                                            }
                                        }),
                                    !addTabFixed && addable && isCard
                                        ? createAddTag(addable, (showPane
                                            ? tabPaneChildren.length
                                            : tabChildren.length) !== 0)
                                        : null,
                                    mergedJustifyContent ? null : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-tabs-scroll-padding`, style: { width: `${this.tabsPadding}px` } }))));
                                let wrappedTabs = rawWrappedTabs;
                                if (isCard && addable) {
                                    wrappedTabs = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vueuc__WEBPACK_IMPORTED_MODULE_17__["default"], { onResize: this.handleTabsResize }, {
                                        default: () => rawWrappedTabs
                                    }));
                                }
                                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ref: "tabsElRef", class: `${mergedClsPrefix}-tabs-nav-scroll-content` },
                                    wrappedTabs,
                                    isCard ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-tabs-pad` })) : null,
                                    isCard ? null : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ref: "barElRef", class: `${mergedClsPrefix}-tabs-bar` }))));
                            }
                        })))
                })),
                addTabFixed && addable && isCard
                    ? createAddTag(addable, true)
                    : null,
                (0,_utils__WEBPACK_IMPORTED_MODULE_15__.resolveWrappedSlot)(suffixSlot, (children) => children && ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-tabs-nav__suffix` }, children)))),
            showPane &&
                filterMapTabPanes(tabPaneChildren, this.mergedValue, this.renderedNames)));
    }
}));
function filterMapTabPanes(tabPaneVNodes, value, renderedNames) {
    const children = [];
    tabPaneVNodes.forEach((vNode) => {
        const { name, displayDirective, 'display-directive': _displayDirective } = vNode.props;
        const matchDisplayDirective = (directive) => displayDirective === directive || _displayDirective === directive;
        const show = value === name;
        if (vNode.key !== undefined) {
            vNode.key = name;
        }
        if (show ||
            matchDisplayDirective('show') ||
            (matchDisplayDirective('show:lazy') && renderedNames.has(name))) {
            if (!renderedNames.has(name)) {
                renderedNames.add(name);
            }
            const useVShow = !matchDisplayDirective('if');
            children.push(useVShow ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(vNode, [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, show]]) : vNode);
        }
    });
    return children;
}
function createAddTag(addable, internalLeftPadded) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_Tab__WEBPACK_IMPORTED_MODULE_16__["default"], { ref: "addTabInstRef", key: "__addable", name: "__addable", internalCreatedByPane: true, internalAddable: true, internalLeftPadded: internalLeftPadded, disabled: typeof addable === 'object' && addable.disabled }));
}
function createLeftPaddedTabVNode(tabVNode) {
    const modifiedVNode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.cloneVNode)(tabVNode);
    if (modifiedVNode.props) {
        modifiedVNode.props.internalLeftPadded = true;
    }
    else {
        modifiedVNode.props = {
            internalLeftPadded: true
        };
    }
    return modifiedVNode;
}
function justifyTabDynamicProps(tabVNode) {
    if (Array.isArray(tabVNode.dynamicProps)) {
        if (!tabVNode.dynamicProps.includes('internalLeftPadded')) {
            tabVNode.dynamicProps.push('internalLeftPadded');
        }
    }
    else {
        tabVNode.dynamicProps = ['internalLeftPadded'];
    }
    return tabVNode;
}


/***/ }),

/***/ 810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabsInjectionKey": () => (/* binding */ tabsInjectionKey)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(593);

const tabsInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-tabs');


/***/ }),

/***/ 812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
 // vars:
// --n-bezier
// --n-close-color
// --n-close-color-hover
// --n-close-color-pressed
// --n-bar-color
// --n-tab-font-size
// --n-tab-text-color
// --n-tab-text-color-active
// --n-tab-text-color-disabled
// --n-tab-text-color-hover
// --n-pane-text-color
// --n-tab-border-color
// --n-tab-border-radius
// --n-tab-color
// --n-tab-font-weight
// --n-tab-font-weight-active
// --n-tab-gap
// --n-tab-padding
// --n-pane-padding
// --n-color-segment
// --n-font-weight-strong
// --n-tab-color-segment

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs', `
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-rail', `
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-tab-wrapper', `
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-tab', `
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('active', `
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', `
 color: var(--n-tab-text-color-hover);
 `)])])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('flex', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-nav', {
  width: '100%'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-wrapper', {
  width: '100%'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-tab', {
  marginRight: 0
})])])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-nav', `
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('prefix, suffix', `
 display: flex;
 align-items: center;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('prefix', 'padding-right: 16px;'), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('suffix', 'padding-left: 16px;')]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-nav-scroll-wrapper', `
 flex: 1;
 position: relative;
 overflow: hidden;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('shadow-before', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&::before', `
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('shadow-after', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&::after', `
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&::before, &::after', `
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&::before', `
 left: 0;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&::after', `
 right: 0;
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-nav-scroll-content', `
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-wrapper', `
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-tab-wrapper', `
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-tab', `
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('disabled', {
  cursor: 'not-allowed'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('close', `
 margin-left: 8px;
 font-size: 14px;
 transition: color .3s var(--n-bezier);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('label', `
 display: flex;
 align-items: center;
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-bar', `
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('transition-disabled', `
 transition: none;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('disabled', `
 background-color: var(--n-tab-text-color-disabled)
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tab-pane', `
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-tab-pad', `
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('line-type, bar-type', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-tab', `
 font-weight: var(--n-tab-font-weight-active);
 box-sizing: border-box;
 vertical-align: bottom;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', {
  color: 'var(--n-tab-text-color-hover)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('active', {
  color: 'var(--n-tab-text-color-active)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('disabled', {
  color: 'var(--n-tab-text-color-disabled)'
})])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-nav', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('line-type', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('prefix, suffix', `
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-nav-scroll-content', `
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-bar', `
 border-radius: 0;
 bottom: -1px;
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('card-type', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('prefix, suffix', `
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-pad', `
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-tab-pad', `
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-tab', `
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('addable', `
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('disabled', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', `
 color: var(--n-tab-text-color-hover);
 `)])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('closable', 'padding-right: 6px;'), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('active', `
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('disabled', 'color: var(--n-tab-text-color-disabled);')]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('tabs-scroll-padding', 'border-bottom: 1px solid var(--n-tab-border-color);')])])]));

/***/ }),

/***/ 814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    tabFontSizeSmall: '14px',
    tabFontSizeMedium: '14px',
    tabFontSizeLarge: '16px',
    tabGapSmallLine: '36px',
    tabGapMediumLine: '36px',
    tabGapLargeLine: '36px',
    tabPaddingSmallLine: '6px 0',
    tabPaddingMediumLine: '10px 0',
    tabPaddingLargeLine: '14px 0',
    tabGapSmallBar: '36px',
    tabGapMediumBar: '36px',
    tabGapLargeBar: '36px',
    tabPaddingSmallBar: '4px 0',
    tabPaddingMediumBar: '6px 0',
    tabPaddingLargeBar: '10px 0',
    tabGapSmallCard: '4px',
    tabGapMediumCard: '4px',
    tabGapLargeCard: '4px',
    tabPaddingSmallCard: '6px 10px',
    tabPaddingMediumCard: '8px 12px',
    tabPaddingLargeCard: '8px 16px',
    tabPaddingSmallSegment: '4px 0',
    tabPaddingMediumSegment: '6px 0',
    tabPaddingLargeSegment: '8px 0',
    tabGapSmallSegment: '0',
    tabGapMediumSegment: '0',
    tabGapLargeSegment: '0',
    panePaddingSmall: '8px 0 0 0',
    panePaddingMedium: '12px 0 0 0',
    panePaddingLarge: '16px 0 0 0'
});


/***/ }),

/***/ 813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "self": () => (/* binding */ self),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(814);
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(694);


const self = (vars) => {
    const { textColor2, primaryColor, textColorDisabled, closeColor, closeColorHover, closeColorPressed, tabColor, baseColor, dividerColor, fontWeight, textColor1, borderRadius, fontSize, fontWeightStrong } = vars;
    return Object.assign(Object.assign({}, _common__WEBPACK_IMPORTED_MODULE_0__["default"]), { colorSegment: tabColor, tabFontSizeCard: fontSize, tabTextColorLine: textColor1, tabTextColorActiveLine: primaryColor, tabTextColorHoverLine: primaryColor, tabTextColorDisabledLine: textColorDisabled, tabTextColorSegment: textColor1, tabTextColorActiveSegment: textColor2, tabTextColorHoverSegment: textColor2, tabTextColorDisabledSegment: textColorDisabled, tabTextColorBar: textColor1, tabTextColorActiveBar: primaryColor, tabTextColorHoverBar: primaryColor, tabTextColorDisabledBar: textColorDisabled, tabTextColorCard: textColor1, tabTextColorHoverCard: textColor1, tabTextColorActiveCard: primaryColor, tabTextColorDisabledCard: textColorDisabled, barColor: primaryColor, closeColor,
        closeColorHover,
        closeColorPressed,
        tabColor, tabColorSegment: baseColor, tabBorderColor: dividerColor, tabFontWeightActive: fontWeight, tabFontWeight: fontWeight, tabBorderRadius: borderRadius, paneTextColor: textColor2, fontWeightStrong });
};
const tabsLight = {
    name: 'Tabs',
    common: _styles_common__WEBPACK_IMPORTED_MODULE_1__["default"],
    self
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabsLight);


/***/ }),

/***/ 823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "default": () => (/* binding */ onFontsReady)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(824);


let fontsReady;
let isFontReady;
const init = () => {
    var _a, _b;
    fontsReady = _utils__WEBPACK_IMPORTED_MODULE_1__.isBrowser ? (_b = (_a = document) === null || _a === void 0 ? void 0 : _a.fonts) === null || _b === void 0 ? void 0 : _b.ready : undefined;
    isFontReady = false;
    /* istanbul ignore if */
    if (fontsReady !== undefined) {
        void fontsReady.then(() => {
            isFontReady = true;
        });
    }
    else {
        isFontReady = true;
    }
};
init();
// For testing

/**
 * Call callback on fontsReady is resolved. If fontsReady is already resolved,
 * callback won't be called.
 */
function onFontsReady(cb) {
    /* istanbul ignore next */
    if (isFontReady)
        return;
    let deactivated = false;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
        /* istanbul ignore next */
        if (!isFontReady) {
            fontsReady === null || fontsReady === void 0 ? void 0 : fontsReady.then(() => {
                if (deactivated)
                    return;
                cb();
            });
        }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
        deactivated = true;
    });
}


/***/ }),

/***/ 815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useCompitable)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

function useCompitable(reactive, keys) {
    // @ts-expect-error
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        for (const key of keys) {
            if (reactive[key] !== undefined)
                return reactive[key];
        }
        return reactive[keys[keys.length - 1]];
    });
}


/***/ }),

/***/ 824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasInstance": () => (/* binding */ hasInstance),
/* harmony export */   "isBrowser": () => (/* binding */ isBrowser)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

function hasInstance() {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)() !== null;
}
const isBrowser = typeof window !== 'undefined';


/***/ }),

/***/ 555:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ c),
/* harmony export */   "cssrAnchorMetaName": () => (/* binding */ cssrAnchorMetaName)
/* harmony export */ });
/* harmony import */ var css_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(585);

const { c } = (0,css_render__WEBPACK_IMPORTED_MODULE_0__.CssRender)();

const cssrAnchorMetaName = 'vueuc-style';


/***/ }),

/***/ 832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_render_vue3_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(576);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(833);



const styles = (0,_shared__WEBPACK_IMPORTED_MODULE_1__.c)('.v-x-scroll', {
    overflow: 'auto',
    scrollbarWidth: 'none'
}, [
    (0,_shared__WEBPACK_IMPORTED_MODULE_1__.c)('&::-webkit-scrollbar', {
        width: 0,
        height: 0
    })
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'XScroll',
    props: {
        disabled: Boolean,
        onScroll: Function
    },
    setup() {
        const selfRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        function handleWheel(e) {
            const preventYWheel = e.currentTarget.offsetWidth <
                e.currentTarget.scrollWidth;
            if (!preventYWheel || e.deltaY === 0)
                return;
            e.currentTarget.scrollLeft += e.deltaY + e.deltaX;
            e.preventDefault();
        }
        const ssrAdapter = (0,_css_render_vue3_ssr__WEBPACK_IMPORTED_MODULE_2__.useSsrAdapter)();
        styles.mount({
            id: 'vueuc/x-scroll',
            head: true,
            anchorMetaName: _shared__WEBPACK_IMPORTED_MODULE_1__.cssrAnchorMetaName,
            ssr: ssrAdapter
        });
        const exposedMethods = {
            scrollTo(...args) {
                var _a;
                (_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(...args);
            }
        };
        return Object.assign({ selfRef,
            handleWheel }, exposedMethods);
    },
    render() {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div', {
            ref: 'selfRef',
            onScroll: this.onScroll,
            onWheel: this.disabled ? undefined : this.handleWheel,
            class: 'v-x-scroll'
        }, this.$slots);
    }
}));


/***/ }),

/***/ 820:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(821);


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, (0,_trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string) + 1).replace(reTrimStart, '')
    : string;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTrim);


/***/ }),

/***/ 821:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trimmedEndIndex);


/***/ }),

/***/ 818:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(604);
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(822);
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(819);




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = (0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(wait) || 0;
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax((0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge((0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  }

  function debounced() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);


/***/ }),

/***/ 822:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(607);


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Date.now();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (now);


/***/ }),

/***/ 817:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(818);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(604);



/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return (0,_debounce_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (throttle);


/***/ }),

/***/ 819:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTrim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(820);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(604);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(716);




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return NAN;
  }
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = (0,_baseTrim_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toNumber);


/***/ })

}]);