(self["webpackChunk"] = self["webpackChunk"] || []).push([[7],Array(318).concat([
/* 318 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_ActionSheetComponent": () => (/* binding */ _ActionSheetComponent),
/* harmony export */   "_AppBarComponent": () => (/* binding */ _AppBarComponent),
/* harmony export */   "_BackTopComponent": () => (/* binding */ _BackTopComponent),
/* harmony export */   "_BadgeComponent": () => (/* binding */ _BadgeComponent),
/* harmony export */   "_BottomNavigationComponent": () => (/* binding */ _BottomNavigationComponent),
/* harmony export */   "_BottomNavigationItemComponent": () => (/* binding */ _BottomNavigationItemComponent),
/* harmony export */   "_ButtonComponent": () => (/* binding */ _ButtonComponent),
/* harmony export */   "_CardComponent": () => (/* binding */ _CardComponent),
/* harmony export */   "_CellComponent": () => (/* binding */ _CellComponent),
/* harmony export */   "_CheckboxComponent": () => (/* binding */ _CheckboxComponent),
/* harmony export */   "_CheckboxGroupComponent": () => (/* binding */ _CheckboxGroupComponent),
/* harmony export */   "_ChipComponent": () => (/* binding */ _ChipComponent),
/* harmony export */   "_ColComponent": () => (/* binding */ _ColComponent),
/* harmony export */   "_CollapseComponent": () => (/* binding */ _CollapseComponent),
/* harmony export */   "_CollapseItemComponent": () => (/* binding */ _CollapseItemComponent),
/* harmony export */   "_ContextComponent": () => (/* binding */ _ContextComponent),
/* harmony export */   "_CountdownComponent": () => (/* binding */ _CountdownComponent),
/* harmony export */   "_CounterComponent": () => (/* binding */ _CounterComponent),
/* harmony export */   "_DatePickerComponent": () => (/* binding */ _DatePickerComponent),
/* harmony export */   "_DialogComponent": () => (/* binding */ _DialogComponent),
/* harmony export */   "_DividerComponent": () => (/* binding */ _DividerComponent),
/* harmony export */   "_FormComponent": () => (/* binding */ _FormComponent),
/* harmony export */   "_FormDetailsComponent": () => (/* binding */ _FormDetailsComponent),
/* harmony export */   "_IconComponent": () => (/* binding */ _IconComponent),
/* harmony export */   "_ImageComponent": () => (/* binding */ _ImageComponent),
/* harmony export */   "_ImagePreviewComponent": () => (/* binding */ _ImagePreviewComponent),
/* harmony export */   "_IndexAnchorComponent": () => (/* binding */ _IndexAnchorComponent),
/* harmony export */   "_IndexBarComponent": () => (/* binding */ _IndexBarComponent),
/* harmony export */   "_InputComponent": () => (/* binding */ _InputComponent),
/* harmony export */   "_LazyComponent": () => (/* binding */ _LazyComponent),
/* harmony export */   "_ListComponent": () => (/* binding */ _ListComponent),
/* harmony export */   "_LoadingComponent": () => (/* binding */ _LoadingComponent),
/* harmony export */   "_LocaleComponent": () => (/* binding */ _LocaleComponent),
/* harmony export */   "_MenuComponent": () => (/* binding */ _MenuComponent),
/* harmony export */   "_OptionComponent": () => (/* binding */ _OptionComponent),
/* harmony export */   "_PaginationComponent": () => (/* binding */ _PaginationComponent),
/* harmony export */   "_PickerComponent": () => (/* binding */ _PickerComponent),
/* harmony export */   "_PopupComponent": () => (/* binding */ _PopupComponent),
/* harmony export */   "_ProgressComponent": () => (/* binding */ _ProgressComponent),
/* harmony export */   "_PullRefreshComponent": () => (/* binding */ _PullRefreshComponent),
/* harmony export */   "_RadioComponent": () => (/* binding */ _RadioComponent),
/* harmony export */   "_RadioGroupComponent": () => (/* binding */ _RadioGroupComponent),
/* harmony export */   "_RateComponent": () => (/* binding */ _RateComponent),
/* harmony export */   "_RippleComponent": () => (/* binding */ _RippleComponent),
/* harmony export */   "_RowComponent": () => (/* binding */ _RowComponent),
/* harmony export */   "_SelectComponent": () => (/* binding */ _SelectComponent),
/* harmony export */   "_SkeletonComponent": () => (/* binding */ _SkeletonComponent),
/* harmony export */   "_SliderComponent": () => (/* binding */ _SliderComponent),
/* harmony export */   "_SnackbarComponent": () => (/* binding */ _SnackbarComponent),
/* harmony export */   "_SpaceComponent": () => (/* binding */ _SpaceComponent),
/* harmony export */   "_StepComponent": () => (/* binding */ _StepComponent),
/* harmony export */   "_StepsComponent": () => (/* binding */ _StepsComponent),
/* harmony export */   "_StickyComponent": () => (/* binding */ _StickyComponent),
/* harmony export */   "_StyleProviderComponent": () => (/* binding */ _StyleProviderComponent),
/* harmony export */   "_SwipeComponent": () => (/* binding */ _SwipeComponent),
/* harmony export */   "_SwipeItemComponent": () => (/* binding */ _SwipeItemComponent),
/* harmony export */   "_SwitchComponent": () => (/* binding */ _SwitchComponent),
/* harmony export */   "_TabComponent": () => (/* binding */ _TabComponent),
/* harmony export */   "_TabItemComponent": () => (/* binding */ _TabItemComponent),
/* harmony export */   "_TableComponent": () => (/* binding */ _TableComponent),
/* harmony export */   "_TabsComponent": () => (/* binding */ _TabsComponent),
/* harmony export */   "_TabsItemsComponent": () => (/* binding */ _TabsItemsComponent),
/* harmony export */   "_TimePickerComponent": () => (/* binding */ _TimePickerComponent),
/* harmony export */   "_UploaderComponent": () => (/* binding */ _UploaderComponent),
/* harmony export */   "install": () => (/* binding */ install),
/* harmony export */   "ActionSheet": () => (/* reexport safe */ _action_sheet__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "AppBar": () => (/* reexport safe */ _app_bar__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "BackTop": () => (/* reexport safe */ _back_top__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Badge": () => (/* reexport safe */ _badge__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "BottomNavigation": () => (/* reexport safe */ _bottom_navigation__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "BottomNavigationItem": () => (/* reexport safe */ _bottom_navigation_item__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "Button": () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "Card": () => (/* reexport safe */ _card__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "Cell": () => (/* reexport safe */ _cell__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "Checkbox": () => (/* reexport safe */ _checkbox__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "CheckboxGroup": () => (/* reexport safe */ _checkbox_group__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "Chip": () => (/* reexport safe */ _chip__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "Col": () => (/* reexport safe */ _col__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "Collapse": () => (/* reexport safe */ _collapse__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "CollapseItem": () => (/* reexport safe */ _collapse_item__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "Context": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   "Countdown": () => (/* reexport safe */ _countdown__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   "Counter": () => (/* reexport safe */ _counter__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   "DatePicker": () => (/* reexport safe */ _date_picker__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   "Dialog": () => (/* reexport safe */ _dialog__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   "Divider": () => (/* reexport safe */ _divider__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   "Form": () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   "FormDetails": () => (/* reexport safe */ _form_details__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   "Icon": () => (/* reexport safe */ _icon__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   "Image": () => (/* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   "ImagePreview": () => (/* reexport safe */ _image_preview__WEBPACK_IMPORTED_MODULE_25__["default"]),
/* harmony export */   "IndexAnchor": () => (/* reexport safe */ _index_anchor__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   "IndexBar": () => (/* reexport safe */ _index_bar__WEBPACK_IMPORTED_MODULE_27__["default"]),
/* harmony export */   "Input": () => (/* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_28__["default"]),
/* harmony export */   "Lazy": () => (/* reexport safe */ _lazy__WEBPACK_IMPORTED_MODULE_29__["default"]),
/* harmony export */   "List": () => (/* reexport safe */ _list__WEBPACK_IMPORTED_MODULE_30__["default"]),
/* harmony export */   "Loading": () => (/* reexport safe */ _loading__WEBPACK_IMPORTED_MODULE_31__["default"]),
/* harmony export */   "Locale": () => (/* reexport safe */ _locale__WEBPACK_IMPORTED_MODULE_32__["default"]),
/* harmony export */   "Menu": () => (/* reexport safe */ _menu__WEBPACK_IMPORTED_MODULE_33__["default"]),
/* harmony export */   "Option": () => (/* reexport safe */ _option__WEBPACK_IMPORTED_MODULE_34__["default"]),
/* harmony export */   "Pagination": () => (/* reexport safe */ _pagination__WEBPACK_IMPORTED_MODULE_35__["default"]),
/* harmony export */   "Picker": () => (/* reexport safe */ _picker__WEBPACK_IMPORTED_MODULE_36__["default"]),
/* harmony export */   "Popup": () => (/* reexport safe */ _popup__WEBPACK_IMPORTED_MODULE_37__["default"]),
/* harmony export */   "Progress": () => (/* reexport safe */ _progress__WEBPACK_IMPORTED_MODULE_38__["default"]),
/* harmony export */   "PullRefresh": () => (/* reexport safe */ _pull_refresh__WEBPACK_IMPORTED_MODULE_39__["default"]),
/* harmony export */   "Radio": () => (/* reexport safe */ _radio__WEBPACK_IMPORTED_MODULE_40__["default"]),
/* harmony export */   "RadioGroup": () => (/* reexport safe */ _radio_group__WEBPACK_IMPORTED_MODULE_41__["default"]),
/* harmony export */   "Rate": () => (/* reexport safe */ _rate__WEBPACK_IMPORTED_MODULE_42__["default"]),
/* harmony export */   "Ripple": () => (/* reexport safe */ _ripple__WEBPACK_IMPORTED_MODULE_43__["default"]),
/* harmony export */   "Row": () => (/* reexport safe */ _row__WEBPACK_IMPORTED_MODULE_44__["default"]),
/* harmony export */   "Select": () => (/* reexport safe */ _select__WEBPACK_IMPORTED_MODULE_45__["default"]),
/* harmony export */   "Skeleton": () => (/* reexport safe */ _skeleton__WEBPACK_IMPORTED_MODULE_46__["default"]),
/* harmony export */   "Slider": () => (/* reexport safe */ _slider__WEBPACK_IMPORTED_MODULE_47__["default"]),
/* harmony export */   "Snackbar": () => (/* reexport safe */ _snackbar__WEBPACK_IMPORTED_MODULE_48__["default"]),
/* harmony export */   "Space": () => (/* reexport safe */ _space__WEBPACK_IMPORTED_MODULE_49__["default"]),
/* harmony export */   "Step": () => (/* reexport safe */ _step__WEBPACK_IMPORTED_MODULE_50__["default"]),
/* harmony export */   "Steps": () => (/* reexport safe */ _steps__WEBPACK_IMPORTED_MODULE_51__["default"]),
/* harmony export */   "Sticky": () => (/* reexport safe */ _sticky__WEBPACK_IMPORTED_MODULE_52__["default"]),
/* harmony export */   "StyleProvider": () => (/* reexport safe */ _style_provider__WEBPACK_IMPORTED_MODULE_53__["default"]),
/* harmony export */   "Swipe": () => (/* reexport safe */ _swipe__WEBPACK_IMPORTED_MODULE_54__["default"]),
/* harmony export */   "SwipeItem": () => (/* reexport safe */ _swipe_item__WEBPACK_IMPORTED_MODULE_55__["default"]),
/* harmony export */   "Switch": () => (/* reexport safe */ _switch__WEBPACK_IMPORTED_MODULE_56__["default"]),
/* harmony export */   "Tab": () => (/* reexport safe */ _tab__WEBPACK_IMPORTED_MODULE_57__["default"]),
/* harmony export */   "TabItem": () => (/* reexport safe */ _tab_item__WEBPACK_IMPORTED_MODULE_58__["default"]),
/* harmony export */   "Table": () => (/* reexport safe */ _table__WEBPACK_IMPORTED_MODULE_59__["default"]),
/* harmony export */   "Tabs": () => (/* reexport safe */ _tabs__WEBPACK_IMPORTED_MODULE_60__["default"]),
/* harmony export */   "TabsItems": () => (/* reexport safe */ _tabs_items__WEBPACK_IMPORTED_MODULE_61__["default"]),
/* harmony export */   "TimePicker": () => (/* reexport safe */ _time_picker__WEBPACK_IMPORTED_MODULE_62__["default"]),
/* harmony export */   "Uploader": () => (/* reexport safe */ _uploader__WEBPACK_IMPORTED_MODULE_63__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _action_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(319);
/* harmony import */ var _app_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(338);
/* harmony import */ var _back_top__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(341);
/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(350);
/* harmony import */ var _bottom_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(353);
/* harmony import */ var _bottom_navigation_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(357);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(343);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(361);
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(364);
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(367);
/* harmony import */ var _checkbox_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(376);
/* harmony import */ var _chip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(379);
/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(382);
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(387);
/* harmony import */ var _collapse_item__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(391);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(325);
/* harmony import */ var _countdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(395);
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(398);
/* harmony import */ var _date_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(402);
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(415);
/* harmony import */ var _divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(418);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(421);
/* harmony import */ var _form_details__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(369);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(331);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(424);
/* harmony import */ var _image_preview__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(428);
/* harmony import */ var _index_anchor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(438);
/* harmony import */ var _index_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(446);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(449);
/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(426);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(452);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(345);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(335);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(455);
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(458);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(463);
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(466);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(326);
/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(469);
/* harmony import */ var _pull_refresh__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(472);
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(475);
/* harmony import */ var _radio_group__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(480);
/* harmony import */ var _rate__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(483);
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(323);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(486);
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(489);
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(492);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(495);
/* harmony import */ var _snackbar__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(498);
/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(502);
/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(505);
/* harmony import */ var _steps__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(510);
/* harmony import */ var _sticky__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(440);
/* harmony import */ var _style_provider__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(513);
/* harmony import */ var _swipe__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(430);
/* harmony import */ var _swipe_item__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(434);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(515);
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(518);
/* harmony import */ var _tab_item__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(523);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(528);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(530);
/* harmony import */ var _tabs_items__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(533);
/* harmony import */ var _time_picker__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(536);
/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(541);

































































const _ActionSheetComponent = _action_sheet__WEBPACK_IMPORTED_MODULE_0__._ActionSheetComponent || {}
const _AppBarComponent = _app_bar__WEBPACK_IMPORTED_MODULE_1__._AppBarComponent || {}
const _BackTopComponent = _back_top__WEBPACK_IMPORTED_MODULE_2__._BackTopComponent || {}
const _BadgeComponent = _badge__WEBPACK_IMPORTED_MODULE_3__._BadgeComponent || {}
const _BottomNavigationComponent = _bottom_navigation__WEBPACK_IMPORTED_MODULE_4__._BottomNavigationComponent || {}
const _BottomNavigationItemComponent = _bottom_navigation_item__WEBPACK_IMPORTED_MODULE_5__._BottomNavigationItemComponent || {}
const _ButtonComponent = _button__WEBPACK_IMPORTED_MODULE_6__._ButtonComponent || {}
const _CardComponent = _card__WEBPACK_IMPORTED_MODULE_7__._CardComponent || {}
const _CellComponent = _cell__WEBPACK_IMPORTED_MODULE_8__._CellComponent || {}
const _CheckboxComponent = _checkbox__WEBPACK_IMPORTED_MODULE_9__._CheckboxComponent || {}
const _CheckboxGroupComponent = _checkbox_group__WEBPACK_IMPORTED_MODULE_10__._CheckboxGroupComponent || {}
const _ChipComponent = _chip__WEBPACK_IMPORTED_MODULE_11__._ChipComponent || {}
const _ColComponent = _col__WEBPACK_IMPORTED_MODULE_12__._ColComponent || {}
const _CollapseComponent = _collapse__WEBPACK_IMPORTED_MODULE_13__._CollapseComponent || {}
const _CollapseItemComponent = _collapse_item__WEBPACK_IMPORTED_MODULE_14__._CollapseItemComponent || {}
const _ContextComponent = _context__WEBPACK_IMPORTED_MODULE_15__._ContextComponent || {}
const _CountdownComponent = _countdown__WEBPACK_IMPORTED_MODULE_16__._CountdownComponent || {}
const _CounterComponent = _counter__WEBPACK_IMPORTED_MODULE_17__._CounterComponent || {}
const _DatePickerComponent = _date_picker__WEBPACK_IMPORTED_MODULE_18__._DatePickerComponent || {}
const _DialogComponent = _dialog__WEBPACK_IMPORTED_MODULE_19__._DialogComponent || {}
const _DividerComponent = _divider__WEBPACK_IMPORTED_MODULE_20__._DividerComponent || {}
const _FormComponent = _form__WEBPACK_IMPORTED_MODULE_21__._FormComponent || {}
const _FormDetailsComponent = _form_details__WEBPACK_IMPORTED_MODULE_22__._FormDetailsComponent || {}
const _IconComponent = _icon__WEBPACK_IMPORTED_MODULE_23__._IconComponent || {}
const _ImageComponent = _image__WEBPACK_IMPORTED_MODULE_24__._ImageComponent || {}
const _ImagePreviewComponent = _image_preview__WEBPACK_IMPORTED_MODULE_25__._ImagePreviewComponent || {}
const _IndexAnchorComponent = _index_anchor__WEBPACK_IMPORTED_MODULE_26__._IndexAnchorComponent || {}
const _IndexBarComponent = _index_bar__WEBPACK_IMPORTED_MODULE_27__._IndexBarComponent || {}
const _InputComponent = _input__WEBPACK_IMPORTED_MODULE_28__._InputComponent || {}
const _LazyComponent = _lazy__WEBPACK_IMPORTED_MODULE_29__._LazyComponent || {}
const _ListComponent = _list__WEBPACK_IMPORTED_MODULE_30__._ListComponent || {}
const _LoadingComponent = _loading__WEBPACK_IMPORTED_MODULE_31__._LoadingComponent || {}
const _LocaleComponent = _locale__WEBPACK_IMPORTED_MODULE_32__._LocaleComponent || {}
const _MenuComponent = _menu__WEBPACK_IMPORTED_MODULE_33__._MenuComponent || {}
const _OptionComponent = _option__WEBPACK_IMPORTED_MODULE_34__._OptionComponent || {}
const _PaginationComponent = _pagination__WEBPACK_IMPORTED_MODULE_35__._PaginationComponent || {}
const _PickerComponent = _picker__WEBPACK_IMPORTED_MODULE_36__._PickerComponent || {}
const _PopupComponent = _popup__WEBPACK_IMPORTED_MODULE_37__._PopupComponent || {}
const _ProgressComponent = _progress__WEBPACK_IMPORTED_MODULE_38__._ProgressComponent || {}
const _PullRefreshComponent = _pull_refresh__WEBPACK_IMPORTED_MODULE_39__._PullRefreshComponent || {}
const _RadioComponent = _radio__WEBPACK_IMPORTED_MODULE_40__._RadioComponent || {}
const _RadioGroupComponent = _radio_group__WEBPACK_IMPORTED_MODULE_41__._RadioGroupComponent || {}
const _RateComponent = _rate__WEBPACK_IMPORTED_MODULE_42__._RateComponent || {}
const _RippleComponent = _ripple__WEBPACK_IMPORTED_MODULE_43__._RippleComponent || {}
const _RowComponent = _row__WEBPACK_IMPORTED_MODULE_44__._RowComponent || {}
const _SelectComponent = _select__WEBPACK_IMPORTED_MODULE_45__._SelectComponent || {}
const _SkeletonComponent = _skeleton__WEBPACK_IMPORTED_MODULE_46__._SkeletonComponent || {}
const _SliderComponent = _slider__WEBPACK_IMPORTED_MODULE_47__._SliderComponent || {}
const _SnackbarComponent = _snackbar__WEBPACK_IMPORTED_MODULE_48__._SnackbarComponent || {}
const _SpaceComponent = _space__WEBPACK_IMPORTED_MODULE_49__._SpaceComponent || {}
const _StepComponent = _step__WEBPACK_IMPORTED_MODULE_50__._StepComponent || {}
const _StepsComponent = _steps__WEBPACK_IMPORTED_MODULE_51__._StepsComponent || {}
const _StickyComponent = _sticky__WEBPACK_IMPORTED_MODULE_52__._StickyComponent || {}
const _StyleProviderComponent = _style_provider__WEBPACK_IMPORTED_MODULE_53__._StyleProviderComponent || {}
const _SwipeComponent = _swipe__WEBPACK_IMPORTED_MODULE_54__._SwipeComponent || {}
const _SwipeItemComponent = _swipe_item__WEBPACK_IMPORTED_MODULE_55__._SwipeItemComponent || {}
const _SwitchComponent = _switch__WEBPACK_IMPORTED_MODULE_56__._SwitchComponent || {}
const _TabComponent = _tab__WEBPACK_IMPORTED_MODULE_57__._TabComponent || {}
const _TabItemComponent = _tab_item__WEBPACK_IMPORTED_MODULE_58__._TabItemComponent || {}
const _TableComponent = _table__WEBPACK_IMPORTED_MODULE_59__._TableComponent || {}
const _TabsComponent = _tabs__WEBPACK_IMPORTED_MODULE_60__._TabsComponent || {}
const _TabsItemsComponent = _tabs_items__WEBPACK_IMPORTED_MODULE_61__._TabsItemsComponent || {}
const _TimePickerComponent = _time_picker__WEBPACK_IMPORTED_MODULE_62__._TimePickerComponent || {}
const _UploaderComponent = _uploader__WEBPACK_IMPORTED_MODULE_63__._UploaderComponent || {}


function install(app) {
  _action_sheet__WEBPACK_IMPORTED_MODULE_0__["default"].install && app.use(_action_sheet__WEBPACK_IMPORTED_MODULE_0__["default"])
  _app_bar__WEBPACK_IMPORTED_MODULE_1__["default"].install && app.use(_app_bar__WEBPACK_IMPORTED_MODULE_1__["default"])
  _back_top__WEBPACK_IMPORTED_MODULE_2__["default"].install && app.use(_back_top__WEBPACK_IMPORTED_MODULE_2__["default"])
  _badge__WEBPACK_IMPORTED_MODULE_3__["default"].install && app.use(_badge__WEBPACK_IMPORTED_MODULE_3__["default"])
  _bottom_navigation__WEBPACK_IMPORTED_MODULE_4__["default"].install && app.use(_bottom_navigation__WEBPACK_IMPORTED_MODULE_4__["default"])
  _bottom_navigation_item__WEBPACK_IMPORTED_MODULE_5__["default"].install && app.use(_bottom_navigation_item__WEBPACK_IMPORTED_MODULE_5__["default"])
  _button__WEBPACK_IMPORTED_MODULE_6__["default"].install && app.use(_button__WEBPACK_IMPORTED_MODULE_6__["default"])
  _card__WEBPACK_IMPORTED_MODULE_7__["default"].install && app.use(_card__WEBPACK_IMPORTED_MODULE_7__["default"])
  _cell__WEBPACK_IMPORTED_MODULE_8__["default"].install && app.use(_cell__WEBPACK_IMPORTED_MODULE_8__["default"])
  _checkbox__WEBPACK_IMPORTED_MODULE_9__["default"].install && app.use(_checkbox__WEBPACK_IMPORTED_MODULE_9__["default"])
  _checkbox_group__WEBPACK_IMPORTED_MODULE_10__["default"].install && app.use(_checkbox_group__WEBPACK_IMPORTED_MODULE_10__["default"])
  _chip__WEBPACK_IMPORTED_MODULE_11__["default"].install && app.use(_chip__WEBPACK_IMPORTED_MODULE_11__["default"])
  _col__WEBPACK_IMPORTED_MODULE_12__["default"].install && app.use(_col__WEBPACK_IMPORTED_MODULE_12__["default"])
  _collapse__WEBPACK_IMPORTED_MODULE_13__["default"].install && app.use(_collapse__WEBPACK_IMPORTED_MODULE_13__["default"])
  _collapse_item__WEBPACK_IMPORTED_MODULE_14__["default"].install && app.use(_collapse_item__WEBPACK_IMPORTED_MODULE_14__["default"])
  _context__WEBPACK_IMPORTED_MODULE_15__["default"].install && app.use(_context__WEBPACK_IMPORTED_MODULE_15__["default"])
  _countdown__WEBPACK_IMPORTED_MODULE_16__["default"].install && app.use(_countdown__WEBPACK_IMPORTED_MODULE_16__["default"])
  _counter__WEBPACK_IMPORTED_MODULE_17__["default"].install && app.use(_counter__WEBPACK_IMPORTED_MODULE_17__["default"])
  _date_picker__WEBPACK_IMPORTED_MODULE_18__["default"].install && app.use(_date_picker__WEBPACK_IMPORTED_MODULE_18__["default"])
  _dialog__WEBPACK_IMPORTED_MODULE_19__["default"].install && app.use(_dialog__WEBPACK_IMPORTED_MODULE_19__["default"])
  _divider__WEBPACK_IMPORTED_MODULE_20__["default"].install && app.use(_divider__WEBPACK_IMPORTED_MODULE_20__["default"])
  _form__WEBPACK_IMPORTED_MODULE_21__["default"].install && app.use(_form__WEBPACK_IMPORTED_MODULE_21__["default"])
  _form_details__WEBPACK_IMPORTED_MODULE_22__["default"].install && app.use(_form_details__WEBPACK_IMPORTED_MODULE_22__["default"])
  _icon__WEBPACK_IMPORTED_MODULE_23__["default"].install && app.use(_icon__WEBPACK_IMPORTED_MODULE_23__["default"])
  _image__WEBPACK_IMPORTED_MODULE_24__["default"].install && app.use(_image__WEBPACK_IMPORTED_MODULE_24__["default"])
  _image_preview__WEBPACK_IMPORTED_MODULE_25__["default"].install && app.use(_image_preview__WEBPACK_IMPORTED_MODULE_25__["default"])
  _index_anchor__WEBPACK_IMPORTED_MODULE_26__["default"].install && app.use(_index_anchor__WEBPACK_IMPORTED_MODULE_26__["default"])
  _index_bar__WEBPACK_IMPORTED_MODULE_27__["default"].install && app.use(_index_bar__WEBPACK_IMPORTED_MODULE_27__["default"])
  _input__WEBPACK_IMPORTED_MODULE_28__["default"].install && app.use(_input__WEBPACK_IMPORTED_MODULE_28__["default"])
  _lazy__WEBPACK_IMPORTED_MODULE_29__["default"].install && app.use(_lazy__WEBPACK_IMPORTED_MODULE_29__["default"])
  _list__WEBPACK_IMPORTED_MODULE_30__["default"].install && app.use(_list__WEBPACK_IMPORTED_MODULE_30__["default"])
  _loading__WEBPACK_IMPORTED_MODULE_31__["default"].install && app.use(_loading__WEBPACK_IMPORTED_MODULE_31__["default"])
  _locale__WEBPACK_IMPORTED_MODULE_32__["default"].install && app.use(_locale__WEBPACK_IMPORTED_MODULE_32__["default"])
  _menu__WEBPACK_IMPORTED_MODULE_33__["default"].install && app.use(_menu__WEBPACK_IMPORTED_MODULE_33__["default"])
  _option__WEBPACK_IMPORTED_MODULE_34__["default"].install && app.use(_option__WEBPACK_IMPORTED_MODULE_34__["default"])
  _pagination__WEBPACK_IMPORTED_MODULE_35__["default"].install && app.use(_pagination__WEBPACK_IMPORTED_MODULE_35__["default"])
  _picker__WEBPACK_IMPORTED_MODULE_36__["default"].install && app.use(_picker__WEBPACK_IMPORTED_MODULE_36__["default"])
  _popup__WEBPACK_IMPORTED_MODULE_37__["default"].install && app.use(_popup__WEBPACK_IMPORTED_MODULE_37__["default"])
  _progress__WEBPACK_IMPORTED_MODULE_38__["default"].install && app.use(_progress__WEBPACK_IMPORTED_MODULE_38__["default"])
  _pull_refresh__WEBPACK_IMPORTED_MODULE_39__["default"].install && app.use(_pull_refresh__WEBPACK_IMPORTED_MODULE_39__["default"])
  _radio__WEBPACK_IMPORTED_MODULE_40__["default"].install && app.use(_radio__WEBPACK_IMPORTED_MODULE_40__["default"])
  _radio_group__WEBPACK_IMPORTED_MODULE_41__["default"].install && app.use(_radio_group__WEBPACK_IMPORTED_MODULE_41__["default"])
  _rate__WEBPACK_IMPORTED_MODULE_42__["default"].install && app.use(_rate__WEBPACK_IMPORTED_MODULE_42__["default"])
  _ripple__WEBPACK_IMPORTED_MODULE_43__["default"].install && app.use(_ripple__WEBPACK_IMPORTED_MODULE_43__["default"])
  _row__WEBPACK_IMPORTED_MODULE_44__["default"].install && app.use(_row__WEBPACK_IMPORTED_MODULE_44__["default"])
  _select__WEBPACK_IMPORTED_MODULE_45__["default"].install && app.use(_select__WEBPACK_IMPORTED_MODULE_45__["default"])
  _skeleton__WEBPACK_IMPORTED_MODULE_46__["default"].install && app.use(_skeleton__WEBPACK_IMPORTED_MODULE_46__["default"])
  _slider__WEBPACK_IMPORTED_MODULE_47__["default"].install && app.use(_slider__WEBPACK_IMPORTED_MODULE_47__["default"])
  _snackbar__WEBPACK_IMPORTED_MODULE_48__["default"].install && app.use(_snackbar__WEBPACK_IMPORTED_MODULE_48__["default"])
  _space__WEBPACK_IMPORTED_MODULE_49__["default"].install && app.use(_space__WEBPACK_IMPORTED_MODULE_49__["default"])
  _step__WEBPACK_IMPORTED_MODULE_50__["default"].install && app.use(_step__WEBPACK_IMPORTED_MODULE_50__["default"])
  _steps__WEBPACK_IMPORTED_MODULE_51__["default"].install && app.use(_steps__WEBPACK_IMPORTED_MODULE_51__["default"])
  _sticky__WEBPACK_IMPORTED_MODULE_52__["default"].install && app.use(_sticky__WEBPACK_IMPORTED_MODULE_52__["default"])
  _style_provider__WEBPACK_IMPORTED_MODULE_53__["default"].install && app.use(_style_provider__WEBPACK_IMPORTED_MODULE_53__["default"])
  _swipe__WEBPACK_IMPORTED_MODULE_54__["default"].install && app.use(_swipe__WEBPACK_IMPORTED_MODULE_54__["default"])
  _swipe_item__WEBPACK_IMPORTED_MODULE_55__["default"].install && app.use(_swipe_item__WEBPACK_IMPORTED_MODULE_55__["default"])
  _switch__WEBPACK_IMPORTED_MODULE_56__["default"].install && app.use(_switch__WEBPACK_IMPORTED_MODULE_56__["default"])
  _tab__WEBPACK_IMPORTED_MODULE_57__["default"].install && app.use(_tab__WEBPACK_IMPORTED_MODULE_57__["default"])
  _tab_item__WEBPACK_IMPORTED_MODULE_58__["default"].install && app.use(_tab_item__WEBPACK_IMPORTED_MODULE_58__["default"])
  _table__WEBPACK_IMPORTED_MODULE_59__["default"].install && app.use(_table__WEBPACK_IMPORTED_MODULE_59__["default"])
  _tabs__WEBPACK_IMPORTED_MODULE_60__["default"].install && app.use(_tabs__WEBPACK_IMPORTED_MODULE_60__["default"])
  _tabs_items__WEBPACK_IMPORTED_MODULE_61__["default"].install && app.use(_tabs_items__WEBPACK_IMPORTED_MODULE_61__["default"])
  _time_picker__WEBPACK_IMPORTED_MODULE_62__["default"].install && app.use(_time_picker__WEBPACK_IMPORTED_MODULE_62__["default"])
  _uploader__WEBPACK_IMPORTED_MODULE_63__["default"].install && app.use(_uploader__WEBPACK_IMPORTED_MODULE_63__["default"])
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  install,
  ActionSheet: _action_sheet__WEBPACK_IMPORTED_MODULE_0__["default"],
  AppBar: _app_bar__WEBPACK_IMPORTED_MODULE_1__["default"],
  BackTop: _back_top__WEBPACK_IMPORTED_MODULE_2__["default"],
  Badge: _badge__WEBPACK_IMPORTED_MODULE_3__["default"],
  BottomNavigation: _bottom_navigation__WEBPACK_IMPORTED_MODULE_4__["default"],
  BottomNavigationItem: _bottom_navigation_item__WEBPACK_IMPORTED_MODULE_5__["default"],
  Button: _button__WEBPACK_IMPORTED_MODULE_6__["default"],
  Card: _card__WEBPACK_IMPORTED_MODULE_7__["default"],
  Cell: _cell__WEBPACK_IMPORTED_MODULE_8__["default"],
  Checkbox: _checkbox__WEBPACK_IMPORTED_MODULE_9__["default"],
  CheckboxGroup: _checkbox_group__WEBPACK_IMPORTED_MODULE_10__["default"],
  Chip: _chip__WEBPACK_IMPORTED_MODULE_11__["default"],
  Col: _col__WEBPACK_IMPORTED_MODULE_12__["default"],
  Collapse: _collapse__WEBPACK_IMPORTED_MODULE_13__["default"],
  CollapseItem: _collapse_item__WEBPACK_IMPORTED_MODULE_14__["default"],
  Context: _context__WEBPACK_IMPORTED_MODULE_15__["default"],
  Countdown: _countdown__WEBPACK_IMPORTED_MODULE_16__["default"],
  Counter: _counter__WEBPACK_IMPORTED_MODULE_17__["default"],
  DatePicker: _date_picker__WEBPACK_IMPORTED_MODULE_18__["default"],
  Dialog: _dialog__WEBPACK_IMPORTED_MODULE_19__["default"],
  Divider: _divider__WEBPACK_IMPORTED_MODULE_20__["default"],
  Form: _form__WEBPACK_IMPORTED_MODULE_21__["default"],
  FormDetails: _form_details__WEBPACK_IMPORTED_MODULE_22__["default"],
  Icon: _icon__WEBPACK_IMPORTED_MODULE_23__["default"],
  Image: _image__WEBPACK_IMPORTED_MODULE_24__["default"],
  ImagePreview: _image_preview__WEBPACK_IMPORTED_MODULE_25__["default"],
  IndexAnchor: _index_anchor__WEBPACK_IMPORTED_MODULE_26__["default"],
  IndexBar: _index_bar__WEBPACK_IMPORTED_MODULE_27__["default"],
  Input: _input__WEBPACK_IMPORTED_MODULE_28__["default"],
  Lazy: _lazy__WEBPACK_IMPORTED_MODULE_29__["default"],
  List: _list__WEBPACK_IMPORTED_MODULE_30__["default"],
  Loading: _loading__WEBPACK_IMPORTED_MODULE_31__["default"],
  Locale: _locale__WEBPACK_IMPORTED_MODULE_32__["default"],
  Menu: _menu__WEBPACK_IMPORTED_MODULE_33__["default"],
  Option: _option__WEBPACK_IMPORTED_MODULE_34__["default"],
  Pagination: _pagination__WEBPACK_IMPORTED_MODULE_35__["default"],
  Picker: _picker__WEBPACK_IMPORTED_MODULE_36__["default"],
  Popup: _popup__WEBPACK_IMPORTED_MODULE_37__["default"],
  Progress: _progress__WEBPACK_IMPORTED_MODULE_38__["default"],
  PullRefresh: _pull_refresh__WEBPACK_IMPORTED_MODULE_39__["default"],
  Radio: _radio__WEBPACK_IMPORTED_MODULE_40__["default"],
  RadioGroup: _radio_group__WEBPACK_IMPORTED_MODULE_41__["default"],
  Rate: _rate__WEBPACK_IMPORTED_MODULE_42__["default"],
  Ripple: _ripple__WEBPACK_IMPORTED_MODULE_43__["default"],
  Row: _row__WEBPACK_IMPORTED_MODULE_44__["default"],
  Select: _select__WEBPACK_IMPORTED_MODULE_45__["default"],
  Skeleton: _skeleton__WEBPACK_IMPORTED_MODULE_46__["default"],
  Slider: _slider__WEBPACK_IMPORTED_MODULE_47__["default"],
  Snackbar: _snackbar__WEBPACK_IMPORTED_MODULE_48__["default"],
  Space: _space__WEBPACK_IMPORTED_MODULE_49__["default"],
  Step: _step__WEBPACK_IMPORTED_MODULE_50__["default"],
  Steps: _steps__WEBPACK_IMPORTED_MODULE_51__["default"],
  Sticky: _sticky__WEBPACK_IMPORTED_MODULE_52__["default"],
  StyleProvider: _style_provider__WEBPACK_IMPORTED_MODULE_53__["default"],
  Swipe: _swipe__WEBPACK_IMPORTED_MODULE_54__["default"],
  SwipeItem: _swipe_item__WEBPACK_IMPORTED_MODULE_55__["default"],
  Switch: _switch__WEBPACK_IMPORTED_MODULE_56__["default"],
  Tab: _tab__WEBPACK_IMPORTED_MODULE_57__["default"],
  TabItem: _tab_item__WEBPACK_IMPORTED_MODULE_58__["default"],
  Table: _table__WEBPACK_IMPORTED_MODULE_59__["default"],
  Tabs: _tabs__WEBPACK_IMPORTED_MODULE_60__["default"],
  TabsItems: _tabs_items__WEBPACK_IMPORTED_MODULE_61__["default"],
  TimePicker: _time_picker__WEBPACK_IMPORTED_MODULE_62__["default"],
  Uploader: _uploader__WEBPACK_IMPORTED_MODULE_63__["default"]
});


/***/ }),
/* 319 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_ActionSheetComponent": () => (/* binding */ _ActionSheetComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActionSheet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(322);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);




var singletonOptions;

function ActionSheet(options) {
  if (!(0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.inBrowser)()) {
    return Promise.resolve();
  }

  return new Promise(resolve => {
    ActionSheet.close();
    var reactiveActionSheetOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(options);
    reactiveActionSheetOptions.teleport = 'body';
    singletonOptions = reactiveActionSheetOptions;
    var {
      unmountInstance
    } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.mountInstance)(_ActionSheet_js__WEBPACK_IMPORTED_MODULE_3__["default"], reactiveActionSheetOptions, {
      onSelect: action => {
        reactiveActionSheetOptions.onSelect == null ? void 0 : reactiveActionSheetOptions.onSelect(action);
        resolve(action);
      },
      onClose: () => {
        reactiveActionSheetOptions.onClose == null ? void 0 : reactiveActionSheetOptions.onClose();
        resolve('close');
      },
      onClosed: () => {
        reactiveActionSheetOptions.onClosed == null ? void 0 : reactiveActionSheetOptions.onClosed();
        unmountInstance();
        singletonOptions === reactiveActionSheetOptions && (singletonOptions = null);
      },
      onRouteChange: () => {
        unmountInstance();
        singletonOptions === reactiveActionSheetOptions && (singletonOptions = null);
      },
      'onUpdate:show': value => {
        reactiveActionSheetOptions.show = value;
      }
    });
    reactiveActionSheetOptions.show = true;
  });
}

ActionSheet.Component = _ActionSheet_js__WEBPACK_IMPORTED_MODULE_3__["default"];

_ActionSheet_js__WEBPACK_IMPORTED_MODULE_3__["default"].install = function (app) {
  app.component(_ActionSheet_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, _ActionSheet_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
};

ActionSheet.close = () => {
  if (singletonOptions != null) {
    var prevSingletonOptions = singletonOptions;
    singletonOptions = null;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)().then(() => {
      prevSingletonOptions.show = false;
    });
  }
};

ActionSheet.install = function (app) {
  app.component(_ActionSheet_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, _ActionSheet_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
};

var _ActionSheetComponent = _ActionSheet_js__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionSheet);

/***/ }),
/* 320 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isBoolean": () => (/* binding */ isBoolean),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isURL": () => (/* binding */ isURL),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "toNumber": () => (/* binding */ toNumber),
/* harmony export */   "removeItem": () => (/* binding */ removeItem),
/* harmony export */   "toggleItem": () => (/* binding */ toggleItem),
/* harmony export */   "throttle": () => (/* binding */ throttle),
/* harmony export */   "inBrowser": () => (/* binding */ inBrowser),
/* harmony export */   "uniq": () => (/* binding */ uniq),
/* harmony export */   "bigCamelize": () => (/* binding */ bigCamelize),
/* harmony export */   "camelize": () => (/* binding */ camelize),
/* harmony export */   "kebabCase": () => (/* binding */ kebabCase)
/* harmony export */ });
const isString = (val) => typeof val === 'string';
const isBoolean = (val) => typeof val === 'boolean';
const isNumber = (val) => typeof val === 'number';
const isPlainObject = (val) => Object.prototype.toString.call(val) === '[object Object]';
const isObject = (val) => typeof val === 'object' && val !== null;
const isArray = (val) => Array.isArray(val);
const isURL = (val) => {
    if (!val) {
        return false;
    }
    return /^(http)|(\.*\/)/.test(val);
};
const isEmpty = (val) => val === undefined || val === null || val === '' || (Array.isArray(val) && !val.length);
const toNumber = (val) => {
    if (val == null)
        return 0;
    if (isString(val)) {
        val = parseFloat(val);
        val = Number.isNaN(val) ? 0 : val;
        return val;
    }
    if (isBoolean(val))
        return Number(val);
    return val;
};
const removeItem = (arr, item) => {
    if (arr.length) {
        const index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1);
        }
    }
};
const toggleItem = (arr, item) => {
    arr.includes(item) ? removeItem(arr, item) : arr.push(item);
};
const throttle = (method, mustRunDelay = 200) => {
    let timer;
    let start = 0;
    return function loop(...args) {
        const now = Date.now();
        const elapsed = now - start;
        if (!start) {
            start = now;
        }
        if (timer) {
            window.clearTimeout(timer);
        }
        if (elapsed >= mustRunDelay) {
            method.apply(this, args);
            start = now;
        }
        else {
            timer = window.setTimeout(() => {
                loop.apply(this, args);
            }, mustRunDelay - elapsed);
        }
    };
};
const inBrowser = () => typeof window !== 'undefined';
const uniq = (arr) => [...new Set(arr)];
const bigCamelize = (s) => camelize(s).replace(s.charAt(0), s.charAt(0).toUpperCase());
const camelize = (s) => s.replace(/-(\w)/g, (_, p) => p.toUpperCase());
const kebabCase = (s) => {
    const ret = s.replace(/([A-Z])/g, ' $1').trim();
    return ret.split(' ').join('-').toLowerCase();
};


/***/ }),
/* 321 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pickProps": () => (/* binding */ pickProps),
/* harmony export */   "mount": () => (/* binding */ mount),
/* harmony export */   "mountInstance": () => (/* binding */ mountInstance),
/* harmony export */   "flatVNodes": () => (/* binding */ flatVNodes),
/* harmony export */   "useAtChildrenCounter": () => (/* binding */ useAtChildrenCounter),
/* harmony export */   "useAtParentIndex": () => (/* binding */ useAtParentIndex),
/* harmony export */   "useChildren": () => (/* binding */ useChildren),
/* harmony export */   "useParent": () => (/* binding */ useParent),
/* harmony export */   "keyInProvides": () => (/* binding */ keyInProvides),
/* harmony export */   "useValidation": () => (/* binding */ useValidation),
/* harmony export */   "addRouteListener": () => (/* binding */ addRouteListener),
/* harmony export */   "useTeleport": () => (/* binding */ useTeleport),
/* harmony export */   "exposeApis": () => (/* binding */ exposeApis),
/* harmony export */   "createNamespace": () => (/* binding */ createNamespace),
/* harmony export */   "call": () => (/* binding */ call)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
var _excluded = ["collect", "clear"];

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function pickProps(props, propsKey) {
  return Array.isArray(propsKey) ? propsKey.reduce((pickedProps, key) => {
    pickedProps[key] = props[key];
    return pickedProps;
  }, {}) : props[propsKey];
}
function mount(component) {
  var app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(component);
  var host = document.createElement('div');
  document.body.appendChild(host);
  return {
    instance: app.mount(host),

    unmount() {
      app.unmount();
      document.body.removeChild(host);
    }

  };
}
function mountInstance(component, props, eventListener) {
  if (props === void 0) {
    props = {};
  }

  if (eventListener === void 0) {
    eventListener = {};
  }

  var Host = {
    setup() {
      return () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(component, _extends({}, props, eventListener));
    }

  };
  var {
    unmount
  } = mount(Host);
  return {
    unmountInstance: unmount
  };
}
function flatVNodes(subTree) {
  var vNodes = [];

  var flat = subTree => {
    if (subTree != null && subTree.component) {
      flat(subTree == null ? void 0 : subTree.component.subTree);
      return;
    }

    if (Array.isArray(subTree == null ? void 0 : subTree.children)) {
      subTree.children.forEach(child => {
        if ((0,vue__WEBPACK_IMPORTED_MODULE_0__.isVNode)(child)) {
          vNodes.push(child);
          flat(child);
        }
      });
    }
  };

  flat(subTree);
  return vNodes;
}
function useAtChildrenCounter(key) {
  var instances = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)([]);
  var parentInstance = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();

  var sortInstances = () => {
    var vNodes = flatVNodes(parentInstance.subTree);
    instances.sort((a, b) => {
      return vNodes.indexOf(a.vnode) - vNodes.indexOf(b.vnode);
    });
  };

  var collect = instance => {
    instances.push(instance);
    sortInstances();
  };

  var clear = instance => {
    (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.removeItem)(instances, instance);
  };

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(key, {
    collect,
    clear,
    instances
  });
  var length = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => instances.length);
  return {
    length
  };
}
function useAtParentIndex(key) {
  if (!keyInProvides(key)) {
    return {
      index: null
    };
  }

  var childrenCounter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(key);
  var {
    collect,
    clear,
    instances
  } = childrenCounter;
  var instance = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)().then(() => collect(instance));
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)().then(() => clear(instance));
  });
  var index = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => instances.indexOf(instance));
  return {
    index
  };
}
function useChildren(key) {
  var childProviders = [];

  var collect = childProvider => {
    childProviders.push(childProvider);
  };

  var clear = childProvider => {
    (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.removeItem)(childProviders, childProvider);
  };

  var bindChildren = parentProvider => {
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(key, _extends({
      collect,
      clear
    }, parentProvider));
  };

  return {
    childProviders,
    bindChildren
  };
}
function useParent(key) {
  if (!keyInProvides(key)) {
    return {
      parentProvider: null,
      bindParent: null
    };
  }

  var rawParentProvider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(key);

  var {
    collect,
    clear
  } = rawParentProvider,
      parentProvider = _objectWithoutPropertiesLoose(rawParentProvider, _excluded);

  var bindParent = childProvider => {
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => collect(childProvider));
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => clear(childProvider));
  };

  return {
    parentProvider,
    bindParent
  };
}
function keyInProvides(key) {
  var instance = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
  return key in instance.provides;
}
function useValidation() {
  var errorMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');

  var validate = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (rules, value, apis) {
      if (!(0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(rules) || !rules.length) {
        return true;
      }

      var resArr = yield Promise.all(rules.map(rule => rule(value, apis)));
      return !resArr.some(res => {
        if (res !== true) {
          errorMessage.value = String(res);
          return true;
        }

        return false;
      });
    });

    return function validate(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  var resetValidation = () => {
    errorMessage.value = '';
  };

  var validateWithTrigger = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (validateTrigger, trigger, rules, value, apis) {
      if (validateTrigger.includes(trigger)) {
        ;
        (yield validate(rules, value, apis)) && (errorMessage.value = '');
      }
    });

    return function validateWithTrigger(_x4, _x5, _x6, _x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    errorMessage,
    validate,
    resetValidation,
    validateWithTrigger
  };
}
function addRouteListener(cb) {
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
    window.addEventListener('hashchange', cb);
    window.addEventListener('popstate', cb);
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
    window.removeEventListener('hashchange', cb);
    window.removeEventListener('popstate', cb);
  });
}
function useTeleport() {
  var disabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onActivated)(() => {
    disabled.value = false;
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onDeactivated)(() => {
    disabled.value = true;
  });
  return {
    disabled
  };
}
function exposeApis(apis) {
  var instance = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();

  if (instance) {
    Object.assign(instance.proxy, apis);
  }
}
function createNamespace(name) {
  var namespace = "var-" + name;

  var createBEM = suffix => {
    if (!suffix) return namespace;
    return suffix.startsWith('--') ? "" + namespace + suffix : namespace + "__" + suffix;
  };

  var classes = function () {
    for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
      classes[_key] = arguments[_key];
    }

    return classes.map(className => {
      if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(className)) {
        var [condition, truthy, falsy = null] = className;
        return condition ? truthy : falsy;
      }

      return className;
    });
  };

  return {
    n: createBEM,
    classes
  };
}
function call(fn) {
  for (var _len2 = arguments.length, arg = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    arg[_key2 - 1] = arguments[_key2];
  }

  if (fn) return fn(...arg);
}

/***/ }),
/* 322 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(323);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(326);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(331);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(334);
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(337);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(335);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);








var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('action-sheet');


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = ["onClick"];
function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  var _component_var_popup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-popup");

  var _directive_ripple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("ripple");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_popup, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    class: _ctx.n('popup-radius'),
    position: "bottom",
    overlay: _ctx.overlay,
    "overlay-class": _ctx.overlayClass,
    "overlay-style": _ctx.overlayStyle,
    "lock-scroll": _ctx.lockScroll,
    "close-on-click-overlay": _ctx.closeOnClickOverlay,
    teleport: _ctx.teleport,
    show: _ctx.popupShow
  }, {
    'onUpdate:show': _ctx.handlePopupUpdateShow
  }, {
    onOpen: _ctx.onOpen,
    onClose: _ctx.onClose,
    onClosed: _ctx.onClosed,
    onOpened: _ctx.onOpened,
    onRouteChange: _ctx.onRouteChange
  }), {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
      class: _ctx.classes(_ctx.n(), 'var--box')
    }, _ctx.$attrs), [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "title", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('title'))
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.dt(_ctx.title, _ctx.pack.actionSheetTitle)), 3
    /* TEXT, CLASS */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "actions", {}, () => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.actions, action => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('action-item'), action.className, [action.disabled, _ctx.n('--disabled')])),
        key: action.name,
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
          color: action.color
        }),
        onClick: $event => _ctx.handleSelect(action)
      }, [action.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_icon, {
        key: 0,
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('action-icon')),
        "var-action-sheet-cover": "",
        name: action.icon,
        size: action.iconSize
      }, null, 8
      /* PROPS */
      , ["class", "name", "size"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('action-name'))
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(action.name), 3
      /* TEXT, CLASS */
      )], 14
      /* CLASS, STYLE, PROPS */
      , _hoisted_1)), [[_directive_ripple, {
        disabled: action.disabled
      }]]);
    }), 128
    /* KEYED_FRAGMENT */
    ))])], 16
    /* FULL_PROPS */
    )]),
    _: 3
    /* FORWARDED */

  }, 16
  /* FULL_PROPS */
  , ["class", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarActionSheet',
  directives: {
    Ripple: _ripple__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  components: {
    VarPopup: _popup__WEBPACK_IMPORTED_MODULE_3__["default"],
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  inheritAttrs: false,
  props: _props__WEBPACK_IMPORTED_MODULE_5__.props,

  setup(props) {
    var popupShow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    var handleSelect = action => {
      if (action.disabled) {
        return;
      }

      var {
        closeOnClickAction,
        onSelect
      } = props;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(onSelect, action);
      closeOnClickAction && (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props['onUpdate:show'], false);
    };

    var handlePopupUpdateShow = value => (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props['onUpdate:show'], value);

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.show, newValue => {
      popupShow.value = newValue;
    }, {
      immediate: true
    });
    return {
      n,
      classes,
      handlePopupUpdateShow,
      popupShow,
      pack: _locale__WEBPACK_IMPORTED_MODULE_6__.pack,
      dt: _utils_shared__WEBPACK_IMPORTED_MODULE_7__.dt,
      handleSelect
    };
  }

}));

/***/ }),
/* 323 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_RippleComponent": () => (/* binding */ _RippleComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(325);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(324);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var {
  n
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.createNamespace)('ripple');
var ANIMATION_DURATION = 250;

function setStyles(element) {
  var {
    zIndex,
    position
  } = window.getComputedStyle(element);
  element.style.overflow = 'hidden';
  element.style.overflowX = 'hidden';
  element.style.overflowY = 'hidden';
  position === 'static' && (element.style.position = 'relative');
  zIndex === 'auto' && (element.style.zIndex = '1');
}

function computeRippleStyles(element, event) {
  var {
    top,
    left
  } = element.getBoundingClientRect();
  var {
    clientWidth,
    clientHeight
  } = element;
  var radius = Math.sqrt(Math.pow(clientWidth, 2) + Math.pow(clientHeight, 2)) / 2;
  var size = radius * 2;
  var localX = event.touches[0].clientX - left;
  var localY = event.touches[0].clientY - top;
  var centerX = (clientWidth - radius * 2) / 2;
  var centerY = (clientHeight - radius * 2) / 2;
  var x = localX - radius;
  var y = localY - radius;
  return {
    x,
    y,
    centerX,
    centerY,
    size
  };
}

function createRipple(event) {
  var _ripple = this._ripple;

  _ripple.removeRipple();

  if (_ripple.disabled || _ripple.tasker) {
    return;
  }

  var task = () => {
    _ripple.tasker = null;
    var {
      x,
      y,
      centerX,
      centerY,
      size
    } = computeRippleStyles(this, event);
    var ripple = document.createElement('div');
    ripple.classList.add(n());
    ripple.style.opacity = "0";
    ripple.style.transform = "translate(" + x + "px, " + y + "px) scale3d(.3, .3, .3)";
    ripple.style.width = size + "px";
    ripple.style.height = size + "px";
    _ripple.color && (ripple.style.backgroundColor = _ripple.color);
    ripple.dataset.createdAt = String(performance.now());
    setStyles(this);
    this.appendChild(ripple);
    window.setTimeout(() => {
      ripple.style.transform = "translate(" + centerX + "px, " + centerY + "px) scale3d(1, 1, 1)";
      ripple.style.opacity = ".25";
    }, 20);
  };

  _ripple.tasker = window.setTimeout(task, 60);
}

function removeRipple() {
  var _ripple = this._ripple;

  var task = () => {
    var ripples = this.querySelectorAll("." + n());

    if (!ripples.length) {
      return;
    }

    var lastRipple = ripples[ripples.length - 1];
    var delay = ANIMATION_DURATION - performance.now() + Number(lastRipple.dataset.createdAt);
    setTimeout(() => {
      lastRipple.style.opacity = "0";
      setTimeout(() => {
        var _lastRipple$parentNod;

        return (_lastRipple$parentNod = lastRipple.parentNode) == null ? void 0 : _lastRipple$parentNod.removeChild(lastRipple);
      }, ANIMATION_DURATION);
    }, delay);
  };

  _ripple.tasker ? setTimeout(task, 60) : task();
}

function forbidRippleTask() {
  var _ripple = this._ripple;

  if (!(0,_utils_elements__WEBPACK_IMPORTED_MODULE_1__.supportTouch)()) {
    return;
  }

  if (!_ripple.touchmoveForbid) {
    return;
  }

  _ripple.tasker && window.clearTimeout(_ripple.tasker);
  _ripple.tasker = null;
}

function mounted(el, binding) {
  var _binding$value, _binding$value$touchm, _binding$value2;

  el._ripple = _extends({
    tasker: null
  }, (_binding$value = binding.value) != null ? _binding$value : {}, {
    touchmoveForbid: (_binding$value$touchm = (_binding$value2 = binding.value) == null ? void 0 : _binding$value2.touchmoveForbid) != null ? _binding$value$touchm : _context__WEBPACK_IMPORTED_MODULE_2__["default"].touchmoveForbid,
    removeRipple: removeRipple.bind(el)
  });
  el.addEventListener('touchstart', createRipple, {
    passive: true
  });
  el.addEventListener('touchmove', forbidRippleTask, {
    passive: true
  });
  el.addEventListener('dragstart', removeRipple, {
    passive: true
  });
  document.addEventListener('touchend', el._ripple.removeRipple, {
    passive: true
  });
  document.addEventListener('touchcancel', el._ripple.removeRipple, {
    passive: true
  });
}

function unmounted(el) {
  el.removeEventListener('touchstart', createRipple);
  el.removeEventListener('touchmove', forbidRippleTask);
  el.removeEventListener('dragstart', removeRipple);
  document.removeEventListener('touchend', el._ripple.removeRipple);
  document.removeEventListener('touchcancel', el._ripple.removeRipple);
}

function updated(el, binding) {
  var _binding$value$touchm2, _binding$value3, _binding$value4, _binding$value5, _el$_ripple, _el$_ripple2, _el$_ripple3;

  var newBinding = {
    touchmoveForbid: (_binding$value$touchm2 = (_binding$value3 = binding.value) == null ? void 0 : _binding$value3.touchmoveForbid) != null ? _binding$value$touchm2 : _context__WEBPACK_IMPORTED_MODULE_2__["default"].touchmoveForbid,
    color: (_binding$value4 = binding.value) == null ? void 0 : _binding$value4.color,
    disabled: (_binding$value5 = binding.value) == null ? void 0 : _binding$value5.disabled
  };
  var diff = newBinding.touchmoveForbid !== ((_el$_ripple = el._ripple) == null ? void 0 : _el$_ripple.touchmoveForbid) || newBinding.color !== ((_el$_ripple2 = el._ripple) == null ? void 0 : _el$_ripple2.color) || newBinding.disabled !== ((_el$_ripple3 = el._ripple) == null ? void 0 : _el$_ripple3.disabled);

  if (diff) {
    var _el$_ripple4, _el$_ripple5;

    el._ripple = _extends({
      tasker: (_el$_ripple4 = el._ripple) == null ? void 0 : _el$_ripple4.tasker,
      removeRipple: (_el$_ripple5 = el._ripple) == null ? void 0 : _el$_ripple5.removeRipple
    }, newBinding);
  }
}

var Ripple = {
  mounted,
  unmounted,
  updated,

  install(app) {
    app.directive('ripple', this);
  }

};
var _RippleComponent = Ripple;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ripple);

/***/ }),
/* 324 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLeft": () => (/* binding */ getLeft),
/* harmony export */   "getTop": () => (/* binding */ getTop),
/* harmony export */   "getScrollTop": () => (/* binding */ getScrollTop),
/* harmony export */   "getScrollLeft": () => (/* binding */ getScrollLeft),
/* harmony export */   "inViewport": () => (/* binding */ inViewport),
/* harmony export */   "getTranslate": () => (/* binding */ getTranslate),
/* harmony export */   "getParentScroller": () => (/* binding */ getParentScroller),
/* harmony export */   "getAllParentScroller": () => (/* binding */ getAllParentScroller),
/* harmony export */   "isRem": () => (/* binding */ isRem),
/* harmony export */   "isPx": () => (/* binding */ isPx),
/* harmony export */   "isPercent": () => (/* binding */ isPercent),
/* harmony export */   "isVw": () => (/* binding */ isVw),
/* harmony export */   "isVh": () => (/* binding */ isVh),
/* harmony export */   "toPxNum": () => (/* binding */ toPxNum),
/* harmony export */   "toSizeUnit": () => (/* binding */ toSizeUnit),
/* harmony export */   "multiplySizeUnit": () => (/* binding */ multiplySizeUnit),
/* harmony export */   "requestAnimationFrame": () => (/* binding */ requestAnimationFrame),
/* harmony export */   "cancelAnimationFrame": () => (/* binding */ cancelAnimationFrame),
/* harmony export */   "nextTickFrame": () => (/* binding */ nextTickFrame),
/* harmony export */   "doubleRaf": () => (/* binding */ doubleRaf),
/* harmony export */   "scrollTo": () => (/* binding */ scrollTo),
/* harmony export */   "formatStyleVars": () => (/* binding */ formatStyleVars),
/* harmony export */   "supportTouch": () => (/* binding */ supportTouch)
/* harmony export */ });
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(320);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function getLeft(element) {
  var {
    left
  } = element.getBoundingClientRect();
  return left + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function getTop(element) {
  var {
    top
  } = element.getBoundingClientRect();
  return top + (document.body.scrollTop || document.documentElement.scrollTop);
}
function getScrollTop(element) {
  var top = 'scrollTop' in element ? element.scrollTop : element.pageYOffset; // iOS scroll bounce cause minus scrollTop

  return Math.max(top, 0);
}
function getScrollLeft(element) {
  var left = 'scrollLeft' in element ? element.scrollLeft : element.pageXOffset;
  return Math.max(left, 0);
}
function inViewport(_x) {
  return _inViewport.apply(this, arguments);
}

function _inViewport() {
  _inViewport = _asyncToGenerator(function* (element) {
    yield doubleRaf();
    var {
      top,
      bottom,
      left,
      right
    } = element.getBoundingClientRect();
    var {
      innerWidth,
      innerHeight
    } = window;
    var xInViewport = left <= innerWidth && right >= 0;
    var yInViewport = top <= innerHeight && bottom >= 0;
    return xInViewport && yInViewport;
  });
  return _inViewport.apply(this, arguments);
}

function getTranslate(el) {
  var {
    transform
  } = window.getComputedStyle(el);
  return +transform.slice(transform.lastIndexOf(',') + 2, transform.length - 1);
}
function getParentScroller(el) {
  var element = el;

  while (element) {
    if (!element.parentNode) {
      break;
    }

    element = element.parentNode;

    if (element === document.body || element === document.documentElement) {
      break;
    }

    var scrollRE = /(scroll|auto)/;
    var {
      overflowY,
      overflow
    } = window.getComputedStyle(element);

    if (scrollRE.test(overflowY) || scrollRE.test(overflow)) {
      return element;
    }
  }

  return window;
}
function getAllParentScroller(el) {
  var allParentScroller = [];
  var element = el;

  while (element !== window) {
    element = getParentScroller(element);
    allParentScroller.push(element);
  }

  return allParentScroller;
} // example 1rem

var isRem = value => (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(value) && value.endsWith('rem'); // example 1 || 1px

var isPx = value => (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(value) && value.endsWith('px') || (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value); // example 1%

var isPercent = value => (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(value) && value.endsWith('%'); // example 1vw

var isVw = value => (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(value) && value.endsWith('vw'); // example 1vh

var isVh = value => (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(value) && value.endsWith('vh'); // example return 1

var toPxNum = value => {
  if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value)) {
    return value;
  }

  if (isPx(value)) {
    return +value.replace('px', '');
  }

  if (isVw(value)) {
    return +value.replace('vw', '') * window.innerWidth / 100;
  }

  if (isVh(value)) {
    return +value.replace('vh', '') * window.innerHeight / 100;
  }

  if (isRem(value)) {
    var num = +value.replace('rem', '');
    var rootFontSize = window.getComputedStyle(document.documentElement).fontSize;
    return num * parseFloat(rootFontSize);
  }

  if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(value)) {
    return (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.toNumber)(value);
  } // % and other


  return 0;
}; // example return 1px 1% 1vw 1vh 1rem null

var toSizeUnit = value => {
  if (value == null) {
    return undefined;
  }

  if (isPercent(value) || isVw(value) || isVh(value) || isRem(value)) {
    return value;
  }

  return toPxNum(value) + "px";
};
var multiplySizeUnit = function (value, quantity) {
  if (quantity === void 0) {
    quantity = 1;
  }

  if (value == null) {
    return undefined;
  }

  var legalSize = toSizeUnit(value);
  var unit = legalSize.match(/(vh|%|rem|px|vw)$/)[0];
  return "" + parseFloat(legalSize) * quantity + unit;
};
function requestAnimationFrame(fn) {
  return globalThis.requestAnimationFrame ? globalThis.requestAnimationFrame(fn) : globalThis.setTimeout(fn, 16);
}
function cancelAnimationFrame(handle) {
  globalThis.cancelAnimationFrame ? globalThis.cancelAnimationFrame(handle) : globalThis.clearTimeout(handle);
}
function nextTickFrame(fn) {
  requestAnimationFrame(() => {
    requestAnimationFrame(fn);
  });
}
function doubleRaf() {
  return new Promise(resolve => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });
}
function scrollTo(element, _ref) {
  var {
    top = 0,
    left = 0,
    duration = 300,
    animation
  } = _ref;
  var startTime = Date.now();
  var scrollTop = getScrollTop(element);
  var scrollLeft = getScrollLeft(element);
  return new Promise(resolve => {
    var frame = () => {
      var progress = (Date.now() - startTime) / duration;

      if (progress < 1) {
        var nextTop = scrollTop + (top - scrollTop) * animation(progress);
        var nextLeft = scrollLeft + (left - scrollLeft) * animation(progress);
        element.scrollTo(nextLeft, nextTop);
        requestAnimationFrame(frame);
      } else {
        element.scrollTo(left, top);
        resolve();
      }
    };

    requestAnimationFrame(frame);
  });
}
function formatStyleVars(styleVars) {
  return Object.entries(styleVars != null ? styleVars : {}).reduce((styles, _ref2) => {
    var [key, value] = _ref2;
    var cssVar = key.startsWith('--') ? key : "--" + (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(key);
    styles[cssVar] = value;
    return styles;
  }, {});
}
function supportTouch() {
  var inBrowser = typeof window !== 'undefined';
  return inBrowser && 'ontouchstart' in window;
}

/***/ }),
/* 325 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_ContextComponent": () => (/* binding */ _ContextComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var context = {
  locks: {},
  zIndex: 2000,
  touchmoveForbid: true
};
var _ContextComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(context);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(context));

/***/ }),
/* 326 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_PopupComponent": () => (/* binding */ _PopupComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(327);


_Popup__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _PopupComponent = _Popup__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 327 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(328);
/* harmony import */ var _context_lock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(330);
/* harmony import */ var _context_zIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(329);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,vue__WEBPACK_IMPORTED_MODULE_0__.isVNode)(s);
}

var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('popup');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'VarPopup',
  inheritAttrs: false,
  props: _props__WEBPACK_IMPORTED_MODULE_2__.props,

  setup(props, _ref) {
    var {
      slots,
      attrs
    } = _ref;
    var {
      zIndex
    } = (0,_context_zIndex__WEBPACK_IMPORTED_MODULE_3__.useZIndex)(() => props.show, 3);
    var {
      disabled
    } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.useTeleport)();

    var hidePopup = () => {
      var _props$onUpdateShow;

      var {
        closeOnClickOverlay,
        onClickOverlay
      } = props;
      onClickOverlay == null ? void 0 : onClickOverlay();

      if (!closeOnClickOverlay) {
        return;
      }

      (_props$onUpdateShow = props['onUpdate:show']) == null ? void 0 : _props$onUpdateShow.call(props, false);
    };

    (0,_context_lock__WEBPACK_IMPORTED_MODULE_4__.useLock)(() => props.show, () => props.lockScroll);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.show, newValue => {
      var {
        onOpen,
        onClose
      } = props;
      newValue ? onOpen == null ? void 0 : onOpen() : onClose == null ? void 0 : onClose();
    }); // internal for Dialog

    (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.addRouteListener)(() => props.onRouteChange == null ? void 0 : props.onRouteChange());

    var renderOverlay = () => {
      var {
        overlayClass = '',
        overlayStyle
      } = props;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        "class": classes(n('overlay'), overlayClass),
        "style": _extends({
          zIndex: zIndex.value - 1
        }, overlayStyle),
        "onClick": hidePopup
      }, null);
    };

    var renderContent = () => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
        "class": classes(n('content'), 'var-elevation--3', n("--" + props.position)),
        "style": {
          zIndex: zIndex.value
        }
      }, attrs), [slots.default == null ? void 0 : slots.default()]);
    };

    var renderPopup = () => {
      var {
        onOpened,
        onClosed,
        show,
        overlay,
        transition,
        position
      } = props;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "name": "var-fade",
        "onAfterEnter": onOpened,
        "onAfterLeave": onClosed
      }, {
        default: () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
          "class": classes('var--box', n()),
          "style": {
            zIndex: zIndex.value - 2
          }
        }, [overlay && renderOverlay(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
          "name": transition || "var-pop-" + position
        }, {
          default: () => [show && renderContent()]
        })]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, show]])]
      });
    };

    return () => {
      var {
        teleport
      } = props;

      if (teleport) {
        var _slot;

        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
          "to": teleport,
          "disabled": disabled.value
        }, _isSlot(_slot = renderPopup()) ? _slot : {
          default: () => [_slot]
        });
      }

      return renderPopup();
    };
  }

}));

/***/ }),
/* 328 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
function positionValidator(position) {
  return ['top', 'bottom', 'right', 'left', 'center'].includes(position);
}

var props = {
  show: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: 'center',
    validator: positionValidator
  },
  transition: {
    type: String
  },
  overlay: {
    type: Boolean,
    default: true
  },
  overlayClass: {
    type: String
  },
  overlayStyle: {
    type: Object
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  teleport: {
    type: String
  },
  onOpen: {
    type: Function
  },
  onOpened: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onClosed: {
    type: Function
  },
  onClickOverlay: {
    type: Function
  },
  // internal for Dialog
  onRouteChange: {
    type: Function
  },
  'onUpdate:show': {
    type: Function
  }
};

/***/ }),
/* 329 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useZIndex": () => (/* binding */ useZIndex)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(325);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function useZIndex(source, count) {
  var zIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(_index__WEBPACK_IMPORTED_MODULE_1__["default"].zIndex);
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(source, newValue => {
    if (newValue) {
      _index__WEBPACK_IMPORTED_MODULE_1__["default"].zIndex += count;
      zIndex.value = _index__WEBPACK_IMPORTED_MODULE_1__["default"].zIndex;
    }
  }, {
    immediate: true
  });
  return {
    zIndex
  };
}

/***/ }),
/* 330 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveLock": () => (/* binding */ resolveLock),
/* harmony export */   "addLock": () => (/* binding */ addLock),
/* harmony export */   "releaseLock": () => (/* binding */ releaseLock),
/* harmony export */   "useLock": () => (/* binding */ useLock)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(325);


function resolveLock() {
  var lockCounts = Object.keys(___WEBPACK_IMPORTED_MODULE_1__["default"].locks).length;
  lockCounts <= 0 ? document.body.classList.remove('var--lock') : document.body.classList.add('var--lock');
}
function addLock(uid) {
  ___WEBPACK_IMPORTED_MODULE_1__["default"].locks[uid] = 1;
  resolveLock();
}
function releaseLock(uid) {
  delete ___WEBPACK_IMPORTED_MODULE_1__["default"].locks[uid];
  resolveLock();
}
function useLock(source, useSource) {
  var {
    uid
  } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();

  if (useSource) {
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(useSource, newValue => {
      if (newValue === false) {
        // 改变为禁用状态 组件解锁
        releaseLock(uid);
      } else if (newValue === true && source() === true) {
        // 改变为启用状态 并且popup处于开启状态 组件加锁
        addLock(uid);
      }
    });
  }

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(source, newValue => {
    if (useSource && useSource() === false) {
      return;
    }

    if (newValue === true) {
      // popup开启 组件加锁
      addLock(uid);
    } else {
      // popup关闭 组件解锁
      releaseLock(uid);
    }
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
    if (useSource && useSource() === false) {
      return;
    }

    if (source() === true) {
      // popup处于开启状态 组件挂载 组件加锁
      addLock(uid);
    }
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
    if (useSource && useSource() === false) {
      return;
    }

    if (source() === true) {
      // popup处于开启状态 组件卸载 组件解锁
      releaseLock(uid);
    }
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onActivated)(() => {
    if (useSource && useSource() === false) {
      return;
    }

    if (source() === true) {
      // popup处于开启状态 组件处于keepalive前台 组件加锁
      addLock(uid);
    }
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onDeactivated)(() => {
    if (useSource && useSource() === false) {
      return;
    }

    if (source() === true) {
      // popup处于开启状态 组件处于keepalive后台 组件解锁
      releaseLock(uid);
    }
  });
}

/***/ }),
/* 331 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_IconComponent": () => (/* binding */ _IconComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(332);


_Icon_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Icon_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Icon_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _IconComponent = _Icon_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Icon_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 332 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(333);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(324);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('icon');

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(_ctx.isURL(_ctx.name) ? 'img' : 'i'), {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), _ctx.namespace + "--set", [_ctx.isURL(_ctx.name), _ctx.n('image'), _ctx.namespace + "-" + _ctx.nextName], [_ctx.shrinking, _ctx.n('--shrinking')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: _ctx.color,
      transition: "transform " + _ctx.toNumber(_ctx.transition) + "ms",
      width: _ctx.isURL(_ctx.name) ? _ctx.toSizeUnit(_ctx.size) : null,
      height: _ctx.isURL(_ctx.name) ? _ctx.toSizeUnit(_ctx.size) : null,
      fontSize: _ctx.toSizeUnit(_ctx.size)
    }),
    src: _ctx.isURL(_ctx.name) ? _ctx.nextName : null,
    onClick: _ctx.onClick
  }, null, 8
  /* PROPS */
  , ["class", "style", "src", "onClick"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarIcon',
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup(props) {
    var nextName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var shrinking = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    var handleNameChange = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (newName, oldName) {
        var {
          transition
        } = props;

        if (oldName == null || (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(transition) === 0) {
          nextName.value = newName;
          return;
        }

        shrinking.value = true;
        yield (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)();
        setTimeout(() => {
          oldName != null && (nextName.value = newName);
          shrinking.value = false;
        }, (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(transition));
      });

      return function handleNameChange(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.name, handleNameChange, {
      immediate: true
    });
    return {
      n,
      classes,
      nextName,
      shrinking,
      isURL: _varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isURL,
      toNumber: _varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber,
      toSizeUnit: _utils_elements__WEBPACK_IMPORTED_MODULE_4__.toSizeUnit
    };
  }

}));

/***/ }),
/* 333 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  name: {
    type: String
  },
  size: {
    type: [Number, String]
  },
  color: {
    type: String
  },
  namespace: {
    type: String,
    default: 'var-icon'
  },
  transition: {
    type: [Number, String],
    default: 0
  },
  onClick: {
    type: Function
  }
};

/***/ }),
/* 334 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _popup_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(328);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var props = _extends({
  show: {
    type: Boolean,
    default: false
  },
  actions: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  closeOnClickAction: {
    type: Boolean,
    default: true
  },
  onSelect: {
    type: Function
  },
  'onUpdate:show': {
    type: Function
  }
}, (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.pickProps)(_popup_props__WEBPACK_IMPORTED_MODULE_1__.props, ['overlay', 'overlayClass', 'overlayStyle', 'lockScroll', 'closeOnClickOverlay', 'teleport', 'onOpen', 'onClose', 'onOpened', 'onClosed', 'onClickOverlay', // internal for function call closes the dialog
'onRouteChange']));

/***/ }),
/* 335 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "packs": () => (/* binding */ packs),
/* harmony export */   "pack": () => (/* binding */ pack),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "use": () => (/* binding */ use),
/* harmony export */   "merge": () => (/* binding */ merge),
/* harmony export */   "useLocale": () => (/* binding */ useLocale),
/* harmony export */   "_LocaleComponent": () => (/* binding */ _LocaleComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _zh_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(336);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function useLocale() {
  var packs = {};
  var pack = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});

  var add = (lang, pack) => {
    pack.lang = lang;
    packs[lang] = pack;
  };

  var use = lang => {
    if (!packs[lang]) {
      console.warn("The " + lang + " does not exist. You can mount a language package using the add method");
      return {};
    }

    pack.value = packs[lang];
  };

  var merge = (lang, pack) => {
    if (!packs[lang]) {
      console.warn("The " + lang + " does not exist. You can mount a language package using the add method");
      return;
    }

    packs[lang] = _extends({}, packs[lang], pack);
    use(lang);
  };

  return {
    packs,
    pack,
    add,
    use,
    merge
  };
}

var {
  packs,
  pack,
  add,
  use,
  merge
} = useLocale();
add('zh-CN', _zh_CN__WEBPACK_IMPORTED_MODULE_1__["default"]);
use('zh-CN');

var _LocaleComponent = {
  packs,
  pack,
  add,
  use,
  merge,
  useLocale
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  packs,
  pack,
  add,
  use,
  merge,
  useLocale
});

/***/ }),
/* 336 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // Dialog
  dialogTitle: '提示',
  dialogConfirmButtonText: '确认',
  dialogCancelButtonText: '取消',
  // ActionSheet
  actionSheetTitle: '请选择',
  // List
  listLoadingText: '加载中',
  listFinishedText: '没有更多了',
  listErrorText: '加载失败',
  // Picker
  pickerTitle: '请选择',
  pickerConfirmButtonText: '确认',
  pickerCancelButtonText: '取消',
  // date-picker
  datePickerMonthDict: {
    '01': {
      name: '一月',
      abbr: '一月'
    },
    '02': {
      name: '二月',
      abbr: '二月'
    },
    '03': {
      name: '三月',
      abbr: '三月'
    },
    '04': {
      name: '四月',
      abbr: '四月'
    },
    '05': {
      name: '五月',
      abbr: '五月'
    },
    '06': {
      name: '六月',
      abbr: '六月'
    },
    '07': {
      name: '七月',
      abbr: '七月'
    },
    '08': {
      name: '八月',
      abbr: '八月'
    },
    '09': {
      name: '九月',
      abbr: '九月'
    },
    '10': {
      name: '十月',
      abbr: '十月'
    },
    '11': {
      name: '十一月',
      abbr: '十一月'
    },
    '12': {
      name: '十二月',
      abbr: '十二月'
    }
  },
  datePickerWeekDict: {
    '0': {
      name: '星期日',
      abbr: '日'
    },
    '1': {
      name: '星期一',
      abbr: '一'
    },
    '2': {
      name: '星期二',
      abbr: '二'
    },
    '3': {
      name: '星期三',
      abbr: '三'
    },
    '4': {
      name: '星期四',
      abbr: '四'
    },
    '5': {
      name: '星期五',
      abbr: '五'
    },
    '6': {
      name: '星期六',
      abbr: '六'
    }
  },
  datePickerSelected: '个被选择',
  // pagination
  paginationItem: '条',
  paginationPage: '页',
  paginationJump: '前往'
});

/***/ }),
/* 337 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isHTMLSupportImage": () => (/* binding */ isHTMLSupportImage),
/* harmony export */   "isHTMLSupportVideo": () => (/* binding */ isHTMLSupportVideo),
/* harmony export */   "createCache": () => (/* binding */ createCache),
/* harmony export */   "linear": () => (/* binding */ linear),
/* harmony export */   "cubic": () => (/* binding */ cubic),
/* harmony export */   "easeInOutCubic": () => (/* binding */ easeInOutCubic),
/* harmony export */   "dt": () => (/* binding */ dt)
/* harmony export */ });
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(320);

var isHTMLSupportImage = val => {
  if (val == null) {
    return false;
  }

  return val.startsWith('data:image') || /\.(png|jpg|gif|jpeg|svg)$/.test(val);
};
var isHTMLSupportVideo = val => {
  if (val == null) {
    return false;
  }

  return val.startsWith('data:video') || /\.(mp4|webm|ogg)$/.test(val);
};
var createCache = max => {
  var cache = [];
  return {
    cache,

    has(key) {
      return this.cache.includes(key);
    },

    add(key) {
      if (this.has(key)) {
        return;
      }

      this.cache.length === max && cache.shift();
      this.cache.push(key);
    },

    remove(key) {
      this.has(key) && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.removeItem)(this.cache, key);
    },

    clear() {
      this.cache.length = 0;
    }

  };
};
var linear = value => value;
var cubic = value => Math.pow(value, 3);
var easeInOutCubic = value => value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;
var dt = (value, defaultText) => value == null ? defaultText : value;

/***/ }),
/* 338 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_AppBarComponent": () => (/* binding */ _AppBarComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(339);


_AppBar_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_AppBar_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _AppBar_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _AppBarComponent = _AppBar_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AppBar_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 339 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(340);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);



var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('app-bar');

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), [_ctx.elevation, 'var-elevation--3'])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      background: _ctx.color,
      color: _ctx.textColor
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('left'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "left"), _ctx.titlePosition === 'left' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('title')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      paddingLeft: _ctx.paddingLeft
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.title), 1
  /* TEXT */
  )])], 6
  /* CLASS, STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _ctx.titlePosition === 'center' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('title'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.title), 1
  /* TEXT */
  )])], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('right'))
  }, [_ctx.titlePosition === 'right' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('title')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      paddingRight: _ctx.paddingRight
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.title), 1
  /* TEXT */
  )])], 6
  /* CLASS, STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "right")], 2
  /* CLASS */
  )], 6
  /* CLASS, STYLE */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarAppBar',
  props: _props__WEBPACK_IMPORTED_MODULE_2__.props,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var paddingLeft = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var paddingRight = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();

    var computePadding = () => {
      paddingLeft.value = slots.left ? 0 : undefined;
      paddingRight.value = slots.right ? 0 : undefined;
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(computePadding);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(computePadding);
    return {
      n,
      classes,
      paddingLeft,
      paddingRight
    };
  }

}));

/***/ }),
/* 340 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "positionValidator": () => (/* binding */ positionValidator),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
function positionValidator(position) {
  var validPositions = ['left', 'center', 'right'];
  return validPositions.includes(position);
}
var props = {
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  title: {
    type: String
  },
  titlePosition: {
    type: String,
    default: 'left',
    validator: positionValidator
  },
  elevation: {
    type: Boolean,
    default: true
  }
};

/***/ }),
/* 341 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_BackTopComponent": () => (/* binding */ _BackTopComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BackTop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(342);


_BackTop_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_BackTop_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _BackTop_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _BackTopComponent = _BackTop_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_BackTop_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 342 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(343);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(331);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(349);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(337);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(324);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);








var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('back-top');

function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  var _component_var_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "body",
    disabled: _ctx.disabled
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    class: _ctx.classes(_ctx.n(), [_ctx.show, _ctx.n('--active')]),
    ref: "backTopEl",
    style: {
      right: _ctx.toSizeUnit(_ctx.right),
      bottom: _ctx.toSizeUnit(_ctx.bottom)
    }
  }, _ctx.$attrs, {
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return _ctx.click && _ctx.click(...arguments);
    }, ["stop"]))
  }), [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_button, {
    type: "primary",
    round: "",
    "var-back-top-cover": ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
      name: "chevron-up"
    })]),
    _: 1
    /* STABLE */

  })])], 16
  /* FULL_PROPS */
  )], 8
  /* PROPS */
  , ["disabled"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarBackTop',
  components: {
    VarButton: _button__WEBPACK_IMPORTED_MODULE_3__["default"],
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  inheritAttrs: false,
  props: _props__WEBPACK_IMPORTED_MODULE_5__.props,

  setup(props) {
    var show = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var backTopEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var disabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    var target;

    var click = event => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props.onClick, event);
      var left = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.getScrollLeft)(target);
      (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.scrollTo)(target, {
        left,
        duration: props.duration,
        animation: _utils_shared__WEBPACK_IMPORTED_MODULE_7__.easeInOutCubic
      });
    };

    var scroll = () => {
      show.value = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.getScrollTop)(target) >= (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.toPxNum)(props.visibilityHeight);
    };

    var throttleScroll = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.throttle)(scroll, 200);

    var getTarget = () => {
      var {
        target
      } = props;

      if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(target)) {
        var el = document.querySelector(props.target);

        if (!el) {
          throw Error('[Varlet] BackTop: target element cannot found');
        }

        return el;
      }

      if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(target)) return target;
      throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object');
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      target = props.target ? getTarget() : (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.getParentScroller)(backTopEl.value);
      target.addEventListener('scroll', throttleScroll);
      disabled.value = false;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
      target.removeEventListener('scroll', throttleScroll);
    });
    return {
      disabled,
      show,
      backTopEl,
      toSizeUnit: _utils_elements__WEBPACK_IMPORTED_MODULE_6__.toSizeUnit,
      n,
      classes,
      click
    };
  }

}));

/***/ }),
/* 343 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_ButtonComponent": () => (/* binding */ _ButtonComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(344);


_Button_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Button_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Button_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _ButtonComponent = _Button_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Button_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 344 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(323);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(345);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(348);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);





var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('button');


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = ["disabled"];
function render(_ctx, _cache) {
  var _component_var_loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-loading");

  var _directive_ripple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("ripple");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), 'var--box', _ctx.n("--" + _ctx.size), [_ctx.block, "var--flex " + _ctx.n('--block'), 'var--inline-flex'], [_ctx.disabled, _ctx.n('--disabled')], [_ctx.text, _ctx.n("--text-" + _ctx.type) + " " + _ctx.n('--text'), _ctx.n("--" + _ctx.type) + " var-elevation--2"], [_ctx.text && _ctx.disabled, _ctx.n('--text-disabled')], [_ctx.round, _ctx.n('--round')], [_ctx.outline, _ctx.n('--outline')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: _ctx.textColor,
      background: _ctx.color
    }),
    disabled: _ctx.disabled,
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.handleClick && _ctx.handleClick(...arguments);
    }),
    onTouchstart: _cache[1] || (_cache[1] = function () {
      return _ctx.handleTouchstart && _ctx.handleTouchstart(...arguments);
    })
  }, [_ctx.loading || _ctx.pending ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_loading, {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('loading')),
    "var-button-cover": "",
    type: _ctx.loadingType,
    size: _ctx.loadingSize,
    radius: _ctx.loadingRadius
  }, null, 8
  /* PROPS */
  , ["class", "type", "size", "radius"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('content'), [_ctx.loading || _ctx.pending, _ctx.n('--hidden')]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
  /* CLASS */
  )], 46
  /* CLASS, STYLE, PROPS, HYDRATE_EVENTS */
  , _hoisted_1)), [[_directive_ripple, {
    disabled: _ctx.disabled || !_ctx.ripple
  }]]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarButton',
  components: {
    VarLoading: _loading__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  directives: {
    Ripple: _ripple__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_4__.props,

  setup(props) {
    var pending = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    var attemptAutoLoading = result => {
      if (props.autoLoading) {
        pending.value = true;
        Promise.resolve(result).finally(() => {
          pending.value = false;
        });
      }
    };

    var handleClick = e => {
      var {
        loading,
        disabled,
        onClick
      } = props;

      if (!onClick || loading || disabled || pending.value) {
        return;
      }

      attemptAutoLoading(onClick(e));
    };

    var handleTouchstart = e => {
      var {
        loading,
        disabled,
        onTouchstart
      } = props;

      if (!onTouchstart || loading || disabled || pending.value) {
        return;
      }

      attemptAutoLoading(onTouchstart(e));
    };

    return {
      n,
      classes,
      pending,
      handleClick,
      handleTouchstart
    };
  }

}));

/***/ }),
/* 345 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_LoadingComponent": () => (/* binding */ _LoadingComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Loading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(346);


_Loading_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Loading_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Loading_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _LoadingComponent = _Loading_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Loading_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 346 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(347);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(324);




var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('loading');


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  viewBox: "25 25 50 50"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none"
})], -1
/* HOISTED */
));

var _hoisted_2 = [_hoisted_1];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n())
  }, [_ctx.$slots.default ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('content'), [_ctx.loading, _ctx.n('content--active')]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), _ctx.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('content-mask'))
  }, null, 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.isShow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes('var--box', _ctx.n('body'), [_ctx.$slots.default, _ctx.n('inside')]))
  }, [_ctx.type === 'circle' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('circle'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('circle-block'), _ctx.n("circle-block--" + _ctx.size))),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: _ctx.multiplySizeUnit(_ctx.radius, 2),
      height: _ctx.multiplySizeUnit(_ctx.radius, 2),
      color: _ctx.color
    })
  }, _hoisted_2, 6
  /* CLASS, STYLE */
  )], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.loadingTypeDict, (nums, key) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: key
    }, [_ctx.type === key ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 0,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(key), _ctx.n(key + "--" + _ctx.size)))
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(nums, num => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: num + key,
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
          backgroundColor: _ctx.color
        }),
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(key + "-item"), _ctx.n(key + "-item--" + _ctx.size)))
      }, null, 6
      /* CLASS, STYLE */
      );
    }), 128
    /* KEYED_FRAGMENT */
    ))], 2
    /* CLASS */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
    /* STABLE_FRAGMENT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )), _ctx.$slots.description || _ctx.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('description'), _ctx.n("description--" + _ctx.size))),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: _ctx.color
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "description", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.description), 1
  /* TEXT */
  )])], 6
  /* CLASS, STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarLoading',
  props: _props__WEBPACK_IMPORTED_MODULE_2__.props,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var loadingTypeDict = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    };
    var isShow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      if (!(0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(slots.default)) return true;
      return props.loading;
    });
    return {
      n,
      classes,
      multiplySizeUnit: _utils_elements__WEBPACK_IMPORTED_MODULE_3__.multiplySizeUnit,
      loadingTypeDict,
      isShow
    };
  }

}));

/***/ }),
/* 347 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typeValidator": () => (/* binding */ typeValidator),
/* harmony export */   "sizeValidator": () => (/* binding */ sizeValidator),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
function typeValidator(type) {
  return ['circle', 'wave', 'cube', 'rect', 'disappear'].includes(type);
}
function sizeValidator(size) {
  return ['normal', 'mini', 'small', 'large'].includes(size);
}
var props = {
  // loading类型
  type: {
    type: String,
    default: 'circle',
    validator: typeValidator
  },
  radius: {
    type: [String, Number]
  },
  // loading尺寸
  size: {
    type: String,
    default: 'normal',
    validator: sizeValidator
  },
  // loading颜色
  color: {
    type: String,
    default: 'currentColor'
  },
  description: {
    type: String
  },
  loading: {
    type: Boolean,
    default: false
  }
};

/***/ }),
/* 348 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _loading_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(347);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);



function typeValidator(type) {
  return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type);
}

function sizeValidator(size) {
  return ['normal', 'mini', 'small', 'large'].includes(size);
}

var props = {
  type: {
    type: String,
    default: 'default',
    validator: typeValidator
  },
  size: {
    type: String,
    default: 'normal',
    validator: sizeValidator
  },
  loading: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  text: {
    type: Boolean,
    default: false
  },
  outline: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  ripple: {
    type: Boolean,
    default: true
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  autoLoading: {
    type: Boolean,
    default: false
  },
  loadingRadius: {
    type: [Number, String],
    default: 12
  },
  loadingType: (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.pickProps)(_loading_props__WEBPACK_IMPORTED_MODULE_1__.props, 'type'),
  loadingSize: (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.pickProps)(_loading_props__WEBPACK_IMPORTED_MODULE_1__.props, 'size'),
  onClick: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
};

/***/ }),
/* 349 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  visibilityHeight: {
    type: [Number, String],
    default: 200
  },
  duration: {
    type: Number,
    default: 300
  },
  right: {
    type: [Number, String]
  },
  bottom: {
    type: [Number, String]
  },
  target: {
    type: [String, Object]
  },
  onClick: {
    type: Function
  }
};

/***/ }),
/* 350 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_BadgeComponent": () => (/* binding */ _BadgeComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Badge_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(351);


_Badge_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Badge_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Badge_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _BadgeComponent = _Badge_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Badge_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 351 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(331);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(320);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(352);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);





var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('badge');


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_1__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.popScopeId)(), n);

var _hoisted_1 = {
  key: 1
};
function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)("var-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)(_ctx.classes(_ctx.n(), 'var--box'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_1__.Transition, {
    name: "var-badge-fade"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_1__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_1__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("span", (0,vue__WEBPACK_IMPORTED_MODULE_1__.mergeProps)(_ctx.$attrs, {
      class: _ctx.classes(_ctx.n('content'), ..._ctx.contentClass),
      style: {
        background: _ctx.color
      }
    }), [_ctx.icon && !_ctx.dot ? ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createBlock)(_component_var_icon, {
      key: 0,
      name: _ctx.icon,
      size: "10px"
    }, null, 8
    /* PROPS */
    , ["name"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)("span", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(_ctx.values), 1
    /* TEXT */
    ))], 16
    /* FULL_PROPS */
    ), [[vue__WEBPACK_IMPORTED_MODULE_1__.vShow, !_ctx.hidden]])]),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.renderSlot)(_ctx.$slots, "default")], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
  render,
  name: 'VarBadge',
  components: {
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  inheritAttrs: false,
  props: _props__WEBPACK_IMPORTED_MODULE_4__.props,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var contentClass = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      var {
        type,
        position,
        dot,
        icon
      } = props;
      var positionBasic = slots.default && n('position') + " " + n("--" + position);
      var dotClass = dot ? n('dot') : null;
      var positionClass = getPositionClass();
      var iconClass = icon ? n('icon') : null;
      return [n("--" + type), positionBasic, dotClass, positionClass, iconClass];
    });
    var values = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      var {
        dot,
        value,
        maxValue
      } = props;
      if (dot) return '';
      if (value !== undefined && maxValue !== undefined && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.toNumber)(value) > maxValue) return maxValue + "+";
      return value;
    });

    var getPositionClass = () => {
      var {
        position,
        dot
      } = props;
      if (dot && position.includes('right')) return n('dot--right');
      if (dot && position.includes('left')) return n('dot--left');
    };

    return {
      n,
      classes,
      values,
      contentClass
    };
  }

}));

/***/ }),
/* 352 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
function typeValidator(type) {
  return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type);
}

function positionValidator(position) {
  return ['right-top', 'right-bottom', 'left-top', 'left-bottom'].includes(position);
}

var props = {
  // 徽标类型
  type: {
    type: String,
    default: 'default',
    validator: typeValidator
  },
  // 是否隐藏徽标
  hidden: {
    type: Boolean,
    default: false
  },
  // 是否是小圆点
  dot: {
    type: Boolean,
    default: false
  },
  // 显示的值
  value: {
    type: [String, Number],
    default: 0
  },
  // 显示最大值
  maxValue: {
    type: [String, Number]
  },
  // 自定义徽标颜色
  color: {
    type: String
  },
  // 定位位置
  position: {
    type: String,
    default: 'right-top',
    validator: positionValidator
  },
  // 图标
  icon: {
    type: String
  }
};

/***/ }),
/* 353 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_BottomNavigationComponent": () => (/* binding */ _BottomNavigationComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BottomNavigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);


_BottomNavigation_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_BottomNavigation_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _BottomNavigation_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _BottomNavigationComponent = _BottomNavigation_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_BottomNavigation_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 354 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(343);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(355);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(356);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('bottom-navigation');
var {
  n: nItem
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('bottom-navigation-item');
var RIGHT_HALF_SPACE_CLASS = nItem('--right-half-space');
var LEFT_HALF_SPACE_CLASS = nItem('--left-half-space');
var RIGHT_SPACE_CLASS = nItem('--right-space');
var defaultFabProps = {
  type: 'primary'
};

function render(_ctx, _cache) {
  var _component_var_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), [_ctx.fixed, _ctx.n('--fixed')], [_ctx.border, _ctx.n('--border')], [_ctx.safeArea, _ctx.n('--safe-area')])),
    ref: "bottomNavigationDom",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("z-index:" + _ctx.zIndex)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), _ctx.$slots.fab ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_button, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    key: 0,
    class: _ctx.classes(_ctx.n('fab'), [_ctx.length % 2, _ctx.n('--fab-right'), _ctx.n('--fab-center')]),
    "var-bottom-navigation__fab": "",
    onClick: _ctx.handleFabClick
  }, _ctx.fabProps, {
    round: ""
  }), {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "fab")]),
    _: 3
    /* FORWARDED */

  }, 16
  /* FULL_PROPS */
  , ["class", "onClick"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 6
  /* CLASS, STYLE */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarBottomNavigation',
  components: {
    VarButton: _button__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_4__.props,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var bottomNavigationDom = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.active);
    var activeColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.activeColor);
    var inactiveColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.inactiveColor);
    var fabProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
    var {
      length,
      bottomNavigationItems,
      bindBottomNavigationItem
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_5__.useBottomNavigationItems)();

    var matchBoundary = () => {
      if (length.value === 0 || matchName() || matchIndex()) {
        return;
      }

      handleActiveIndex();
    };

    var matchName = () => {
      return bottomNavigationItems.find(_ref2 => {
        var {
          name
        } = _ref2;
        return active.value === name.value;
      });
    };

    var matchIndex = () => {
      return bottomNavigationItems.find(_ref3 => {
        var {
          index
        } = _ref3;
        return active.value === index.value;
      });
    };

    var handleActiveIndex = () => {
      if (!(0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isNumber)(active.value)) {
        return;
      }

      if (active.value < 0) {
        (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:active'], 0);
      } else if (active.value > length.value - 1) {
        (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:active'], length.value - 1);
      }
    };

    var onToggle = changedValue => {
      props.onBeforeChange ? handleBeforeChange(changedValue) : handleChange(changedValue);
    };

    var handleBeforeChange = changedValue => {
      Promise.resolve((0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props.onBeforeChange, changedValue)).then(res => res && handleChange(changedValue));
    };

    var handleChange = changedValue => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:active'], changedValue);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props.onChange, changedValue);
    };

    var removeMarginClass = () => {
      var bottomNavigationItems = getBottomNavigationItems();
      bottomNavigationItems.forEach(dom => {
        dom.classList.remove(RIGHT_HALF_SPACE_CLASS, LEFT_HALF_SPACE_CLASS, RIGHT_SPACE_CLASS);
      });
    };

    var addMarginClass = length => {
      var bottomNavigationItems = getBottomNavigationItems();
      var itemsNum = bottomNavigationItems.length;
      var isEven = length % 2 === 0;
      bottomNavigationItems.forEach((bottomNavigationItem, i) => {
        handleMarginClass(isEven, bottomNavigationItem, i, itemsNum);
      });
    };

    var handleMarginClass = (isEven, dom, i, length) => {
      var isLast = i === length - 1;

      if (!isEven && isLast) {
        dom.classList.add(RIGHT_SPACE_CLASS);
        return;
      }

      var isFabLeft = i === length / 2 - 1;
      var isFabRight = i === length / 2;

      if (isFabLeft) {
        dom.classList.add(RIGHT_HALF_SPACE_CLASS);
      } else if (isFabRight) {
        dom.classList.add(LEFT_HALF_SPACE_CLASS);
      }
    };

    var getBottomNavigationItems = () => {
      return Array.from(bottomNavigationDom.value.querySelectorAll("." + nItem()));
    };

    var handleFabClick = () => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props.onFabClick);
    };

    var bottomNavigationProvider = {
      active,
      activeColor,
      inactiveColor,
      onToggle
    };
    bindBottomNavigationItem(bottomNavigationProvider);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => length.value, matchBoundary);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.fabProps, newValue => {
      fabProps.value = _extends({}, defaultFabProps, newValue);
    }, {
      immediate: true,
      deep: true
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      if (!slots.fab) {
        return;
      }

      addMarginClass(length.value);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(() => {
      removeMarginClass();

      if (!slots.fab) {
        return;
      }

      addMarginClass(length.value);
    });
    return {
      n,
      classes,
      length,
      bottomNavigationDom,
      handleFabClick,
      fabProps
    };
  }

}));

/***/ }),
/* 355 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  active: {
    type: [Number, String],
    default: 0
  },
  fixed: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  safeArea: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onChange: {
    type: Function
  },
  'onUpdate:active': {
    type: Function
  },
  onBeforeChange: {
    type: Function
  },
  onFabClick: {
    type: Function
  },
  fabProps: {
    type: Object
  }
};

/***/ }),
/* 356 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY": () => (/* binding */ BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY),
/* harmony export */   "BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY": () => (/* binding */ BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY),
/* harmony export */   "useBottomNavigationItems": () => (/* binding */ useBottomNavigationItems)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);

var BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY = Symbol('BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY');
var BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY = Symbol('BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY');
function useBottomNavigationItems() {
  var {
    childProviders,
    bindChildren
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useChildren)(BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY);
  var {
    length
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtChildrenCounter)(BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY);
  return {
    length,
    bottomNavigationItems: childProviders,
    bindBottomNavigationItem: bindChildren
  };
}

/***/ }),
/* 357 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_BottomNavigationItemComponent": () => (/* binding */ _BottomNavigationItemComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BottomNavigationItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358);


_BottomNavigationItem_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_BottomNavigationItem_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _BottomNavigationItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _BottomNavigationItemComponent = _BottomNavigationItem_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_BottomNavigationItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 358 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(323);
/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(350);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(331);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(359);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(360);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);







var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('bottom-navigation-item');
var defaultBadgeProps = {
  type: 'danger',
  dot: true
};

function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  var _component_var_badge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-badge");

  var _directive_ripple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("ripple");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), [_ctx.active === _ctx.index || _ctx.active === _ctx.name, _ctx.n('--active')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: _ctx.computeColorStyle()
    }),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.handleClick && _ctx.handleClick(...arguments);
    })
  }, [_ctx.icon && !_ctx.$slots.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_icon, {
    key: 0,
    name: _ctx.icon,
    namespace: _ctx.namespace,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('icon')),
    "var-bottom-navigation-item-cover": ""
  }, null, 8
  /* PROPS */
  , ["name", "namespace", "class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "icon", {
    active: _ctx.active === _ctx.index || _ctx.active === _ctx.name
  }), _ctx.badge ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_badge, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    key: 1
  }, _ctx.badgeProps, {
    class: _ctx.n('badge'),
    "var-bottom-navigation-item-cover": ""
  }), null, 16
  /* FULL_PROPS */
  , ["class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('label'))
  }, [!_ctx.$slots.default ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.label), 1
  /* TEXT */
  )], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
  /* CLASS */
  )], 6
  /* CLASS, STYLE */
  )), [[_directive_ripple]]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarBottomNavigationItem',
  components: {
    VarBadge: _badge__WEBPACK_IMPORTED_MODULE_2__["default"],
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  directives: {
    Ripple: _ripple__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_5__.props,

  setup(props) {
    var name = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.name);
    var badge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.badge);
    var badgeProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
    var {
      index,
      bottomNavigation,
      bindBottomNavigation
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_6__.useBottomNavigation)();
    var {
      active,
      activeColor,
      inactiveColor
    } = bottomNavigation;
    var bottomNavigationItemProvider = {
      name,
      index
    };

    var computeColorStyle = () => {
      return active.value === name.value || active.value === index.value ? activeColor.value : inactiveColor.value;
    };

    var handleClick = () => {
      var _name$value;

      var active = (_name$value = name.value) != null ? _name$value : index.value;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props.onClick, active);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(bottomNavigation.onToggle, active);
    };

    bindBottomNavigation(bottomNavigationItemProvider);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => badge.value, newValue => {
      badgeProps.value = newValue === true ? defaultBadgeProps : badge.value;
    }, {
      immediate: true
    });
    return {
      n,
      classes,
      index,
      active,
      badge,
      badgeProps,
      computeColorStyle,
      handleClick
    };
  }

}));

/***/ }),
/* 359 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  name: {
    type: String
  },
  icon: {
    type: String
  },
  label: {
    type: String
  },
  namespace: {
    type: String,
    default: 'var-icon'
  },
  badge: {
    type: [Boolean, Object],
    default: false
  },
  onClick: {
    type: Function
  }
};

/***/ }),
/* 360 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBottomNavigation": () => (/* binding */ useBottomNavigation)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _bottom_navigation_provide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(356);


function useBottomNavigation() {
  var {
    parentProvider,
    bindParent
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useParent)(_bottom_navigation_provide__WEBPACK_IMPORTED_MODULE_1__.BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY);
  var {
    index
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtParentIndex)(_bottom_navigation_provide__WEBPACK_IMPORTED_MODULE_1__.BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY);

  if (!parentProvider || !bindParent || !index) {
    throw Error('<var-bottom-navigation-item/> must in <var-bottom-navigation/>');
  }

  return {
    index,
    bottomNavigation: parentProvider,
    bindBottomNavigation: bindParent
  };
}

/***/ }),
/* 361 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_CardComponent": () => (/* binding */ _CardComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(362);


_Card_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Card_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Card_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _CardComponent = _Card_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Card_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 362 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(323);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(331);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(343);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(363);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(324);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);
/* harmony import */ var _context_zIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(329);
/* harmony import */ var _context_lock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(330);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('card');
var RIPPLE_DELAY = 500;


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = ["src", "alt"];
function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  var _component_var_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-button");

  var _directive_ripple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("ripple");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    ref: "card",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), [_ctx.isRow, _ctx.n('--layout-row')], [_ctx.elevation, "var-elevation--" + _ctx.elevation, 'var-elevation--1'])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      zIndex: _ctx.floated ? _ctx.zIndex : undefined
    }),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.onClick && _ctx.onClick(...arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    ref: "cardFloater",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('floater'))),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: _ctx.floaterWidth,
      height: _ctx.floaterHeight,
      top: _ctx.floaterTop,
      left: _ctx.floaterLeft,
      overflow: _ctx.floaterOverflow,
      position: _ctx.floaterPosition,
      transition: _ctx.floated ? "background-color " + _ctx.floatingDuration + "ms, width " + _ctx.floatingDuration + "ms, height " + _ctx.floatingDuration + "ms, top " + _ctx.floatingDuration + "ms, left " + _ctx.floatingDuration + "ms" : undefined
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "image", {}, () => {
    var _ctx$imageHeight;

    return [_ctx.src ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
      key: 0,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('image')),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        objectFit: _ctx.fit,
        height: _ctx.toSizeUnit((_ctx$imageHeight = _ctx.imageHeight) != null ? _ctx$imageHeight : _ctx.height),
        width: _ctx.toSizeUnit(_ctx.imageWidth)
      }),
      src: _ctx.src,
      alt: _ctx.alt
    }, null, 14
    /* CLASS, STYLE, PROPS */
    , _hoisted_1)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('container'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "title", {}, () => [_ctx.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('title'))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.title), 3
  /* TEXT, CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "subtitle", {}, () => [_ctx.subtitle ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('subtitle'))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.subtitle), 3
  /* TEXT, CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "description", {}, () => [_ctx.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('description'))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.description), 3
  /* TEXT, CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _ctx.$slots.extra ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('footer'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "extra")], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$slots.content && !_ctx.isRow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('content')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      height: _ctx.contentHeight,
      opacity: _ctx.opacity,
      transition: "opacity " + _ctx.floatingDuration * 2 + "ms"
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "content")], 6
  /* CLASS, STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _ctx.showFloatingButtons ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('floating-buttons'), 'var--box')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      zIndex: _ctx.zIndex,
      opacity: _ctx.opacity,
      transition: "opacity " + _ctx.floatingDuration * 2 + "ms"
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "close-button", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_button, {
    "var-card-cover": "",
    round: "",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('close-button'), 'var-elevation--6')),
    onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(_ctx.close, ["stop"])
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
      "var-card-cover": "",
      name: "window-close",
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('close-button-icon'))
    }, null, 8
    /* PROPS */
    , ["class"])]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class", "onClick"])])], 6
  /* CLASS, STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 6
  /* CLASS, STYLE */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('holder')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: _ctx.holderWidth,
      height: _ctx.holderHeight
    })
  }, null, 6
  /* CLASS, STYLE */
  )], 6
  /* CLASS, STYLE */
  )), [[_directive_ripple, {
    disabled: !_ctx.ripple || _ctx.floater
  }]]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarCard',
  directives: {
    Ripple: _ripple__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  components: {
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
    VarButton: _button__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_5__.props,

  setup(props) {
    var card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var cardFloater = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var holderWidth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('auto');
    var holderHeight = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('auto');
    var floaterWidth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('100%');
    var floaterHeight = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('100%');
    var floaterTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('auto');
    var floaterLeft = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('auto');
    var floaterPosition = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(undefined);
    var floaterOverflow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('hidden');
    var contentHeight = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('0px');
    var opacity = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('0');
    var {
      zIndex
    } = (0,_context_zIndex__WEBPACK_IMPORTED_MODULE_6__.useZIndex)(() => props.floating, 1);
    var isRow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.layout === 'row');
    var showFloatingButtons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var floated = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    (0,_context_lock__WEBPACK_IMPORTED_MODULE_7__.useLock)(() => props.floating, () => isRow);
    var dropdownFloaterTop = 'auto';
    var dropdownFloaterLeft = 'auto';
    var dropper = null;
    var floater = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

    var floating = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* () {
        clearTimeout(floater.value);
        clearTimeout(dropper);
        floater.value = null;
        floater.value = setTimeout( /*#__PURE__*/_asyncToGenerator(function* () {
          var {
            width,
            height,
            left,
            top
          } = card.value.getBoundingClientRect();
          holderWidth.value = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_8__.toSizeUnit)(width);
          holderHeight.value = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_8__.toSizeUnit)(height);
          floaterWidth.value = holderWidth.value;
          floaterHeight.value = holderHeight.value;
          floaterTop.value = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_8__.toSizeUnit)(top);
          floaterLeft.value = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_8__.toSizeUnit)(left);
          floaterPosition.value = 'fixed';
          dropdownFloaterTop = floaterTop.value;
          dropdownFloaterLeft = floaterLeft.value;
          showFloatingButtons.value = true;
          yield (0,_utils_elements__WEBPACK_IMPORTED_MODULE_8__.doubleRaf)();
          floaterTop.value = '0';
          floaterLeft.value = '0';
          floaterWidth.value = '100vw';
          floaterHeight.value = '100vh';
          contentHeight.value = 'auto';
          opacity.value = '1';
          floaterOverflow.value = 'auto';
          floated.value = true;
        }), props.ripple ? RIPPLE_DELAY : 0);
      });

      return function floating() {
        return _ref.apply(this, arguments);
      };
    }();

    var dropdown = () => {
      clearTimeout(dropper);
      clearTimeout(floater.value);
      floater.value = null;
      floaterWidth.value = holderWidth.value;
      floaterHeight.value = holderHeight.value;
      floaterTop.value = dropdownFloaterTop;
      floaterLeft.value = dropdownFloaterLeft;
      contentHeight.value = '0px';
      opacity.value = '0';
      showFloatingButtons.value = false;
      dropper = setTimeout(() => {
        holderWidth.value = 'auto';
        holderHeight.value = 'auto';
        floaterWidth.value = '100%';
        floaterHeight.value = '100%';
        floaterTop.value = 'auto';
        floaterLeft.value = 'auto';
        dropdownFloaterTop = 'auto';
        dropdownFloaterLeft = 'auto';
        floaterOverflow.value = 'hidden';
        floaterPosition.value = undefined;
        floated.value = false;
      }, props.floatingDuration);
    };

    var close = () => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props['onUpdate:floating'], false);
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.floating, value => {
      if (isRow.value) return;
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        value ? floating() : dropdown();
      });
    }, {
      immediate: true
    });
    return {
      n,
      classes,
      toSizeUnit: _utils_elements__WEBPACK_IMPORTED_MODULE_8__.toSizeUnit,
      card,
      cardFloater,
      holderWidth,
      holderHeight,
      floater,
      floaterWidth,
      floaterHeight,
      floaterTop,
      floaterLeft,
      floaterPosition,
      floaterOverflow,
      contentHeight,
      opacity,
      zIndex,
      isRow,
      close,
      showFloatingButtons,
      floated
    };
  }

}));

/***/ }),
/* 363 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
function fitValidator(fit) {
  return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(fit);
}

var props = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: fitValidator,
    default: 'cover'
  },

  /**
   * @deprecated use imageHeight instead
   */
  height: {
    type: [String, Number]
  },
  imageHeight: {
    type: [String, Number]
  },
  imageWidth: {
    type: [String, Number]
  },
  layout: {
    type: String,
    default: 'column'
  },
  floating: {
    type: Boolean,
    default: false
  },
  'onUpdate:floating': {
    type: Function
  },
  floatingDuration: {
    type: Number,
    default: 250
  },
  alt: {
    type: String
  },
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  description: {
    type: String
  },
  elevation: {
    type: [Number, String]
  },
  ripple: {
    type: Boolean,
    default: false
  },
  onClick: {
    type: Function
  }
};

/***/ }),
/* 364 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_CellComponent": () => (/* binding */ _CellComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(365);


_Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _CellComponent = _Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 365 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(366);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(331);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);




var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('cell');

function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), [_ctx.border, _ctx.n('--border')]))
  }, [_ctx.$slots.icon || _ctx.icon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('icon'), [_ctx.iconClass, _ctx.iconClass]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "icon", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
    class: "var--flex",
    name: _ctx.icon
  }, null, 8
  /* PROPS */
  , ["name"])])], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('content'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('title'), [_ctx.titleClass, _ctx.titleClass]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.title), 1
  /* TEXT */
  )])], 2
  /* CLASS */
  ), _ctx.$slots.desc || _ctx.desc ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('desc'), [_ctx.descClass, _ctx.descClass]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "desc", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.desc), 1
  /* TEXT */
  )])], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _ctx.$slots.extra ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('extra'), [_ctx.extraClass, _ctx.extraClass]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "extra")], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarCell',
  components: {
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup() {
    return {
      n,
      classes
    };
  }

}));

/***/ }),
/* 366 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  title: {
    type: [Number, String]
  },
  icon: {
    type: String
  },
  desc: {
    type: String
  },
  border: {
    type: Boolean,
    default: false
  },
  iconClass: {
    type: String
  },
  titleClass: {
    type: String
  },
  descClass: {
    type: String
  },
  extraClass: {
    type: String
  }
};

/***/ }),
/* 367 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_CheckboxComponent": () => (/* binding */ _CheckboxComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Checkbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(368);


_Checkbox_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Checkbox_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Checkbox_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _CheckboxComponent = _Checkbox_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Checkbox_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 368 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(331);
/* harmony import */ var _form_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(369);
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(323);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(372);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(373);
/* harmony import */ var _form_provide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(375);








var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('checkbox');

function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  var _component_var_form_details = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-form-details");

  var _directive_ripple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("ripple");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('wrap')),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.handleClick && _ctx.handleClick(...arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('action'), [_ctx.checked, _ctx.n('--checked'), _ctx.n('--unchecked')], [_ctx.errorMessage || _ctx.checkboxGroupErrorMessage, _ctx.n('--error')], [_ctx.formDisabled || _ctx.disabled, _ctx.n('--disabled')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: _ctx.checked ? _ctx.checkedColor : _ctx.uncheckedColor
    })
  }, [_ctx.checked ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "checked-icon", {
    key: 0
  }, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('icon'), [_ctx.withAnimation, _ctx.n('--with-animation')])),
    name: "checkbox-marked",
    size: _ctx.iconSize,
    "var-checkbox-cover": ""
  }, null, 8
  /* PROPS */
  , ["class", "size"])]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "unchecked-icon", {
    key: 1
  }, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('icon'), [_ctx.withAnimation, _ctx.n('--with-animation')])),
    name: "checkbox-blank-outline",
    size: _ctx.iconSize,
    "var-checkbox-cover": ""
  }, null, 8
  /* PROPS */
  , ["class", "size"])])], 6
  /* CLASS, STYLE */
  )), [[_directive_ripple, {
    disabled: _ctx.formReadonly || _ctx.readonly || _ctx.formDisabled || _ctx.disabled || !_ctx.ripple
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('text'), [_ctx.errorMessage || _ctx.checkboxGroupErrorMessage, _ctx.n('--error')], [_ctx.formDisabled || _ctx.disabled, _ctx.n('--disabled')]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
  /* CLASS */
  )], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_form_details, {
    "error-message": _ctx.errorMessage
  }, null, 8
  /* PROPS */
  , ["error-message"])], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarCheckbox',
  directives: {
    Ripple: _ripple__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  components: {
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
    VarFormDetails: _form_details__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_5__.props,

  setup(props) {
    var value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var checked = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => value.value === props.checkedValue);
    var checkedValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.checkedValue);
    var withAnimation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var {
      checkboxGroup,
      bindCheckboxGroup
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_6__.useCheckboxGroup)();
    var {
      form,
      bindForm
    } = (0,_form_provide__WEBPACK_IMPORTED_MODULE_7__.useForm)();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation
    } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.useValidation)();

    var validateWithTrigger = trigger => {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        var {
          validateTrigger,
          rules,
          modelValue
        } = props;
        vt(validateTrigger, trigger, rules, modelValue);
      });
    };

    var change = changedValue => {
      value.value = changedValue;
      var {
        checkedValue,
        onChange
      } = props;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props['onUpdate:modelValue'], value.value);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(onChange, value.value);
      validateWithTrigger('onChange');
      changedValue === checkedValue ? checkboxGroup == null ? void 0 : checkboxGroup.onChecked(checkedValue) : checkboxGroup == null ? void 0 : checkboxGroup.onUnchecked(checkedValue);
    };

    var handleClick = e => {
      var {
        disabled,
        readonly,
        checkedValue,
        uncheckedValue,
        onClick
      } = props;

      if (form != null && form.disabled.value || disabled) {
        return;
      }

      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(onClick, e);

      if (form != null && form.readonly.value || readonly) {
        return;
      }

      withAnimation.value = true;
      var maximum = checkboxGroup ? checkboxGroup.checkedCount.value >= Number(checkboxGroup.max.value) : false;

      if (!checked.value && maximum) {
        return;
      }

      change(checked.value ? uncheckedValue : checkedValue);
    };

    var sync = values => {
      var {
        checkedValue,
        uncheckedValue
      } = props;
      value.value = values.includes(checkedValue) ? checkedValue : uncheckedValue;
    };

    var resetWithAnimation = () => {
      withAnimation.value = false;
    }; // expose


    var reset = () => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props['onUpdate:modelValue'], props.uncheckedValue);
      resetValidation();
    }; // expose


    var toggle = changedValue => {
      var {
        checkedValue,
        uncheckedValue
      } = props;
      var shouldReverse = ![checkedValue, uncheckedValue].includes(changedValue);

      if (shouldReverse) {
        changedValue = checked.value ? uncheckedValue : checkedValue;
      }

      change(changedValue);
    }; // expose


    var validate = () => v(props.rules, props.modelValue);

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.modelValue, newValue => {
      value.value = newValue;
    }, {
      immediate: true
    });
    var checkboxProvider = {
      checkedValue,
      checked,
      sync,
      validate,
      resetValidation,
      reset,
      resetWithAnimation
    };
    (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(bindCheckboxGroup, checkboxProvider);
    (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(bindForm, checkboxProvider);
    return {
      withAnimation,
      checked,
      errorMessage,
      checkboxGroupErrorMessage: checkboxGroup == null ? void 0 : checkboxGroup.errorMessage,
      formDisabled: form == null ? void 0 : form.disabled,
      formReadonly: form == null ? void 0 : form.readonly,
      n,
      classes,
      handleClick,
      toggle,
      reset,
      validate,
      resetValidation
    };
  }

}));

/***/ }),
/* 369 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_FormDetailsComponent": () => (/* binding */ _FormDetailsComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(370);


_FormDetails_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_FormDetails_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _FormDetails_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _FormDetailsComponent = _FormDetails_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_FormDetails_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 370 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(371);



var {
  n
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('form-details');

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: _ctx.n()
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_ctx.errorMessage || _ctx.maxlengthText ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 0,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n())
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('message'))
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.errorMessage), 3
    /* TEXT, CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('length'))
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.maxlengthText), 3
    /* TEXT, CLASS */
    )], 2
    /* CLASS */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["name"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarFormDetails',
  props: _props__WEBPACK_IMPORTED_MODULE_2__.props,
  setup: () => ({
    n
  })
}));

/***/ }),
/* 371 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  errorMessage: {
    type: String,
    default: ''
  },
  maxlengthText: {
    type: String,
    default: ''
  }
};

/***/ }),
/* 372 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: false
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: true
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: false
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: true
  },
  validateTrigger: {
    type: Array,
    default: ['onChange']
  },
  rules: {
    type: Array
  },
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  'onUpdate:modelValue': {
    type: Function
  }
};

/***/ }),
/* 373 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCheckboxGroup": () => (/* binding */ useCheckboxGroup)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _checkbox_group_provide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(374);


function useCheckboxGroup() {
  var {
    bindParent,
    parentProvider
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useParent)(_checkbox_group_provide__WEBPACK_IMPORTED_MODULE_1__.CHECKBOX_GROUP_BIND_CHECKBOX_KEY);
  var {
    index
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtParentIndex)(_checkbox_group_provide__WEBPACK_IMPORTED_MODULE_1__.CHECKBOX_GROUP_COUNT_CHECKBOX_KEY);
  return {
    index,
    checkboxGroup: parentProvider,
    bindCheckboxGroup: bindParent
  };
}

/***/ }),
/* 374 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHECKBOX_GROUP_BIND_CHECKBOX_KEY": () => (/* binding */ CHECKBOX_GROUP_BIND_CHECKBOX_KEY),
/* harmony export */   "CHECKBOX_GROUP_COUNT_CHECKBOX_KEY": () => (/* binding */ CHECKBOX_GROUP_COUNT_CHECKBOX_KEY),
/* harmony export */   "useCheckboxes": () => (/* binding */ useCheckboxes)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);

var CHECKBOX_GROUP_BIND_CHECKBOX_KEY = Symbol('CHECKBOX_GROUP_BIND_CHECKBOX_KEY');
var CHECKBOX_GROUP_COUNT_CHECKBOX_KEY = Symbol('CHECKBOX_GROUP_COUNT_CHECKBOX_KEY');
function useCheckboxes() {
  var {
    bindChildren,
    childProviders
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useChildren)(CHECKBOX_GROUP_BIND_CHECKBOX_KEY);
  var {
    length
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtChildrenCounter)(CHECKBOX_GROUP_COUNT_CHECKBOX_KEY);
  return {
    length,
    checkboxes: childProviders,
    bindCheckboxes: bindChildren
  };
}

/***/ }),
/* 375 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FORM_BIND_FORM_ITEM_KEY": () => (/* binding */ FORM_BIND_FORM_ITEM_KEY),
/* harmony export */   "useForm": () => (/* binding */ useForm),
/* harmony export */   "useFormItems": () => (/* binding */ useFormItems)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);

var FORM_BIND_FORM_ITEM_KEY = Symbol('FORM_BIND_FORM_ITEM_KEY');
function useForm() {
  var {
    bindParent,
    parentProvider
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useParent)(FORM_BIND_FORM_ITEM_KEY);
  return {
    bindForm: bindParent,
    form: parentProvider
  };
}
function useFormItems() {
  var {
    bindChildren,
    childProviders
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useChildren)(FORM_BIND_FORM_ITEM_KEY);
  return {
    formItems: childProviders,
    bindFormItems: bindChildren
  };
}

/***/ }),
/* 376 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_CheckboxGroupComponent": () => (/* binding */ _CheckboxGroupComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckboxGroup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);


_CheckboxGroup_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_CheckboxGroup_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _CheckboxGroup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _CheckboxGroupComponent = _CheckboxGroup_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CheckboxGroup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 377 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(369);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(378);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(374);
/* harmony import */ var _form_provide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(375);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);







var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('checkbox-group');

function render(_ctx, _cache) {
  var _component_var_form_details = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-form-details");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('wrap'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), _ctx.n("--" + _ctx.direction)))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_form_details, {
    "error-message": _ctx.errorMessage
  }, null, 8
  /* PROPS */
  , ["error-message"])], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarCheckboxGroup',
  components: {
    VarFormDetails: _form_details__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_4__.props,

  setup(props) {
    var max = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.max);
    var checkedCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.modelValue.length);
    var {
      length,
      checkboxes,
      bindCheckboxes
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_5__.useCheckboxes)();
    var {
      bindForm
    } = (0,_form_provide__WEBPACK_IMPORTED_MODULE_6__.useForm)();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation
    } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.useValidation)();
    var checkboxGroupErrorMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => errorMessage.value);

    var validateWithTrigger = trigger => {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        var {
          validateTrigger,
          rules,
          modelValue
        } = props;
        vt(validateTrigger, trigger, rules, modelValue);
      });
    };

    var change = changedModelValue => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], changedModelValue);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props.onChange, changedModelValue);
      validateWithTrigger('onChange');
    };

    var onChecked = changedValue => {
      var {
        modelValue
      } = props;

      if (!modelValue.includes(changedValue)) {
        change([...modelValue, changedValue]);
      }
    };

    var onUnchecked = changedValue => {
      var {
        modelValue
      } = props;

      if (!modelValue.includes(changedValue)) {
        return;
      }

      change(modelValue.filter(value => value !== changedValue));
    };

    var syncCheckboxes = () => checkboxes.forEach(_ref => {
      var {
        sync
      } = _ref;
      return sync(props.modelValue);
    });

    var resetWithAnimation = () => {
      checkboxes.forEach(checkbox => checkbox.resetWithAnimation());
    }; // expose


    var checkAll = () => {
      var checkedValues = checkboxes.map(_ref2 => {
        var {
          checkedValue
        } = _ref2;
        return checkedValue.value;
      });
      var changedModelValue = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.uniq)(checkedValues);
      resetWithAnimation();
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], changedModelValue);
      return changedModelValue;
    }; // expose


    var inverseAll = () => {
      var checkedValues = checkboxes.filter(_ref3 => {
        var {
          checked
        } = _ref3;
        return !checked.value;
      }).map(_ref4 => {
        var {
          checkedValue
        } = _ref4;
        return checkedValue.value;
      });
      var changedModelValue = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.uniq)(checkedValues);
      resetWithAnimation();
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], changedModelValue);
      return changedModelValue;
    }; // expose


    var reset = () => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], []);
      resetValidation();
    }; // expose


    var validate = () => v(props.rules, props.modelValue);

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.modelValue, syncCheckboxes, {
      deep: true
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => length.value, syncCheckboxes);
    var checkboxGroupProvider = {
      max,
      checkedCount,
      onChecked,
      onUnchecked,
      validate,
      resetValidation,
      reset,
      errorMessage: checkboxGroupErrorMessage
    };
    bindCheckboxes(checkboxGroupProvider);
    (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(bindForm, checkboxGroupProvider);
    return {
      errorMessage,
      n,
      classes,
      checkAll,
      inverseAll,
      reset,
      validate,
      resetValidation
    };
  }

}));

/***/ }),
/* 378 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "directionValidator": () => (/* binding */ directionValidator),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
function directionValidator(direction) {
  return ['horizontal', 'vertical'].includes(direction);
}
var props = {
  modelValue: {
    type: Array,
    default: () => []
  },
  max: {
    type: [String, Number]
  },
  direction: {
    type: String,
    default: 'horizontal',
    validator: directionValidator
  },
  validateTrigger: {
    type: Array,
    default: ['onChange']
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  'onUpdate:modelValue': {
    type: Function
  }
};

/***/ }),
/* 379 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_ChipComponent": () => (/* binding */ _ChipComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Chip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(380);


_Chip_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Chip_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Chip_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _ChipComponent = _Chip_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Chip_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 380 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(331);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(381);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);




var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('chip');

function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "var-fade"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
      class: _ctx.classes(_ctx.n(), 'var--box', ..._ctx.contentClass),
      style: _ctx.chipStyles
    }, _ctx.$attrs), [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "left"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n("text-" + _ctx.size))
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "right"), _ctx.closable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 0,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('--close')),
      onClick: _cache[0] || (_cache[0] = function () {
        return _ctx.onClose && _ctx.onClose(...arguments);
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
      name: "" + (_ctx.iconName ? _ctx.iconName : 'close-circle')
    }, null, 8
    /* PROPS */
    , ["name"])], 2
    /* CLASS */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 16
    /* FULL_PROPS */
    )]),
    _: 3
    /* FORWARDED */

  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarChip',
  components: {
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  inheritAttrs: false,
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup(props) {
    var chipStyles = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var {
        plain,
        textColor,
        color
      } = props;

      if (plain) {
        return {
          color: textColor || color,
          borderColor: color
        };
      }

      return {
        color: textColor,
        background: color
      };
    });
    var contentClass = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var {
        size,
        block,
        type,
        plain,
        round
      } = props;
      var blockClass = block ? 'var--flex' : 'var--inline-flex';
      var plainTypeClass = plain ? n('plain') + " " + n("plain-" + type) : n("--" + type);
      var roundClass = round ? n('--round') : null;
      return [n("--" + size), blockClass, plainTypeClass, roundClass];
    });
    return {
      n,
      classes,
      chipStyles,
      contentClass
    };
  }

}));

/***/ }),
/* 381 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _icon_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(333);



function typeValidator(type) {
  return ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(type);
}

function sizeValidator(size) {
  return ['normal', 'mini', 'small', 'large'].includes(size);
}

var props = {
  type: {
    type: String,
    default: 'default',
    validator: typeValidator
  },
  size: {
    type: String,
    default: 'normal',
    validator: sizeValidator
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.pickProps)(_icon_props__WEBPACK_IMPORTED_MODULE_1__.props, 'name'),
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: true
  },
  block: {
    type: Boolean,
    default: false
  },
  closable: {
    type: Boolean,
    default: false
  },
  onClose: {
    type: Function
  }
};

/***/ }),
/* 382 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_ColComponent": () => (/* binding */ _ColComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Col_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(383);


_Col_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Col_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Col_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _ColComponent = _Col_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Col_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 383 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(384);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(385);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(324);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);






var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('col');

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), 'var--box', [_ctx.span >= 0, _ctx.n("--span-" + _ctx.span)], [_ctx.offset, _ctx.n("--offset-" + _ctx.offset)], ..._ctx.getSize('xs', _ctx.xs), ..._ctx.getSize('sm', _ctx.sm), ..._ctx.getSize('md', _ctx.md), ..._ctx.getSize('lg', _ctx.lg), ..._ctx.getSize('xl', _ctx.xl))),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      paddingLeft: _ctx.toSizeUnit(_ctx.padding.left),
      paddingRight: _ctx.toSizeUnit(_ctx.padding.right)
    }),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.onClick && _ctx.onClick(...arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 6
  /* CLASS, STYLE */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarCol',
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup(props) {
    var padding = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      left: 0,
      right: 0
    });
    var span = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.span));
    var offset = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.offset));
    var {
      row,
      bindRow
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_4__.useRow)();
    var colProvider = {
      setPadding(pad) {
        padding.value = pad;
      }

    };

    var getSize = (mode, size) => {
      var classes = [];

      if (size == null) {
        return classes;
      }

      if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(size)) {
        var {
          offset: _offset,
          span: _span
        } = size;
        Number(_span) >= 0 && classes.push(n("--span-" + mode + "-" + _span));
        _offset && classes.push(n("--offset-" + mode + "-" + _offset));
      } else {
        Number(size) >= 0 && classes.push(n("--span-" + mode + "-" + size));
      }

      return classes;
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)([() => props.span, () => props.offset], () => {
      row == null ? void 0 : row.computePadding();
    });
    (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(bindRow, colProvider);
    return {
      n,
      classes,
      padding,
      toNumber: _varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber,
      toSizeUnit: _utils_elements__WEBPACK_IMPORTED_MODULE_5__.toSizeUnit,
      getSize,
      span,
      offset
    };
  }

}));

/***/ }),
/* 384 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  span: {
    type: [String, Number],
    default: 24
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  onClick: {
    type: Function
  },
  xs: {
    type: [Object, Number, String]
  },
  sm: {
    type: [Object, Number, String]
  },
  md: {
    type: [Object, Number, String]
  },
  lg: {
    type: [Object, Number, String]
  },
  xl: {
    type: [Object, Number, String]
  }
};

/***/ }),
/* 385 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRow": () => (/* binding */ useRow)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _row_provide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);


function useRow() {
  var {
    parentProvider,
    bindParent
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useParent)(_row_provide__WEBPACK_IMPORTED_MODULE_1__.ROW_BIND_COL_KEY);
  var {
    index
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtParentIndex)(_row_provide__WEBPACK_IMPORTED_MODULE_1__.ROW_COUNT_COL_KEY);

  if (!parentProvider || !bindParent || !index) {
    console.warn('col must in row');
  }

  return {
    index,
    row: parentProvider,
    bindRow: bindParent
  };
}

/***/ }),
/* 386 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROW_BIND_COL_KEY": () => (/* binding */ ROW_BIND_COL_KEY),
/* harmony export */   "ROW_COUNT_COL_KEY": () => (/* binding */ ROW_COUNT_COL_KEY),
/* harmony export */   "useCols": () => (/* binding */ useCols)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);

var ROW_BIND_COL_KEY = Symbol('ROW_BIND_COL_KEY');
var ROW_COUNT_COL_KEY = Symbol('ROW_COUNT_COL_KEY');
function useCols() {
  var {
    bindChildren,
    childProviders
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useChildren)(ROW_BIND_COL_KEY);
  var {
    length
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtChildrenCounter)(ROW_COUNT_COL_KEY);
  return {
    length,
    cols: childProviders,
    bindCols: bindChildren
  };
}

/***/ }),
/* 387 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_CollapseComponent": () => (/* binding */ _CollapseComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Collapse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);


_Collapse_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Collapse_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Collapse_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _CollapseComponent = _Collapse_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Collapse_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 388 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(390);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(389);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);





var {
  n
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('collapse');

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarCollapse',
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup(props) {
    var {
      length,
      collapseItem,
      bindCollapseItem
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_4__.useCollapseItem)();
    var active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.modelValue);
    var offset = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.offset);

    var checkValue = () => {
      if (!props.accordion && !(0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(props.modelValue)) {
        console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array');
        return false;
      }

      if (props.accordion && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(props.modelValue)) {
        console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number');
        return false;
      }

      return true;
    };

    var getValue = (value, isExpand) => {
      if (!checkValue()) return null;
      if (isExpand) return props.accordion ? value : [...props.modelValue, value];
      return props.accordion ? null : props.modelValue.filter(name => name !== value);
    };

    var updateItem = (value, isExpand) => {
      var modelValue = getValue(value, isExpand);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], modelValue);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props.onChange, modelValue);
    };

    var matchName = () => {
      if (props.accordion) {
        return collapseItem.find(_ref => {
          var {
            name
          } = _ref;
          return props.modelValue === name.value;
        });
      }

      var filterItem = collapseItem.filter(_ref2 => {
        var {
          name
        } = _ref2;
        if (name.value === undefined) return false;
        return props.modelValue.includes(name.value);
      });
      return filterItem.length ? filterItem : undefined;
    };

    var matchIndex = () => {
      if (props.accordion) {
        return collapseItem.find(_ref3 => {
          var {
            index,
            name
          } = _ref3;
          return name.value === undefined ? props.modelValue === index.value : false;
        });
      }

      return collapseItem.filter(_ref4 => {
        var {
          index,
          name
        } = _ref4;
        return name.value === undefined ? props.modelValue.includes(index.value) : false;
      });
    };

    var resize = () => {
      if (!checkValue()) return;
      var matchProviders = matchName() || matchIndex();

      if (props.accordion && !matchProviders || !props.accordion && !matchProviders.length) {
        collapseItem.forEach(provider => {
          provider.init(props.accordion, false);
        });
        return;
      }

      collapseItem.forEach(provider => {
        var isShow = props.accordion ? matchProviders === provider : matchProviders.includes(provider);
        provider.init(props.accordion, isShow);
      });
    };

    var collapseProvider = {
      active,
      offset,
      updateItem
    };
    bindCollapseItem(collapseProvider);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => length.value, () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)().then(resize));
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.modelValue, () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)().then(resize));
    return {
      n
    };
  }

}));

/***/ }),
/* 389 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  modelValue: {
    type: [Array, String, Number]
  },
  accordion: {
    type: Boolean,
    default: false
  },
  offset: {
    type: Boolean,
    default: true
  },
  onChange: {
    type: Function
  },
  'onUpdate:modelValue': {
    type: Function
  }
};

/***/ }),
/* 390 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLLAPSE_BIND_COLLAPSE_ITEM_KEY": () => (/* binding */ COLLAPSE_BIND_COLLAPSE_ITEM_KEY),
/* harmony export */   "COLLAPSE_COUNT_COLLAPSE_ITEM_KEY": () => (/* binding */ COLLAPSE_COUNT_COLLAPSE_ITEM_KEY),
/* harmony export */   "useCollapseItem": () => (/* binding */ useCollapseItem)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);

var COLLAPSE_BIND_COLLAPSE_ITEM_KEY = Symbol('COLLAPSE_BIND_COLLAPSE_ITEM_KEY');
var COLLAPSE_COUNT_COLLAPSE_ITEM_KEY = Symbol('COLLAPSE_COUNT_COLLAPSE_ITEM_KEY');
function useCollapseItem() {
  var {
    bindChildren,
    childProviders
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useChildren)(COLLAPSE_BIND_COLLAPSE_ITEM_KEY);
  var {
    length
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtChildrenCounter)(COLLAPSE_COUNT_COLLAPSE_ITEM_KEY);
  return {
    length,
    collapseItem: childProviders,
    bindCollapseItem: bindChildren
  };
}

/***/ }),
/* 391 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_CollapseItemComponent": () => (/* binding */ _CollapseItemComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CollapseItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(392);


_CollapseItem_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_CollapseItem_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _CollapseItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _CollapseItemComponent = _CollapseItem_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CollapseItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 392 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(324);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(394);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(393);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(331);







var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('collapse-item');

function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), [_ctx.offset && _ctx.isShow, _ctx.n('--active')], [_ctx.disabled, _ctx.n('--disable')]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('header')),
    onClick: _cache[0] || (_cache[0] = $event => _ctx.toggle())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('header-title'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "title", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.title), 1
  /* TEXT */
  )])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('header-icon'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "icon", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
    name: _ctx.icon,
    transition: 250,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('header-icon'), [_ctx.isShow && _ctx.icon === 'chevron-down', _ctx.n('header-open')], [_ctx.disabled, _ctx.n('header--disable')]))
  }, null, 8
  /* PROPS */
  , ["name", "class"])])], 2
  /* CLASS */
  )], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('content')),
    ref: "contentEl",
    onTransitionend: _cache[1] || (_cache[1] = function () {
      return _ctx.transitionend && _ctx.transitionend(...arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('content-wrap'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
  /* CLASS */
  )], 34
  /* CLASS, HYDRATE_EVENTS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.show]])], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarCollapseItem',
  components: {
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_4__.props,

  setup(props) {
    var {
      index,
      collapse,
      bindCollapse
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_5__.useCollapse)();
    var contentEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var show = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var isShow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var {
      active,
      offset,
      updateItem
    } = collapse;
    var name = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.name);

    var init = (accordion, show) => {
      if (active.value === undefined || accordion && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(active.value) || show === isShow.value) return;
      isShow.value = show;
      toggle(true);
    };

    var toggle = initOrAccordion => {
      if (props.disabled) return;

      if (!initOrAccordion) {
        updateItem(props.name || index.value, !isShow.value);
      }
    };

    var openPanel = () => {
      if (!contentEl.value) return;
      contentEl.value.style.height = '';
      show.value = true;
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        var {
          offsetHeight
        } = contentEl.value;
        contentEl.value.style.height = 0 + 'px';
        (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.requestAnimationFrame)(() => {
          ;
          contentEl.value.style.height = offsetHeight + 'px';
        });
      });
    };

    var closePanel = () => {
      if (!contentEl.value) return;
      contentEl.value.style.height = 0 + 'px';
    };

    var transitionend = () => {
      if (!isShow.value) {
        show.value = false;
        contentEl.value.style.height = '';
      }
    };

    var collapseItemProvider = {
      index,
      name,
      init
    };
    bindCollapse(collapseItemProvider);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(isShow, value => {
      if (value) openPanel();else closePanel();
    });
    return {
      n,
      classes,
      show,
      isShow,
      offset,
      toggle,
      contentEl,
      transitionend
    };
  }

}));

/***/ }),
/* 393 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  name: {
    type: [String, Number]
  },
  title: {
    type: String
  },
  icon: {
    type: String,
    default: 'chevron-down'
  },
  disabled: {
    type: Boolean,
    default: false
  }
};

/***/ }),
/* 394 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCollapse": () => (/* binding */ useCollapse)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _collapse_provide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(390);


function useCollapse() {
  var {
    parentProvider,
    bindParent
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useParent)(_collapse_provide__WEBPACK_IMPORTED_MODULE_1__.COLLAPSE_BIND_COLLAPSE_ITEM_KEY);
  var {
    index
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtParentIndex)(_collapse_provide__WEBPACK_IMPORTED_MODULE_1__.COLLAPSE_COUNT_COLLAPSE_ITEM_KEY);

  if (!parentProvider || !bindParent || !index) {
    throw Error('[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>');
  }

  return {
    index,
    collapse: parentProvider,
    bindCollapse: bindParent
  };
}

/***/ }),
/* 395 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_CountdownComponent": () => (/* binding */ _CountdownComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Countdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(396);


_Countdown_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Countdown_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Countdown_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _CountdownComponent = _Countdown_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Countdown_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 396 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(397);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(324);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);





var {
  n
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('countdown');
var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(_ctx.timeData)), () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.showTime), 1
  /* TEXT */
  )])], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarCountdown',
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup(props) {
    var endTime = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var isStart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var showTime = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var handle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var pauseTime = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var timeData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });

    var parseFormat = (format, time) => {
      var scannedTimes = Object.values(time);
      var scannedFormats = ['DD', 'HH', 'mm', 'ss'];
      var padValues = [24, 60, 60, 1000];
      scannedFormats.forEach((scannedFormat, index) => {
        if (!format.includes(scannedFormat)) {
          scannedTimes[index + 1] += scannedTimes[index] * padValues[index];
        } else {
          format = format.replace(scannedFormat, String(scannedTimes[index]).padStart(2, '0'));
        }
      });

      if (format.includes('S')) {
        var ms = String(scannedTimes[scannedTimes.length - 1]).padStart(3, '0');

        if (format.includes('SSS')) {
          format = format.replace('SSS', ms);
        } else if (format.includes('SS')) {
          format = format.replace('SS', ms.slice(0, 2));
        } else {
          format = format.replace('S', ms.slice(0, 1));
        }
      }

      return format;
    };

    var formatTime = durationTime => {
      var days = Math.floor(durationTime / DAY);
      var hours = Math.floor(durationTime % DAY / HOUR);
      var minutes = Math.floor(durationTime % HOUR / MINUTE);
      var seconds = Math.floor(durationTime % MINUTE / SECOND);
      var milliseconds = Math.floor(durationTime % SECOND);
      var time = {
        days,
        hours,
        minutes,
        seconds,
        milliseconds
      };
      timeData.value = time;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props.onChange, timeData.value);
      showTime.value = parseFormat(props.format, time);
    };

    var countdown = () => {
      var {
        time,
        onEnd,
        autoStart
      } = props;
      var now = Date.now();
      if (!endTime.value) endTime.value = now + (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(time);
      var durationTime = endTime.value - now;
      if (durationTime < 0) durationTime = 0;
      pauseTime.value = durationTime;
      formatTime(durationTime);

      if (durationTime === 0) {
        (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onEnd);
        return;
      }

      if (autoStart || isStart.value) handle.value = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.requestAnimationFrame)(countdown);
    }; // expose


    var start = () => {
      if (isStart.value) return;
      isStart.value = true;
      endTime.value = Date.now() + (pauseTime.value || (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.time));
      countdown();
    }; // expose


    var pause = () => {
      isStart.value = false;
    }; // expose


    var reset = () => {
      endTime.value = 0;
      isStart.value = false;
      (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.cancelAnimationFrame)(handle.value);
      countdown();
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.time, () => reset(), {
      immediate: true
    });
    return {
      showTime,
      timeData,
      n,
      start,
      pause,
      reset
    };
  }

}));

/***/ }),
/* 397 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  time: {
    type: [String, Number],
    default: 0
  },
  format: {
    type: String,
    default: 'HH : mm : ss'
  },
  autoStart: {
    type: Boolean,
    default: true
  },
  onEnd: {
    type: Function
  },
  onChange: {
    type: Function
  }
};

/***/ }),
/* 398 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_CounterComponent": () => (/* binding */ _CounterComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);


_Counter_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Counter_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Counter_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _CounterComponent = _Counter_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Counter_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 399 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(331);
/* harmony import */ var _form_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(369);
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(323);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(400);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(401);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(320);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(324);
/* harmony import */ var _form_provide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(375);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(321);










var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.createNamespace)('counter');
var SPEED = 100;
var DELAY = 600;


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = ["inputmode", "readonly", "disabled"];
function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  var _component_var_form_details = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-form-details");

  var _directive_ripple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("ripple");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), 'var--box'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    class: _ctx.classes(_ctx.n('controller'), 'var-elevation--2', [_ctx.disabled || _ctx.formDisabled, _ctx.n('--disabled')], [_ctx.errorMessage, _ctx.n('--error')]),
    style: {
      background: _ctx.color ? _ctx.color : undefined
    }
  }, _ctx.$attrs), [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
    "var-counter-cover": "",
    name: "minus",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('decrement-button'), [!_ctx.decrementButton, _ctx.n('--hidden')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: _ctx.toSizeUnit(_ctx.buttonSize),
      height: _ctx.toSizeUnit(_ctx.buttonSize)
    }),
    onClick: _ctx.decrement,
    onTouchstart: _ctx.pressDecrement,
    onTouchend: _ctx.releaseDecrement,
    onTouchcancel: _ctx.releaseDecrement
  }, null, 8
  /* PROPS */
  , ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]), [[_directive_ripple, {
    disabled: !_ctx.ripple || _ctx.disabled || _ctx.readonly || _ctx.disableDecrement || !_ctx.decrementButton || _ctx.isMin
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('input')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: _ctx.toSizeUnit(_ctx.inputWidth),
      fontSize: _ctx.toSizeUnit(_ctx.inputTextSize)
    }),
    inputmode: _ctx.toNumber(_ctx.decimalLength) === 0 ? 'numeric' : 'decimal',
    readonly: _ctx.readonly || _ctx.formReadonly,
    disabled: _ctx.disabled || _ctx.formDisabled || _ctx.disableInput,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.inputValue = $event),
    onChange: _cache[1] || (_cache[1] = function () {
      return _ctx.handleChange && _ctx.handleChange(...arguments);
    })
  }, null, 46
  /* CLASS, STYLE, PROPS, HYDRATE_EVENTS */
  , _hoisted_1), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.inputValue]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
    "var-counter-cover": "",
    name: "plus",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('increment-button'), [!_ctx.incrementButton, _ctx.n('--hidden')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: _ctx.toSizeUnit(_ctx.buttonSize),
      height: _ctx.toSizeUnit(_ctx.buttonSize)
    }),
    onClick: _ctx.increment,
    onTouchstart: _ctx.pressIncrement,
    onTouchend: _ctx.releaseIncrement,
    onTouchcancel: _ctx.releaseIncrement
  }, null, 8
  /* PROPS */
  , ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]), [[_directive_ripple, {
    disabled: !_ctx.ripple || _ctx.disabled || _ctx.readonly || _ctx.disableIncrement || !_ctx.incrementButton || _ctx.isMax
  }]])], 16
  /* FULL_PROPS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_form_details, {
    "error-message": _ctx.errorMessage
  }, null, 8
  /* PROPS */
  , ["error-message"])], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarCounter',
  components: {
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
    VarFormDetails: _form_details__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  directives: {
    Ripple: _ripple__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  inheritAttrs: false,
  props: _props__WEBPACK_IMPORTED_MODULE_7__.props,

  setup(props) {
    var inputValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var incrementTimer;
    var decrementTimer;
    var incrementDelayTimer;
    var decrementDelayTimer;
    var {
      bindForm,
      form
    } = (0,_form_provide__WEBPACK_IMPORTED_MODULE_8__.useForm)();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation
    } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.useValidation)();
    var {
      readonly: formReadonly,
      disabled: formDisabled
    } = form != null ? form : {}; // expose

    var validate = () => v(props.rules, props.modelValue);

    var validateWithTrigger = trigger => {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        var {
          validateTrigger,
          rules,
          modelValue
        } = props;
        vt(validateTrigger, trigger, rules, modelValue);
      });
    }; // expose


    var reset = () => {
      var {
        min
      } = props;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(props['onUpdate:modelValue'], min != null ? (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(min) : 0);
      resetValidation();
    };

    var counterProvider = {
      reset,
      validate,
      resetValidation
    };
    var isMax = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var {
        max,
        modelValue
      } = props;
      return max != null && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(modelValue) >= (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(max);
    });
    var isMin = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var {
        min,
        modelValue
      } = props;
      return min != null && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(modelValue) <= (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(min);
    });

    var normalizeValue = value => {
      var {
        decimalLength,
        max,
        min
      } = props;
      var num = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(value);

      if (max != null && num > (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(max)) {
        num = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(max);
      }

      if (min != null && num < (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(min)) {
        num = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(min);
      }

      value = String(num);

      if (decimalLength != null) {
        value = num.toFixed((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(decimalLength));
      }

      return value;
    };

    var handleChange = event => {
      var {
        lazyChange,
        onBeforeChange
      } = props;
      var {
        value
      } = event.target;
      var normalizedValue = normalizeValue(value);
      lazyChange ? (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(onBeforeChange, (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(normalizedValue), change) : setNormalizedValue(normalizedValue);
      validateWithTrigger('onInputChange');
    };

    var decrement = () => {
      var {
        disabled,
        readonly,
        disableDecrement,
        decrementButton,
        lazyChange,
        step,
        modelValue,
        onDecrement,
        onBeforeChange
      } = props;

      if (formDisabled != null && formDisabled.value || formReadonly != null && formReadonly.value || disabled || readonly || disableDecrement || !decrementButton) {
        return;
      }

      if (isMin.value) {
        return;
      }

      var value = new decimal_js__WEBPACK_IMPORTED_MODULE_1__.Decimal((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(modelValue)).minus(new decimal_js__WEBPACK_IMPORTED_MODULE_1__.Decimal((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(step))).toString();
      var normalizedValue = normalizeValue(value);
      var normalizedValueNum = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(normalizedValue);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(onDecrement, normalizedValueNum);

      if (lazyChange) {
        (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(onBeforeChange, normalizedValueNum, change);
      } else {
        setNormalizedValue(normalizedValue);
        validateWithTrigger('onDecrement');
      }
    };

    var increment = () => {
      var {
        disabled,
        readonly,
        disableIncrement,
        incrementButton,
        lazyChange,
        step,
        modelValue,
        onIncrement,
        onBeforeChange
      } = props;

      if (formDisabled != null && formDisabled.value || formReadonly != null && formReadonly.value || disabled || readonly || disableIncrement || !incrementButton) {
        return;
      }

      if (isMax.value) {
        return;
      }

      var value = new decimal_js__WEBPACK_IMPORTED_MODULE_1__.Decimal((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(modelValue)).plus(new decimal_js__WEBPACK_IMPORTED_MODULE_1__.Decimal((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(step))).toString();
      var normalizedValue = normalizeValue(value);
      var normalizedValueNum = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(normalizedValue);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(onIncrement, normalizedValueNum);

      if (lazyChange) {
        (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(onBeforeChange, normalizedValueNum, change);
      } else {
        setNormalizedValue(normalizedValue);
        validateWithTrigger('onIncrement');
      }
    };

    var pressDecrement = () => {
      var {
        press,
        lazyChange
      } = props;

      if (!press || lazyChange) {
        return;
      }

      decrementDelayTimer = window.setTimeout(() => {
        continuedDecrement();
      }, DELAY);
    };

    var pressIncrement = () => {
      var {
        press,
        lazyChange
      } = props;

      if (!press || lazyChange) {
        return;
      }

      incrementDelayTimer = window.setTimeout(() => {
        continuedIncrement();
      }, DELAY);
    };

    var releaseDecrement = () => {
      decrementTimer && clearTimeout(decrementTimer);
      decrementDelayTimer && clearTimeout(decrementDelayTimer);
    };

    var releaseIncrement = () => {
      incrementTimer && clearTimeout(incrementTimer);
      incrementDelayTimer && clearTimeout(incrementDelayTimer);
    };

    var continuedIncrement = () => {
      incrementTimer = window.setTimeout(() => {
        increment();
        continuedIncrement();
      }, SPEED);
    };

    var continuedDecrement = () => {
      decrementTimer = window.setTimeout(() => {
        decrement();
        continuedDecrement();
      }, SPEED);
    };

    var setNormalizedValue = normalizedValue => {
      inputValue.value = normalizedValue;
      var normalizedValueNum = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(normalizedValue);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(props['onUpdate:modelValue'], normalizedValueNum);
    };

    var change = value => {
      setNormalizedValue(normalizeValue(String(value)));
      validateWithTrigger('onLazyChange');
    };

    (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(bindForm, counterProvider);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.modelValue, newValue => {
      setNormalizedValue(normalizeValue(String(newValue)));
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(props.onChange, (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(newValue));
    });
    setNormalizedValue(normalizeValue(String(props.modelValue)));
    return {
      n,
      classes,
      inputValue,
      errorMessage,
      formDisabled,
      formReadonly,
      isMax,
      isMin,
      validate,
      reset,
      resetValidation,
      handleChange,
      decrement,
      increment,
      pressDecrement,
      pressIncrement,
      releaseDecrement,
      releaseIncrement,
      toSizeUnit: _utils_elements__WEBPACK_IMPORTED_MODULE_9__.toSizeUnit,
      toNumber: _varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber
    };
  }

}));

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function (globalScope) {
  'use strict';


  /*
   *  decimal.js v10.3.1
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2021 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   */


  // -----------------------------------  EDITABLE DEFAULTS  ------------------------------------ //


    // The maximum exponent magnitude.
    // The limit on the value of `toExpNeg`, `toExpPos`, `minE` and `maxE`.
  var EXP_LIMIT = 9e15,                      // 0 to 9e15

    // The limit on the value of `precision`, and on the value of the first argument to
    // `toDecimalPlaces`, `toExponential`, `toFixed`, `toPrecision` and `toSignificantDigits`.
    MAX_DIGITS = 1e9,                        // 0 to 1e9

    // Base conversion alphabet.
    NUMERALS = '0123456789abcdef',

    // The natural logarithm of 10 (1025 digits).
    LN10 = '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',

    // Pi (1025 digits).
    PI = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',


    // The initial configuration properties of the Decimal constructor.
    DEFAULTS = {

      // These values must be integers within the stated ranges (inclusive).
      // Most of these values can be changed at run-time using the `Decimal.config` method.

      // The maximum number of significant digits of the result of a calculation or base conversion.
      // E.g. `Decimal.config({ precision: 20 });`
      precision: 20,                         // 1 to MAX_DIGITS

      // The rounding mode used when rounding to `precision`.
      //
      // ROUND_UP         0 Away from zero.
      // ROUND_DOWN       1 Towards zero.
      // ROUND_CEIL       2 Towards +Infinity.
      // ROUND_FLOOR      3 Towards -Infinity.
      // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      //
      // E.g.
      // `Decimal.rounding = 4;`
      // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
      rounding: 4,                           // 0 to 8

      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP         0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
      // FLOOR      3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN  6 The IEEE 754 remainder function.
      // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
      //
      // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
      // division (9) are commonly used for the modulus operation. The other rounding modes can also
      // be used, but they may not give useful results.
      modulo: 1,                             // 0 to 9

      // The exponent value at and beneath which `toString` returns exponential notation.
      // JavaScript numbers: -7
      toExpNeg: -7,                          // 0 to -EXP_LIMIT

      // The exponent value at and above which `toString` returns exponential notation.
      // JavaScript numbers: 21
      toExpPos:  21,                         // 0 to EXP_LIMIT

      // The minimum exponent value, beneath which underflow to zero occurs.
      // JavaScript numbers: -324  (5e-324)
      minE: -EXP_LIMIT,                      // -1 to -EXP_LIMIT

      // The maximum exponent value, above which overflow to Infinity occurs.
      // JavaScript numbers: 308  (1.7976931348623157e+308)
      maxE: EXP_LIMIT,                       // 1 to EXP_LIMIT

      // Whether to use cryptographically-secure random number generation, if available.
      crypto: false                          // true/false
    },


  // ----------------------------------- END OF EDITABLE DEFAULTS ------------------------------- //


    Decimal, inexact, noConflict, quadrant,
    external = true,

    decimalError = '[DecimalError] ',
    invalidArgument = decimalError + 'Invalid argument: ',
    precisionLimitExceeded = decimalError + 'Precision limit exceeded',
    cryptoUnavailable = decimalError + 'crypto unavailable',
    tag = '[object Decimal]',

    mathfloor = Math.floor,
    mathpow = Math.pow,

    isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,

    BASE = 1e7,
    LOG_BASE = 7,
    MAX_SAFE_INTEGER = 9007199254740991,

    LN10_PRECISION = LN10.length - 1,
    PI_PRECISION = PI.length - 1,

    // Decimal.prototype object
    P = { toStringTag: tag };


  // Decimal prototype methods


  /*
   *  absoluteValue             abs
   *  ceil
   *  clampedTo                 clamp
   *  comparedTo                cmp
   *  cosine                    cos
   *  cubeRoot                  cbrt
   *  decimalPlaces             dp
   *  dividedBy                 div
   *  dividedToIntegerBy        divToInt
   *  equals                    eq
   *  floor
   *  greaterThan               gt
   *  greaterThanOrEqualTo      gte
   *  hyperbolicCosine          cosh
   *  hyperbolicSine            sinh
   *  hyperbolicTangent         tanh
   *  inverseCosine             acos
   *  inverseHyperbolicCosine   acosh
   *  inverseHyperbolicSine     asinh
   *  inverseHyperbolicTangent  atanh
   *  inverseSine               asin
   *  inverseTangent            atan
   *  isFinite
   *  isInteger                 isInt
   *  isNaN
   *  isNegative                isNeg
   *  isPositive                isPos
   *  isZero
   *  lessThan                  lt
   *  lessThanOrEqualTo         lte
   *  logarithm                 log
   *  [maximum]                 [max]
   *  [minimum]                 [min]
   *  minus                     sub
   *  modulo                    mod
   *  naturalExponential        exp
   *  naturalLogarithm          ln
   *  negated                   neg
   *  plus                      add
   *  precision                 sd
   *  round
   *  sine                      sin
   *  squareRoot                sqrt
   *  tangent                   tan
   *  times                     mul
   *  toBinary
   *  toDecimalPlaces           toDP
   *  toExponential
   *  toFixed
   *  toFraction
   *  toHexadecimal             toHex
   *  toNearest
   *  toNumber
   *  toOctal
   *  toPower                   pow
   *  toPrecision
   *  toSignificantDigits       toSD
   *  toString
   *  truncated                 trunc
   *  valueOf                   toJSON
   */


  /*
   * Return a new Decimal whose value is the absolute value of this Decimal.
   *
   */
  P.absoluteValue = P.abs = function () {
    var x = new this.constructor(this);
    if (x.s < 0) x.s = 1;
    return finalise(x);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
   * direction of positive Infinity.
   *
   */
  P.ceil = function () {
    return finalise(new this.constructor(this), this.e + 1, 2);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal clamped to the range
   * delineated by `min` and `max`.
   *
   * min {number|string|Decimal}
   * max {number|string|Decimal}
   *
   */
  P.clampedTo = P.clamp = function (min, max) {
    var k,
      x = this,
      Ctor = x.constructor;
    min = new Ctor(min);
    max = new Ctor(max);
    if (!min.s || !max.s) return new Ctor(NaN);
    if (min.gt(max)) throw Error(invalidArgument + max);
    k = x.cmp(min);
    return k < 0 ? min : x.cmp(max) > 0 ? max : new Ctor(x);
  };


  /*
   * Return
   *   1    if the value of this Decimal is greater than the value of `y`,
   *  -1    if the value of this Decimal is less than the value of `y`,
   *   0    if they have the same value,
   *   NaN  if the value of either Decimal is NaN.
   *
   */
  P.comparedTo = P.cmp = function (y) {
    var i, j, xdL, ydL,
      x = this,
      xd = x.d,
      yd = (y = new x.constructor(y)).d,
      xs = x.s,
      ys = y.s;

    // Either NaN or ±Infinity?
    if (!xd || !yd) {
      return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
    }

    // Either zero?
    if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;

    // Signs differ?
    if (xs !== ys) return xs;

    // Compare exponents.
    if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;

    xdL = xd.length;
    ydL = yd.length;

    // Compare digit by digit.
    for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
      if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
    }

    // Compare lengths.
    return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
  };


  /*
   * Return a new Decimal whose value is the cosine of the value in radians of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-1, 1]
   *
   * cos(0)         = 1
   * cos(-0)        = 1
   * cos(Infinity)  = NaN
   * cos(-Infinity) = NaN
   * cos(NaN)       = NaN
   *
   */
  P.cosine = P.cos = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.d) return new Ctor(NaN);

    // cos(0) = cos(-0) = 1
    if (!x.d[0]) return new Ctor(1);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;

    x = cosine(Ctor, toLessThanHalfPi(Ctor, x));

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
  };


  /*
   *
   * Return a new Decimal whose value is the cube root of the value of this Decimal, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   *  cbrt(0)  =  0
   *  cbrt(-0) = -0
   *  cbrt(1)  =  1
   *  cbrt(-1) = -1
   *  cbrt(N)  =  N
   *  cbrt(-I) = -I
   *  cbrt(I)  =  I
   *
   * Math.cbrt(x) = (x < 0 ? -Math.pow(-x, 1/3) : Math.pow(x, 1/3))
   *
   */
  P.cubeRoot = P.cbrt = function () {
    var e, m, n, r, rep, s, sd, t, t3, t3plusx,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite() || x.isZero()) return new Ctor(x);
    external = false;

    // Initial estimate.
    s = x.s * mathpow(x.s * x, 1 / 3);

     // Math.cbrt underflow/overflow?
     // Pass x to Math.pow as integer, then adjust the exponent of the result.
    if (!s || Math.abs(s) == 1 / 0) {
      n = digitsToString(x.d);
      e = x.e;

      // Adjust n exponent so it is a multiple of 3 away from x exponent.
      if (s = (e - n.length + 1) % 3) n += (s == 1 || s == -2 ? '0' : '00');
      s = mathpow(n, 1 / 3);

      // Rarely, e may be one less than the result exponent value.
      e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));

      if (s == 1 / 0) {
        n = '5e' + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf('e') + 1) + e;
      }

      r = new Ctor(n);
      r.s = x.s;
    } else {
      r = new Ctor(s.toString());
    }

    sd = (e = Ctor.precision) + 3;

    // Halley's method.
    // TODO? Compare Newton's method.
    for (;;) {
      t = r;
      t3 = t.times(t).times(t);
      t3plusx = t3.plus(x);
      r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);

      // TODO? Replace with for-loop and checkRoundingDigits.
      if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
        n = n.slice(sd - 3, sd + 1);

        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or 4999
        // , i.e. approaching a rounding boundary, continue the iteration.
        if (n == '9999' || !rep && n == '4999') {

          // On the first iteration only, check to see if rounding up gives the exact result as the
          // nines may infinitely repeat.
          if (!rep) {
            finalise(t, e + 1, 0);

            if (t.times(t).times(t).eq(x)) {
              r = t;
              break;
            }
          }

          sd += 4;
          rep = 1;
        } else {

          // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
          // If not, then there are further digits and m will be truthy.
          if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

            // Truncate to the first rounding digit.
            finalise(r, e + 1, 1);
            m = !r.times(r).times(r).eq(x);
          }

          break;
        }
      }
    }

    external = true;

    return finalise(r, e, Ctor.rounding, m);
  };


  /*
   * Return the number of decimal places of the value of this Decimal.
   *
   */
  P.decimalPlaces = P.dp = function () {
    var w,
      d = this.d,
      n = NaN;

    if (d) {
      w = d.length - 1;
      n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;

      // Subtract the number of trailing zeros of the last word.
      w = d[w];
      if (w) for (; w % 10 == 0; w /= 10) n--;
      if (n < 0) n = 0;
    }

    return n;
  };


  /*
   *  n / 0 = I
   *  n / N = N
   *  n / I = 0
   *  0 / n = 0
   *  0 / 0 = N
   *  0 / N = N
   *  0 / I = 0
   *  N / n = N
   *  N / 0 = N
   *  N / N = N
   *  N / I = N
   *  I / n = I
   *  I / 0 = I
   *  I / N = N
   *  I / I = N
   *
   * Return a new Decimal whose value is the value of this Decimal divided by `y`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   */
  P.dividedBy = P.div = function (y) {
    return divide(this, new this.constructor(y));
  };


  /*
   * Return a new Decimal whose value is the integer part of dividing the value of this Decimal
   * by the value of `y`, rounded to `precision` significant digits using rounding mode `rounding`.
   *
   */
  P.dividedToIntegerBy = P.divToInt = function (y) {
    var x = this,
      Ctor = x.constructor;
    return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
  };


  /*
   * Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.
   *
   */
  P.equals = P.eq = function (y) {
    return this.cmp(y) === 0;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
   * direction of negative Infinity.
   *
   */
  P.floor = function () {
    return finalise(new this.constructor(this), this.e + 1, 3);
  };


  /*
   * Return true if the value of this Decimal is greater than the value of `y`, otherwise return
   * false.
   *
   */
  P.greaterThan = P.gt = function (y) {
    return this.cmp(y) > 0;
  };


  /*
   * Return true if the value of this Decimal is greater than or equal to the value of `y`,
   * otherwise return false.
   *
   */
  P.greaterThanOrEqualTo = P.gte = function (y) {
    var k = this.cmp(y);
    return k == 1 || k === 0;
  };


  /*
   * Return a new Decimal whose value is the hyperbolic cosine of the value in radians of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [1, Infinity]
   *
   * cosh(x) = 1 + x^2/2! + x^4/4! + x^6/6! + ...
   *
   * cosh(0)         = 1
   * cosh(-0)        = 1
   * cosh(Infinity)  = Infinity
   * cosh(-Infinity) = Infinity
   * cosh(NaN)       = NaN
   *
   *  x        time taken (ms)   result
   * 1000      9                 9.8503555700852349694e+433
   * 10000     25                4.4034091128314607936e+4342
   * 100000    171               1.4033316802130615897e+43429
   * 1000000   3817              1.5166076984010437725e+434294
   * 10000000  abandoned after 2 minute wait
   *
   * TODO? Compare performance of cosh(x) = 0.5 * (exp(x) + exp(-x))
   *
   */
  P.hyperbolicCosine = P.cosh = function () {
    var k, n, pr, rm, len,
      x = this,
      Ctor = x.constructor,
      one = new Ctor(1);

    if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
    if (x.isZero()) return one;

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;

    // Argument reduction: cos(4x) = 1 - 8cos^2(x) + 8cos^4(x) + 1
    // i.e. cos(x) = 1 - cos^2(x/4)(8 - 8cos^2(x/4))

    // Estimate the optimum number of times to use the argument reduction.
    // TODO? Estimation reused from cosine() and may not be optimal here.
    if (len < 32) {
      k = Math.ceil(len / 3);
      n = (1 / tinyPow(4, k)).toString();
    } else {
      k = 16;
      n = '2.3283064365386962890625e-10';
    }

    x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);

    // Reverse argument reduction
    var cosh2_x,
      i = k,
      d8 = new Ctor(8);
    for (; i--;) {
      cosh2_x = x.times(x);
      x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
    }

    return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
  };


  /*
   * Return a new Decimal whose value is the hyperbolic sine of the value in radians of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-Infinity, Infinity]
   *
   * sinh(x) = x + x^3/3! + x^5/5! + x^7/7! + ...
   *
   * sinh(0)         = 0
   * sinh(-0)        = -0
   * sinh(Infinity)  = Infinity
   * sinh(-Infinity) = -Infinity
   * sinh(NaN)       = NaN
   *
   * x        time taken (ms)
   * 10       2 ms
   * 100      5 ms
   * 1000     14 ms
   * 10000    82 ms
   * 100000   886 ms            1.4033316802130615897e+43429
   * 200000   2613 ms
   * 300000   5407 ms
   * 400000   8824 ms
   * 500000   13026 ms          8.7080643612718084129e+217146
   * 1000000  48543 ms
   *
   * TODO? Compare performance of sinh(x) = 0.5 * (exp(x) - exp(-x))
   *
   */
  P.hyperbolicSine = P.sinh = function () {
    var k, pr, rm, len,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite() || x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;

    if (len < 3) {
      x = taylorSeries(Ctor, 2, x, x, true);
    } else {

      // Alternative argument reduction: sinh(3x) = sinh(x)(3 + 4sinh^2(x))
      // i.e. sinh(x) = sinh(x/3)(3 + 4sinh^2(x/3))
      // 3 multiplications and 1 addition

      // Argument reduction: sinh(5x) = sinh(x)(5 + sinh^2(x)(20 + 16sinh^2(x)))
      // i.e. sinh(x) = sinh(x/5)(5 + sinh^2(x/5)(20 + 16sinh^2(x/5)))
      // 4 multiplications and 2 additions

      // Estimate the optimum number of times to use the argument reduction.
      k = 1.4 * Math.sqrt(len);
      k = k > 16 ? 16 : k | 0;

      x = x.times(1 / tinyPow(5, k));
      x = taylorSeries(Ctor, 2, x, x, true);

      // Reverse argument reduction
      var sinh2_x,
        d5 = new Ctor(5),
        d16 = new Ctor(16),
        d20 = new Ctor(20);
      for (; k--;) {
        sinh2_x = x.times(x);
        x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
      }
    }

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return finalise(x, pr, rm, true);
  };


  /*
   * Return a new Decimal whose value is the hyperbolic tangent of the value in radians of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-1, 1]
   *
   * tanh(x) = sinh(x) / cosh(x)
   *
   * tanh(0)         = 0
   * tanh(-0)        = -0
   * tanh(Infinity)  = 1
   * tanh(-Infinity) = -1
   * tanh(NaN)       = NaN
   *
   */
  P.hyperbolicTangent = P.tanh = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite()) return new Ctor(x.s);
    if (x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 7;
    Ctor.rounding = 1;

    return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
  };


  /*
   * Return a new Decimal whose value is the arccosine (inverse cosine) in radians of the value of
   * this Decimal.
   *
   * Domain: [-1, 1]
   * Range: [0, pi]
   *
   * acos(x) = pi/2 - asin(x)
   *
   * acos(0)       = pi/2
   * acos(-0)      = pi/2
   * acos(1)       = 0
   * acos(-1)      = pi
   * acos(1/2)     = pi/3
   * acos(-1/2)    = 2*pi/3
   * acos(|x| > 1) = NaN
   * acos(NaN)     = NaN
   *
   */
  P.inverseCosine = P.acos = function () {
    var halfPi,
      x = this,
      Ctor = x.constructor,
      k = x.abs().cmp(1),
      pr = Ctor.precision,
      rm = Ctor.rounding;

    if (k !== -1) {
      return k === 0
        // |x| is 1
        ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0)
        // |x| > 1 or x is NaN
        : new Ctor(NaN);
    }

    if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);

    // TODO? Special case acos(0.5) = pi/3 and acos(-0.5) = 2*pi/3

    Ctor.precision = pr + 6;
    Ctor.rounding = 1;

    x = x.asin();
    halfPi = getPi(Ctor, pr + 4, rm).times(0.5);

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return halfPi.minus(x);
  };


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic cosine in radians of the
   * value of this Decimal.
   *
   * Domain: [1, Infinity]
   * Range: [0, Infinity]
   *
   * acosh(x) = ln(x + sqrt(x^2 - 1))
   *
   * acosh(x < 1)     = NaN
   * acosh(NaN)       = NaN
   * acosh(Infinity)  = Infinity
   * acosh(-Infinity) = NaN
   * acosh(0)         = NaN
   * acosh(-0)        = NaN
   * acosh(1)         = 0
   * acosh(-1)        = NaN
   *
   */
  P.inverseHyperbolicCosine = P.acosh = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
    if (!x.isFinite()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
    Ctor.rounding = 1;
    external = false;

    x = x.times(x).minus(1).sqrt().plus(x);

    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;

    return x.ln();
  };


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic sine in radians of the value
   * of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-Infinity, Infinity]
   *
   * asinh(x) = ln(x + sqrt(x^2 + 1))
   *
   * asinh(NaN)       = NaN
   * asinh(Infinity)  = Infinity
   * asinh(-Infinity) = -Infinity
   * asinh(0)         = 0
   * asinh(-0)        = -0
   *
   */
  P.inverseHyperbolicSine = P.asinh = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite() || x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
    Ctor.rounding = 1;
    external = false;

    x = x.times(x).plus(1).sqrt().plus(x);

    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;

    return x.ln();
  };


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic tangent in radians of the
   * value of this Decimal.
   *
   * Domain: [-1, 1]
   * Range: [-Infinity, Infinity]
   *
   * atanh(x) = 0.5 * ln((1 + x) / (1 - x))
   *
   * atanh(|x| > 1)   = NaN
   * atanh(NaN)       = NaN
   * atanh(Infinity)  = NaN
   * atanh(-Infinity) = NaN
   * atanh(0)         = 0
   * atanh(-0)        = -0
   * atanh(1)         = Infinity
   * atanh(-1)        = -Infinity
   *
   */
  P.inverseHyperbolicTangent = P.atanh = function () {
    var pr, rm, wpr, xsd,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite()) return new Ctor(NaN);
    if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    xsd = x.sd();

    if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);

    Ctor.precision = wpr = xsd - x.e;

    x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);

    Ctor.precision = pr + 4;
    Ctor.rounding = 1;

    x = x.ln();

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return x.times(0.5);
  };


  /*
   * Return a new Decimal whose value is the arcsine (inverse sine) in radians of the value of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-pi/2, pi/2]
   *
   * asin(x) = 2*atan(x/(1 + sqrt(1 - x^2)))
   *
   * asin(0)       = 0
   * asin(-0)      = -0
   * asin(1/2)     = pi/6
   * asin(-1/2)    = -pi/6
   * asin(1)       = pi/2
   * asin(-1)      = -pi/2
   * asin(|x| > 1) = NaN
   * asin(NaN)     = NaN
   *
   * TODO? Compare performance of Taylor series.
   *
   */
  P.inverseSine = P.asin = function () {
    var halfPi, k,
      pr, rm,
      x = this,
      Ctor = x.constructor;

    if (x.isZero()) return new Ctor(x);

    k = x.abs().cmp(1);
    pr = Ctor.precision;
    rm = Ctor.rounding;

    if (k !== -1) {

      // |x| is 1
      if (k === 0) {
        halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
        halfPi.s = x.s;
        return halfPi;
      }

      // |x| > 1 or x is NaN
      return new Ctor(NaN);
    }

    // TODO? Special case asin(1/2) = pi/6 and asin(-1/2) = -pi/6

    Ctor.precision = pr + 6;
    Ctor.rounding = 1;

    x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return x.times(2);
  };


  /*
   * Return a new Decimal whose value is the arctangent (inverse tangent) in radians of the value
   * of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-pi/2, pi/2]
   *
   * atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
   *
   * atan(0)         = 0
   * atan(-0)        = -0
   * atan(1)         = pi/4
   * atan(-1)        = -pi/4
   * atan(Infinity)  = pi/2
   * atan(-Infinity) = -pi/2
   * atan(NaN)       = NaN
   *
   */
  P.inverseTangent = P.atan = function () {
    var i, j, k, n, px, t, r, wpr, x2,
      x = this,
      Ctor = x.constructor,
      pr = Ctor.precision,
      rm = Ctor.rounding;

    if (!x.isFinite()) {
      if (!x.s) return new Ctor(NaN);
      if (pr + 4 <= PI_PRECISION) {
        r = getPi(Ctor, pr + 4, rm).times(0.5);
        r.s = x.s;
        return r;
      }
    } else if (x.isZero()) {
      return new Ctor(x);
    } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.25);
      r.s = x.s;
      return r;
    }

    Ctor.precision = wpr = pr + 10;
    Ctor.rounding = 1;

    // TODO? if (x >= 1 && pr <= PI_PRECISION) atan(x) = halfPi * x.s - atan(1 / x);

    // Argument reduction
    // Ensure |x| < 0.42
    // atan(x) = 2 * atan(x / (1 + sqrt(1 + x^2)))

    k = Math.min(28, wpr / LOG_BASE + 2 | 0);

    for (i = k; i; --i) x = x.div(x.times(x).plus(1).sqrt().plus(1));

    external = false;

    j = Math.ceil(wpr / LOG_BASE);
    n = 1;
    x2 = x.times(x);
    r = new Ctor(x);
    px = x;

    // atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
    for (; i !== -1;) {
      px = px.times(x2);
      t = r.minus(px.div(n += 2));

      px = px.times(x2);
      r = t.plus(px.div(n += 2));

      if (r.d[j] !== void 0) for (i = j; r.d[i] === t.d[i] && i--;);
    }

    if (k) r = r.times(2 << (k - 1));

    external = true;

    return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
  };


  /*
   * Return true if the value of this Decimal is a finite number, otherwise return false.
   *
   */
  P.isFinite = function () {
    return !!this.d;
  };


  /*
   * Return true if the value of this Decimal is an integer, otherwise return false.
   *
   */
  P.isInteger = P.isInt = function () {
    return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
  };


  /*
   * Return true if the value of this Decimal is NaN, otherwise return false.
   *
   */
  P.isNaN = function () {
    return !this.s;
  };


  /*
   * Return true if the value of this Decimal is negative, otherwise return false.
   *
   */
  P.isNegative = P.isNeg = function () {
    return this.s < 0;
  };


  /*
   * Return true if the value of this Decimal is positive, otherwise return false.
   *
   */
  P.isPositive = P.isPos = function () {
    return this.s > 0;
  };


  /*
   * Return true if the value of this Decimal is 0 or -0, otherwise return false.
   *
   */
  P.isZero = function () {
    return !!this.d && this.d[0] === 0;
  };


  /*
   * Return true if the value of this Decimal is less than `y`, otherwise return false.
   *
   */
  P.lessThan = P.lt = function (y) {
    return this.cmp(y) < 0;
  };


  /*
   * Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.
   *
   */
  P.lessThanOrEqualTo = P.lte = function (y) {
    return this.cmp(y) < 1;
  };


  /*
   * Return the logarithm of the value of this Decimal to the specified base, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * If no base is specified, return log[10](arg).
   *
   * log[base](arg) = ln(arg) / ln(base)
   *
   * The result will always be correctly rounded if the base of the log is 10, and 'almost always'
   * otherwise:
   *
   * Depending on the rounding mode, the result may be incorrectly rounded if the first fifteen
   * rounding digits are [49]99999999999999 or [50]00000000000000. In that case, the maximum error
   * between the result and the correctly rounded result will be one ulp (unit in the last place).
   *
   * log[-b](a)       = NaN
   * log[0](a)        = NaN
   * log[1](a)        = NaN
   * log[NaN](a)      = NaN
   * log[Infinity](a) = NaN
   * log[b](0)        = -Infinity
   * log[b](-0)       = -Infinity
   * log[b](-a)       = NaN
   * log[b](1)        = 0
   * log[b](Infinity) = Infinity
   * log[b](NaN)      = NaN
   *
   * [base] {number|string|Decimal} The base of the logarithm.
   *
   */
  P.logarithm = P.log = function (base) {
    var isBase10, d, denominator, k, inf, num, sd, r,
      arg = this,
      Ctor = arg.constructor,
      pr = Ctor.precision,
      rm = Ctor.rounding,
      guard = 5;

    // Default base is 10.
    if (base == null) {
      base = new Ctor(10);
      isBase10 = true;
    } else {
      base = new Ctor(base);
      d = base.d;

      // Return NaN if base is negative, or non-finite, or is 0 or 1.
      if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);

      isBase10 = base.eq(10);
    }

    d = arg.d;

    // Is arg negative, non-finite, 0 or 1?
    if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
      return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
    }

    // The result will have a non-terminating decimal expansion if base is 10 and arg is not an
    // integer power of 10.
    if (isBase10) {
      if (d.length > 1) {
        inf = true;
      } else {
        for (k = d[0]; k % 10 === 0;) k /= 10;
        inf = k !== 1;
      }
    }

    external = false;
    sd = pr + guard;
    num = naturalLogarithm(arg, sd);
    denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);

    // The result will have 5 rounding digits.
    r = divide(num, denominator, sd, 1);

    // If at a rounding boundary, i.e. the result's rounding digits are [49]9999 or [50]0000,
    // calculate 10 further digits.
    //
    // If the result is known to have an infinite decimal expansion, repeat this until it is clear
    // that the result is above or below the boundary. Otherwise, if after calculating the 10
    // further digits, the last 14 are nines, round up and assume the result is exact.
    // Also assume the result is exact if the last 14 are zero.
    //
    // Example of a result that will be incorrectly rounded:
    // log[1048576](4503599627370502) = 2.60000000000000009610279511444746...
    // The above result correctly rounded using ROUND_CEIL to 1 decimal place should be 2.7, but it
    // will be given as 2.6 as there are 15 zeros immediately after the requested decimal place, so
    // the exact result would be assumed to be 2.6, which rounded using ROUND_CEIL to 1 decimal
    // place is still 2.6.
    if (checkRoundingDigits(r.d, k = pr, rm)) {

      do {
        sd += 10;
        num = naturalLogarithm(arg, sd);
        denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
        r = divide(num, denominator, sd, 1);

        if (!inf) {

          // Check for 14 nines from the 2nd rounding digit, as the first may be 4.
          if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
            r = finalise(r, pr + 1, 0);
          }

          break;
        }
      } while (checkRoundingDigits(r.d, k += 10, rm));
    }

    external = true;

    return finalise(r, pr, rm);
  };


  /*
   * Return a new Decimal whose value is the maximum of the arguments and the value of this Decimal.
   *
   * arguments {number|string|Decimal}
   *
  P.max = function () {
    Array.prototype.push.call(arguments, this);
    return maxOrMin(this.constructor, arguments, 'lt');
  };
   */


  /*
   * Return a new Decimal whose value is the minimum of the arguments and the value of this Decimal.
   *
   * arguments {number|string|Decimal}
   *
  P.min = function () {
    Array.prototype.push.call(arguments, this);
    return maxOrMin(this.constructor, arguments, 'gt');
  };
   */


  /*
   *  n - 0 = n
   *  n - N = N
   *  n - I = -I
   *  0 - n = -n
   *  0 - 0 = 0
   *  0 - N = N
   *  0 - I = -I
   *  N - n = N
   *  N - 0 = N
   *  N - N = N
   *  N - I = N
   *  I - n = I
   *  I - 0 = I
   *  I - N = N
   *  I - I = N
   *
   * Return a new Decimal whose value is the value of this Decimal minus `y`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   */
  P.minus = P.sub = function (y) {
    var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd,
      x = this,
      Ctor = x.constructor;

    y = new Ctor(y);

    // If either is not finite...
    if (!x.d || !y.d) {

      // Return NaN if either is NaN.
      if (!x.s || !y.s) y = new Ctor(NaN);

      // Return y negated if x is finite and y is ±Infinity.
      else if (x.d) y.s = -y.s;

      // Return x if y is finite and x is ±Infinity.
      // Return x if both are ±Infinity with different signs.
      // Return NaN if both are ±Infinity with the same sign.
      else y = new Ctor(y.d || x.s !== y.s ? x : NaN);

      return y;
    }

    // If signs differ...
    if (x.s != y.s) {
      y.s = -y.s;
      return x.plus(y);
    }

    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;

    // If either is zero...
    if (!xd[0] || !yd[0]) {

      // Return y negated if x is zero and y is non-zero.
      if (yd[0]) y.s = -y.s;

      // Return x if y is zero and x is non-zero.
      else if (xd[0]) y = new Ctor(x);

      // Return zero if both are zero.
      // From IEEE 754 (2008) 6.3: 0 - 0 = -0 - -0 = -0 when rounding to -Infinity.
      else return new Ctor(rm === 3 ? -0 : 0);

      return external ? finalise(y, pr, rm) : y;
    }

    // x and y are finite, non-zero numbers with the same sign.

    // Calculate base 1e7 exponents.
    e = mathfloor(y.e / LOG_BASE);
    xe = mathfloor(x.e / LOG_BASE);

    xd = xd.slice();
    k = xe - e;

    // If base 1e7 exponents differ...
    if (k) {
      xLTy = k < 0;

      if (xLTy) {
        d = xd;
        k = -k;
        len = yd.length;
      } else {
        d = yd;
        e = xe;
        len = xd.length;
      }

      // Numbers with massively different exponents would result in a very high number of
      // zeros needing to be prepended, but this can be avoided while still ensuring correct
      // rounding by limiting the number of zeros to `Math.ceil(pr / LOG_BASE) + 2`.
      i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;

      if (k > i) {
        k = i;
        d.length = 1;
      }

      // Prepend zeros to equalise exponents.
      d.reverse();
      for (i = k; i--;) d.push(0);
      d.reverse();

    // Base 1e7 exponents equal.
    } else {

      // Check digits to determine which is the bigger number.

      i = xd.length;
      len = yd.length;
      xLTy = i < len;
      if (xLTy) len = i;

      for (i = 0; i < len; i++) {
        if (xd[i] != yd[i]) {
          xLTy = xd[i] < yd[i];
          break;
        }
      }

      k = 0;
    }

    if (xLTy) {
      d = xd;
      xd = yd;
      yd = d;
      y.s = -y.s;
    }

    len = xd.length;

    // Append zeros to `xd` if shorter.
    // Don't add zeros to `yd` if shorter as subtraction only needs to start at `yd` length.
    for (i = yd.length - len; i > 0; --i) xd[len++] = 0;

    // Subtract yd from xd.
    for (i = yd.length; i > k;) {

      if (xd[--i] < yd[i]) {
        for (j = i; j && xd[--j] === 0;) xd[j] = BASE - 1;
        --xd[j];
        xd[i] += BASE;
      }

      xd[i] -= yd[i];
    }

    // Remove trailing zeros.
    for (; xd[--len] === 0;) xd.pop();

    // Remove leading zeros and adjust exponent accordingly.
    for (; xd[0] === 0; xd.shift()) --e;

    // Zero?
    if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);

    y.d = xd;
    y.e = getBase10Exponent(xd, e);

    return external ? finalise(y, pr, rm) : y;
  };


  /*
   *   n % 0 =  N
   *   n % N =  N
   *   n % I =  n
   *   0 % n =  0
   *  -0 % n = -0
   *   0 % 0 =  N
   *   0 % N =  N
   *   0 % I =  0
   *   N % n =  N
   *   N % 0 =  N
   *   N % N =  N
   *   N % I =  N
   *   I % n =  N
   *   I % 0 =  N
   *   I % N =  N
   *   I % I =  N
   *
   * Return a new Decimal whose value is the value of this Decimal modulo `y`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * The result depends on the modulo mode.
   *
   */
  P.modulo = P.mod = function (y) {
    var q,
      x = this,
      Ctor = x.constructor;

    y = new Ctor(y);

    // Return NaN if x is ±Infinity or NaN, or y is NaN or ±0.
    if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);

    // Return x if y is ±Infinity or x is ±0.
    if (!y.d || x.d && !x.d[0]) {
      return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
    }

    // Prevent rounding of intermediate calculations.
    external = false;

    if (Ctor.modulo == 9) {

      // Euclidian division: q = sign(y) * floor(x / abs(y))
      // result = x - q * y    where  0 <= result < abs(y)
      q = divide(x, y.abs(), 0, 3, 1);
      q.s *= y.s;
    } else {
      q = divide(x, y, 0, Ctor.modulo, 1);
    }

    q = q.times(y);

    external = true;

    return x.minus(q);
  };


  /*
   * Return a new Decimal whose value is the natural exponential of the value of this Decimal,
   * i.e. the base e raised to the power the value of this Decimal, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   */
  P.naturalExponential = P.exp = function () {
    return naturalExponential(this);
  };


  /*
   * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,
   * rounded to `precision` significant digits using rounding mode `rounding`.
   *
   */
  P.naturalLogarithm = P.ln = function () {
    return naturalLogarithm(this);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by
   * -1.
   *
   */
  P.negated = P.neg = function () {
    var x = new this.constructor(this);
    x.s = -x.s;
    return finalise(x);
  };


  /*
   *  n + 0 = n
   *  n + N = N
   *  n + I = I
   *  0 + n = n
   *  0 + 0 = 0
   *  0 + N = N
   *  0 + I = I
   *  N + n = N
   *  N + 0 = N
   *  N + N = N
   *  N + I = N
   *  I + n = I
   *  I + 0 = I
   *  I + N = N
   *  I + I = I
   *
   * Return a new Decimal whose value is the value of this Decimal plus `y`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   */
  P.plus = P.add = function (y) {
    var carry, d, e, i, k, len, pr, rm, xd, yd,
      x = this,
      Ctor = x.constructor;

    y = new Ctor(y);

    // If either is not finite...
    if (!x.d || !y.d) {

      // Return NaN if either is NaN.
      if (!x.s || !y.s) y = new Ctor(NaN);

      // Return x if y is finite and x is ±Infinity.
      // Return x if both are ±Infinity with the same sign.
      // Return NaN if both are ±Infinity with different signs.
      // Return y if x is finite and y is ±Infinity.
      else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);

      return y;
    }

     // If signs differ...
    if (x.s != y.s) {
      y.s = -y.s;
      return x.minus(y);
    }

    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;

    // If either is zero...
    if (!xd[0] || !yd[0]) {

      // Return x if y is zero.
      // Return y if y is non-zero.
      if (!yd[0]) y = new Ctor(x);

      return external ? finalise(y, pr, rm) : y;
    }

    // x and y are finite, non-zero numbers with the same sign.

    // Calculate base 1e7 exponents.
    k = mathfloor(x.e / LOG_BASE);
    e = mathfloor(y.e / LOG_BASE);

    xd = xd.slice();
    i = k - e;

    // If base 1e7 exponents differ...
    if (i) {

      if (i < 0) {
        d = xd;
        i = -i;
        len = yd.length;
      } else {
        d = yd;
        e = k;
        len = xd.length;
      }

      // Limit number of zeros prepended to max(ceil(pr / LOG_BASE), len) + 1.
      k = Math.ceil(pr / LOG_BASE);
      len = k > len ? k + 1 : len + 1;

      if (i > len) {
        i = len;
        d.length = 1;
      }

      // Prepend zeros to equalise exponents. Note: Faster to use reverse then do unshifts.
      d.reverse();
      for (; i--;) d.push(0);
      d.reverse();
    }

    len = xd.length;
    i = yd.length;

    // If yd is longer than xd, swap xd and yd so xd points to the longer array.
    if (len - i < 0) {
      i = len;
      d = yd;
      yd = xd;
      xd = d;
    }

    // Only start adding at yd.length - 1 as the further digits of xd can be left as they are.
    for (carry = 0; i;) {
      carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
      xd[i] %= BASE;
    }

    if (carry) {
      xd.unshift(carry);
      ++e;
    }

    // Remove trailing zeros.
    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    for (len = xd.length; xd[--len] == 0;) xd.pop();

    y.d = xd;
    y.e = getBase10Exponent(xd, e);

    return external ? finalise(y, pr, rm) : y;
  };


  /*
   * Return the number of significant digits of the value of this Decimal.
   *
   * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
   *
   */
  P.precision = P.sd = function (z) {
    var k,
      x = this;

    if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);

    if (x.d) {
      k = getPrecision(x.d);
      if (z && x.e + 1 > k) k = x.e + 1;
    } else {
      k = NaN;
    }

    return k;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number using
   * rounding mode `rounding`.
   *
   */
  P.round = function () {
    var x = this,
      Ctor = x.constructor;

    return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
  };


  /*
   * Return a new Decimal whose value is the sine of the value in radians of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-1, 1]
   *
   * sin(x) = x - x^3/3! + x^5/5! - ...
   *
   * sin(0)         = 0
   * sin(-0)        = -0
   * sin(Infinity)  = NaN
   * sin(-Infinity) = NaN
   * sin(NaN)       = NaN
   *
   */
  P.sine = P.sin = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite()) return new Ctor(NaN);
    if (x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;

    x = sine(Ctor, toLessThanHalfPi(Ctor, x));

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
  };


  /*
   * Return a new Decimal whose value is the square root of this Decimal, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   *  sqrt(-n) =  N
   *  sqrt(N)  =  N
   *  sqrt(-I) =  N
   *  sqrt(I)  =  I
   *  sqrt(0)  =  0
   *  sqrt(-0) = -0
   *
   */
  P.squareRoot = P.sqrt = function () {
    var m, n, sd, r, rep, t,
      x = this,
      d = x.d,
      e = x.e,
      s = x.s,
      Ctor = x.constructor;

    // Negative/NaN/Infinity/zero?
    if (s !== 1 || !d || !d[0]) {
      return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
    }

    external = false;

    // Initial estimate.
    s = Math.sqrt(+x);

    // Math.sqrt underflow/overflow?
    // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
    if (s == 0 || s == 1 / 0) {
      n = digitsToString(d);

      if ((n.length + e) % 2 == 0) n += '0';
      s = Math.sqrt(n);
      e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);

      if (s == 1 / 0) {
        n = '5e' + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf('e') + 1) + e;
      }

      r = new Ctor(n);
    } else {
      r = new Ctor(s.toString());
    }

    sd = (e = Ctor.precision) + 3;

    // Newton-Raphson iteration.
    for (;;) {
      t = r;
      r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);

      // TODO? Replace with for-loop and checkRoundingDigits.
      if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
        n = n.slice(sd - 3, sd + 1);

        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or
        // 4999, i.e. approaching a rounding boundary, continue the iteration.
        if (n == '9999' || !rep && n == '4999') {

          // On the first iteration only, check to see if rounding up gives the exact result as the
          // nines may infinitely repeat.
          if (!rep) {
            finalise(t, e + 1, 0);

            if (t.times(t).eq(x)) {
              r = t;
              break;
            }
          }

          sd += 4;
          rep = 1;
        } else {

          // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
          // If not, then there are further digits and m will be truthy.
          if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

            // Truncate to the first rounding digit.
            finalise(r, e + 1, 1);
            m = !r.times(r).eq(x);
          }

          break;
        }
      }
    }

    external = true;

    return finalise(r, e, Ctor.rounding, m);
  };


  /*
   * Return a new Decimal whose value is the tangent of the value in radians of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-Infinity, Infinity]
   *
   * tan(0)         = 0
   * tan(-0)        = -0
   * tan(Infinity)  = NaN
   * tan(-Infinity) = NaN
   * tan(NaN)       = NaN
   *
   */
  P.tangent = P.tan = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite()) return new Ctor(NaN);
    if (x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 10;
    Ctor.rounding = 1;

    x = x.sin();
    x.s = 1;
    x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
  };


  /*
   *  n * 0 = 0
   *  n * N = N
   *  n * I = I
   *  0 * n = 0
   *  0 * 0 = 0
   *  0 * N = N
   *  0 * I = N
   *  N * n = N
   *  N * 0 = N
   *  N * N = N
   *  N * I = N
   *  I * n = I
   *  I * 0 = N
   *  I * N = N
   *  I * I = I
   *
   * Return a new Decimal whose value is this Decimal times `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   */
  P.times = P.mul = function (y) {
    var carry, e, i, k, r, rL, t, xdL, ydL,
      x = this,
      Ctor = x.constructor,
      xd = x.d,
      yd = (y = new Ctor(y)).d;

    y.s *= x.s;

     // If either is NaN, ±Infinity or ±0...
    if (!xd || !xd[0] || !yd || !yd[0]) {

      return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd

        // Return NaN if either is NaN.
        // Return NaN if x is ±0 and y is ±Infinity, or y is ±0 and x is ±Infinity.
        ? NaN

        // Return ±Infinity if either is ±Infinity.
        // Return ±0 if either is ±0.
        : !xd || !yd ? y.s / 0 : y.s * 0);
    }

    e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
    xdL = xd.length;
    ydL = yd.length;

    // Ensure xd points to the longer array.
    if (xdL < ydL) {
      r = xd;
      xd = yd;
      yd = r;
      rL = xdL;
      xdL = ydL;
      ydL = rL;
    }

    // Initialise the result array with zeros.
    r = [];
    rL = xdL + ydL;
    for (i = rL; i--;) r.push(0);

    // Multiply!
    for (i = ydL; --i >= 0;) {
      carry = 0;
      for (k = xdL + i; k > i;) {
        t = r[k] + yd[i] * xd[k - i - 1] + carry;
        r[k--] = t % BASE | 0;
        carry = t / BASE | 0;
      }

      r[k] = (r[k] + carry) % BASE | 0;
    }

    // Remove trailing zeros.
    for (; !r[--rL];) r.pop();

    if (carry) ++e;
    else r.shift();

    y.d = r;
    y.e = getBase10Exponent(r, e);

    return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
  };


  /*
   * Return a string representing the value of this Decimal in base 2, round to `sd` significant
   * digits using rounding mode `rm`.
   *
   * If the optional `sd` argument is present then return binary exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toBinary = function (sd, rm) {
    return toStringBinary(this, 2, sd, rm);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `dp`
   * decimal places using rounding mode `rm` or `rounding` if `rm` is omitted.
   *
   * If `dp` is omitted, return a new Decimal whose value is the value of this Decimal.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toDecimalPlaces = P.toDP = function (dp, rm) {
    var x = this,
      Ctor = x.constructor;

    x = new Ctor(x);
    if (dp === void 0) return x;

    checkInt32(dp, 0, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);

    return finalise(x, dp + x.e + 1, rm);
  };


  /*
   * Return a string representing the value of this Decimal in exponential notation rounded to
   * `dp` fixed decimal places using rounding mode `rounding`.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toExponential = function (dp, rm) {
    var str,
      x = this,
      Ctor = x.constructor;

    if (dp === void 0) {
      str = finiteToString(x, true);
    } else {
      checkInt32(dp, 0, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);

      x = finalise(new Ctor(x), dp + 1, rm);
      str = finiteToString(x, true, dp + 1);
    }

    return x.isNeg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return a string representing the value of this Decimal in normal (fixed-point) notation to
   * `dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is
   * omitted.
   *
   * As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
   * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
   * (-0).toFixed(3) is '0.000'.
   * (-0.5).toFixed(0) is '-0'.
   *
   */
  P.toFixed = function (dp, rm) {
    var str, y,
      x = this,
      Ctor = x.constructor;

    if (dp === void 0) {
      str = finiteToString(x);
    } else {
      checkInt32(dp, 0, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);

      y = finalise(new Ctor(x), dp + x.e + 1, rm);
      str = finiteToString(y, false, dp + y.e + 1);
    }

    // To determine whether to add the minus sign look at the value before it was rounded,
    // i.e. look at `x` rather than `y`.
    return x.isNeg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return an array representing the value of this Decimal as a simple fraction with an integer
   * numerator and an integer denominator.
   *
   * The denominator will be a positive non-zero value less than or equal to the specified maximum
   * denominator. If a maximum denominator is not specified, the denominator will be the lowest
   * value necessary to represent the number exactly.
   *
   * [maxD] {number|string|Decimal} Maximum denominator. Integer >= 1 and < Infinity.
   *
   */
  P.toFraction = function (maxD) {
    var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r,
      x = this,
      xd = x.d,
      Ctor = x.constructor;

    if (!xd) return new Ctor(x);

    n1 = d0 = new Ctor(1);
    d1 = n0 = new Ctor(0);

    d = new Ctor(d1);
    e = d.e = getPrecision(xd) - x.e - 1;
    k = e % LOG_BASE;
    d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);

    if (maxD == null) {

      // d is 10**e, the minimum max-denominator needed.
      maxD = e > 0 ? d : n1;
    } else {
      n = new Ctor(maxD);
      if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
      maxD = n.gt(d) ? (e > 0 ? d : n1) : n;
    }

    external = false;
    n = new Ctor(digitsToString(xd));
    pr = Ctor.precision;
    Ctor.precision = e = xd.length * LOG_BASE * 2;

    for (;;)  {
      q = divide(n, d, 0, 1, 1);
      d2 = d0.plus(q.times(d1));
      if (d2.cmp(maxD) == 1) break;
      d0 = d1;
      d1 = d2;
      d2 = n1;
      n1 = n0.plus(q.times(d2));
      n0 = d2;
      d2 = d;
      d = n.minus(q.times(d2));
      n = d2;
    }

    d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;

    // Determine which fraction is closer to x, n0/d0 or n1/d1?
    r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1
        ? [n1, d1] : [n0, d0];

    Ctor.precision = pr;
    external = true;

    return r;
  };


  /*
   * Return a string representing the value of this Decimal in base 16, round to `sd` significant
   * digits using rounding mode `rm`.
   *
   * If the optional `sd` argument is present then return binary exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toHexadecimal = P.toHex = function (sd, rm) {
    return toStringBinary(this, 16, sd, rm);
  };


  /*
   * Returns a new Decimal whose value is the nearest multiple of `y` in the direction of rounding
   * mode `rm`, or `Decimal.rounding` if `rm` is omitted, to the value of this Decimal.
   *
   * The return value will always have the same sign as this Decimal, unless either this Decimal
   * or `y` is NaN, in which case the return value will be also be NaN.
   *
   * The return value is not affected by the value of `precision`.
   *
   * y {number|string|Decimal} The magnitude to round to a multiple of.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * 'toNearest() rounding mode not an integer: {rm}'
   * 'toNearest() rounding mode out of range: {rm}'
   *
   */
  P.toNearest = function (y, rm) {
    var x = this,
      Ctor = x.constructor;

    x = new Ctor(x);

    if (y == null) {

      // If x is not finite, return x.
      if (!x.d) return x;

      y = new Ctor(1);
      rm = Ctor.rounding;
    } else {
      y = new Ctor(y);
      if (rm === void 0) {
        rm = Ctor.rounding;
      } else {
        checkInt32(rm, 0, 8);
      }

      // If x is not finite, return x if y is not NaN, else NaN.
      if (!x.d) return y.s ? x : y;

      // If y is not finite, return Infinity with the sign of x if y is Infinity, else NaN.
      if (!y.d) {
        if (y.s) y.s = x.s;
        return y;
      }
    }

    // If y is not zero, calculate the nearest multiple of y to x.
    if (y.d[0]) {
      external = false;
      x = divide(x, y, 0, rm, 1).times(y);
      external = true;
      finalise(x);

    // If y is zero, return zero with the sign of x.
    } else {
      y.s = x.s;
      x = y;
    }

    return x;
  };


  /*
   * Return the value of this Decimal converted to a number primitive.
   * Zero keeps its sign.
   *
   */
  P.toNumber = function () {
    return +this;
  };


  /*
   * Return a string representing the value of this Decimal in base 8, round to `sd` significant
   * digits using rounding mode `rm`.
   *
   * If the optional `sd` argument is present then return binary exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toOctal = function (sd, rm) {
    return toStringBinary(this, 8, sd, rm);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal raised to the power `y`, rounded
   * to `precision` significant digits using rounding mode `rounding`.
   *
   * ECMAScript compliant.
   *
   *   pow(x, NaN)                           = NaN
   *   pow(x, ±0)                            = 1

   *   pow(NaN, non-zero)                    = NaN
   *   pow(abs(x) > 1, +Infinity)            = +Infinity
   *   pow(abs(x) > 1, -Infinity)            = +0
   *   pow(abs(x) == 1, ±Infinity)           = NaN
   *   pow(abs(x) < 1, +Infinity)            = +0
   *   pow(abs(x) < 1, -Infinity)            = +Infinity
   *   pow(+Infinity, y > 0)                 = +Infinity
   *   pow(+Infinity, y < 0)                 = +0
   *   pow(-Infinity, odd integer > 0)       = -Infinity
   *   pow(-Infinity, even integer > 0)      = +Infinity
   *   pow(-Infinity, odd integer < 0)       = -0
   *   pow(-Infinity, even integer < 0)      = +0
   *   pow(+0, y > 0)                        = +0
   *   pow(+0, y < 0)                        = +Infinity
   *   pow(-0, odd integer > 0)              = -0
   *   pow(-0, even integer > 0)             = +0
   *   pow(-0, odd integer < 0)              = -Infinity
   *   pow(-0, even integer < 0)             = +Infinity
   *   pow(finite x < 0, finite non-integer) = NaN
   *
   * For non-integer or very large exponents pow(x, y) is calculated using
   *
   *   x^y = exp(y*ln(x))
   *
   * Assuming the first 15 rounding digits are each equally likely to be any digit 0-9, the
   * probability of an incorrectly rounded result
   * P([49]9{14} | [50]0{14}) = 2 * 0.2 * 10^-14 = 4e-15 = 1/2.5e+14
   * i.e. 1 in 250,000,000,000,000
   *
   * If a result is incorrectly rounded the maximum error will be 1 ulp (unit in last place).
   *
   * y {number|string|Decimal} The power to which to raise this Decimal.
   *
   */
  P.toPower = P.pow = function (y) {
    var e, k, pr, r, rm, s,
      x = this,
      Ctor = x.constructor,
      yn = +(y = new Ctor(y));

    // Either ±Infinity, NaN or ±0?
    if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));

    x = new Ctor(x);

    if (x.eq(1)) return x;

    pr = Ctor.precision;
    rm = Ctor.rounding;

    if (y.eq(1)) return finalise(x, pr, rm);

    // y exponent
    e = mathfloor(y.e / LOG_BASE);

    // If y is a small integer use the 'exponentiation by squaring' algorithm.
    if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
      r = intPow(Ctor, x, k, pr);
      return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
    }

    s = x.s;

    // if x is negative
    if (s < 0) {

      // if y is not an integer
      if (e < y.d.length - 1) return new Ctor(NaN);

      // Result is positive if x is negative and the last digit of integer y is even.
      if ((y.d[e] & 1) == 0) s = 1;

      // if x.eq(-1)
      if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
        x.s = s;
        return x;
      }
    }

    // Estimate result exponent.
    // x^y = 10^e,  where e = y * log10(x)
    // log10(x) = log10(x_significand) + x_exponent
    // log10(x_significand) = ln(x_significand) / ln(10)
    k = mathpow(+x, yn);
    e = k == 0 || !isFinite(k)
      ? mathfloor(yn * (Math.log('0.' + digitsToString(x.d)) / Math.LN10 + x.e + 1))
      : new Ctor(k + '').e;

    // Exponent estimate may be incorrect e.g. x: 0.999999999999999999, y: 2.29, e: 0, r.e: -1.

    // Overflow/underflow?
    if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);

    external = false;
    Ctor.rounding = x.s = 1;

    // Estimate the extra guard digits needed to ensure five correct rounding digits from
    // naturalLogarithm(x). Example of failure without these extra digits (precision: 10):
    // new Decimal(2.32456).pow('2087987436534566.46411')
    // should be 1.162377823e+764914905173815, but is 1.162355823e+764914905173815
    k = Math.min(12, (e + '').length);

    // r = x^y = exp(y*ln(x))
    r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);

    // r may be Infinity, e.g. (0.9999999999999999).pow(-1e+40)
    if (r.d) {

      // Truncate to the required precision plus five rounding digits.
      r = finalise(r, pr + 5, 1);

      // If the rounding digits are [49]9999 or [50]0000 increase the precision by 10 and recalculate
      // the result.
      if (checkRoundingDigits(r.d, pr, rm)) {
        e = pr + 10;

        // Truncate to the increased precision plus five rounding digits.
        r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);

        // Check for 14 nines from the 2nd rounding digit (the first rounding digit may be 4 or 9).
        if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
          r = finalise(r, pr + 1, 0);
        }
      }
    }

    r.s = s;
    external = true;
    Ctor.rounding = rm;

    return finalise(r, pr, rm);
  };


  /*
   * Return a string representing the value of this Decimal rounded to `sd` significant digits
   * using rounding mode `rounding`.
   *
   * Return exponential notation if `sd` is less than the number of digits necessary to represent
   * the integer part of the value in normal notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toPrecision = function (sd, rm) {
    var str,
      x = this,
      Ctor = x.constructor;

    if (sd === void 0) {
      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    } else {
      checkInt32(sd, 1, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);

      x = finalise(new Ctor(x), sd, rm);
      str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
    }

    return x.isNeg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `sd`
   * significant digits using rounding mode `rm`, or to `precision` and `rounding` respectively if
   * omitted.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * 'toSD() digits out of range: {sd}'
   * 'toSD() digits not an integer: {sd}'
   * 'toSD() rounding mode not an integer: {rm}'
   * 'toSD() rounding mode out of range: {rm}'
   *
   */
  P.toSignificantDigits = P.toSD = function (sd, rm) {
    var x = this,
      Ctor = x.constructor;

    if (sd === void 0) {
      sd = Ctor.precision;
      rm = Ctor.rounding;
    } else {
      checkInt32(sd, 1, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);
    }

    return finalise(new Ctor(x), sd, rm);
  };


  /*
   * Return a string representing the value of this Decimal.
   *
   * Return exponential notation if this Decimal has a positive exponent equal to or greater than
   * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
   *
   */
  P.toString = function () {
    var x = this,
      Ctor = x.constructor,
      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);

    return x.isNeg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal truncated to a whole number.
   *
   */
  P.truncated = P.trunc = function () {
    return finalise(new this.constructor(this), this.e + 1, 1);
  };


  /*
   * Return a string representing the value of this Decimal.
   * Unlike `toString`, negative zero will include the minus sign.
   *
   */
  P.valueOf = P.toJSON = function () {
    var x = this,
      Ctor = x.constructor,
      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);

    return x.isNeg() ? '-' + str : str;
  };


  // Helper functions for Decimal.prototype (P) and/or Decimal methods, and their callers.


  /*
   *  digitsToString           P.cubeRoot, P.logarithm, P.squareRoot, P.toFraction, P.toPower,
   *                           finiteToString, naturalExponential, naturalLogarithm
   *  checkInt32               P.toDecimalPlaces, P.toExponential, P.toFixed, P.toNearest,
   *                           P.toPrecision, P.toSignificantDigits, toStringBinary, random
   *  checkRoundingDigits      P.logarithm, P.toPower, naturalExponential, naturalLogarithm
   *  convertBase              toStringBinary, parseOther
   *  cos                      P.cos
   *  divide                   P.atanh, P.cubeRoot, P.dividedBy, P.dividedToIntegerBy,
   *                           P.logarithm, P.modulo, P.squareRoot, P.tan, P.tanh, P.toFraction,
   *                           P.toNearest, toStringBinary, naturalExponential, naturalLogarithm,
   *                           taylorSeries, atan2, parseOther
   *  finalise                 P.absoluteValue, P.atan, P.atanh, P.ceil, P.cos, P.cosh,
   *                           P.cubeRoot, P.dividedToIntegerBy, P.floor, P.logarithm, P.minus,
   *                           P.modulo, P.negated, P.plus, P.round, P.sin, P.sinh, P.squareRoot,
   *                           P.tan, P.times, P.toDecimalPlaces, P.toExponential, P.toFixed,
   *                           P.toNearest, P.toPower, P.toPrecision, P.toSignificantDigits,
   *                           P.truncated, divide, getLn10, getPi, naturalExponential,
   *                           naturalLogarithm, ceil, floor, round, trunc
   *  finiteToString           P.toExponential, P.toFixed, P.toPrecision, P.toString, P.valueOf,
   *                           toStringBinary
   *  getBase10Exponent        P.minus, P.plus, P.times, parseOther
   *  getLn10                  P.logarithm, naturalLogarithm
   *  getPi                    P.acos, P.asin, P.atan, toLessThanHalfPi, atan2
   *  getPrecision             P.precision, P.toFraction
   *  getZeroString            digitsToString, finiteToString
   *  intPow                   P.toPower, parseOther
   *  isOdd                    toLessThanHalfPi
   *  maxOrMin                 max, min
   *  naturalExponential       P.naturalExponential, P.toPower
   *  naturalLogarithm         P.acosh, P.asinh, P.atanh, P.logarithm, P.naturalLogarithm,
   *                           P.toPower, naturalExponential
   *  nonFiniteToString        finiteToString, toStringBinary
   *  parseDecimal             Decimal
   *  parseOther               Decimal
   *  sin                      P.sin
   *  taylorSeries             P.cosh, P.sinh, cos, sin
   *  toLessThanHalfPi         P.cos, P.sin
   *  toStringBinary           P.toBinary, P.toHexadecimal, P.toOctal
   *  truncate                 intPow
   *
   *  Throws:                  P.logarithm, P.precision, P.toFraction, checkInt32, getLn10, getPi,
   *                           naturalLogarithm, config, parseOther, random, Decimal
   */


  function digitsToString(d) {
    var i, k, ws,
      indexOfLastWord = d.length - 1,
      str = '',
      w = d[0];

    if (indexOfLastWord > 0) {
      str += w;
      for (i = 1; i < indexOfLastWord; i++) {
        ws = d[i] + '';
        k = LOG_BASE - ws.length;
        if (k) str += getZeroString(k);
        str += ws;
      }

      w = d[i];
      ws = w + '';
      k = LOG_BASE - ws.length;
      if (k) str += getZeroString(k);
    } else if (w === 0) {
      return '0';
    }

    // Remove trailing zeros of last w.
    for (; w % 10 === 0;) w /= 10;

    return str + w;
  }


  function checkInt32(i, min, max) {
    if (i !== ~~i || i < min || i > max) {
      throw Error(invalidArgument + i);
    }
  }


  /*
   * Check 5 rounding digits if `repeating` is null, 4 otherwise.
   * `repeating == null` if caller is `log` or `pow`,
   * `repeating != null` if caller is `naturalLogarithm` or `naturalExponential`.
   */
  function checkRoundingDigits(d, i, rm, repeating) {
    var di, k, r, rd;

    // Get the length of the first word of the array d.
    for (k = d[0]; k >= 10; k /= 10) --i;

    // Is the rounding digit in the first word of d?
    if (--i < 0) {
      i += LOG_BASE;
      di = 0;
    } else {
      di = Math.ceil((i + 1) / LOG_BASE);
      i %= LOG_BASE;
    }

    // i is the index (0 - 6) of the rounding digit.
    // E.g. if within the word 3487563 the first rounding digit is 5,
    // then i = 4, k = 1000, rd = 3487563 % 1000 = 563
    k = mathpow(10, LOG_BASE - i);
    rd = d[di] % k | 0;

    if (repeating == null) {
      if (i < 3) {
        if (i == 0) rd = rd / 100 | 0;
        else if (i == 1) rd = rd / 10 | 0;
        r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 50000 || rd == 0;
      } else {
        r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) &&
          (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 ||
            (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
      }
    } else {
      if (i < 4) {
        if (i == 0) rd = rd / 1000 | 0;
        else if (i == 1) rd = rd / 100 | 0;
        else if (i == 2) rd = rd / 10 | 0;
        r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
      } else {
        r = ((repeating || rm < 4) && rd + 1 == k ||
        (!repeating && rm > 3) && rd + 1 == k / 2) &&
          (d[di + 1] / k / 1000 | 0) == mathpow(10, i - 3) - 1;
      }
    }

    return r;
  }


  // Convert string of `baseIn` to an array of numbers of `baseOut`.
  // Eg. convertBase('255', 10, 16) returns [15, 15].
  // Eg. convertBase('ff', 16, 10) returns [2, 5, 5].
  function convertBase(str, baseIn, baseOut) {
    var j,
      arr = [0],
      arrL,
      i = 0,
      strL = str.length;

    for (; i < strL;) {
      for (arrL = arr.length; arrL--;) arr[arrL] *= baseIn;
      arr[0] += NUMERALS.indexOf(str.charAt(i++));
      for (j = 0; j < arr.length; j++) {
        if (arr[j] > baseOut - 1) {
          if (arr[j + 1] === void 0) arr[j + 1] = 0;
          arr[j + 1] += arr[j] / baseOut | 0;
          arr[j] %= baseOut;
        }
      }
    }

    return arr.reverse();
  }


  /*
   * cos(x) = 1 - x^2/2! + x^4/4! - ...
   * |x| < pi/2
   *
   */
  function cosine(Ctor, x) {
    var k, len, y;

    if (x.isZero()) return x;

    // Argument reduction: cos(4x) = 8*(cos^4(x) - cos^2(x)) + 1
    // i.e. cos(x) = 8*(cos^4(x/4) - cos^2(x/4)) + 1

    // Estimate the optimum number of times to use the argument reduction.
    len = x.d.length;
    if (len < 32) {
      k = Math.ceil(len / 3);
      y = (1 / tinyPow(4, k)).toString();
    } else {
      k = 16;
      y = '2.3283064365386962890625e-10';
    }

    Ctor.precision += k;

    x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));

    // Reverse argument reduction
    for (var i = k; i--;) {
      var cos2x = x.times(x);
      x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
    }

    Ctor.precision -= k;

    return x;
  }


  /*
   * Perform division in the specified base.
   */
  var divide = (function () {

    // Assumes non-zero x and k, and hence non-zero result.
    function multiplyInteger(x, k, base) {
      var temp,
        carry = 0,
        i = x.length;

      for (x = x.slice(); i--;) {
        temp = x[i] * k + carry;
        x[i] = temp % base | 0;
        carry = temp / base | 0;
      }

      if (carry) x.unshift(carry);

      return x;
    }

    function compare(a, b, aL, bL) {
      var i, r;

      if (aL != bL) {
        r = aL > bL ? 1 : -1;
      } else {
        for (i = r = 0; i < aL; i++) {
          if (a[i] != b[i]) {
            r = a[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }

      return r;
    }

    function subtract(a, b, aL, base) {
      var i = 0;

      // Subtract b from a.
      for (; aL--;) {
        a[aL] -= i;
        i = a[aL] < b[aL] ? 1 : 0;
        a[aL] = i * base + a[aL] - b[aL];
      }

      // Remove leading zeros.
      for (; !a[0] && a.length > 1;) a.shift();
    }

    return function (x, y, pr, rm, dp, base) {
      var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0,
        yL, yz,
        Ctor = x.constructor,
        sign = x.s == y.s ? 1 : -1,
        xd = x.d,
        yd = y.d;

      // Either NaN, Infinity or 0?
      if (!xd || !xd[0] || !yd || !yd[0]) {

        return new Ctor(// Return NaN if either NaN, or both Infinity or 0.
          !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN :

          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          xd && xd[0] == 0 || !yd ? sign * 0 : sign / 0);
      }

      if (base) {
        logBase = 1;
        e = x.e - y.e;
      } else {
        base = BASE;
        logBase = LOG_BASE;
        e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
      }

      yL = yd.length;
      xL = xd.length;
      q = new Ctor(sign);
      qd = q.d = [];

      // Result exponent may be one less than e.
      // The digit array of a Decimal from toStringBinary may have trailing zeros.
      for (i = 0; yd[i] == (xd[i] || 0); i++);

      if (yd[i] > (xd[i] || 0)) e--;

      if (pr == null) {
        sd = pr = Ctor.precision;
        rm = Ctor.rounding;
      } else if (dp) {
        sd = pr + (x.e - y.e) + 1;
      } else {
        sd = pr;
      }

      if (sd < 0) {
        qd.push(1);
        more = true;
      } else {

        // Convert precision in number of base 10 digits to base 1e7 digits.
        sd = sd / logBase + 2 | 0;
        i = 0;

        // divisor < 1e7
        if (yL == 1) {
          k = 0;
          yd = yd[0];
          sd++;

          // k is the carry.
          for (; (i < xL || k) && sd--; i++) {
            t = k * base + (xd[i] || 0);
            qd[i] = t / yd | 0;
            k = t % yd | 0;
          }

          more = k || i < xL;

        // divisor >= 1e7
        } else {

          // Normalise xd and yd so highest order digit of yd is >= base/2
          k = base / (yd[0] + 1) | 0;

          if (k > 1) {
            yd = multiplyInteger(yd, k, base);
            xd = multiplyInteger(xd, k, base);
            yL = yd.length;
            xL = xd.length;
          }

          xi = yL;
          rem = xd.slice(0, yL);
          remL = rem.length;

          // Add zeros to make remainder as long as divisor.
          for (; remL < yL;) rem[remL++] = 0;

          yz = yd.slice();
          yz.unshift(0);
          yd0 = yd[0];

          if (yd[1] >= base / 2) ++yd0;

          do {
            k = 0;

            // Compare divisor and remainder.
            cmp = compare(yd, rem, yL, remL);

            // If divisor < remainder.
            if (cmp < 0) {

              // Calculate trial digit, k.
              rem0 = rem[0];
              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

              // k will be how many times the divisor goes into the current remainder.
              k = rem0 / yd0 | 0;

              //  Algorithm:
              //  1. product = divisor * trial digit (k)
              //  2. if product > remainder: product -= divisor, k--
              //  3. remainder -= product
              //  4. if product was < remainder at 2:
              //    5. compare new remainder and divisor
              //    6. If remainder > divisor: remainder -= divisor, k++

              if (k > 1) {
                if (k >= base) k = base - 1;

                // product = divisor * trial digit.
                prod = multiplyInteger(yd, k, base);
                prodL = prod.length;
                remL = rem.length;

                // Compare product and remainder.
                cmp = compare(prod, rem, prodL, remL);

                // product > remainder.
                if (cmp == 1) {
                  k--;

                  // Subtract divisor from product.
                  subtract(prod, yL < prodL ? yz : yd, prodL, base);
                }
              } else {

                // cmp is -1.
                // If k is 0, there is no need to compare yd and rem again below, so change cmp to 1
                // to avoid it. If k is 1 there is a need to compare yd and rem again below.
                if (k == 0) cmp = k = 1;
                prod = yd.slice();
              }

              prodL = prod.length;
              if (prodL < remL) prod.unshift(0);

              // Subtract product from remainder.
              subtract(rem, prod, remL, base);

              // If product was < previous remainder.
              if (cmp == -1) {
                remL = rem.length;

                // Compare divisor and new remainder.
                cmp = compare(yd, rem, yL, remL);

                // If divisor < new remainder, subtract divisor from remainder.
                if (cmp < 1) {
                  k++;

                  // Subtract divisor from remainder.
                  subtract(rem, yL < remL ? yz : yd, remL, base);
                }
              }

              remL = rem.length;
            } else if (cmp === 0) {
              k++;
              rem = [0];
            }    // if cmp === 1, k will be 0

            // Add the next digit, k, to the result array.
            qd[i++] = k;

            // Update the remainder.
            if (cmp && rem[0]) {
              rem[remL++] = xd[xi] || 0;
            } else {
              rem = [xd[xi]];
              remL = 1;
            }

          } while ((xi++ < xL || rem[0] !== void 0) && sd--);

          more = rem[0] !== void 0;
        }

        // Leading zero?
        if (!qd[0]) qd.shift();
      }

      // logBase is 1 when divide is being used for base conversion.
      if (logBase == 1) {
        q.e = e;
        inexact = more;
      } else {

        // To calculate q.e, first get the number of digits of qd[0].
        for (i = 1, k = qd[0]; k >= 10; k /= 10) i++;
        q.e = i + e * logBase - 1;

        finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
      }

      return q;
    };
  })();


  /*
   * Round `x` to `sd` significant digits using rounding mode `rm`.
   * Check for over/under-flow.
   */
   function finalise(x, sd, rm, isTruncated) {
    var digits, i, j, k, rd, roundUp, w, xd, xdi,
      Ctor = x.constructor;

    // Don't round if sd is null or undefined.
    out: if (sd != null) {
      xd = x.d;

      // Infinity/NaN.
      if (!xd) return x;

      // rd: the rounding digit, i.e. the digit after the digit that may be rounded up.
      // w: the word of xd containing rd, a base 1e7 number.
      // xdi: the index of w within xd.
      // digits: the number of digits of w.
      // i: what would be the index of rd within w if all the numbers were 7 digits long (i.e. if
      // they had leading zeros)
      // j: if > 0, the actual index of rd within w (if < 0, rd is a leading zero).

      // Get the length of the first word of the digits array xd.
      for (digits = 1, k = xd[0]; k >= 10; k /= 10) digits++;
      i = sd - digits;

      // Is the rounding digit in the first word of xd?
      if (i < 0) {
        i += LOG_BASE;
        j = sd;
        w = xd[xdi = 0];

        // Get the rounding digit at index j of w.
        rd = w / mathpow(10, digits - j - 1) % 10 | 0;
      } else {
        xdi = Math.ceil((i + 1) / LOG_BASE);
        k = xd.length;
        if (xdi >= k) {
          if (isTruncated) {

            // Needed by `naturalExponential`, `naturalLogarithm` and `squareRoot`.
            for (; k++ <= xdi;) xd.push(0);
            w = rd = 0;
            digits = 1;
            i %= LOG_BASE;
            j = i - LOG_BASE + 1;
          } else {
            break out;
          }
        } else {
          w = k = xd[xdi];

          // Get the number of digits of w.
          for (digits = 1; k >= 10; k /= 10) digits++;

          // Get the index of rd within w.
          i %= LOG_BASE;

          // Get the index of rd within w, adjusted for leading zeros.
          // The number of leading zeros of w is given by LOG_BASE - digits.
          j = i - LOG_BASE + digits;

          // Get the rounding digit at index j of w.
          rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
        }
      }

      // Are there any non-zero digits after the rounding digit?
      isTruncated = isTruncated || sd < 0 ||
        xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));

      // The expression `w % mathpow(10, digits - j - 1)` returns all the digits of w to the right
      // of the digit at (left-to-right) index j, e.g. if w is 908714 and j is 2, the expression
      // will give 714.

      roundUp = rm < 4
        ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
        : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 &&

          // Check whether the digit to the left of the rounding digit is odd.
          ((i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10) & 1 ||
            rm == (x.s < 0 ? 8 : 7));

      if (sd < 1 || !xd[0]) {
        xd.length = 0;
        if (roundUp) {

          // Convert sd to decimal places.
          sd -= x.e + 1;

          // 1, 0.1, 0.01, 0.001, 0.0001 etc.
          xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
          x.e = -sd || 0;
        } else {

          // Zero.
          xd[0] = x.e = 0;
        }

        return x;
      }

      // Remove excess digits.
      if (i == 0) {
        xd.length = xdi;
        k = 1;
        xdi--;
      } else {
        xd.length = xdi + 1;
        k = mathpow(10, LOG_BASE - i);

        // E.g. 56700 becomes 56000 if 7 is the rounding digit.
        // j > 0 means i > number of leading zeros of w.
        xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
      }

      if (roundUp) {
        for (;;) {

          // Is the digit to be rounded up in the first word of xd?
          if (xdi == 0) {

            // i will be the length of xd[0] before k is added.
            for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;
            j = xd[0] += k;
            for (k = 1; j >= 10; j /= 10) k++;

            // if i != k the length has increased.
            if (i != k) {
              x.e++;
              if (xd[0] == BASE) xd[0] = 1;
            }

            break;
          } else {
            xd[xdi] += k;
            if (xd[xdi] != BASE) break;
            xd[xdi--] = 0;
            k = 1;
          }
        }
      }

      // Remove trailing zeros.
      for (i = xd.length; xd[--i] === 0;) xd.pop();
    }

    if (external) {

      // Overflow?
      if (x.e > Ctor.maxE) {

        // Infinity.
        x.d = null;
        x.e = NaN;

      // Underflow?
      } else if (x.e < Ctor.minE) {

        // Zero.
        x.e = 0;
        x.d = [0];
        // Ctor.underflow = true;
      } // else Ctor.underflow = false;
    }

    return x;
  }


  function finiteToString(x, isExp, sd) {
    if (!x.isFinite()) return nonFiniteToString(x);
    var k,
      e = x.e,
      str = digitsToString(x.d),
      len = str.length;

    if (isExp) {
      if (sd && (k = sd - len) > 0) {
        str = str.charAt(0) + '.' + str.slice(1) + getZeroString(k);
      } else if (len > 1) {
        str = str.charAt(0) + '.' + str.slice(1);
      }

      str = str + (x.e < 0 ? 'e' : 'e+') + x.e;
    } else if (e < 0) {
      str = '0.' + getZeroString(-e - 1) + str;
      if (sd && (k = sd - len) > 0) str += getZeroString(k);
    } else if (e >= len) {
      str += getZeroString(e + 1 - len);
      if (sd && (k = sd - e - 1) > 0) str = str + '.' + getZeroString(k);
    } else {
      if ((k = e + 1) < len) str = str.slice(0, k) + '.' + str.slice(k);
      if (sd && (k = sd - len) > 0) {
        if (e + 1 === len) str += '.';
        str += getZeroString(k);
      }
    }

    return str;
  }


  // Calculate the base 10 exponent from the base 1e7 exponent.
  function getBase10Exponent(digits, e) {
    var w = digits[0];

    // Add the number of digits of the first word of the digits array.
    for ( e *= LOG_BASE; w >= 10; w /= 10) e++;
    return e;
  }


  function getLn10(Ctor, sd, pr) {
    if (sd > LN10_PRECISION) {

      // Reset global state in case the exception is caught.
      external = true;
      if (pr) Ctor.precision = pr;
      throw Error(precisionLimitExceeded);
    }
    return finalise(new Ctor(LN10), sd, 1, true);
  }


  function getPi(Ctor, sd, rm) {
    if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
    return finalise(new Ctor(PI), sd, rm, true);
  }


  function getPrecision(digits) {
    var w = digits.length - 1,
      len = w * LOG_BASE + 1;

    w = digits[w];

    // If non-zero...
    if (w) {

      // Subtract the number of trailing zeros of the last word.
      for (; w % 10 == 0; w /= 10) len--;

      // Add the number of digits of the first word.
      for (w = digits[0]; w >= 10; w /= 10) len++;
    }

    return len;
  }


  function getZeroString(k) {
    var zs = '';
    for (; k--;) zs += '0';
    return zs;
  }


  /*
   * Return a new Decimal whose value is the value of Decimal `x` to the power `n`, where `n` is an
   * integer of type number.
   *
   * Implements 'exponentiation by squaring'. Called by `pow` and `parseOther`.
   *
   */
  function intPow(Ctor, x, n, pr) {
    var isTruncated,
      r = new Ctor(1),

      // Max n of 9007199254740991 takes 53 loop iterations.
      // Maximum digits array length; leaves [28, 34] guard digits.
      k = Math.ceil(pr / LOG_BASE + 4);

    external = false;

    for (;;) {
      if (n % 2) {
        r = r.times(x);
        if (truncate(r.d, k)) isTruncated = true;
      }

      n = mathfloor(n / 2);
      if (n === 0) {

        // To ensure correct rounding when r.d is truncated, increment the last word if it is zero.
        n = r.d.length - 1;
        if (isTruncated && r.d[n] === 0) ++r.d[n];
        break;
      }

      x = x.times(x);
      truncate(x.d, k);
    }

    external = true;

    return r;
  }


  function isOdd(n) {
    return n.d[n.d.length - 1] & 1;
  }


  /*
   * Handle `max` and `min`. `ltgt` is 'lt' or 'gt'.
   */
  function maxOrMin(Ctor, args, ltgt) {
    var y,
      x = new Ctor(args[0]),
      i = 0;

    for (; ++i < args.length;) {
      y = new Ctor(args[i]);
      if (!y.s) {
        x = y;
        break;
      } else if (x[ltgt](y)) {
        x = y;
      }
    }

    return x;
  }


  /*
   * Return a new Decimal whose value is the natural exponential of `x` rounded to `sd` significant
   * digits.
   *
   * Taylor/Maclaurin series.
   *
   * exp(x) = x^0/0! + x^1/1! + x^2/2! + x^3/3! + ...
   *
   * Argument reduction:
   *   Repeat x = x / 32, k += 5, until |x| < 0.1
   *   exp(x) = exp(x / 2^k)^(2^k)
   *
   * Previously, the argument was initially reduced by
   * exp(x) = exp(r) * 10^k  where r = x - k * ln10, k = floor(x / ln10)
   * to first put r in the range [0, ln10], before dividing by 32 until |x| < 0.1, but this was
   * found to be slower than just dividing repeatedly by 32 as above.
   *
   * Max integer argument: exp('20723265836946413') = 6.3e+9000000000000000
   * Min integer argument: exp('-20723265836946411') = 1.2e-9000000000000000
   * (Math object integer min/max: Math.exp(709) = 8.2e+307, Math.exp(-745) = 5e-324)
   *
   *  exp(Infinity)  = Infinity
   *  exp(-Infinity) = 0
   *  exp(NaN)       = NaN
   *  exp(±0)        = 1
   *
   *  exp(x) is non-terminating for any finite, non-zero x.
   *
   *  The result will always be correctly rounded.
   *
   */
  function naturalExponential(x, sd) {
    var denominator, guard, j, pow, sum, t, wpr,
      rep = 0,
      i = 0,
      k = 0,
      Ctor = x.constructor,
      rm = Ctor.rounding,
      pr = Ctor.precision;

    // 0/NaN/Infinity?
    if (!x.d || !x.d[0] || x.e > 17) {

      return new Ctor(x.d
        ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0
        : x.s ? x.s < 0 ? 0 : x : 0 / 0);
    }

    if (sd == null) {
      external = false;
      wpr = pr;
    } else {
      wpr = sd;
    }

    t = new Ctor(0.03125);

    // while abs(x) >= 0.1
    while (x.e > -2) {

      // x = x / 2^5
      x = x.times(t);
      k += 5;
    }

    // Use 2 * log10(2^k) + 5 (empirically derived) to estimate the increase in precision
    // necessary to ensure the first 4 rounding digits are correct.
    guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
    wpr += guard;
    denominator = pow = sum = new Ctor(1);
    Ctor.precision = wpr;

    for (;;) {
      pow = finalise(pow.times(x), wpr, 1);
      denominator = denominator.times(++i);
      t = sum.plus(divide(pow, denominator, wpr, 1));

      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
        j = k;
        while (j--) sum = finalise(sum.times(sum), wpr, 1);

        // Check to see if the first 4 rounding digits are [49]999.
        // If so, repeat the summation with a higher precision, otherwise
        // e.g. with precision: 18, rounding: 1
        // exp(18.404272462595034083567793919843761) = 98372560.1229999999 (should be 98372560.123)
        // `wpr - guard` is the index of first rounding digit.
        if (sd == null) {

          if (rep < 3 && checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
            Ctor.precision = wpr += 10;
            denominator = pow = t = new Ctor(1);
            i = 0;
            rep++;
          } else {
            return finalise(sum, Ctor.precision = pr, rm, external = true);
          }
        } else {
          Ctor.precision = pr;
          return sum;
        }
      }

      sum = t;
    }
  }


  /*
   * Return a new Decimal whose value is the natural logarithm of `x` rounded to `sd` significant
   * digits.
   *
   *  ln(-n)        = NaN
   *  ln(0)         = -Infinity
   *  ln(-0)        = -Infinity
   *  ln(1)         = 0
   *  ln(Infinity)  = Infinity
   *  ln(-Infinity) = NaN
   *  ln(NaN)       = NaN
   *
   *  ln(n) (n != 1) is non-terminating.
   *
   */
  function naturalLogarithm(y, sd) {
    var c, c0, denominator, e, numerator, rep, sum, t, wpr, x1, x2,
      n = 1,
      guard = 10,
      x = y,
      xd = x.d,
      Ctor = x.constructor,
      rm = Ctor.rounding,
      pr = Ctor.precision;

    // Is x negative or Infinity, NaN, 0 or 1?
    if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
      return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
    }

    if (sd == null) {
      external = false;
      wpr = pr;
    } else {
      wpr = sd;
    }

    Ctor.precision = wpr += guard;
    c = digitsToString(xd);
    c0 = c.charAt(0);

    if (Math.abs(e = x.e) < 1.5e15) {

      // Argument reduction.
      // The series converges faster the closer the argument is to 1, so using
      // ln(a^b) = b * ln(a),   ln(a) = ln(a^b) / b
      // multiply the argument by itself until the leading digits of the significand are 7, 8, 9,
      // 10, 11, 12 or 13, recording the number of multiplications so the sum of the series can
      // later be divided by this number, then separate out the power of 10 using
      // ln(a*10^b) = ln(a) + b*ln(10).

      // max n is 21 (gives 0.9, 1.0 or 1.1) (9e15 / 21 = 4.2e14).
      //while (c0 < 9 && c0 != 1 || c0 == 1 && c.charAt(1) > 1) {
      // max n is 6 (gives 0.7 - 1.3)
      while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
        x = x.times(y);
        c = digitsToString(x.d);
        c0 = c.charAt(0);
        n++;
      }

      e = x.e;

      if (c0 > 1) {
        x = new Ctor('0.' + c);
        e++;
      } else {
        x = new Ctor(c0 + '.' + c.slice(1));
      }
    } else {

      // The argument reduction method above may result in overflow if the argument y is a massive
      // number with exponent >= 1500000000000000 (9e15 / 6 = 1.5e15), so instead recall this
      // function using ln(x*10^e) = ln(x) + e*ln(10).
      t = getLn10(Ctor, wpr + 2, pr).times(e + '');
      x = naturalLogarithm(new Ctor(c0 + '.' + c.slice(1)), wpr - guard).plus(t);
      Ctor.precision = pr;

      return sd == null ? finalise(x, pr, rm, external = true) : x;
    }

    // x1 is x reduced to a value near 1.
    x1 = x;

    // Taylor series.
    // ln(y) = ln((1 + x)/(1 - x)) = 2(x + x^3/3 + x^5/5 + x^7/7 + ...)
    // where x = (y - 1)/(y + 1)    (|x| < 1)
    sum = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
    x2 = finalise(x.times(x), wpr, 1);
    denominator = 3;

    for (;;) {
      numerator = finalise(numerator.times(x2), wpr, 1);
      t = sum.plus(divide(numerator, new Ctor(denominator), wpr, 1));

      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
        sum = sum.times(2);

        // Reverse the argument reduction. Check that e is not 0 because, besides preventing an
        // unnecessary calculation, -0 + 0 = +0 and to ensure correct rounding -0 needs to stay -0.
        if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ''));
        sum = divide(sum, new Ctor(n), wpr, 1);

        // Is rm > 3 and the first 4 rounding digits 4999, or rm < 4 (or the summation has
        // been repeated previously) and the first 4 rounding digits 9999?
        // If so, restart the summation with a higher precision, otherwise
        // e.g. with precision: 12, rounding: 1
        // ln(135520028.6126091714265381533) = 18.7246299999 when it should be 18.72463.
        // `wpr - guard` is the index of first rounding digit.
        if (sd == null) {
          if (checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
            Ctor.precision = wpr += guard;
            t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
            x2 = finalise(x.times(x), wpr, 1);
            denominator = rep = 1;
          } else {
            return finalise(sum, Ctor.precision = pr, rm, external = true);
          }
        } else {
          Ctor.precision = pr;
          return sum;
        }
      }

      sum = t;
      denominator += 2;
    }
  }


  // ±Infinity, NaN.
  function nonFiniteToString(x) {
    // Unsigned.
    return String(x.s * x.s / 0);
  }


  /*
   * Parse the value of a new Decimal `x` from string `str`.
   */
  function parseDecimal(x, str) {
    var e, i, len;

    // Decimal point?
    if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

    // Exponential form?
    if ((i = str.search(/e/i)) > 0) {

      // Determine exponent.
      if (e < 0) e = i;
      e += +str.slice(i + 1);
      str = str.substring(0, i);
    } else if (e < 0) {

      // Integer.
      e = str.length;
    }

    // Determine leading zeros.
    for (i = 0; str.charCodeAt(i) === 48; i++);

    // Determine trailing zeros.
    for (len = str.length; str.charCodeAt(len - 1) === 48; --len);
    str = str.slice(i, len);

    if (str) {
      len -= i;
      x.e = e = e - i - 1;
      x.d = [];

      // Transform base

      // e is the base 10 exponent.
      // i is where to slice str to get the first word of the digits array.
      i = (e + 1) % LOG_BASE;
      if (e < 0) i += LOG_BASE;

      if (i < len) {
        if (i) x.d.push(+str.slice(0, i));
        for (len -= LOG_BASE; i < len;) x.d.push(+str.slice(i, i += LOG_BASE));
        str = str.slice(i);
        i = LOG_BASE - str.length;
      } else {
        i -= len;
      }

      for (; i--;) str += '0';
      x.d.push(+str);

      if (external) {

        // Overflow?
        if (x.e > x.constructor.maxE) {

          // Infinity.
          x.d = null;
          x.e = NaN;

        // Underflow?
        } else if (x.e < x.constructor.minE) {

          // Zero.
          x.e = 0;
          x.d = [0];
          // x.constructor.underflow = true;
        } // else x.constructor.underflow = false;
      }
    } else {

      // Zero.
      x.e = 0;
      x.d = [0];
    }

    return x;
  }


  /*
   * Parse the value of a new Decimal `x` from a string `str`, which is not a decimal value.
   */
  function parseOther(x, str) {
    var base, Ctor, divisor, i, isFloat, len, p, xd, xe;

    if (str.indexOf('_') > -1) {
      str = str.replace(/(\d)_(?=\d)/g, '$1');
      if (isDecimal.test(str)) return parseDecimal(x, str);
    } else if (str === 'Infinity' || str === 'NaN') {
      if (!+str) x.s = NaN;
      x.e = NaN;
      x.d = null;
      return x;
    }

    if (isHex.test(str))  {
      base = 16;
      str = str.toLowerCase();
    } else if (isBinary.test(str))  {
      base = 2;
    } else if (isOctal.test(str))  {
      base = 8;
    } else {
      throw Error(invalidArgument + str);
    }

    // Is there a binary exponent part?
    i = str.search(/p/i);

    if (i > 0) {
      p = +str.slice(i + 1);
      str = str.substring(2, i);
    } else {
      str = str.slice(2);
    }

    // Convert `str` as an integer then divide the result by `base` raised to a power such that the
    // fraction part will be restored.
    i = str.indexOf('.');
    isFloat = i >= 0;
    Ctor = x.constructor;

    if (isFloat) {
      str = str.replace('.', '');
      len = str.length;
      i = len - i;

      // log[10](16) = 1.2041... , log[10](88) = 1.9444....
      divisor = intPow(Ctor, new Ctor(base), i, i * 2);
    }

    xd = convertBase(str, base, BASE);
    xe = xd.length - 1;

    // Remove trailing zeros.
    for (i = xe; xd[i] === 0; --i) xd.pop();
    if (i < 0) return new Ctor(x.s * 0);
    x.e = getBase10Exponent(xd, xe);
    x.d = xd;
    external = false;

    // At what precision to perform the division to ensure exact conversion?
    // maxDecimalIntegerPartDigitCount = ceil(log[10](b) * otherBaseIntegerPartDigitCount)
    // log[10](2) = 0.30103, log[10](8) = 0.90309, log[10](16) = 1.20412
    // E.g. ceil(1.2 * 3) = 4, so up to 4 decimal digits are needed to represent 3 hex int digits.
    // maxDecimalFractionPartDigitCount = {Hex:4|Oct:3|Bin:1} * otherBaseFractionPartDigitCount
    // Therefore using 4 * the number of digits of str will always be enough.
    if (isFloat) x = divide(x, divisor, len * 4);

    // Multiply by the binary exponent part if present.
    if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
    external = true;

    return x;
  }


  /*
   * sin(x) = x - x^3/3! + x^5/5! - ...
   * |x| < pi/2
   *
   */
  function sine(Ctor, x) {
    var k,
      len = x.d.length;

    if (len < 3) {
      return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
    }

    // Argument reduction: sin(5x) = 16*sin^5(x) - 20*sin^3(x) + 5*sin(x)
    // i.e. sin(x) = 16*sin^5(x/5) - 20*sin^3(x/5) + 5*sin(x/5)
    // and  sin(x) = sin(x/5)(5 + sin^2(x/5)(16sin^2(x/5) - 20))

    // Estimate the optimum number of times to use the argument reduction.
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;

    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x);

    // Reverse argument reduction
    var sin2_x,
      d5 = new Ctor(5),
      d16 = new Ctor(16),
      d20 = new Ctor(20);
    for (; k--;) {
      sin2_x = x.times(x);
      x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
    }

    return x;
  }


  // Calculate Taylor series for `cos`, `cosh`, `sin` and `sinh`.
  function taylorSeries(Ctor, n, x, y, isHyperbolic) {
    var j, t, u, x2,
      i = 1,
      pr = Ctor.precision,
      k = Math.ceil(pr / LOG_BASE);

    external = false;
    x2 = x.times(x);
    u = new Ctor(y);

    for (;;) {
      t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
      u = isHyperbolic ? y.plus(t) : y.minus(t);
      y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
      t = u.plus(y);

      if (t.d[k] !== void 0) {
        for (j = k; t.d[j] === u.d[j] && j--;);
        if (j == -1) break;
      }

      j = u;
      u = y;
      y = t;
      t = j;
      i++;
    }

    external = true;
    t.d.length = k + 1;

    return t;
  }


  // Exponent e must be positive and non-zero.
  function tinyPow(b, e) {
    var n = b;
    while (--e) n *= b;
    return n;
  }


  // Return the absolute value of `x` reduced to less than or equal to half pi.
  function toLessThanHalfPi(Ctor, x) {
    var t,
      isNeg = x.s < 0,
      pi = getPi(Ctor, Ctor.precision, 1),
      halfPi = pi.times(0.5);

    x = x.abs();

    if (x.lte(halfPi)) {
      quadrant = isNeg ? 4 : 1;
      return x;
    }

    t = x.divToInt(pi);

    if (t.isZero()) {
      quadrant = isNeg ? 3 : 2;
    } else {
      x = x.minus(t.times(pi));

      // 0 <= x < pi
      if (x.lte(halfPi)) {
        quadrant = isOdd(t) ? (isNeg ? 2 : 3) : (isNeg ? 4 : 1);
        return x;
      }

      quadrant = isOdd(t) ? (isNeg ? 1 : 4) : (isNeg ? 3 : 2);
    }

    return x.minus(pi).abs();
  }


  /*
   * Return the value of Decimal `x` as a string in base `baseOut`.
   *
   * If the optional `sd` argument is present include a binary exponent suffix.
   */
  function toStringBinary(x, baseOut, sd, rm) {
    var base, e, i, k, len, roundUp, str, xd, y,
      Ctor = x.constructor,
      isExp = sd !== void 0;

    if (isExp) {
      checkInt32(sd, 1, MAX_DIGITS);
      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);
    } else {
      sd = Ctor.precision;
      rm = Ctor.rounding;
    }

    if (!x.isFinite()) {
      str = nonFiniteToString(x);
    } else {
      str = finiteToString(x);
      i = str.indexOf('.');

      // Use exponential notation according to `toExpPos` and `toExpNeg`? No, but if required:
      // maxBinaryExponent = floor((decimalExponent + 1) * log[2](10))
      // minBinaryExponent = floor(decimalExponent * log[2](10))
      // log[2](10) = 3.321928094887362347870319429489390175864

      if (isExp) {
        base = 2;
        if (baseOut == 16) {
          sd = sd * 4 - 3;
        } else if (baseOut == 8) {
          sd = sd * 3 - 2;
        }
      } else {
        base = baseOut;
      }

      // Convert the number as an integer then divide the result by its base raised to a power such
      // that the fraction part will be restored.

      // Non-integer.
      if (i >= 0) {
        str = str.replace('.', '');
        y = new Ctor(1);
        y.e = str.length - i;
        y.d = convertBase(finiteToString(y), 10, base);
        y.e = y.d.length;
      }

      xd = convertBase(str, 10, base);
      e = len = xd.length;

      // Remove trailing zeros.
      for (; xd[--len] == 0;) xd.pop();

      if (!xd[0]) {
        str = isExp ? '0p+0' : '0';
      } else {
        if (i < 0) {
          e--;
        } else {
          x = new Ctor(x);
          x.d = xd;
          x.e = e;
          x = divide(x, y, sd, rm, 0, base);
          xd = x.d;
          e = x.e;
          roundUp = inexact;
        }

        // The rounding digit, i.e. the digit after the digit that may be rounded up.
        i = xd[sd];
        k = base / 2;
        roundUp = roundUp || xd[sd + 1] !== void 0;

        roundUp = rm < 4
          ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2))
          : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 ||
            rm === (x.s < 0 ? 8 : 7));

        xd.length = sd;

        if (roundUp) {

          // Rounding up may mean the previous digit has to be rounded up and so on.
          for (; ++xd[--sd] > base - 1;) {
            xd[sd] = 0;
            if (!sd) {
              ++e;
              xd.unshift(1);
            }
          }
        }

        // Determine trailing zeros.
        for (len = xd.length; !xd[len - 1]; --len);

        // E.g. [4, 11, 15] becomes 4bf.
        for (i = 0, str = ''; i < len; i++) str += NUMERALS.charAt(xd[i]);

        // Add binary exponent suffix?
        if (isExp) {
          if (len > 1) {
            if (baseOut == 16 || baseOut == 8) {
              i = baseOut == 16 ? 4 : 3;
              for (--len; len % i; len++) str += '0';
              xd = convertBase(str, base, baseOut);
              for (len = xd.length; !xd[len - 1]; --len);

              // xd[0] will always be be 1
              for (i = 1, str = '1.'; i < len; i++) str += NUMERALS.charAt(xd[i]);
            } else {
              str = str.charAt(0) + '.' + str.slice(1);
            }
          }

          str =  str + (e < 0 ? 'p' : 'p+') + e;
        } else if (e < 0) {
          for (; ++e;) str = '0' + str;
          str = '0.' + str;
        } else {
          if (++e > len) for (e -= len; e-- ;) str += '0';
          else if (e < len) str = str.slice(0, e) + '.' + str.slice(e);
        }
      }

      str = (baseOut == 16 ? '0x' : baseOut == 2 ? '0b' : baseOut == 8 ? '0o' : '') + str;
    }

    return x.s < 0 ? '-' + str : str;
  }


  // Does not strip trailing zeros.
  function truncate(arr, len) {
    if (arr.length > len) {
      arr.length = len;
      return true;
    }
  }


  // Decimal methods


  /*
   *  abs
   *  acos
   *  acosh
   *  add
   *  asin
   *  asinh
   *  atan
   *  atanh
   *  atan2
   *  cbrt
   *  ceil
   *  clamp
   *  clone
   *  config
   *  cos
   *  cosh
   *  div
   *  exp
   *  floor
   *  hypot
   *  ln
   *  log
   *  log2
   *  log10
   *  max
   *  min
   *  mod
   *  mul
   *  pow
   *  random
   *  round
   *  set
   *  sign
   *  sin
   *  sinh
   *  sqrt
   *  sub
   *  sum
   *  tan
   *  tanh
   *  trunc
   */


  /*
   * Return a new Decimal whose value is the absolute value of `x`.
   *
   * x {number|string|Decimal}
   *
   */
  function abs(x) {
    return new this(x).abs();
  }


  /*
   * Return a new Decimal whose value is the arccosine in radians of `x`.
   *
   * x {number|string|Decimal}
   *
   */
  function acos(x) {
    return new this(x).acos();
  }


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic cosine of `x`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function acosh(x) {
    return new this(x).acosh();
  }


  /*
   * Return a new Decimal whose value is the sum of `x` and `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function add(x, y) {
    return new this(x).plus(y);
  }


  /*
   * Return a new Decimal whose value is the arcsine in radians of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function asin(x) {
    return new this(x).asin();
  }


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic sine of `x`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function asinh(x) {
    return new this(x).asinh();
  }


  /*
   * Return a new Decimal whose value is the arctangent in radians of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function atan(x) {
    return new this(x).atan();
  }


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic tangent of `x`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function atanh(x) {
    return new this(x).atanh();
  }


  /*
   * Return a new Decimal whose value is the arctangent in radians of `y/x` in the range -pi to pi
   * (inclusive), rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-pi, pi]
   *
   * y {number|string|Decimal} The y-coordinate.
   * x {number|string|Decimal} The x-coordinate.
   *
   * atan2(±0, -0)               = ±pi
   * atan2(±0, +0)               = ±0
   * atan2(±0, -x)               = ±pi for x > 0
   * atan2(±0, x)                = ±0 for x > 0
   * atan2(-y, ±0)               = -pi/2 for y > 0
   * atan2(y, ±0)                = pi/2 for y > 0
   * atan2(±y, -Infinity)        = ±pi for finite y > 0
   * atan2(±y, +Infinity)        = ±0 for finite y > 0
   * atan2(±Infinity, x)         = ±pi/2 for finite x
   * atan2(±Infinity, -Infinity) = ±3*pi/4
   * atan2(±Infinity, +Infinity) = ±pi/4
   * atan2(NaN, x) = NaN
   * atan2(y, NaN) = NaN
   *
   */
  function atan2(y, x) {
    y = new this(y);
    x = new this(x);
    var r,
      pr = this.precision,
      rm = this.rounding,
      wpr = pr + 4;

    // Either NaN
    if (!y.s || !x.s) {
      r = new this(NaN);

    // Both ±Infinity
    } else if (!y.d && !x.d) {
      r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
      r.s = y.s;

    // x is ±Infinity or y is ±0
    } else if (!x.d || y.isZero()) {
      r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
      r.s = y.s;

    // y is ±Infinity or x is ±0
    } else if (!y.d || x.isZero()) {
      r = getPi(this, wpr, 1).times(0.5);
      r.s = y.s;

    // Both non-zero and finite
    } else if (x.s < 0) {
      this.precision = wpr;
      this.rounding = 1;
      r = this.atan(divide(y, x, wpr, 1));
      x = getPi(this, wpr, 1);
      this.precision = pr;
      this.rounding = rm;
      r = y.s < 0 ? r.minus(x) : r.plus(x);
    } else {
      r = this.atan(divide(y, x, wpr, 1));
    }

    return r;
  }


  /*
   * Return a new Decimal whose value is the cube root of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function cbrt(x) {
    return new this(x).cbrt();
  }


  /*
   * Return a new Decimal whose value is `x` rounded to an integer using `ROUND_CEIL`.
   *
   * x {number|string|Decimal}
   *
   */
  function ceil(x) {
    return finalise(x = new this(x), x.e + 1, 2);
  }


  /*
   * Return a new Decimal whose value is `x` clamped to the range delineated by `min` and `max`.
   *
   * x {number|string|Decimal}
   * min {number|string|Decimal}
   * max {number|string|Decimal}
   *
   */
  function clamp(x, min, max) {
    return new this(x).clamp(min, max);
  }


  /*
   * Configure global settings for a Decimal constructor.
   *
   * `obj` is an object with one or more of the following properties,
   *
   *   precision  {number}
   *   rounding   {number}
   *   toExpNeg   {number}
   *   toExpPos   {number}
   *   maxE       {number}
   *   minE       {number}
   *   modulo     {number}
   *   crypto     {boolean|number}
   *   defaults   {true}
   *
   * E.g. Decimal.config({ precision: 20, rounding: 4 })
   *
   */
  function config(obj) {
    if (!obj || typeof obj !== 'object') throw Error(decimalError + 'Object expected');
    var i, p, v,
      useDefaults = obj.defaults === true,
      ps = [
        'precision', 1, MAX_DIGITS,
        'rounding', 0, 8,
        'toExpNeg', -EXP_LIMIT, 0,
        'toExpPos', 0, EXP_LIMIT,
        'maxE', 0, EXP_LIMIT,
        'minE', -EXP_LIMIT, 0,
        'modulo', 0, 9
      ];

    for (i = 0; i < ps.length; i += 3) {
      if (p = ps[i], useDefaults) this[p] = DEFAULTS[p];
      if ((v = obj[p]) !== void 0) {
        if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
        else throw Error(invalidArgument + p + ': ' + v);
      }
    }

    if (p = 'crypto', useDefaults) this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
      if (v === true || v === false || v === 0 || v === 1) {
        if (v) {
          if (typeof crypto != 'undefined' && crypto &&
            (crypto.getRandomValues || crypto.randomBytes)) {
            this[p] = true;
          } else {
            throw Error(cryptoUnavailable);
          }
        } else {
          this[p] = false;
        }
      } else {
        throw Error(invalidArgument + p + ': ' + v);
      }
    }

    return this;
  }


  /*
   * Return a new Decimal whose value is the cosine of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function cos(x) {
    return new this(x).cos();
  }


  /*
   * Return a new Decimal whose value is the hyperbolic cosine of `x`, rounded to precision
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function cosh(x) {
    return new this(x).cosh();
  }


  /*
   * Create and return a Decimal constructor with the same configuration properties as this Decimal
   * constructor.
   *
   */
  function clone(obj) {
    var i, p, ps;

    /*
     * The Decimal constructor and exported function.
     * Return a new Decimal instance.
     *
     * v {number|string|Decimal} A numeric value.
     *
     */
    function Decimal(v) {
      var e, i, t,
        x = this;

      // Decimal called without new.
      if (!(x instanceof Decimal)) return new Decimal(v);

      // Retain a reference to this Decimal constructor, and shadow Decimal.prototype.constructor
      // which points to Object.
      x.constructor = Decimal;

      // Duplicate.
      if (isDecimalInstance(v)) {
        x.s = v.s;

        if (external) {
          if (!v.d || v.e > Decimal.maxE) {

            // Infinity.
            x.e = NaN;
            x.d = null;
          } else if (v.e < Decimal.minE) {

            // Zero.
            x.e = 0;
            x.d = [0];
          } else {
            x.e = v.e;
            x.d = v.d.slice();
          }
        } else {
          x.e = v.e;
          x.d = v.d ? v.d.slice() : v.d;
        }

        return;
      }

      t = typeof v;

      if (t === 'number') {
        if (v === 0) {
          x.s = 1 / v < 0 ? -1 : 1;
          x.e = 0;
          x.d = [0];
          return;
        }

        if (v < 0) {
          v = -v;
          x.s = -1;
        } else {
          x.s = 1;
        }

        // Fast path for small integers.
        if (v === ~~v && v < 1e7) {
          for (e = 0, i = v; i >= 10; i /= 10) e++;

          if (external) {
            if (e > Decimal.maxE) {
              x.e = NaN;
              x.d = null;
            } else if (e < Decimal.minE) {
              x.e = 0;
              x.d = [0];
            } else {
              x.e = e;
              x.d = [v];
            }
          } else {
            x.e = e;
            x.d = [v];
          }

          return;

        // Infinity, NaN.
        } else if (v * 0 !== 0) {
          if (!v) x.s = NaN;
          x.e = NaN;
          x.d = null;
          return;
        }

        return parseDecimal(x, v.toString());

      } else if (t !== 'string') {
        throw Error(invalidArgument + v);
      }

      // Minus sign?
      if ((i = v.charCodeAt(0)) === 45) {
        v = v.slice(1);
        x.s = -1;
      } else {
        // Plus sign?
        if (i === 43) v = v.slice(1);
        x.s = 1;
      }

      return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
    }

    Decimal.prototype = P;

    Decimal.ROUND_UP = 0;
    Decimal.ROUND_DOWN = 1;
    Decimal.ROUND_CEIL = 2;
    Decimal.ROUND_FLOOR = 3;
    Decimal.ROUND_HALF_UP = 4;
    Decimal.ROUND_HALF_DOWN = 5;
    Decimal.ROUND_HALF_EVEN = 6;
    Decimal.ROUND_HALF_CEIL = 7;
    Decimal.ROUND_HALF_FLOOR = 8;
    Decimal.EUCLID = 9;

    Decimal.config = Decimal.set = config;
    Decimal.clone = clone;
    Decimal.isDecimal = isDecimalInstance;

    Decimal.abs = abs;
    Decimal.acos = acos;
    Decimal.acosh = acosh;        // ES6
    Decimal.add = add;
    Decimal.asin = asin;
    Decimal.asinh = asinh;        // ES6
    Decimal.atan = atan;
    Decimal.atanh = atanh;        // ES6
    Decimal.atan2 = atan2;
    Decimal.cbrt = cbrt;          // ES6
    Decimal.ceil = ceil;
    Decimal.clamp = clamp;
    Decimal.cos = cos;
    Decimal.cosh = cosh;          // ES6
    Decimal.div = div;
    Decimal.exp = exp;
    Decimal.floor = floor;
    Decimal.hypot = hypot;        // ES6
    Decimal.ln = ln;
    Decimal.log = log;
    Decimal.log10 = log10;        // ES6
    Decimal.log2 = log2;          // ES6
    Decimal.max = max;
    Decimal.min = min;
    Decimal.mod = mod;
    Decimal.mul = mul;
    Decimal.pow = pow;
    Decimal.random = random;
    Decimal.round = round;
    Decimal.sign = sign;          // ES6
    Decimal.sin = sin;
    Decimal.sinh = sinh;          // ES6
    Decimal.sqrt = sqrt;
    Decimal.sub = sub;
    Decimal.sum = sum;
    Decimal.tan = tan;
    Decimal.tanh = tanh;          // ES6
    Decimal.trunc = trunc;        // ES6

    if (obj === void 0) obj = {};
    if (obj) {
      if (obj.defaults !== true) {
        ps = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'maxE', 'minE', 'modulo', 'crypto'];
        for (i = 0; i < ps.length;) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
      }
    }

    Decimal.config(obj);

    return Decimal;
  }


  /*
   * Return a new Decimal whose value is `x` divided by `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function div(x, y) {
    return new this(x).div(y);
  }


  /*
   * Return a new Decimal whose value is the natural exponential of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} The power to which to raise the base of the natural log.
   *
   */
  function exp(x) {
    return new this(x).exp();
  }


  /*
   * Return a new Decimal whose value is `x` round to an integer using `ROUND_FLOOR`.
   *
   * x {number|string|Decimal}
   *
   */
  function floor(x) {
    return finalise(x = new this(x), x.e + 1, 3);
  }


  /*
   * Return a new Decimal whose value is the square root of the sum of the squares of the arguments,
   * rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * hypot(a, b, ...) = sqrt(a^2 + b^2 + ...)
   *
   * arguments {number|string|Decimal}
   *
   */
  function hypot() {
    var i, n,
      t = new this(0);

    external = false;

    for (i = 0; i < arguments.length;) {
      n = new this(arguments[i++]);
      if (!n.d) {
        if (n.s) {
          external = true;
          return new this(1 / 0);
        }
        t = n;
      } else if (t.d) {
        t = t.plus(n.times(n));
      }
    }

    external = true;

    return t.sqrt();
  }


  /*
   * Return true if object is a Decimal instance (where Decimal is any Decimal constructor),
   * otherwise return false.
   *
   */
  function isDecimalInstance(obj) {
    return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
  }


  /*
   * Return a new Decimal whose value is the natural logarithm of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function ln(x) {
    return new this(x).ln();
  }


  /*
   * Return a new Decimal whose value is the log of `x` to the base `y`, or to base 10 if no base
   * is specified, rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * log[y](x)
   *
   * x {number|string|Decimal} The argument of the logarithm.
   * y {number|string|Decimal} The base of the logarithm.
   *
   */
  function log(x, y) {
    return new this(x).log(y);
  }


  /*
   * Return a new Decimal whose value is the base 2 logarithm of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function log2(x) {
    return new this(x).log(2);
  }


  /*
   * Return a new Decimal whose value is the base 10 logarithm of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function log10(x) {
    return new this(x).log(10);
  }


  /*
   * Return a new Decimal whose value is the maximum of the arguments.
   *
   * arguments {number|string|Decimal}
   *
   */
  function max() {
    return maxOrMin(this, arguments, 'lt');
  }


  /*
   * Return a new Decimal whose value is the minimum of the arguments.
   *
   * arguments {number|string|Decimal}
   *
   */
  function min() {
    return maxOrMin(this, arguments, 'gt');
  }


  /*
   * Return a new Decimal whose value is `x` modulo `y`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function mod(x, y) {
    return new this(x).mod(y);
  }


  /*
   * Return a new Decimal whose value is `x` multiplied by `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function mul(x, y) {
    return new this(x).mul(y);
  }


  /*
   * Return a new Decimal whose value is `x` raised to the power `y`, rounded to precision
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} The base.
   * y {number|string|Decimal} The exponent.
   *
   */
  function pow(x, y) {
    return new this(x).pow(y);
  }


  /*
   * Returns a new Decimal with a random value equal to or greater than 0 and less than 1, and with
   * `sd`, or `Decimal.precision` if `sd` is omitted, significant digits (or less if trailing zeros
   * are produced).
   *
   * [sd] {number} Significant digits. Integer, 0 to MAX_DIGITS inclusive.
   *
   */
  function random(sd) {
    var d, e, k, n,
      i = 0,
      r = new this(1),
      rd = [];

    if (sd === void 0) sd = this.precision;
    else checkInt32(sd, 1, MAX_DIGITS);

    k = Math.ceil(sd / LOG_BASE);

    if (!this.crypto) {
      for (; i < k;) rd[i++] = Math.random() * 1e7 | 0;

    // Browsers supporting crypto.getRandomValues.
    } else if (crypto.getRandomValues) {
      d = crypto.getRandomValues(new Uint32Array(k));

      for (; i < k;) {
        n = d[i];

        // 0 <= n < 4294967296
        // Probability n >= 4.29e9, is 4967296 / 4294967296 = 0.00116 (1 in 865).
        if (n >= 4.29e9) {
          d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
        } else {

          // 0 <= n <= 4289999999
          // 0 <= (n % 1e7) <= 9999999
          rd[i++] = n % 1e7;
        }
      }

    // Node.js supporting crypto.randomBytes.
    } else if (crypto.randomBytes) {

      // buffer
      d = crypto.randomBytes(k *= 4);

      for (; i < k;) {

        // 0 <= n < 2147483648
        n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 0x7f) << 24);

        // Probability n >= 2.14e9, is 7483648 / 2147483648 = 0.0035 (1 in 286).
        if (n >= 2.14e9) {
          crypto.randomBytes(4).copy(d, i);
        } else {

          // 0 <= n <= 2139999999
          // 0 <= (n % 1e7) <= 9999999
          rd.push(n % 1e7);
          i += 4;
        }
      }

      i = k / 4;
    } else {
      throw Error(cryptoUnavailable);
    }

    k = rd[--i];
    sd %= LOG_BASE;

    // Convert trailing digits to zeros according to sd.
    if (k && sd) {
      n = mathpow(10, LOG_BASE - sd);
      rd[i] = (k / n | 0) * n;
    }

    // Remove trailing words which are zero.
    for (; rd[i] === 0; i--) rd.pop();

    // Zero?
    if (i < 0) {
      e = 0;
      rd = [0];
    } else {
      e = -1;

      // Remove leading words which are zero and adjust exponent accordingly.
      for (; rd[0] === 0; e -= LOG_BASE) rd.shift();

      // Count the digits of the first word of rd to determine leading zeros.
      for (k = 1, n = rd[0]; n >= 10; n /= 10) k++;

      // Adjust the exponent for leading zeros of the first word of rd.
      if (k < LOG_BASE) e -= LOG_BASE - k;
    }

    r.e = e;
    r.d = rd;

    return r;
  }


  /*
   * Return a new Decimal whose value is `x` rounded to an integer using rounding mode `rounding`.
   *
   * To emulate `Math.round`, set rounding to 7 (ROUND_HALF_CEIL).
   *
   * x {number|string|Decimal}
   *
   */
  function round(x) {
    return finalise(x = new this(x), x.e + 1, this.rounding);
  }


  /*
   * Return
   *   1    if x > 0,
   *  -1    if x < 0,
   *   0    if x is 0,
   *  -0    if x is -0,
   *   NaN  otherwise
   *
   * x {number|string|Decimal}
   *
   */
  function sign(x) {
    x = new this(x);
    return x.d ? (x.d[0] ? x.s : 0 * x.s) : x.s || NaN;
  }


  /*
   * Return a new Decimal whose value is the sine of `x`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function sin(x) {
    return new this(x).sin();
  }


  /*
   * Return a new Decimal whose value is the hyperbolic sine of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function sinh(x) {
    return new this(x).sinh();
  }


  /*
   * Return a new Decimal whose value is the square root of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function sqrt(x) {
    return new this(x).sqrt();
  }


  /*
   * Return a new Decimal whose value is `x` minus `y`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function sub(x, y) {
    return new this(x).sub(y);
  }


  /*
   * Return a new Decimal whose value is the sum of the arguments, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * Only the result is rounded, not the intermediate calculations.
   *
   * arguments {number|string|Decimal}
   *
   */
  function sum() {
    var i = 0,
      args = arguments,
      x = new this(args[i]);

    external = false;
    for (; x.s && ++i < args.length;) x = x.plus(args[i]);
    external = true;

    return finalise(x, this.precision, this.rounding);
  }


  /*
   * Return a new Decimal whose value is the tangent of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function tan(x) {
    return new this(x).tan();
  }


  /*
   * Return a new Decimal whose value is the hyperbolic tangent of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function tanh(x) {
    return new this(x).tanh();
  }


  /*
   * Return a new Decimal whose value is `x` truncated to an integer.
   *
   * x {number|string|Decimal}
   *
   */
  function trunc(x) {
    return finalise(x = new this(x), x.e + 1, 1);
  }


  // Create and configure initial Decimal constructor.
  Decimal = clone(DEFAULTS);
  Decimal.prototype.constructor = Decimal;
  Decimal['default'] = Decimal.Decimal = Decimal;

  // Create the internal constants from their string values.
  LN10 = new Decimal(LN10);
  PI = new Decimal(PI);


  // Export.


  // AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Decimal;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Node and other environments that support module.exports.
  } else {}
})(this);


/***/ }),
/* 401 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: [String, Number]
  },
  max: {
    type: [String, Number]
  },
  step: {
    type: [String, Number],
    default: 1
  },
  color: {
    type: String
  },
  inputWidth: {
    type: [String, Number]
  },
  inputTextSize: {
    type: [String, Number]
  },
  buttonSize: {
    type: [String, Number]
  },
  decimalLength: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  disableIncrement: {
    type: Boolean,
    default: false
  },
  disableDecrement: {
    type: Boolean,
    default: false
  },
  disableInput: {
    type: Boolean,
    default: false
  },
  lazyChange: {
    type: Boolean,
    default: false
  },
  incrementButton: {
    type: Boolean,
    default: true
  },
  decrementButton: {
    type: Boolean,
    default: true
  },
  press: {
    type: Boolean,
    default: true
  },
  ripple: {
    type: Boolean,
    default: true
  },
  validateTrigger: {
    type: Array,
    default: () => ['onInputChange', 'onLazyChange', 'onIncrement', 'onDecrement']
  },
  rules: {
    type: Array
  },
  onBeforeChange: {
    type: Function
  },
  onChange: {
    type: Function
  },
  onIncrement: {
    type: Function
  },
  onDecrement: {
    type: Function
  },
  'onUpdate:modelValue': {
    type: Function
  }
};

/***/ }),
/* 402 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_DatePickerComponent": () => (/* binding */ _DatePickerComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DatePicker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);


_DatePicker_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_DatePicker_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _DatePicker_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _DatePickerComponent = _DatePicker_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DatePicker_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 403 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(404);
/* harmony import */ var _src_month_picker_panel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(408);
/* harmony import */ var _src_year_picker_panel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(413);
/* harmony import */ var _src_day_picker_panel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(414);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(412);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(320);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(324);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(321);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(335);










var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.createNamespace)('date-picker');

function render(_ctx, _cache) {
  var _component_year_picker_panel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("year-picker-panel");

  var _component_month_picker_panel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("month-picker-panel");

  var _component_day_picker_panel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("day-picker-panel");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), [_ctx.shadow, 'var-elevation--2']))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('title')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      background: _ctx.headerColor || _ctx.color
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('title-year'), [_ctx.isYearPanel, _ctx.n('title-year--active')])),
    onClick: _cache[0] || (_cache[0] = $event => _ctx.clickEl('year'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "year", {
    year: _ctx.previewYear
  }, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.previewYear), 1
  /* TEXT */
  )])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('title-date'), [!_ctx.isYearPanel, _ctx.n('title-date--active')], [_ctx.range, _ctx.n('title-date--range')])),
    onClick: _cache[1] || (_cache[1] = $event => _ctx.clickEl('date'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: _ctx.multiple ? '' : "" + _ctx.n() + (_ctx.reverse ? '-reverse' : '') + "-translatey"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => {
      var _ctx$chooseMonth, _ctx$chooseMonth2, _ctx$chooseMonth3;

      return [_ctx.type === 'month' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: "" + _ctx.chooseYear + ((_ctx$chooseMonth = _ctx.chooseMonth) == null ? void 0 : _ctx$chooseMonth.index)
      }, [_ctx.range ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "range", {
        key: 0,
        choose: _ctx.getChoose.chooseRangeMonth
      }, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getMonthTitle), 1
      /* TEXT */
      )]) : _ctx.multiple ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "multiple", {
        key: 1,
        choose: _ctx.getChoose.chooseMonths
      }, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getMonthTitle), 1
      /* TEXT */
      )]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "month", {
        key: 2,
        month: (_ctx$chooseMonth2 = _ctx.chooseMonth) == null ? void 0 : _ctx$chooseMonth2.index,
        year: _ctx.chooseYear
      }, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getMonthTitle), 1
      /* TEXT */
      )])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: "" + _ctx.chooseYear + ((_ctx$chooseMonth3 = _ctx.chooseMonth) == null ? void 0 : _ctx$chooseMonth3.index) + _ctx.chooseDay
      }, [_ctx.range ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "range", {
        key: 0,
        choose: _ctx.formatRange
      }, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getDateTitle), 1
      /* TEXT */
      )]) : _ctx.multiple ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "multiple", {
        key: 1,
        choose: _ctx.getChoose.chooseDays
      }, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getDateTitle), 1
      /* TEXT */
      )]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "date", (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
        key: 2
      }, _ctx.slotProps)), () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getDateTitle), 1
      /* TEXT */
      )])]))];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["name"])], 2
  /* CLASS */
  )], 6
  /* CLASS, STYLE */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('body')),
    onTouchstart: _cache[2] || (_cache[2] = function () {
      return _ctx.handleTouchstart && _ctx.handleTouchstart(...arguments);
    }),
    onTouchmove: _cache[3] || (_cache[3] = function () {
      return _ctx.handleTouchmove && _ctx.handleTouchmove(...arguments);
    }),
    onTouchend: _cache[4] || (_cache[4] = function () {
      return _ctx.handleTouchend && _ctx.handleTouchend(...arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: _ctx.n() + "-panel-fade"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_ctx.getPanelType === 'year' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_year_picker_panel, {
      key: 0,
      "component-props": _ctx.componentProps,
      preview: _ctx.previewYear,
      onChooseYear: _ctx.getChooseYear
    }, null, 8
    /* PROPS */
    , ["component-props", "preview", "onChooseYear"])) : _ctx.getPanelType === 'month' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_month_picker_panel, {
      key: 1,
      ref: "monthPanelEl",
      current: _ctx.currentDate,
      choose: _ctx.getChoose,
      preview: _ctx.getPreview,
      "click-year": () => _ctx.clickEl('year'),
      "component-props": _ctx.componentProps,
      onChooseMonth: _ctx.getChooseMonth,
      onCheckPreview: _ctx.checkPreview
    }, null, 8
    /* PROPS */
    , ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : _ctx.getPanelType === 'date' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_day_picker_panel, {
      key: 2,
      ref: "dayPanelEl",
      current: _ctx.currentDate,
      choose: _ctx.getChoose,
      preview: _ctx.getPreview,
      "component-props": _ctx.componentProps,
      "click-month": () => _ctx.clickEl('month'),
      onChooseDay: _ctx.getChooseDay,
      onCheckPreview: _ctx.checkPreview
    }, null, 8
    /* PROPS */
    , ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["name"])], 34
  /* CLASS, HYDRATE_EVENTS */
  )], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarDatePicker',
  components: {
    MonthPickerPanel: _src_month_picker_panel_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    YearPickerPanel: _src_year_picker_panel_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    DayPickerPanel: _src_day_picker_panel_js__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_7__.props,

  setup(props) {
    var startX = 0;
    var startY = 0;
    var checkType = '';
    var touchDirection;
    var currentDate = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])().format('YYYY-MM-D');
    var [currentYear, currentMonth] = currentDate.split('-');
    var monthDes = _props__WEBPACK_IMPORTED_MODULE_7__.MONTH_LIST.find(month => month.index === currentMonth);
    var isYearPanel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var isMonthPanel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var rangeDone = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    var chooseMonth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var chooseYear = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var chooseDay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var previewMonth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(monthDes);
    var previewYear = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(currentYear);
    var reverse = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var chooseMonths = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var chooseDays = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var chooseRangeMonth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var chooseRangeDay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var monthPanelEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var dayPanelEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var componentProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      allowedDates: props.allowedDates,
      type: props.type,
      color: props.color,
      firstDayOfWeek: props.firstDayOfWeek,
      min: props.min,
      max: props.max,
      showCurrent: props.showCurrent,
      multiple: props.multiple,
      range: props.range
    });
    var getChoose = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
      chooseMonth: chooseMonth.value,
      chooseYear: chooseYear.value,
      chooseDay: chooseDay.value,
      chooseMonths: chooseMonths.value,
      chooseDays: chooseDays.value,
      chooseRangeMonth: chooseRangeMonth.value,
      chooseRangeDay: chooseRangeDay.value
    }));
    var getPreview = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
      previewMonth: previewMonth.value,
      previewYear: previewYear.value
    }));
    var getMonthTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var {
        multiple,
        range
      } = props;

      if (range) {
        return chooseRangeMonth.value.length ? chooseRangeMonth.value[0] + " ~ " + chooseRangeMonth.value[1] : '';
      }

      var monthName = '';

      if (chooseMonth.value) {
        var _pack$value$datePicke, _pack$value$datePicke2;

        monthName = (_pack$value$datePicke = (_pack$value$datePicke2 = _locale__WEBPACK_IMPORTED_MODULE_8__.pack.value.datePickerMonthDict) == null ? void 0 : _pack$value$datePicke2[chooseMonth.value.index].name) != null ? _pack$value$datePicke : '';
      }

      return multiple ? "" + chooseMonths.value.length + _locale__WEBPACK_IMPORTED_MODULE_8__.pack.value.datePickerSelected : monthName;
    });
    var getDateTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var _pack$value$datePicke3, _pack$value$datePicke4, _pack$value$datePicke5, _pack$value$datePicke6;

      var {
        multiple,
        range
      } = props;

      if (range) {
        var formatRangeDays = chooseRangeDay.value.map(date => (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(date).format('YYYY-MM-DD'));
        return formatRangeDays.length ? formatRangeDays[0] + " ~ " + formatRangeDays[1] : '';
      }

      if (multiple) return "" + chooseDays.value.length + _locale__WEBPACK_IMPORTED_MODULE_8__.pack.value.datePickerSelected;
      if (!chooseYear.value || !chooseMonth.value || !chooseDay.value) return '';
      var weekIndex = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(chooseYear.value + "-" + chooseMonth.value.index + "-" + chooseDay.value).day();
      var week = _props__WEBPACK_IMPORTED_MODULE_7__.WEEK_HEADER.find(value => value.index === "" + weekIndex);
      var weekName = (_pack$value$datePicke3 = (_pack$value$datePicke4 = _locale__WEBPACK_IMPORTED_MODULE_8__.pack.value.datePickerWeekDict) == null ? void 0 : _pack$value$datePicke4[week.index].name) != null ? _pack$value$datePicke3 : '';
      var monthName = (_pack$value$datePicke5 = (_pack$value$datePicke6 = _locale__WEBPACK_IMPORTED_MODULE_8__.pack.value.datePickerMonthDict) == null ? void 0 : _pack$value$datePicke6[chooseMonth.value.index].name) != null ? _pack$value$datePicke5 : '';
      var showDay = chooseDay.value.padStart(2, '0');
      if (_locale__WEBPACK_IMPORTED_MODULE_8__.pack.value.lang === 'zh-CN') return chooseMonth.value.index + "-" + showDay + " " + weekName.slice(0, 3);
      return weekName.slice(0, 3) + ", " + monthName.slice(0, 3) + " " + chooseDay.value;
    });
    var getPanelType = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      if (isYearPanel.value) return 'year';
      if (props.type === 'month' || isMonthPanel.value) return 'month';
      if (props.type === 'date') return 'date';
      return '';
    });
    var isUntouchable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return !props.touchable || ['', 'year'].includes(getPanelType.value);
    });
    var slotProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var _chooseMonth$value, _chooseDay$value, _chooseYear$value, _chooseMonth$value$in, _chooseMonth$value2;

      var weekIndex = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(chooseYear.value + "-" + ((_chooseMonth$value = chooseMonth.value) == null ? void 0 : _chooseMonth$value.index) + "-" + chooseDay.value).day();
      var date = chooseDay.value ? (_chooseDay$value = chooseDay.value) == null ? void 0 : _chooseDay$value.padStart(2, '0') : '';
      return {
        week: "" + weekIndex,
        year: (_chooseYear$value = chooseYear.value) != null ? _chooseYear$value : '',
        month: (_chooseMonth$value$in = (_chooseMonth$value2 = chooseMonth.value) == null ? void 0 : _chooseMonth$value2.index) != null ? _chooseMonth$value$in : '',
        date
      };
    });
    var formatRange = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => getChoose.value.chooseRangeDay.map(choose => (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(choose).format('YYYY-MM-DD')));
    var isSameYear = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => chooseYear.value === previewYear.value);
    var isSameMonth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var _chooseMonth$value3;

      return ((_chooseMonth$value3 = chooseMonth.value) == null ? void 0 : _chooseMonth$value3.index) === previewMonth.value.index;
    });

    var clickEl = type => {
      if (type === 'year') isYearPanel.value = true;else if (type === 'month') isMonthPanel.value = true;else {
        isYearPanel.value = false;
        isMonthPanel.value = false;
      }
    };

    var handleTouchstart = event => {
      if (isUntouchable.value) return;
      var {
        clientX,
        clientY
      } = event.touches[0];
      startX = clientX;
      startY = clientY;
    };

    var getDirection = (x, y) => {
      return x >= y && x > 20 ? 'x' : 'y';
    };

    var handleTouchmove = event => {
      if (isUntouchable.value) return;
      var {
        clientX,
        clientY
      } = event.touches[0];
      var x = clientX - startX;
      var y = clientY - startY;
      touchDirection = getDirection(Math.abs(x), Math.abs(y));
      checkType = x > 0 ? 'prev' : 'next';
    };

    var handleTouchend = () => {
      if (isUntouchable.value || touchDirection !== 'x') return;
      var componentRef = getPanelType.value === 'month' ? monthPanelEl : dayPanelEl;
      (0,_utils_elements__WEBPACK_IMPORTED_MODULE_9__.nextTickFrame)(() => {
        componentRef.value.forwardRef(checkType);
        resetState();
      });
    };

    var updateRange = (date, type) => {
      var rangeDate = type === 'month' ? chooseRangeMonth : chooseRangeDay;
      rangeDate.value = rangeDone.value ? [date, date] : [rangeDate.value[0], date];
      rangeDone.value = !rangeDone.value;

      if (rangeDone.value) {
        var isChangeOrder = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(rangeDate.value[0]).isAfter(rangeDate.value[1]);

        var _date = isChangeOrder ? [rangeDate.value[1], rangeDate.value[0]] : [...rangeDate.value];

        (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(props['onUpdate:modelValue'], _date);
        (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(props.onChange, _date);
      }
    };

    var updateMultiple = (date, type) => {
      var multipleDates = type === 'month' ? chooseMonths : chooseDays;
      var formatType = type === 'month' ? 'YYYY-MM' : 'YYYY-MM-DD';
      var formatDates = multipleDates.value.map(date => (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(date).format(formatType));
      var index = formatDates.findIndex(choose => choose === date);
      if (index === -1) formatDates.push(date);else formatDates.splice(index, 1);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(props['onUpdate:modelValue'], formatDates);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(props.onChange, formatDates);
    };

    var getReverse = (dateType, date) => {
      if (!chooseYear.value || !chooseMonth.value) return false;
      if (!isSameYear.value) return chooseYear.value > previewYear.value;
      if (dateType === 'month') return date.index < chooseMonth.value.index;
      return isSameMonth.value ? date < (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(chooseDay.value) : chooseMonth.value.index > previewMonth.value.index;
    };

    var getChooseDay = day => {
      var {
        readonly,
        range,
        multiple,
        onChange,
        'onUpdate:modelValue': updateModelValue
      } = props;
      if (day < 0 || readonly) return;
      reverse.value = getReverse('day', day);
      var date = previewYear.value + "-" + previewMonth.value.index + "-" + day;
      var formatDate = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(date).format('YYYY-MM-DD');
      if (range) updateRange(formatDate, 'day');else if (multiple) updateMultiple(formatDate, 'day');else {
        (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(updateModelValue, formatDate);
        (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(onChange, formatDate);
      }
    };

    var getChooseMonth = month => {
      var {
        type,
        readonly,
        range,
        multiple,
        onChange,
        'onUpdate:modelValue': updateModelValue
      } = props;
      reverse.value = getReverse('month', month);

      if (type === 'month' && !readonly) {
        var date = previewYear.value + "-" + month.index;
        if (range) updateRange(date, 'month');else if (multiple) updateMultiple(date, 'month');else {
          (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(updateModelValue, date);
          (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(onChange, date);
        }
      } else {
        previewMonth.value = month;
      }

      isMonthPanel.value = false;
    };

    var getChooseYear = year => {
      previewYear.value = "" + year;
      isYearPanel.value = false;
      isMonthPanel.value = true;
    };

    var checkPreview = (type, checkType) => {
      var changeValue = checkType === 'prev' ? -1 : 1;

      if (type === 'year') {
        previewYear.value = "" + ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(previewYear.value) + changeValue);
      } else {
        var checkIndex = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(previewMonth.value.index) + changeValue;

        if (checkIndex < 1) {
          previewYear.value = "" + ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(previewYear.value) - 1);
          checkIndex = 12;
        }

        if (checkIndex > 12) {
          previewYear.value = "" + ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(previewYear.value) + 1);
          checkIndex = 1;
        }

        previewMonth.value = _props__WEBPACK_IMPORTED_MODULE_7__.MONTH_LIST.find(month => (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(month.index) === checkIndex);
      }
    };

    var checkValue = () => {
      if ((props.multiple || props.range) && !(0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.isArray)(props.modelValue)) {
        console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array');
        return false;
      }

      if (!props.multiple && !props.range && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.isArray)(props.modelValue)) {
        console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String');
        return false;
      }

      return true;
    };

    var invalidFormatDate = date => {
      if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.isArray)(date)) return false;

      if (date === 'Invalid Date') {
        console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date');
        return true;
      }

      return false;
    };

    var rangeInit = (value, type) => {
      var rangeDate = type === 'month' ? chooseRangeMonth : chooseRangeDay;
      var formatType = type === 'month' ? 'YYYY-MM' : 'YYYY-MM-D';
      var formatDateList = value.map(choose => (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(choose).format(formatType)).slice(0, 2);
      var isValid = rangeDate.value.some(date => invalidFormatDate(date));
      if (isValid) return;
      rangeDate.value = formatDateList;
      var isChangeOrder = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(rangeDate.value[0]).isAfter(rangeDate.value[1]);

      if (rangeDate.value.length === 2 && isChangeOrder) {
        rangeDate.value = [rangeDate.value[1], rangeDate.value[0]];
      }
    };

    var multipleInit = (value, type) => {
      var rangeDate = type === 'month' ? chooseMonths : chooseDays;
      var formatType = type === 'month' ? 'YYYY-MM' : 'YYYY-MM-D'; // 需要去重

      var formatDateList = Array.from(new Set(value.map(choose => (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(choose).format(formatType))));
      rangeDate.value = formatDateList.filter(date => date !== 'Invalid Date');
    };

    var dateInit = value => {
      var formatDate = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(value).format('YYYY-MM-D');
      if (invalidFormatDate(formatDate)) return;
      var [yearValue, monthValue, dayValue] = formatDate.split('-');
      var monthDes = _props__WEBPACK_IMPORTED_MODULE_7__.MONTH_LIST.find(month => month.index === monthValue);
      chooseMonth.value = monthDes;
      chooseYear.value = yearValue;
      chooseDay.value = dayValue;
      previewMonth.value = monthDes;
      previewYear.value = yearValue;
    };

    var resetState = () => {
      startY = 0;
      startX = 0;
      checkType = '';
      touchDirection = undefined;
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.modelValue, value => {
      if (!checkValue() || invalidFormatDate(value) || !value) return;

      if (props.range) {
        if (!(0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)) return;
        rangeDone.value = value.length !== 1;
        rangeInit(value, props.type);
      } else if (props.multiple) {
        if (!(0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)) return;
        multipleInit(value, props.type);
      } else {
        dateInit(value);
      }
    }, {
      immediate: true
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(getPanelType, resetState);
    return {
      n,
      classes,
      monthPanelEl,
      dayPanelEl,
      reverse,
      currentDate,
      chooseMonth,
      chooseYear,
      chooseDay,
      previewYear,
      isYearPanel,
      isMonthPanel,
      getMonthTitle,
      getDateTitle,
      getPanelType,
      getChoose,
      getPreview,
      componentProps,
      slotProps,
      formatRange,
      clickEl,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      getChooseDay,
      getChooseMonth,
      getChooseYear,
      checkPreview
    };
  }

}));

/***/ }),
/* 404 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);
/* harmony import */ var _locale_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(406);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(407);



var L = 'en'; // global locale

var Ls = {}; // global loaded locale

Ls[L] = _locale_en__WEBPACK_IMPORTED_MODULE_1__["default"];

var isDayjs = function isDayjs(d) {
  return d instanceof Dayjs;
}; // eslint-disable-line no-use-before-define


var parseLocale = function parseLocale(preset, object, isLocal) {
  var l;
  if (!preset) return L;

  if (typeof preset === 'string') {
    var presetLower = preset.toLowerCase();

    if (Ls[presetLower]) {
      l = presetLower;
    }

    if (object) {
      Ls[presetLower] = object;
      l = presetLower;
    }

    var presetSplit = preset.split('-');

    if (!l && presetSplit.length > 1) {
      return parseLocale(presetSplit[0]);
    }
  } else {
    var name = preset.name;
    Ls[name] = preset;
    l = name;
  }

  if (!isLocal && l) L = l;
  return l || !isLocal && L;
};

var dayjs = function dayjs(date, c) {
  if (isDayjs(date)) {
    return date.clone();
  } // eslint-disable-next-line no-nested-ternary


  var cfg = typeof c === 'object' ? c : {};
  cfg.date = date;
  cfg.args = arguments; // eslint-disable-line prefer-rest-params

  return new Dayjs(cfg); // eslint-disable-line no-use-before-define
};

var wrapper = function wrapper(date, instance) {
  return dayjs(date, {
    locale: instance.$L,
    utc: instance.$u,
    x: instance.$x,
    $offset: instance.$offset // todo: refactor; do not use this.$offset in you code

  });
};

var Utils = _utils__WEBPACK_IMPORTED_MODULE_2__["default"]; // for plugin use

Utils.l = parseLocale;
Utils.i = isDayjs;
Utils.w = wrapper;

var parseDate = function parseDate(cfg) {
  var date = cfg.date,
      utc = cfg.utc;
  if (date === null) return new Date(NaN); // null is invalid

  if (Utils.u(date)) return new Date(); // today

  if (date instanceof Date) return new Date(date);

  if (typeof date === 'string' && !/Z$/i.test(date)) {
    var d = date.match(_constant__WEBPACK_IMPORTED_MODULE_0__.REGEX_PARSE);

    if (d) {
      var m = d[2] - 1 || 0;
      var ms = (d[7] || '0').substring(0, 3);

      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
      }

      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }

  return new Date(date); // everything else
};

var Dayjs = /*#__PURE__*/function () {
  function Dayjs(cfg) {
    this.$L = parseLocale(cfg.locale, null, true);
    this.parse(cfg); // for plugin
  }

  var _proto = Dayjs.prototype;

  _proto.parse = function parse(cfg) {
    this.$d = parseDate(cfg);
    this.$x = cfg.x || {};
    this.init();
  };

  _proto.init = function init() {
    var $d = this.$d;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
  } // eslint-disable-next-line class-methods-use-this
  ;

  _proto.$utils = function $utils() {
    return Utils;
  };

  _proto.isValid = function isValid() {
    return !(this.$d.toString() === _constant__WEBPACK_IMPORTED_MODULE_0__.INVALID_DATE_STRING);
  };

  _proto.isSame = function isSame(that, units) {
    var other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units);
  };

  _proto.isAfter = function isAfter(that, units) {
    return dayjs(that) < this.startOf(units);
  };

  _proto.isBefore = function isBefore(that, units) {
    return this.endOf(units) < dayjs(that);
  };

  _proto.$g = function $g(input, get, set) {
    if (Utils.u(input)) return this[get];
    return this.set(set, input);
  };

  _proto.unix = function unix() {
    return Math.floor(this.valueOf() / 1000);
  };

  _proto.valueOf = function valueOf() {
    // timezone(hour) * 60 * 60 * 1000 => ms
    return this.$d.getTime();
  };

  _proto.startOf = function startOf(units, _startOf) {
    var _this = this;

    // startOf -> endOf
    var isStartOf = !Utils.u(_startOf) ? _startOf : true;
    var unit = Utils.p(units);

    var instanceFactory = function instanceFactory(d, m) {
      var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
      return isStartOf ? ins : ins.endOf(_constant__WEBPACK_IMPORTED_MODULE_0__.D);
    };

    var instanceFactorySet = function instanceFactorySet(method, slice) {
      var argumentStart = [0, 0, 0, 0];
      var argumentEnd = [23, 59, 59, 999];
      return Utils.w(_this.toDate()[method].apply( // eslint-disable-line prefer-spread
      _this.toDate('s'), (isStartOf ? argumentStart : argumentEnd).slice(slice)), _this);
    };

    var $W = this.$W,
        $M = this.$M,
        $D = this.$D;
    var utcPad = "set" + (this.$u ? 'UTC' : '');

    switch (unit) {
      case _constant__WEBPACK_IMPORTED_MODULE_0__.Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);

      case _constant__WEBPACK_IMPORTED_MODULE_0__.M:
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);

      case _constant__WEBPACK_IMPORTED_MODULE_0__.W:
        {
          var weekStart = this.$locale().weekStart || 0;
          var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
          return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
        }

      case _constant__WEBPACK_IMPORTED_MODULE_0__.D:
      case _constant__WEBPACK_IMPORTED_MODULE_0__.DATE:
        return instanceFactorySet(utcPad + "Hours", 0);

      case _constant__WEBPACK_IMPORTED_MODULE_0__.H:
        return instanceFactorySet(utcPad + "Minutes", 1);

      case _constant__WEBPACK_IMPORTED_MODULE_0__.MIN:
        return instanceFactorySet(utcPad + "Seconds", 2);

      case _constant__WEBPACK_IMPORTED_MODULE_0__.S:
        return instanceFactorySet(utcPad + "Milliseconds", 3);

      default:
        return this.clone();
    }
  };

  _proto.endOf = function endOf(arg) {
    return this.startOf(arg, false);
  };

  _proto.$set = function $set(units, _int) {
    var _C$D$C$DATE$C$M$C$Y$C;

    // private set
    var unit = Utils.p(units);
    var utcPad = "set" + (this.$u ? 'UTC' : '');
    var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[_constant__WEBPACK_IMPORTED_MODULE_0__.D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[_constant__WEBPACK_IMPORTED_MODULE_0__.DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[_constant__WEBPACK_IMPORTED_MODULE_0__.M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[_constant__WEBPACK_IMPORTED_MODULE_0__.Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[_constant__WEBPACK_IMPORTED_MODULE_0__.H] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[_constant__WEBPACK_IMPORTED_MODULE_0__.MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[_constant__WEBPACK_IMPORTED_MODULE_0__.S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[_constant__WEBPACK_IMPORTED_MODULE_0__.MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
    var arg = unit === _constant__WEBPACK_IMPORTED_MODULE_0__.D ? this.$D + (_int - this.$W) : _int;

    if (unit === _constant__WEBPACK_IMPORTED_MODULE_0__.M || unit === _constant__WEBPACK_IMPORTED_MODULE_0__.Y) {
      // clone is for badMutable plugin
      var date = this.clone().set(_constant__WEBPACK_IMPORTED_MODULE_0__.DATE, 1);
      date.$d[name](arg);
      date.init();
      this.$d = date.set(_constant__WEBPACK_IMPORTED_MODULE_0__.DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else if (name) this.$d[name](arg);

    this.init();
    return this;
  };

  _proto.set = function set(string, _int2) {
    return this.clone().$set(string, _int2);
  };

  _proto.get = function get(unit) {
    return this[Utils.p(unit)]();
  };

  _proto.add = function add(number, units) {
    var _this2 = this,
        _C$MIN$C$H$C$S$unit;

    number = Number(number); // eslint-disable-line no-param-reassign

    var unit = Utils.p(units);

    var instanceFactorySet = function instanceFactorySet(n) {
      var d = dayjs(_this2);
      return Utils.w(d.date(d.date() + Math.round(n * number)), _this2);
    };

    if (unit === _constant__WEBPACK_IMPORTED_MODULE_0__.M) {
      return this.set(_constant__WEBPACK_IMPORTED_MODULE_0__.M, this.$M + number);
    }

    if (unit === _constant__WEBPACK_IMPORTED_MODULE_0__.Y) {
      return this.set(_constant__WEBPACK_IMPORTED_MODULE_0__.Y, this.$y + number);
    }

    if (unit === _constant__WEBPACK_IMPORTED_MODULE_0__.D) {
      return instanceFactorySet(1);
    }

    if (unit === _constant__WEBPACK_IMPORTED_MODULE_0__.W) {
      return instanceFactorySet(7);
    }

    var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[_constant__WEBPACK_IMPORTED_MODULE_0__.MIN] = _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[_constant__WEBPACK_IMPORTED_MODULE_0__.H] = _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[_constant__WEBPACK_IMPORTED_MODULE_0__.S] = _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1; // ms

    var nextTimeStamp = this.$d.getTime() + number * step;
    return Utils.w(nextTimeStamp, this);
  };

  _proto.subtract = function subtract(number, string) {
    return this.add(number * -1, string);
  };

  _proto.format = function format(formatStr) {
    var _this3 = this;

    var locale = this.$locale();
    if (!this.isValid()) return locale.invalidDate || _constant__WEBPACK_IMPORTED_MODULE_0__.INVALID_DATE_STRING;
    var str = formatStr || _constant__WEBPACK_IMPORTED_MODULE_0__.FORMAT_DEFAULT;
    var zoneStr = Utils.z(this);
    var $H = this.$H,
        $m = this.$m,
        $M = this.$M;
    var weekdays = locale.weekdays,
        months = locale.months,
        meridiem = locale.meridiem;

    var getShort = function getShort(arr, index, full, length) {
      return arr && (arr[index] || arr(_this3, str)) || full[index].slice(0, length);
    };

    var get$H = function get$H(num) {
      return Utils.s($H % 12 || 12, num, '0');
    };

    var meridiemFunc = meridiem || function (hour, minute, isLowercase) {
      var m = hour < 12 ? 'AM' : 'PM';
      return isLowercase ? m.toLowerCase() : m;
    };

    var matches = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: $M + 1,
      MM: Utils.s($M + 1, 2, '0'),
      MMM: getShort(locale.monthsShort, $M, months, 3),
      MMMM: getShort(months, $M),
      D: this.$D,
      DD: Utils.s(this.$D, 2, '0'),
      d: String(this.$W),
      dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
      ddd: getShort(locale.weekdaysShort, this.$W, weekdays, 3),
      dddd: weekdays[this.$W],
      H: String($H),
      HH: Utils.s($H, 2, '0'),
      h: get$H(1),
      hh: get$H(2),
      a: meridiemFunc($H, $m, true),
      A: meridiemFunc($H, $m, false),
      m: String($m),
      mm: Utils.s($m, 2, '0'),
      s: String(this.$s),
      ss: Utils.s(this.$s, 2, '0'),
      SSS: Utils.s(this.$ms, 3, '0'),
      Z: zoneStr // 'ZZ' logic below

    };
    return str.replace(_constant__WEBPACK_IMPORTED_MODULE_0__.REGEX_FORMAT, function (match, $1) {
      return $1 || matches[match] || zoneStr.replace(':', '');
    }); // 'ZZ'
  };

  _proto.utcOffset = function utcOffset() {
    // Because a bug at FF24, we're rounding the timezone offset around 15 minutes
    // https://github.com/moment/moment/pull/1871
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  };

  _proto.diff = function diff(input, units, _float) {
    var _C$Y$C$M$C$Q$C$W$C$D$;

    var unit = Utils.p(units);
    var that = dayjs(input);
    var zoneDelta = (that.utcOffset() - this.utcOffset()) * _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_MINUTE;
    var diff = this - that;
    var result = Utils.m(this, that);
    result = (_C$Y$C$M$C$Q$C$W$C$D$ = {}, _C$Y$C$M$C$Q$C$W$C$D$[_constant__WEBPACK_IMPORTED_MODULE_0__.Y] = result / 12, _C$Y$C$M$C$Q$C$W$C$D$[_constant__WEBPACK_IMPORTED_MODULE_0__.M] = result, _C$Y$C$M$C$Q$C$W$C$D$[_constant__WEBPACK_IMPORTED_MODULE_0__.Q] = result / 3, _C$Y$C$M$C$Q$C$W$C$D$[_constant__WEBPACK_IMPORTED_MODULE_0__.W] = (diff - zoneDelta) / _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_WEEK, _C$Y$C$M$C$Q$C$W$C$D$[_constant__WEBPACK_IMPORTED_MODULE_0__.D] = (diff - zoneDelta) / _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_DAY, _C$Y$C$M$C$Q$C$W$C$D$[_constant__WEBPACK_IMPORTED_MODULE_0__.H] = diff / _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_HOUR, _C$Y$C$M$C$Q$C$W$C$D$[_constant__WEBPACK_IMPORTED_MODULE_0__.MIN] = diff / _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_MINUTE, _C$Y$C$M$C$Q$C$W$C$D$[_constant__WEBPACK_IMPORTED_MODULE_0__.S] = diff / _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_SECOND, _C$Y$C$M$C$Q$C$W$C$D$)[unit] || diff; // milliseconds

    return _float ? result : Utils.a(result);
  };

  _proto.daysInMonth = function daysInMonth() {
    return this.endOf(_constant__WEBPACK_IMPORTED_MODULE_0__.M).$D;
  };

  _proto.$locale = function $locale() {
    // get locale object
    return Ls[this.$L];
  };

  _proto.locale = function locale(preset, object) {
    if (!preset) return this.$L;
    var that = this.clone();
    var nextLocaleName = parseLocale(preset, object, true);
    if (nextLocaleName) that.$L = nextLocaleName;
    return that;
  };

  _proto.clone = function clone() {
    return Utils.w(this.$d, this);
  };

  _proto.toDate = function toDate() {
    return new Date(this.valueOf());
  };

  _proto.toJSON = function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  };

  _proto.toISOString = function toISOString() {
    // ie 8 return
    // new Dayjs(this.valueOf() + this.$d.getTimezoneOffset() * 60000)
    // .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    return this.$d.toISOString();
  };

  _proto.toString = function toString() {
    return this.$d.toUTCString();
  };

  return Dayjs;
}();

var proto = Dayjs.prototype;
dayjs.prototype = proto;
[['$ms', _constant__WEBPACK_IMPORTED_MODULE_0__.MS], ['$s', _constant__WEBPACK_IMPORTED_MODULE_0__.S], ['$m', _constant__WEBPACK_IMPORTED_MODULE_0__.MIN], ['$H', _constant__WEBPACK_IMPORTED_MODULE_0__.H], ['$W', _constant__WEBPACK_IMPORTED_MODULE_0__.D], ['$M', _constant__WEBPACK_IMPORTED_MODULE_0__.M], ['$y', _constant__WEBPACK_IMPORTED_MODULE_0__.Y], ['$D', _constant__WEBPACK_IMPORTED_MODULE_0__.DATE]].forEach(function (g) {
  proto[g[1]] = function (input) {
    return this.$g(input, g[0], g[1]);
  };
});

dayjs.extend = function (plugin, option) {
  if (!plugin.$i) {
    // install plugin only once
    plugin(option, Dayjs, dayjs);
    plugin.$i = true;
  }

  return dayjs;
};

dayjs.locale = parseLocale;
dayjs.isDayjs = isDayjs;

dayjs.unix = function (timestamp) {
  return dayjs(timestamp * 1e3);
};

dayjs.en = Ls[L];
dayjs.Ls = Ls;
dayjs.p = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dayjs);

/***/ }),
/* 405 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SECONDS_A_MINUTE": () => (/* binding */ SECONDS_A_MINUTE),
/* harmony export */   "SECONDS_A_HOUR": () => (/* binding */ SECONDS_A_HOUR),
/* harmony export */   "SECONDS_A_DAY": () => (/* binding */ SECONDS_A_DAY),
/* harmony export */   "SECONDS_A_WEEK": () => (/* binding */ SECONDS_A_WEEK),
/* harmony export */   "MILLISECONDS_A_SECOND": () => (/* binding */ MILLISECONDS_A_SECOND),
/* harmony export */   "MILLISECONDS_A_MINUTE": () => (/* binding */ MILLISECONDS_A_MINUTE),
/* harmony export */   "MILLISECONDS_A_HOUR": () => (/* binding */ MILLISECONDS_A_HOUR),
/* harmony export */   "MILLISECONDS_A_DAY": () => (/* binding */ MILLISECONDS_A_DAY),
/* harmony export */   "MILLISECONDS_A_WEEK": () => (/* binding */ MILLISECONDS_A_WEEK),
/* harmony export */   "MS": () => (/* binding */ MS),
/* harmony export */   "S": () => (/* binding */ S),
/* harmony export */   "MIN": () => (/* binding */ MIN),
/* harmony export */   "H": () => (/* binding */ H),
/* harmony export */   "D": () => (/* binding */ D),
/* harmony export */   "W": () => (/* binding */ W),
/* harmony export */   "M": () => (/* binding */ M),
/* harmony export */   "Q": () => (/* binding */ Q),
/* harmony export */   "Y": () => (/* binding */ Y),
/* harmony export */   "DATE": () => (/* binding */ DATE),
/* harmony export */   "FORMAT_DEFAULT": () => (/* binding */ FORMAT_DEFAULT),
/* harmony export */   "INVALID_DATE_STRING": () => (/* binding */ INVALID_DATE_STRING),
/* harmony export */   "REGEX_PARSE": () => (/* binding */ REGEX_PARSE),
/* harmony export */   "REGEX_FORMAT": () => (/* binding */ REGEX_FORMAT)
/* harmony export */ });
var SECONDS_A_MINUTE = 60;
var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
var MILLISECONDS_A_SECOND = 1e3;
var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND; // English locales

var MS = 'millisecond';
var S = 'second';
var MIN = 'minute';
var H = 'hour';
var D = 'day';
var W = 'week';
var M = 'month';
var Q = 'quarter';
var Y = 'year';
var DATE = 'date';
var FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ssZ';
var INVALID_DATE_STRING = 'Invalid Date'; // regex

var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

/***/ }),
/* 406 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// English [en]
// We don't need weekdaysShort, weekdaysMin, monthsShort in en.js locale
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'en',
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_')
});

/***/ }),
/* 407 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(405);


var padStart = function padStart(string, length, pad) {
  var s = String(string);
  if (!s || s.length >= length) return string;
  return "" + Array(length + 1 - s.length).join(pad) + string;
};

var padZoneStr = function padZoneStr(instance) {
  var negMinutes = -instance.utcOffset();
  var minutes = Math.abs(negMinutes);
  var hourOffset = Math.floor(minutes / 60);
  var minuteOffset = minutes % 60;
  return "" + (negMinutes <= 0 ? '+' : '-') + padStart(hourOffset, 2, '0') + ":" + padStart(minuteOffset, 2, '0');
};

var monthDiff = function monthDiff(a, b) {
  // function from moment.js in order to keep the same result
  if (a.date() < b.date()) return -monthDiff(b, a);
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  var anchor = a.clone().add(wholeMonthDiff, _constant__WEBPACK_IMPORTED_MODULE_0__.M);
  var c = b - anchor < 0;
  var anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), _constant__WEBPACK_IMPORTED_MODULE_0__.M);
  return +(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
};

var absFloor = function absFloor(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
};

var prettyUnit = function prettyUnit(u) {
  var special = {
    M: _constant__WEBPACK_IMPORTED_MODULE_0__.M,
    y: _constant__WEBPACK_IMPORTED_MODULE_0__.Y,
    w: _constant__WEBPACK_IMPORTED_MODULE_0__.W,
    d: _constant__WEBPACK_IMPORTED_MODULE_0__.D,
    D: _constant__WEBPACK_IMPORTED_MODULE_0__.DATE,
    h: _constant__WEBPACK_IMPORTED_MODULE_0__.H,
    m: _constant__WEBPACK_IMPORTED_MODULE_0__.MIN,
    s: _constant__WEBPACK_IMPORTED_MODULE_0__.S,
    ms: _constant__WEBPACK_IMPORTED_MODULE_0__.MS,
    Q: _constant__WEBPACK_IMPORTED_MODULE_0__.Q
  };
  return special[u] || String(u || '').toLowerCase().replace(/s$/, '');
};

var isUndefined = function isUndefined(s) {
  return s === undefined;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  s: padStart,
  z: padZoneStr,
  m: monthDiff,
  a: absFloor,
  p: prettyUnit,
  u: isUndefined
});

/***/ }),
/* 408 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(404);
/* harmony import */ var dayjs_esm_plugin_isSameOrBefore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(409);
/* harmony import */ var dayjs_esm_plugin_isSameOrAfter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(410);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(412);
/* harmony import */ var _panel_header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(411);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(343);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(321);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(335);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"].extend(dayjs_esm_plugin_isSameOrBefore__WEBPACK_IMPORTED_MODULE_2__["default"]);
dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"].extend(dayjs_esm_plugin_isSameOrAfter__WEBPACK_IMPORTED_MODULE_3__["default"]);
var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_5__.createNamespace)('month-picker');
var {
  n: nDate
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_5__.createNamespace)('date-picker');

function render(_ctx, _cache) {
  var _component_panel_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("panel-header");

  var _component_var_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('content'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_panel_header, {
    ref: "headerEl",
    type: "month",
    date: _ctx.preview,
    disabled: _ctx.panelBtnDisabled,
    onCheckPanel: _ctx.clickYear,
    onCheckDate: _ctx.checkDate
  }, null, 8
  /* PROPS */
  , ["date", "disabled", "onCheckPanel", "onCheckDate"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "" + _ctx.nDate() + (_ctx.reverse ? '-reverse' : '') + "-translatex"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", {
      key: _ctx.panelKey
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.MONTH_LIST, month => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
        key: month.index
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_button, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
        type: "primary",
        "var-month-picker-cover": "",
        ripple: false
      }, _extends({}, _ctx.buttonProps(month.index)), {
        onClick: event => _ctx.chooseMonth(month, event)
      }), {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getMonthAbbr(month.index)), 1
        /* TEXT */
        )]),
        _: 2
        /* DYNAMIC */

      }, 1040
      /* FULL_PROPS, DYNAMIC_SLOTS */
      , ["onClick"])]);
    }), 128
    /* KEYED_FRAGMENT */
    ))]))]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["name"])], 2
  /* CLASS */
  )], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'MonthPickerPanel',
  components: {
    VarButton: _button__WEBPACK_IMPORTED_MODULE_6__["default"],
    PanelHeader: _panel_header_js__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    choose: {
      type: Object,
      required: true
    },
    preview: {
      type: Object,
      required: true
    },
    current: {
      type: String,
      required: true
    },
    clickYear: {
      type: Function,
      required: true
    },
    componentProps: {
      type: Object,
      required: true
    }
  },
  emits: ['check-preview', 'choose-month'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;
    var [currentYear, currentMonth] = props.current.split('-');
    var reverse = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var panelKey = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var headerEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var panelBtnDisabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      left: false,
      right: false
    });
    var isSameYear = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.choose.chooseYear === props.preview.previewYear);
    var isCurrentYear = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.preview.previewYear === currentYear);

    var getMonthAbbr = key => {
      var _pack$value$datePicke, _pack$value$datePicke2;

      return (_pack$value$datePicke = (_pack$value$datePicke2 = _locale__WEBPACK_IMPORTED_MODULE_8__.pack.value.datePickerMonthDict) == null ? void 0 : _pack$value$datePicke2[key].abbr) != null ? _pack$value$datePicke : '';
    };

    var inRange = key => {
      var {
        preview: {
          previewYear
        },
        componentProps: {
          min,
          max
        }
      } = props;
      var isBeforeMax = true;
      var isAfterMin = true;
      var previewDate = previewYear + "-" + key;
      if (max) isBeforeMax = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(previewDate).isSameOrBefore((0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(max), 'month');
      if (min) isAfterMin = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(previewDate).isSameOrAfter((0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(min), 'month');
      return isBeforeMax && isAfterMin;
    };

    var shouldChoose = val => {
      var {
        choose: {
          chooseMonths,
          chooseDays,
          chooseRangeMonth
        },
        componentProps: {
          type,
          range
        }
      } = props;

      if (range) {
        if (!chooseRangeMonth.length) return false;
        var isBeforeMax = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(val).isSameOrBefore((0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(chooseRangeMonth[1]), 'month');
        var isAfterMin = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(val).isSameOrAfter((0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(chooseRangeMonth[0]), 'month');
        return isBeforeMax && isAfterMin;
      }

      if (type === 'month') return chooseMonths.includes(val);
      return chooseDays.some(value => value.includes(val));
    };

    var buttonProps = key => {
      var {
        choose: {
          chooseMonth
        },
        preview: {
          previewYear
        },
        componentProps: {
          allowedDates,
          color,
          multiple,
          range
        }
      } = props;
      var val = previewYear + "-" + key;

      var monthExist = () => {
        if (range || multiple) return shouldChoose(val);
        return (chooseMonth == null ? void 0 : chooseMonth.index) === key && isSameYear.value;
      };

      var computeDisabled = () => {
        if (!inRange(key)) return true;
        if (!allowedDates) return false;
        return !allowedDates(val);
      };

      var disabled = computeDisabled();

      var computeText = () => {
        if (disabled) return true;
        if (range || multiple) return !shouldChoose(val);
        return !isSameYear.value || (chooseMonth == null ? void 0 : chooseMonth.index) !== key;
      };

      var computeOutline = () => {
        // 不满足基本条件， 基本条件为当前年、当前月并且 showCurrent 为true的情况
        if (!(isCurrentYear.value && currentMonth === key && props.componentProps.showCurrent)) return false; // 存在着 disabled

        if ((range || multiple || isSameYear.value) && disabled) return true; // 在选择范围之外

        if (range || multiple) return !shouldChoose(val); // 同一年但是未被选择的情况

        if (isSameYear.value) return (chooseMonth == null ? void 0 : chooseMonth.index) !== currentMonth;
        return true;
      };

      var textColorOrCover = () => {
        if (disabled) return '';
        if (computeOutline()) return color != null ? color : '';
        if (monthExist()) return '';
        return nDate() + "-color-cover";
      };

      var isCover = textColorOrCover().startsWith(nDate());
      return {
        outline: computeOutline(),
        text: computeText(),
        color: !computeText() ? color : '',
        textColor: isCover ? '' : textColorOrCover(),
        [nDate() + "-color-cover"]: isCover,
        class: classes(n('button'), [disabled, n('button--disabled')])
      };
    };

    var chooseMonth = (month, event) => {
      var buttonEl = event.currentTarget;
      if (buttonEl.classList.contains(n('button--disabled'))) return;
      emit('choose-month', month);
    };

    var checkDate = checkType => {
      reverse.value = checkType === 'prev';
      panelKey.value += checkType === 'prev' ? -1 : 1;
      emit('check-preview', 'year', checkType);
    }; // expose for internal


    var forwardRef = checkType => {
      headerEl.value.checkDate(checkType);
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.preview.previewYear, year => {
      var {
        componentProps: {
          min,
          max
        }
      } = props;
      if (max) panelBtnDisabled.right = !(0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])("" + ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_4__.toNumber)(year) + 1)).isSameOrBefore((0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(max), 'year');
      if (min) panelBtnDisabled.left = !(0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])("" + ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_4__.toNumber)(year) - 1)).isSameOrAfter((0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(min), 'year');
    }, {
      immediate: true
    });
    return {
      n,
      nDate,
      pack: _locale__WEBPACK_IMPORTED_MODULE_8__.pack,
      MONTH_LIST: _props__WEBPACK_IMPORTED_MODULE_9__.MONTH_LIST,
      headerEl,
      reverse,
      panelKey,
      panelBtnDisabled,
      forwardRef,
      buttonProps,
      getMonthAbbr,
      chooseMonth,
      checkDate
    };
  }

}));

/***/ }),
/* 409 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (o, c) {
  c.prototype.isSameOrBefore = function (that, units) {
    return this.isSame(that, units) || this.isBefore(that, units);
  };
});

/***/ }),
/* 410 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (o, c) {
  c.prototype.isSameOrAfter = function (that, units) {
    return this.isSame(that, units) || this.isAfter(that, units);
  };
});

/***/ }),
/* 411 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(343);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(331);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(335);






var {
  n
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('picker-header');

function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  var _component_var_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_button, {
    round: "",
    text: "",
    style: {
      "filter": "opacity(0.54)"
    },
    disabled: _ctx.disabled.left,
    onClick: _cache[0] || (_cache[0] = $event => _ctx.checkDate('prev'))
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
      name: "chevron-left"
    })]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["disabled"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('value')),
    onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('check-panel'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "var-date-picker" + (_ctx.reverse ? '-reverse' : '') + "-translatex"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: _ctx.showDate
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.showDate), 1
    /* TEXT */
    ))]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["name"])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_button, {
    round: "",
    text: "",
    style: {
      "filter": "opacity(0.54)"
    },
    disabled: _ctx.disabled.right,
    onClick: _cache[2] || (_cache[2] = $event => _ctx.checkDate('next'))
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
      name: "chevron-right"
    })]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["disabled"])], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'PanelHeader',
  components: {
    VarButton: _button__WEBPACK_IMPORTED_MODULE_3__["default"],
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    date: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: 'date'
    },
    disabled: {
      type: Object,
      required: true
    }
  },
  emits: ['check-panel', 'check-date'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;
    var reverse = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var forwardOrBackNum = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var showDate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var _pack$value$datePicke;

      var {
        date,
        type
      } = props;
      var {
        previewMonth,
        previewYear
      } = date;
      if (type === 'month') return (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(previewYear) + forwardOrBackNum.value;
      var monthName = (_pack$value$datePicke = _locale__WEBPACK_IMPORTED_MODULE_5__.pack.value.datePickerMonthDict) == null ? void 0 : _pack$value$datePicke[previewMonth.index].name;
      return _locale__WEBPACK_IMPORTED_MODULE_5__.pack.value.lang === 'zh-CN' ? previewYear + " " + monthName : monthName + " " + previewYear;
    });

    var checkDate = checkType => {
      if (checkType === 'prev' && props.disabled.left || checkType === 'next' && props.disabled.right) return;
      emit('check-date', checkType);
      reverse.value = checkType === 'prev';
      forwardOrBackNum.value += checkType === 'prev' ? -1 : 1;
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.date, () => {
      forwardOrBackNum.value = 0;
    });
    return {
      n,
      reverse,
      showDate,
      checkDate
    };
  }

}));

/***/ }),
/* 412 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MONTH_LIST": () => (/* binding */ MONTH_LIST),
/* harmony export */   "WEEK_HEADER": () => (/* binding */ WEEK_HEADER),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
function typeValidator(type) {
  return ['date', 'month'].includes(type);
}

var MONTH_LIST = [{
  index: '01'
}, {
  index: '02'
}, {
  index: '03'
}, {
  index: '04'
}, {
  index: '05'
}, {
  index: '06'
}, {
  index: '07'
}, {
  index: '08'
}, {
  index: '09'
}, {
  index: '10'
}, {
  index: '11'
}, {
  index: '12'
}];
var WEEK_HEADER = [{
  index: '0'
}, {
  index: '1'
}, {
  index: '2'
}, {
  index: '3'
}, {
  index: '4'
}, {
  index: '5'
}, {
  index: '6'
}];
var props = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: 'date',
    validator: typeValidator
  },
  allowedDates: {
    type: Function
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  shadow: {
    type: Boolean,
    default: false
  },
  firstDayOfWeek: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  showCurrent: {
    type: Boolean,
    default: true
  },
  readonly: {
    type: Boolean,
    default: false
  },
  multiple: {
    type: Boolean,
    default: false
  },
  range: {
    type: Boolean,
    default: false
  },
  touchable: {
    type: Boolean,
    default: true
  },
  onChange: {
    type: Function
  },
  'onUpdate:modelValue': {
    type: Function
  }
};

/***/ }),
/* 413 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(404);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(321);




var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.createNamespace)('year-picker');


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = ["onClick"];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n())
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.yearList, year => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: year,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('item'), [year === _ctx.toNumber(_ctx.preview), _ctx.n('item--active')])),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        color: year === _ctx.toNumber(_ctx.preview) ? _ctx.componentProps.color : ''
      }),
      onClick: $event => _ctx.chooseYear(year)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(year), 15
    /* TEXT, CLASS, STYLE, PROPS */
    , _hoisted_1);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'YearPickerPanel',
  props: {
    preview: {
      type: String
    },
    componentProps: {
      type: Object,
      required: true
    }
  },
  emits: ['choose-year'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;
    var yearList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var list = [];
      var {
        preview,
        componentProps: {
          max,
          min
        }
      } = props;
      if (!preview) return list;
      var yearRange = [(0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(preview) + 100, (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(preview) - 100];

      if (max) {
        var formatMax = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(max).format('YYYY-MM-D');
        var year = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(formatMax.split('-')[0]);
        if (year < yearRange[0] && year > yearRange[1]) yearRange = [year, yearRange[1]];
        if (year <= yearRange[1]) return [year];
      }

      if (min) {
        var formatMin = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(min).format('YYYY-MM-D');

        var _year = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(formatMin.split('-')[0]);

        if (_year < yearRange[0] && _year > yearRange[1]) yearRange = [yearRange[0], _year];
        if (_year >= yearRange[0]) return [_year];
      }

      for (var i = yearRange[0]; i >= yearRange[1]; i--) {
        list.push(i);
      }

      return list;
    });

    var chooseYear = year => {
      emit('choose-year', year);
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      var activeEl = document.querySelector("." + n('item--active'));
      activeEl == null ? void 0 : activeEl.scrollIntoView({
        block: 'center'
      });
    });
    return {
      n,
      classes,
      yearList,
      chooseYear,
      toNumber: _varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber
    };
  }

}));

/***/ }),
/* 414 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(404);
/* harmony import */ var dayjs_esm_plugin_isSameOrBefore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(409);
/* harmony import */ var dayjs_esm_plugin_isSameOrAfter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(410);
/* harmony import */ var _panel_header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(411);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(343);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(412);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(321);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(335);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"].extend(dayjs_esm_plugin_isSameOrBefore__WEBPACK_IMPORTED_MODULE_1__["default"]);
dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"].extend(dayjs_esm_plugin_isSameOrAfter__WEBPACK_IMPORTED_MODULE_2__["default"]);
var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_5__.createNamespace)('day-picker');
var {
  n: nDate
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_5__.createNamespace)('date-picker');

function render(_ctx, _cache) {
  var _component_panel_header = (0,vue__WEBPACK_IMPORTED_MODULE_3__.resolveComponent)("panel-header");

  var _component_var_button = (0,vue__WEBPACK_IMPORTED_MODULE_3__.resolveComponent)("var-button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_3__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_3__.normalizeClass)(_ctx.n())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_3__.normalizeClass)(_ctx.n('content'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_3__.createVNode)(_component_panel_header, {
    ref: "headerEl",
    type: "day",
    date: _ctx.preview,
    disabled: _ctx.panelBtnDisabled,
    onCheckPanel: _ctx.clickMonth,
    onCheckDate: _ctx.checkDate
  }, null, 8
  /* PROPS */
  , ["date", "disabled", "onCheckPanel", "onCheckDate"]), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_3__.Transition, {
    name: "" + _ctx.nDate() + (_ctx.reverse ? '-reverse' : '') + "-translatex"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_3__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_3__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementBlock)("div", {
      key: _ctx.panelKey
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementVNode)("ul", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_3__.normalizeClass)(_ctx.n('head'))
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_3__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_3__.renderList)(_ctx.sortWeekList, week => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_3__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementBlock)("li", {
        key: week.index
      }, (0,vue__WEBPACK_IMPORTED_MODULE_3__.toDisplayString)(_ctx.getDayAbbr(week.index)), 1
      /* TEXT */
      );
    }), 128
    /* KEYED_FRAGMENT */
    ))], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementVNode)("ul", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_3__.normalizeClass)(_ctx.n('body'))
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_3__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_3__.renderList)(_ctx.days, (day, index) => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_3__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementBlock)("li", {
        key: index
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_3__.createVNode)(_component_var_button, (0,vue__WEBPACK_IMPORTED_MODULE_3__.mergeProps)({
        type: "primary",
        "var-day-picker-cover": "",
        round: "",
        ripple: false
      }, _extends({}, _ctx.buttonProps(day)), {
        onClick: event => _ctx.chooseDay(day, event)
      }), {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_3__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_3__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_3__.toDisplayString)(_ctx.filterDay(day)), 1
        /* TEXT */
        )]),
        _: 2
        /* DYNAMIC */

      }, 1040
      /* FULL_PROPS, DYNAMIC_SLOTS */
      , ["onClick"])]);
    }), 128
    /* KEYED_FRAGMENT */
    ))], 2
    /* CLASS */
    )]))]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["name"])], 2
  /* CLASS */
  )], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_3__.defineComponent)({
  render,
  name: 'DayPickerPanel',
  components: {
    VarButton: _button__WEBPACK_IMPORTED_MODULE_6__["default"],
    PanelHeader: _panel_header_js__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    choose: {
      type: Object,
      required: true
    },
    preview: {
      type: Object,
      required: true
    },
    current: {
      type: String,
      required: true
    },
    clickMonth: {
      type: Function,
      required: true
    },
    componentProps: {
      type: Object,
      required: true
    }
  },
  emits: ['check-preview', 'choose-day'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;
    var [currentYear, currentMonth, currentDay] = props.current.split('-');
    var days = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)([]);
    var reverse = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(false);
    var panelKey = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(0);
    var headerEl = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);
    var panelBtnDisabled = (0,vue__WEBPACK_IMPORTED_MODULE_3__.reactive)({
      left: false,
      right: false
    });
    var isCurrent = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(() => props.preview.previewYear === currentYear && props.preview.previewMonth.index === currentMonth);
    var isSame = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(() => {
      var _props$choose$chooseM;

      return props.choose.chooseYear === props.preview.previewYear && ((_props$choose$chooseM = props.choose.chooseMonth) == null ? void 0 : _props$choose$chooseM.index) === props.preview.previewMonth.index;
    });
    var sortWeekList = (0,vue__WEBPACK_IMPORTED_MODULE_3__.computed)(() => {
      var index = _props__WEBPACK_IMPORTED_MODULE_8__.WEEK_HEADER.findIndex(week => week.index === props.componentProps.firstDayOfWeek);
      if (index === -1 || index === 0) return _props__WEBPACK_IMPORTED_MODULE_8__.WEEK_HEADER;
      return _props__WEBPACK_IMPORTED_MODULE_8__.WEEK_HEADER.slice(index).concat(_props__WEBPACK_IMPORTED_MODULE_8__.WEEK_HEADER.slice(0, index));
    });

    var getDayAbbr = key => {
      var _pack$value$datePicke, _pack$value$datePicke2;

      return (_pack$value$datePicke = (_pack$value$datePicke2 = _locale__WEBPACK_IMPORTED_MODULE_9__.pack.value.datePickerWeekDict) == null ? void 0 : _pack$value$datePicke2[key].abbr) != null ? _pack$value$datePicke : '';
    };

    var filterDay = day => day > 0 ? day : '';

    var initDate = () => {
      var {
        preview: {
          previewMonth,
          previewYear
        }
      } = props;
      var monthNum = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(previewYear + "-" + previewMonth.index).daysInMonth();
      var firstDayToWeek = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(previewYear + "-" + previewMonth.index + "-01").day();
      var index = sortWeekList.value.findIndex(week => week.index === "" + firstDayToWeek);
      days.value = [...Array(index).fill(-1), ...Array.from(Array(monthNum + 1).keys())].filter(value => value);
    };

    var initHeader = () => {
      var {
        preview: {
          previewYear,
          previewMonth
        },
        componentProps: {
          max,
          min
        }
      } = props;

      if (max) {
        var date = previewYear + "-" + ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_4__.toNumber)(previewMonth.index) + 1);
        panelBtnDisabled.right = !(0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(date).isSameOrBefore((0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(max), 'month');
      }

      if (min) {
        var _date = previewYear + "-" + ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_4__.toNumber)(previewMonth.index) - 1);

        panelBtnDisabled.left = !(0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(_date).isSameOrAfter((0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(min), 'month');
      }
    };

    var inRange = day => {
      var {
        preview: {
          previewYear,
          previewMonth
        },
        componentProps: {
          min,
          max
        }
      } = props;
      var isBeforeMax = true;
      var isAfterMin = true;
      var previewDate = previewYear + "-" + previewMonth.index + "-" + day;
      if (max) isBeforeMax = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(previewDate).isSameOrBefore((0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(max), 'day');
      if (min) isAfterMin = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(previewDate).isSameOrAfter((0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(min), 'day');
      return isBeforeMax && isAfterMin;
    };

    var shouldChoose = val => {
      var {
        choose: {
          chooseDays,
          chooseRangeDay
        },
        componentProps: {
          range
        }
      } = props;

      if (range) {
        if (!chooseRangeDay.length) return false;
        var isBeforeMax = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(val).isSameOrBefore((0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(chooseRangeDay[1]), 'day');
        var isAfterMin = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(val).isSameOrAfter((0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(chooseRangeDay[0]), 'day');
        return isBeforeMax && isAfterMin;
      }

      return chooseDays.includes(val);
    };

    var buttonProps = day => {
      if (day < 0) {
        return {
          text: true,
          outline: false,
          textColor: '',
          class: n('button')
        };
      }

      var {
        choose: {
          chooseDay
        },
        preview: {
          previewYear,
          previewMonth
        },
        componentProps: {
          allowedDates,
          color,
          multiple,
          range
        }
      } = props;
      var val = previewYear + "-" + previewMonth.index + "-" + day;

      var dayExist = () => {
        if (range || multiple) return shouldChoose(val);
        return (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_4__.toNumber)(chooseDay) === day && isSame.value;
      };

      var computeDisabled = () => {
        if (!inRange(day)) return true;
        if (!allowedDates) return false;
        return !allowedDates(val);
      };

      var disabled = computeDisabled();

      var computeText = () => {
        if (disabled) return true;
        if (range || multiple) return !shouldChoose(val);
        return !isSame.value || (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_4__.toNumber)(chooseDay) !== day;
      };

      var computeOutline = () => {
        // 不满足基本条件， 基本条件为当前年、当前月、当前日并且 showCurrent 为true的情况
        if (!(isCurrent.value && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_4__.toNumber)(currentDay) === day && props.componentProps.showCurrent)) return false; // 存在着 disabled

        if ((range || multiple || isSame.value) && disabled) return true; // 在选择范围之外

        if (range || multiple) return !shouldChoose(val); // 同一年但是未被选择的情况

        if (isSame.value) return chooseDay !== currentDay;
        return true;
      };

      var textColorOrCover = () => {
        if (disabled) return '';
        if (computeOutline()) return color != null ? color : '';
        if (dayExist()) return '';
        return nDate() + "-color-cover";
      };

      var isCover = textColorOrCover().startsWith(nDate());
      return {
        text: computeText(),
        outline: computeOutline(),
        textColor: isCover ? '' : textColorOrCover(),
        [nDate() + "-color-cover"]: isCover,
        class: classes(n('button'), n('button--usable'), [disabled, n('button--disabled')])
      };
    };

    var checkDate = checkType => {
      reverse.value = checkType === 'prev';
      panelKey.value += checkType === 'prev' ? -1 : 1;
      emit('check-preview', 'month', checkType);
    };

    var chooseDay = (day, event) => {
      var buttonEl = event.currentTarget;
      if (buttonEl.classList.contains(n('button--disabled'))) return;
      emit('choose-day', day);
    }; // expose for internal


    var forwardRef = checkType => {
      headerEl.value.checkDate(checkType);
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_3__.onMounted)(() => {
      initDate();
      initHeader();
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_3__.watch)(() => props.preview, () => {
      initDate();
      initHeader();
    });
    return {
      n,
      nDate,
      days,
      reverse,
      headerEl,
      panelKey,
      sortWeekList,
      panelBtnDisabled,
      forwardRef,
      filterDay,
      getDayAbbr,
      checkDate,
      chooseDay,
      buttonProps
    };
  }

}));

/***/ }),
/* 415 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_DialogComponent": () => (/* binding */ _DialogComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dialog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(416);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);




var singletonOptions;

function Dialog(options) {
  if (!(0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.inBrowser)()) {
    return Promise.resolve();
  }

  return new Promise(resolve => {
    Dialog.close();
    var dialogOptions = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(options) || (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isNumber)(options) ? {
      message: String(options)
    } : options;
    var reactiveDialogOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(dialogOptions);
    reactiveDialogOptions.teleport = 'body';
    singletonOptions = reactiveDialogOptions;
    var {
      unmountInstance
    } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.mountInstance)(_Dialog_js__WEBPACK_IMPORTED_MODULE_3__["default"], reactiveDialogOptions, {
      onConfirm: () => {
        reactiveDialogOptions.onConfirm == null ? void 0 : reactiveDialogOptions.onConfirm();
        resolve('confirm');
      },
      onCancel: () => {
        reactiveDialogOptions.onCancel == null ? void 0 : reactiveDialogOptions.onCancel();
        resolve('cancel');
      },
      onClose: () => {
        reactiveDialogOptions.onClose == null ? void 0 : reactiveDialogOptions.onClose();
        resolve('close');
      },
      onClosed: () => {
        reactiveDialogOptions.onClosed == null ? void 0 : reactiveDialogOptions.onClosed();
        unmountInstance();
        singletonOptions === reactiveDialogOptions && (singletonOptions = null);
      },
      onRouteChange: () => {
        unmountInstance();
        singletonOptions === reactiveDialogOptions && (singletonOptions = null);
      },
      'onUpdate:show': value => {
        reactiveDialogOptions.show = value;
      }
    });
    reactiveDialogOptions.show = true;
  });
}

_Dialog_js__WEBPACK_IMPORTED_MODULE_3__["default"].install = function (app) {
  app.component(_Dialog_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, _Dialog_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
};

Dialog.install = function (app) {
  app.component(_Dialog_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, _Dialog_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
};

Dialog.close = () => {
  if (singletonOptions != null) {
    var prevSingletonOptions = singletonOptions;
    singletonOptions = null;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)().then(() => {
      prevSingletonOptions.show = false;
    });
  }
};

Dialog.Component = _Dialog_js__WEBPACK_IMPORTED_MODULE_3__["default"];
var _DialogComponent = _Dialog_js__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dialog);

/***/ }),
/* 416 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(326);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(343);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(417);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(337);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(335);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);







var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('dialog');

function render(_ctx, _cache) {
  var _component_var_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-button");

  var _component_var_popup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-popup");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_popup, {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('popup')),
    "var-dialog-cover": "",
    show: _ctx.popupShow,
    overlay: _ctx.overlay,
    "overlay-class": _ctx.overlayClass,
    "overlay-style": _ctx.overlayStyle,
    "lock-scroll": _ctx.lockScroll,
    "close-on-click-overlay": _ctx.popupCloseOnClickOverlay,
    teleport: _ctx.teleport,
    onOpen: _ctx.onOpen,
    onClose: _ctx.onClose,
    onClosed: _ctx.onClosed,
    onOpened: _ctx.onOpened,
    onRouteChange: _ctx.onRouteChange,
    onClickOverlay: _ctx.handleClickOverlay
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
      class: _ctx.classes('var--box', _ctx.n(), _ctx.dialogClass),
      style: _ctx.dialogStyle
    }, _ctx.$attrs), [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('title'))
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "title", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.dt(_ctx.title, _ctx.pack.dialogTitle)), 1
    /* TEXT */
    )])], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('message')),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        textAlign: _ctx.messageAlign
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.message), 1
    /* TEXT */
    )])], 6
    /* CLASS, STYLE */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('actions'))
    }, [_ctx.cancelButton ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_button, {
      key: 0,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('button'), _ctx.n('cancel-button'))),
      "var-dialog-cover": "",
      text: "",
      "text-color": _ctx.cancelButtonTextColor,
      color: _ctx.cancelButtonColor,
      onClick: _ctx.cancel
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.dt(_ctx.cancelButtonText, _ctx.pack.dialogCancelButtonText)), 1
      /* TEXT */
      )]),
      _: 1
      /* STABLE */

    }, 8
    /* PROPS */
    , ["class", "text-color", "color", "onClick"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.confirmButton ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_button, {
      key: 1,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('button'), _ctx.n('confirm-button'))),
      "var-dialog-cover": "",
      text: "",
      "text-color": _ctx.confirmButtonTextColor,
      color: _ctx.confirmButtonColor,
      onClick: _ctx.confirm
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.dt(_ctx.confirmButtonText, _ctx.pack.dialogConfirmButtonText)), 1
      /* TEXT */
      )]),
      _: 1
      /* STABLE */

    }, 8
    /* PROPS */
    , ["class", "text-color", "color", "onClick"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    )], 16
    /* FULL_PROPS */
    )]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onClickOverlay"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarDialog',
  components: {
    VarPopup: _popup__WEBPACK_IMPORTED_MODULE_2__["default"],
    VarButton: _button__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  inheritAttrs: false,
  props: _props__WEBPACK_IMPORTED_MODULE_4__.props,

  setup(props) {
    var popupShow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var popupCloseOnClickOverlay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    var done = () => (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props['onUpdate:show'], false);

    var handleClickOverlay = () => {
      var {
        closeOnClickOverlay,
        onClickOverlay,
        onBeforeClose
      } = props;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(onClickOverlay);

      if (!closeOnClickOverlay) {
        return;
      }

      if (onBeforeClose != null) {
        onBeforeClose('close', done);
        return;
      }

      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props['onUpdate:show'], false);
    };

    var confirm = () => {
      var {
        onBeforeClose,
        onConfirm
      } = props;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(onConfirm);

      if (onBeforeClose != null) {
        onBeforeClose('confirm', done);
        return;
      }

      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props['onUpdate:show'], false);
    };

    var cancel = () => {
      var {
        onBeforeClose,
        onCancel
      } = props;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(onCancel);

      if (onBeforeClose != null) {
        onBeforeClose('cancel', done);
        return;
      }

      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props['onUpdate:show'], false);
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.show, newValue => {
      popupShow.value = newValue;
    }, {
      immediate: true
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.closeOnClickOverlay, newValue => {
      if (props.onBeforeClose != null) {
        popupCloseOnClickOverlay.value = false;
        return;
      }

      popupCloseOnClickOverlay.value = newValue;
    }, {
      immediate: true
    });
    return {
      n,
      classes,
      pack: _locale__WEBPACK_IMPORTED_MODULE_5__.pack,
      dt: _utils_shared__WEBPACK_IMPORTED_MODULE_6__.dt,
      popupShow,
      popupCloseOnClickOverlay,
      handleClickOverlay,
      confirm,
      cancel
    };
  }

}));

/***/ }),
/* 417 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _popup_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(328);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function messageAlignValidator(messageAlign) {
  return ['left', 'center', 'right'].includes(messageAlign);
}

var props = _extends({
  show: {
    type: Boolean,
    default: false
  },
  title: {
    type: String
  },
  message: {
    type: String
  },
  messageAlign: {
    type: String,
    default: 'left',
    validator: messageAlignValidator
  },
  confirmButton: {
    type: Boolean,
    default: true
  },
  cancelButton: {
    type: Boolean,
    default: true
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  confirmButtonColor: {
    type: String
  },
  cancelButtonColor: {
    type: String
  },
  onBeforeClose: {
    type: Function
  },
  onConfirm: {
    type: Function
  },
  onCancel: {
    type: Function
  },
  'onUpdate:show': {
    type: Function
  },
  dialogClass: {
    type: String
  },
  dialogStyle: {
    type: Object
  }
}, (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.pickProps)(_popup_props__WEBPACK_IMPORTED_MODULE_1__.props, ['overlay', 'overlayClass', 'overlayStyle', 'lockScroll', 'closeOnClickOverlay', 'teleport', 'onOpen', 'onClose', 'onOpened', 'onClosed', 'onClickOverlay', // internal for function call closes the dialog
'onRouteChange']));

/***/ }),
/* 418 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_DividerComponent": () => (/* binding */ _DividerComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Divider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(419);


_Divider_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Divider_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Divider_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _DividerComponent = _Divider_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Divider_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 419 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(324);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(420);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('divider');

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), 'var--box', [_ctx.vertical, _ctx.n('--vertical')], [_ctx.withText, _ctx.n('--with-text')], [_ctx.isInset, _ctx.n('--inset')], [_ctx.dashed, _ctx.n('--dashed')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.style)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [_ctx.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('text'))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.description), 3
  /* TEXT, CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 6
  /* CLASS, STYLE */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarDivider',
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      withText: false
    });
    var isInset = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isBoolean)(props.inset) ? props.inset : true);
    var style = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var {
        inset,
        vertical,
        margin
      } = props;
      var baseStyle = {
        margin
      };
      if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isBoolean)(inset) || inset === 0) return _extends({}, baseStyle); // -18px -> -18

      var _inset = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(inset); // -18px -> 18px


      var absInsetWithUnit = Math.abs(_inset) + (inset + '').replace(_inset + '', '');
      return vertical ? _extends({}, baseStyle, {
        height: "calc(80% - " + (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.toSizeUnit)(absInsetWithUnit) + ")"
      }) : _extends({}, baseStyle, {
        width: "calc(100% - " + (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.toSizeUnit)(absInsetWithUnit) + ")",
        left: _inset > 0 ? (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.toSizeUnit)(absInsetWithUnit) : (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.toSizeUnit)(0)
      });
    });

    var checkHasText = () => {
      state.withText = Boolean(slots.default) || Boolean(props.description);
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      checkHasText();
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(() => {
      checkHasText();
    });
    return _extends({
      n,
      classes
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(state), {
      style,
      isInset
    });
  }

}));

/***/ }),
/* 420 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  inset: {
    type: [Boolean, Number, String],
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  description: {
    type: String
  },
  margin: {
    type: String
  },
  dashed: {
    type: Boolean,
    default: false
  }
};

/***/ }),
/* 421 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_FormComponent": () => (/* binding */ _FormComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(422);


_Form_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Form_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Form_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _FormComponent = _Form_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Form_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 422 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(423);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(375);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var {
  n
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('form');

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarForm',
  props: _props__WEBPACK_IMPORTED_MODULE_2__.props,

  setup(props) {
    var disabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.disabled);
    var readonly = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.readonly);
    var {
      formItems,
      bindFormItems
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_3__.useFormItems)(); // expose

    var validate = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* () {
        var res = yield Promise.all(formItems.map(_ref2 => {
          var {
            validate
          } = _ref2;
          return validate();
        }));
        return res.every(r => r === true);
      });

      return function validate() {
        return _ref.apply(this, arguments);
      };
    }(); // expose


    var reset = () => formItems.forEach(_ref3 => {
      var {
        reset
      } = _ref3;
      return reset();
    }); // expose


    var resetValidation = () => formItems.forEach(_ref4 => {
      var {
        resetValidation
      } = _ref4;
      return resetValidation();
    });

    var formProvider = {
      disabled,
      readonly
    };
    bindFormItems(formProvider);
    return {
      n,
      validate,
      reset,
      resetValidation
    };
  }

}));

/***/ }),
/* 423 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  }
};

/***/ }),
/* 424 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_ImageComponent": () => (/* binding */ _ImageComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Image_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(425);


_Image_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Image_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Image_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _ImageComponent = _Image_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Image_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 425 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(323);
/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(426);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(427);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(324);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);






var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('image');


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = ["alt", "lazy-error", "lazy-loading"];
var _hoisted_2 = ["alt", "src"];
function render(_ctx, _cache) {
  var _directive_lazy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("lazy");

  var _directive_ripple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("ripple");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), 'var--box', [!_ctx.block, 'var--inline-block'])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: _ctx.toSizeUnit(_ctx.width),
      height: _ctx.toSizeUnit(_ctx.height),
      'border-radius': _ctx.toSizeUnit(_ctx.radius)
    })
  }, [_ctx.lazy ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('image')),
    alt: _ctx.alt,
    "lazy-error": _ctx.error,
    "lazy-loading": _ctx.loading,
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      objectFit: _ctx.fit
    }),
    onLoad: _cache[0] || (_cache[0] = function () {
      return _ctx.handleLoad && _ctx.handleLoad(...arguments);
    }),
    onError: _cache[1] || (_cache[1] = function () {
      return _ctx.handleError && _ctx.handleError(...arguments);
    }),
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.onClick && _ctx.onClick(...arguments);
    })
  }, null, 46
  /* CLASS, STYLE, PROPS, HYDRATE_EVENTS */
  , _hoisted_1)), [[_directive_lazy, _ctx.src]]) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 1,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('image')),
    alt: _ctx.alt,
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      objectFit: _ctx.fit
    }),
    src: _ctx.src,
    onLoad: _cache[3] || (_cache[3] = function () {
      return _ctx.handleLoad && _ctx.handleLoad(...arguments);
    }),
    onError: _cache[4] || (_cache[4] = function () {
      return _ctx.handleError && _ctx.handleError(...arguments);
    }),
    onClick: _cache[5] || (_cache[5] = function () {
      return _ctx.onClick && _ctx.onClick(...arguments);
    })
  }, null, 46
  /* CLASS, STYLE, PROPS, HYDRATE_EVENTS */
  , _hoisted_2))], 6
  /* CLASS, STYLE */
  )), [[_directive_ripple, {
    disabled: !_ctx.ripple
  }]]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarImage',
  directives: {
    Lazy: _lazy__WEBPACK_IMPORTED_MODULE_2__["default"],
    Ripple: _ripple__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_4__.props,

  setup(props) {
    var handleLoad = e => {
      var el = e.currentTarget;
      var {
        lazy,
        onLoad,
        onError
      } = props;

      if (lazy) {
        el._lazy.state === 'success' && (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(onLoad, e);
        el._lazy.state === 'error' && (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(onError, e);
      } else {
        (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(onLoad, e);
      }
    };

    var handleError = e => {
      var {
        lazy,
        onError
      } = props;
      !lazy && (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(onError, e);
    };

    return {
      n,
      classes,
      toSizeUnit: _utils_elements__WEBPACK_IMPORTED_MODULE_5__.toSizeUnit,
      handleLoad,
      handleError
    };
  }

}));

/***/ }),
/* 426 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PIXEL": () => (/* binding */ PIXEL),
/* harmony export */   "imageCache": () => (/* binding */ imageCache),
/* harmony export */   "defaultLazyOptions": () => (/* binding */ defaultLazyOptions),
/* harmony export */   "_LazyComponent": () => (/* binding */ _LazyComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(324);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(320);
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(337);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var BACKGROUND_IMAGE_ARG_NAME = 'background-image';
var LAZY_LOADING = 'lazy-loading';
var LAZY_ERROR = 'lazy-error';
var LAZY_ATTEMPT = 'lazy-attempt';
var EVENTS = ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'];
var PIXEL = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
var lazyElements = [];
var listenTargets = [];
var imageCache = (0,_utils_shared__WEBPACK_IMPORTED_MODULE_1__.createCache)(100);
var defaultLazyOptions = {
  loading: PIXEL,
  error: PIXEL,
  attempt: 3,
  throttleWait: 300,
  events: EVENTS
};
var checkAllWithThrottle = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.throttle)(checkAll, defaultLazyOptions.throttleWait);

function setSRC(el, src) {
  if (el._lazy.arg === BACKGROUND_IMAGE_ARG_NAME) {
    el.style.backgroundImage = "url(" + src + ")";
  } else {
    el.setAttribute('src', src);
  }
}

function setLoading(el) {
  el._lazy.loading && setSRC(el, el._lazy.loading);
  checkAll();
}

function setError(el) {
  el._lazy.error && setSRC(el, el._lazy.error);
  el._lazy.state = 'error';
  clear(el);
  checkAll();
}

function setSuccess(el, attemptSRC) {
  setSRC(el, attemptSRC);
  el._lazy.state = 'success';
  clear(el);
  checkAll();
}

function bindEvents(listenTarget) {
  var _defaultLazyOptions$e;

  if (listenTargets.includes(listenTarget)) {
    return;
  }

  listenTargets.push(listenTarget);
  (_defaultLazyOptions$e = defaultLazyOptions.events) == null ? void 0 : _defaultLazyOptions$e.forEach(event => {
    listenTarget.addEventListener(event, checkAllWithThrottle, {
      passive: true
    });
  });
}

function unbindEvents() {
  listenTargets.forEach(listenTarget => {
    var _defaultLazyOptions$e2;

    (_defaultLazyOptions$e2 = defaultLazyOptions.events) == null ? void 0 : _defaultLazyOptions$e2.forEach(event => {
      listenTarget.removeEventListener(event, checkAllWithThrottle);
    });
  });
  listenTargets.length = 0;
}

function createLazy(el, binding) {
  var _el$getAttribute, _el$getAttribute2;

  var lazyOptions = {
    loading: (_el$getAttribute = el.getAttribute(LAZY_LOADING)) != null ? _el$getAttribute : defaultLazyOptions.loading,
    error: (_el$getAttribute2 = el.getAttribute(LAZY_ERROR)) != null ? _el$getAttribute2 : defaultLazyOptions.error,
    attempt: el.getAttribute(LAZY_ATTEMPT) ? Number(el.getAttribute(LAZY_ATTEMPT)) : defaultLazyOptions.attempt
  };
  el._lazy = _extends({
    src: binding.value,
    arg: binding.arg,
    currentAttempt: 0,
    state: 'pending',
    attemptLock: false
  }, lazyOptions);
  setSRC(el, PIXEL);
  (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(defaultLazyOptions.filter, el._lazy);
}

function createImage(el, attemptSRC) {
  var image = new Image();
  image.src = attemptSRC;
  el._lazy.preloadImage = image;
  image.addEventListener('load', () => {
    el._lazy.attemptLock = false;
    imageCache.add(attemptSRC);
    setSuccess(el, attemptSRC);
  });
  image.addEventListener('error', () => {
    el._lazy.attemptLock = false;
    el._lazy.currentAttempt >= el._lazy.attempt ? setError(el) : attemptLoad(el);
  });
}

function attemptLoad(el) {
  if (el._lazy.attemptLock) {
    return;
  }

  el._lazy.attemptLock = true;
  el._lazy.currentAttempt++;
  var {
    src: attemptSRC
  } = el._lazy;

  if (imageCache.has(attemptSRC)) {
    setSuccess(el, attemptSRC);
    el._lazy.attemptLock = false;
    return;
  }

  setLoading(el);
  createImage(el, attemptSRC);
}

function check(_x) {
  return _check.apply(this, arguments);
}

function _check() {
  _check = _asyncToGenerator(function* (el) {
    ;
    (yield (0,_utils_elements__WEBPACK_IMPORTED_MODULE_3__.inViewport)(el)) && attemptLoad(el);
  });
  return _check.apply(this, arguments);
}

function checkAll() {
  lazyElements.forEach(el => check(el));
}

function add(_x2) {
  return _add.apply(this, arguments);
}

function _add() {
  _add = _asyncToGenerator(function* (el) {
    !lazyElements.includes(el) && lazyElements.push(el);
    (0,_utils_elements__WEBPACK_IMPORTED_MODULE_3__.getAllParentScroller)(el).forEach(bindEvents);
    yield check(el);
  });
  return _add.apply(this, arguments);
}

function clear(el) {
  (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.removeItem)(lazyElements, el);
  lazyElements.length === 0 && unbindEvents();
}

function diff(el, binding) {
  var {
    src,
    arg
  } = el._lazy;
  return src !== binding.value || arg !== binding.arg;
}

function mounted(_x3, _x4) {
  return _mounted.apply(this, arguments);
}

function _mounted() {
  _mounted = _asyncToGenerator(function* (el, binding) {
    createLazy(el, binding);
    yield add(el);
  });
  return _mounted.apply(this, arguments);
}

function updated(_x5, _x6) {
  return _updated.apply(this, arguments);
}

function _updated() {
  _updated = _asyncToGenerator(function* (el, binding) {
    if (!diff(el, binding)) {
      lazyElements.includes(el) && (yield check(el));
      return;
    }

    yield mounted(el, binding);
  });
  return _updated.apply(this, arguments);
}

function mergeLazyOptions(lazyOptions) {
  if (lazyOptions === void 0) {
    lazyOptions = {};
  }

  var {
    events,
    loading,
    error,
    attempt,
    throttleWait,
    filter
  } = lazyOptions;
  defaultLazyOptions.events = events != null ? events : defaultLazyOptions.events;
  defaultLazyOptions.loading = loading != null ? loading : defaultLazyOptions.loading;
  defaultLazyOptions.error = error != null ? error : defaultLazyOptions.error;
  defaultLazyOptions.attempt = attempt != null ? attempt : defaultLazyOptions.attempt;
  defaultLazyOptions.throttleWait = throttleWait != null ? throttleWait : defaultLazyOptions.throttleWait;
  defaultLazyOptions.filter = filter;
}

var Lazy = {
  mounted,
  unmounted: clear,
  updated,

  install(app, lazyOptions) {
    mergeLazyOptions(lazyOptions);
    checkAllWithThrottle = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.throttle)(checkAll, defaultLazyOptions.throttleWait);
    app.directive('lazy', this);
  }

};
var _LazyComponent = Lazy;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lazy);

/***/ }),
/* 427 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
function fitValidator(fit) {
  return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(fit);
}

var props = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: fitValidator,
    default: 'fill'
  },
  alt: {
    type: String
  },
  width: {
    type: [String, Number]
  },
  height: {
    type: [String, Number]
  },
  radius: {
    type: [String, Number],
    default: 0
  },
  loading: {
    type: String
  },
  error: {
    type: String
  },
  lazy: {
    type: Boolean,
    default: false
  },
  ripple: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: true
  },
  onClick: {
    type: Function
  },
  onLoad: {
    type: Function
  },
  onError: {
    type: Function
  }
};

/***/ }),
/* 428 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_ImagePreviewComponent": () => (/* binding */ _ImagePreviewComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImagePreview_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(429);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);




var singletonOptions;

function ImagePreview(options) {
  if (!(0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.inBrowser)()) {
    return;
  }

  ImagePreview.close();
  var imagePreviewOptions = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(options) ? {
    images: [options]
  } : (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(options) ? {
    images: options
  } : options;
  var reactiveImagePreviewOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(imagePreviewOptions);
  reactiveImagePreviewOptions.teleport = 'body';
  singletonOptions = reactiveImagePreviewOptions;
  var {
    unmountInstance
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.mountInstance)(_ImagePreview_js__WEBPACK_IMPORTED_MODULE_3__["default"], reactiveImagePreviewOptions, {
    onClose: () => reactiveImagePreviewOptions.onClose == null ? void 0 : reactiveImagePreviewOptions.onClose(),
    onClosed: () => {
      reactiveImagePreviewOptions.onClosed == null ? void 0 : reactiveImagePreviewOptions.onClosed();
      unmountInstance();
      singletonOptions === reactiveImagePreviewOptions && (singletonOptions = null);
    },
    onRouteChange: () => {
      unmountInstance();
      singletonOptions === reactiveImagePreviewOptions && (singletonOptions = null);
    },
    'onUpdate:show': value => {
      reactiveImagePreviewOptions.show = value;
    }
  });
  reactiveImagePreviewOptions.show = true;
}

ImagePreview.close = () => {
  if (singletonOptions != null) {
    var prevSingletonOptions = singletonOptions;
    singletonOptions = null;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)().then(() => {
      prevSingletonOptions.show = false;
    });
  }
};

_ImagePreview_js__WEBPACK_IMPORTED_MODULE_3__["default"].install = function (app) {
  app.component(_ImagePreview_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, _ImagePreview_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
};

ImagePreview.install = function (app) {
  app.component(_ImagePreview_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, _ImagePreview_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
};

ImagePreview.Component = _ImagePreview_js__WEBPACK_IMPORTED_MODULE_3__["default"];
var _ImagePreviewComponent = _ImagePreview_js__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImagePreview);

/***/ }),
/* 429 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(430);
/* harmony import */ var _swipe_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(434);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(331);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(326);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(437);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);








var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('image-preview');
var DISTANCE_OFFSET = 12;
var EVENT_DELAY = 200;
var TAP_DELAY = 350;
var ANIMATION_DURATION = 200;


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = ["src", "alt"];
function render(_ctx, _cache) {
  var _component_var_swipe_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-swipe-item");

  var _component_var_swipe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-swipe");

  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  var _component_var_popup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-popup");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_popup, {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('popup')),
    "var-image-preview-cover": "",
    transition: "var-fade",
    show: _ctx.popupShow,
    overlay: false,
    "close-on-click-overlay": false,
    "lock-scroll": _ctx.lockScroll,
    teleport: _ctx.teleport,
    onOpen: _ctx.onOpen,
    onClose: _ctx.onClose,
    onClosed: _ctx.onClosed,
    onOpened: _ctx.onOpened,
    onRouteChange: _ctx.onRouteChange
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_swipe, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
      class: _ctx.n('swipe'),
      "var-image-preview-cover": "",
      touchable: _ctx.canSwipe,
      indicator: _ctx.indicator && _ctx.images.length > 1,
      "initial-index": _ctx.initialIndex,
      loop: _ctx.loop,
      onChange: _ctx.onChange
    }, _ctx.$attrs), {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.images, image => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_swipe_item, {
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('swipe-item')),
          "var-image-preview-cover": "",
          key: image
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('zoom-container')),
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
              transform: "scale(" + _ctx.scale + ") translate(" + _ctx.translateX + "px, " + _ctx.translateY + "px)",
              transitionTimingFunction: _ctx.transitionTimingFunction,
              transitionDuration: _ctx.transitionDuration
            }),
            onTouchstart: _cache[0] || (_cache[0] = function () {
              return _ctx.handleTouchstart && _ctx.handleTouchstart(...arguments);
            }),
            onTouchmove: _cache[1] || (_cache[1] = function () {
              return _ctx.handleTouchmove && _ctx.handleTouchmove(...arguments);
            }),
            onTouchend: _cache[2] || (_cache[2] = function () {
              return _ctx.handleTouchend && _ctx.handleTouchend(...arguments);
            })
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('image')),
            src: image,
            alt: image
          }, null, 10
          /* CLASS, PROPS */
          , _hoisted_1)], 38
          /* CLASS, STYLE, HYDRATE_EVENTS */
          )]),
          _: 2
          /* DYNAMIC */

        }, 1032
        /* PROPS, DYNAMIC_SLOTS */
        , ["class"]);
      }), 128
      /* KEYED_FRAGMENT */
      ))]),
      indicator: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(_ref => {
        var {
          index,
          length
        } = _ref;
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "indicator", {
          index: index,
          length: length
        }, () => [_ctx.indicator && _ctx.images.length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: 0,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('indicators'))
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1) + " / " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(length), 3
        /* TEXT, CLASS */
        )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
      }),
      _: 3
      /* FORWARDED */

    }, 16
    /* FULL_PROPS */
    , ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "close-icon", {}, () => [_ctx.closeable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_icon, {
      key: 0,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('close-icon')),
      name: "close-circle",
      "var-image-preview-cover": "",
      onClick: _ctx.close
    }, null, 8
    /* PROPS */
    , ["class", "onClick"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('extra'))
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "extra")], 2
    /* CLASS */
    )]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["class", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarImagePreview',
  components: {
    VarSwipe: _swipe__WEBPACK_IMPORTED_MODULE_3__["default"],
    VarSwipeItem: _swipe_item__WEBPACK_IMPORTED_MODULE_4__["default"],
    VarPopup: _popup__WEBPACK_IMPORTED_MODULE_5__["default"],
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  inheritAttrs: false,
  props: _props__WEBPACK_IMPORTED_MODULE_7__.props,

  setup(props) {
    var popupShow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var initialIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var {
        images,
        current
      } = props;
      var index = images.findIndex(image => image === current);
      return index >= 0 ? index : 0;
    });
    var scale = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);
    var translateX = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var translateY = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var transitionTimingFunction = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(undefined);
    var transitionDuration = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(undefined);
    var canSwipe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    var startTouch = null;
    var prevTouch = null;
    var checker = null;

    var getDistance = (touch, target) => {
      var {
        clientX: touchX,
        clientY: touchY
      } = touch;
      var {
        clientX: targetX,
        clientY: targetY
      } = target;
      return Math.abs(Math.sqrt(Math.pow(targetX - touchX, 2) + Math.pow(targetY - touchY, 2)));
    };

    var createVarTouch = (touches, target) => ({
      clientX: touches.clientX,
      clientY: touches.clientY,
      timestamp: Date.now(),
      target
    });

    var zoomIn = () => {
      scale.value = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.zoom);
      canSwipe.value = false;
      prevTouch = null;
      window.setTimeout(() => {
        transitionTimingFunction.value = 'linear';
        transitionDuration.value = '0s';
      }, ANIMATION_DURATION);
    };

    var zoomOut = () => {
      scale.value = 1;
      translateX.value = 0;
      translateY.value = 0;
      canSwipe.value = true;
      prevTouch = null;
      transitionTimingFunction.value = undefined;
      transitionDuration.value = undefined;
    };

    var isDoubleTouch = currentTouch => {
      if (!prevTouch) {
        return false;
      }

      return getDistance(prevTouch, currentTouch) <= DISTANCE_OFFSET && currentTouch.timestamp - prevTouch.timestamp <= EVENT_DELAY && prevTouch.target === currentTouch.target;
    };

    var isTapTouch = target => {
      if (!target || !startTouch || !prevTouch) {
        return false;
      }

      return getDistance(startTouch, prevTouch) <= DISTANCE_OFFSET && Date.now() - prevTouch.timestamp < TAP_DELAY && (target === startTouch.target || target.parentNode === startTouch.target);
    };

    var handleTouchend = event => {
      checker = window.setTimeout(() => {
        isTapTouch(event.target) && close();
        startTouch = null;
      }, EVENT_DELAY);
    };

    var handleTouchstart = event => {
      checker && window.clearTimeout(checker);
      var {
        touches
      } = event;
      var currentTouch = createVarTouch(touches[0], event.currentTarget);
      startTouch = currentTouch;

      if (isDoubleTouch(currentTouch)) {
        scale.value > 1 ? zoomOut() : zoomIn();
        return;
      }

      prevTouch = currentTouch;
    };

    var getZoom = target => {
      var {
        offsetWidth,
        offsetHeight
      } = target;
      var {
        naturalWidth,
        naturalHeight
      } = target.querySelector('.var-image-preview__image');
      return {
        width: offsetWidth,
        height: offsetHeight,
        imageRadio: naturalHeight / naturalWidth,
        rootRadio: offsetHeight / offsetWidth,
        zoom: (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.zoom)
      };
    };

    var getLimitX = target => {
      var {
        zoom,
        imageRadio,
        rootRadio,
        width,
        height
      } = getZoom(target);

      if (!imageRadio) {
        return 0;
      }

      var displayWidth = imageRadio > rootRadio ? height / imageRadio : width;
      return Math.max(0, (zoom * displayWidth - width) / 2) / zoom;
    };

    var getLimitY = target => {
      var {
        zoom,
        imageRadio,
        rootRadio,
        width,
        height
      } = getZoom(target);

      if (!imageRadio) {
        return 0;
      }

      var displayHeight = imageRadio > rootRadio ? height : width * imageRadio;
      return Math.max(0, (zoom * displayHeight - height) / 2) / zoom;
    };

    var getMoveTranslate = (current, move, limit) => {
      if (current + move >= limit) {
        return limit;
      }

      if (current + move <= -limit) {
        return -limit;
      }

      return current + move;
    };

    var handleTouchmove = event => {
      if (!prevTouch) {
        return;
      }

      var target = event.currentTarget;
      var {
        touches
      } = event;
      var currentTouch = createVarTouch(touches[0], target);

      if (scale.value > 1) {
        var moveX = currentTouch.clientX - prevTouch.clientX;
        var moveY = currentTouch.clientY - prevTouch.clientY;
        var limitX = getLimitX(target);
        var limitY = getLimitY(target);
        translateX.value = getMoveTranslate(translateX.value, moveX, limitX);
        translateY.value = getMoveTranslate(translateY.value, moveY, limitY);
      }

      prevTouch = currentTouch;
    };

    var close = () => {
      if (scale.value > 1) {
        zoomOut();
        setTimeout(() => (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:show'], false), ANIMATION_DURATION);
        return;
      }

      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:show'], false);
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.show, newValue => {
      popupShow.value = newValue;
    }, {
      immediate: true
    });
    return {
      n,
      classes,
      initialIndex,
      popupShow,
      scale,
      translateX,
      translateY,
      canSwipe,
      transitionTimingFunction,
      transitionDuration,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      close
    };
  }

}));

/***/ }),
/* 430 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_SwipeComponent": () => (/* binding */ _SwipeComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Swipe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(431);


_Swipe_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Swipe_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Swipe_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _SwipeComponent = _Swipe_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Swipe_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 431 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(433);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(324);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(432);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var SWIPE_DELAY = 250;
var SWIPE_DISTANCE = 20;
var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('swipe');


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = ["onClick"];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n()),
    ref: "swipeEl"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('track'), [_ctx.vertical, _ctx.n('--vertical')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: !_ctx.vertical ? _ctx.trackSize + "px" : undefined,
      height: _ctx.vertical ? _ctx.trackSize + "px" : undefined,
      transform: "translate" + (_ctx.vertical ? 'Y' : 'X') + "(" + _ctx.translate + "px)",
      transitionDuration: _ctx.lockDuration ? "0ms" : _ctx.toNumber(_ctx.duration) + "ms"
    }),
    onTouchstart: _cache[0] || (_cache[0] = function () {
      return _ctx.handleTouchstart && _ctx.handleTouchstart(...arguments);
    }),
    onTouchmove: _cache[1] || (_cache[1] = function () {
      return _ctx.handleTouchmove && _ctx.handleTouchmove(...arguments);
    }),
    onTouchend: _cache[2] || (_cache[2] = function () {
      return _ctx.handleTouchend && _ctx.handleTouchend(...arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 38
  /* CLASS, STYLE, HYDRATE_EVENTS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "indicator", {
    index: _ctx.index,
    length: _ctx.length
  }, () => [_ctx.indicator && _ctx.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('indicators'), [_ctx.vertical, _ctx.n('--indicators-vertical')]))
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.length, (l, idx) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('indicator'), [_ctx.index === idx, _ctx.n('--indicator-active')], [_ctx.vertical, _ctx.n('--indicator-vertical')])),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        background: _ctx.indicatorColor
      }),
      key: l,
      onClick: $event => _ctx.to(idx)
    }, null, 14
    /* CLASS, STYLE, PROPS */
    , _hoisted_1);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarSwipe',
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup(props) {
    var swipeEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var size = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var vertical = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.vertical);
    var trackSize = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var translate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var lockDuration = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var index = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var {
      swipeItems,
      bindSwipeItems,
      length
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_4__.useSwipeItems)();
    var touching = false;
    var timer = -1;
    var startX;
    var startY;
    var startTime;
    var prevX;
    var prevY;

    var findSwipeItem = idx => swipeItems.find(_ref => {
      var {
        index
      } = _ref;
      return index.value === idx;
    });

    var dispatchBorrower = () => {
      if (!props.loop) {
        return;
      } // track越左边界


      if (translate.value >= 0) {
        findSwipeItem(length.value - 1).setTranslate(-trackSize.value);
      } // track越右边界


      if (translate.value <= -(trackSize.value - size.value)) {
        findSwipeItem(0).setTranslate(trackSize.value);
      } // track没越界


      if (translate.value > -(trackSize.value - size.value) && translate.value < 0) {
        findSwipeItem(length.value - 1).setTranslate(0);
        findSwipeItem(0).setTranslate(0);
      }
    };

    var getSwipeIndex = targetSwipeIndex => {
      var swipeIndex = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isNumber)(targetSwipeIndex) ? targetSwipeIndex : Math.floor((translate.value - size.value / 2) / -size.value);
      var {
        loop
      } = props;

      if (swipeIndex <= -1) {
        return loop ? -1 : 0;
      }

      if (swipeIndex >= length.value) {
        return loop ? length.value : length.value - 1;
      }

      return swipeIndex;
    };

    var swipeIndexToIndex = swipeIndex => {
      var {
        loop
      } = props;

      if (swipeIndex === -1) {
        return loop ? length.value - 1 : 0;
      }

      if (swipeIndex === length.value) {
        return loop ? 0 : length.value - 1;
      }

      return swipeIndex;
    };

    var boundaryIndex = index => {
      var {
        loop
      } = props;

      if (index < 0) {
        return loop ? length.value - 1 : 0;
      }

      if (index > length.value - 1) {
        return loop ? 0 : length.value - 1;
      }

      return index;
    };

    var fixPosition = fn => {
      var overLeft = translate.value >= size.value;
      var overRight = translate.value <= -trackSize.value;
      var leftTranslate = 0;
      var rightTranslate = -(trackSize.value - size.value);
      lockDuration.value = true; // 检测是否有越界情况 越界修正

      if (overLeft || overRight) {
        lockDuration.value = true;
        translate.value = overRight ? leftTranslate : rightTranslate;
        findSwipeItem(0).setTranslate(0);
        findSwipeItem(length.value - 1).setTranslate(0);
      }

      (0,_utils_elements__WEBPACK_IMPORTED_MODULE_5__.nextTickFrame)(() => {
        lockDuration.value = false;
        (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(fn);
      });
    };

    var initialIndex = () => {
      index.value = boundaryIndex((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.initialIndex));
    };

    var startAutoplay = () => {
      var {
        autoplay
      } = props;

      if (!autoplay || length.value <= 1) {
        return;
      }

      stopAutoplay();
      timer = window.setTimeout(() => {
        next();
        startAutoplay();
      }, (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(autoplay));
    };

    var stopAutoplay = () => {
      timer && clearTimeout(timer);
    };

    var getDirection = (x, y) => {
      if (x > y && x > 10) {
        return 'horizontal';
      }

      if (y > x && y > 10) {
        return 'vertical';
      }
    };

    var handleTouchstart = event => {
      if (length.value <= 1 || !props.touchable) {
        return;
      }

      var {
        clientX,
        clientY
      } = event.touches[0];
      startX = clientX;
      startY = clientY;
      startTime = performance.now();
      touching = true;
      stopAutoplay();
      fixPosition(() => {
        lockDuration.value = true;
      });
    };

    var handleTouchmove = event => {
      var {
        touchable,
        vertical
      } = props;

      if (!touching || !touchable) {
        return;
      }

      var {
        clientX,
        clientY
      } = event.touches[0];
      var deltaX = Math.abs(clientX - startX);
      var deltaY = Math.abs(clientY - startY);
      var direction = getDirection(deltaX, deltaY);
      var expectDirection = vertical ? 'vertical' : 'horizontal';

      if (direction === expectDirection) {
        event.preventDefault();
        var moveX = prevX !== undefined ? clientX - prevX : 0;
        var moveY = prevY !== undefined ? clientY - prevY : 0;
        prevX = clientX;
        prevY = clientY;
        translate.value += vertical ? moveY : moveX;
        dispatchBorrower();
      }
    };

    var handleTouchend = () => {
      if (!touching) {
        return;
      }

      var {
        vertical,
        onChange
      } = props;
      var positive = vertical ? prevY < startY : prevX < startX;
      var distance = vertical ? Math.abs(startY - prevY) : Math.abs(startX - prevX);
      var quickSwiping = performance.now() - startTime <= SWIPE_DELAY && distance >= SWIPE_DISTANCE;
      var swipeIndex = quickSwiping ? positive ? getSwipeIndex(index.value + 1) : getSwipeIndex(index.value - 1) : getSwipeIndex();
      touching = false;
      lockDuration.value = false;
      prevX = undefined;
      prevY = undefined;
      translate.value = swipeIndex * -size.value;
      var prevIndex = index.value;
      index.value = swipeIndexToIndex(swipeIndex);
      startAutoplay();
      prevIndex !== index.value && (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onChange, index.value);
    }; // expose


    var resize = () => {
      lockDuration.value = true;
      size.value = props.vertical ? swipeEl.value.offsetHeight : swipeEl.value.offsetWidth;
      trackSize.value = size.value * length.value;
      translate.value = index.value * -size.value;
      swipeItems.forEach(swipeItem => {
        swipeItem.setTranslate(0);
      });
      startAutoplay();
      setTimeout(() => {
        lockDuration.value = false;
      });
    }; // expose


    var next = () => {
      if (length.value <= 1) {
        return;
      }

      var {
        loop,
        onChange
      } = props;
      var currentIndex = index.value;
      index.value = boundaryIndex(currentIndex + 1);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onChange, index.value);
      fixPosition(() => {
        if (currentIndex === length.value - 1 && loop) {
          findSwipeItem(0).setTranslate(trackSize.value);
          translate.value = length.value * -size.value;
          return;
        }

        if (currentIndex !== length.value - 1) {
          translate.value = index.value * -size.value;
        }
      });
    }; // expose


    var prev = () => {
      if (length.value <= 1) {
        return;
      }

      var {
        loop,
        onChange
      } = props;
      var currentIndex = index.value;
      index.value = boundaryIndex(currentIndex - 1);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onChange, index.value);
      fixPosition(() => {
        if (currentIndex === 0 && loop) {
          findSwipeItem(length.value - 1).setTranslate(-trackSize.value);
          translate.value = size.value;
          return;
        }

        if (currentIndex !== 0) {
          translate.value = index.value * -size.value;
        }
      });
    }; // expose


    var to = idx => {
      if (length.value <= 1 || idx === index.value) {
        return;
      }

      idx = idx < 0 ? 0 : idx;
      idx = idx >= length.value ? length.value : idx;
      var task = idx > index.value ? next : prev;
      Array.from({
        length: Math.abs(idx - index.value)
      }).forEach(task);
    };

    var swipeProvider = {
      size,
      vertical
    };
    bindSwipeItems(swipeProvider);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => length.value, /*#__PURE__*/_asyncToGenerator(function* () {
      // In nuxt, the size of the swipe cannot got when the route is change, need double raf
      yield (0,_utils_elements__WEBPACK_IMPORTED_MODULE_5__.doubleRaf)();
      initialIndex();
      resize();
    }));
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      window.addEventListener('resize', resize);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
      window.removeEventListener('resize', resize);
      stopAutoplay();
    });
    return {
      n,
      classes,
      length,
      index,
      swipeEl,
      trackSize,
      translate,
      lockDuration,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      next,
      prev,
      to,
      resize,
      toNumber: _varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber
    };
  }

}));

/***/ }),
/* 432 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  loop: {
    type: Boolean,
    default: true
  },
  autoplay: {
    type: [String, Number]
  },
  duration: {
    type: [String, Number],
    default: 300
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  indicator: {
    type: Boolean,
    default: true
  },
  indicatorColor: {
    type: String
  },
  vertical: {
    type: Boolean,
    default: false
  },
  touchable: {
    type: Boolean,
    default: true
  },
  onChange: {
    type: Function
  }
};

/***/ }),
/* 433 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SWIPE_BIND_SWIPE_ITEM_KEY": () => (/* binding */ SWIPE_BIND_SWIPE_ITEM_KEY),
/* harmony export */   "SWIPE_COUNT_SWIPE_ITEM_KEY": () => (/* binding */ SWIPE_COUNT_SWIPE_ITEM_KEY),
/* harmony export */   "useSwipeItems": () => (/* binding */ useSwipeItems)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);

var SWIPE_BIND_SWIPE_ITEM_KEY = Symbol('SWIPE_BIND_SWIPE_ITEM_KEY');
var SWIPE_COUNT_SWIPE_ITEM_KEY = Symbol('SWIPE_COUNT_SWIPE_ITEM_KEY');
function useSwipeItems() {
  var {
    childProviders,
    bindChildren
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useChildren)(SWIPE_BIND_SWIPE_ITEM_KEY);
  var {
    length
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtChildrenCounter)(SWIPE_COUNT_SWIPE_ITEM_KEY);
  return {
    length,
    swipeItems: childProviders,
    bindSwipeItems: bindChildren
  };
}

/***/ }),
/* 434 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_SwipeItemComponent": () => (/* binding */ _SwipeItemComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SwipeItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(435);


_SwipeItem_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_SwipeItem_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _SwipeItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _SwipeItemComponent = _SwipeItem_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_SwipeItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 435 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(436);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);



var {
  n
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('swipe-item');

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n()),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: !_ctx.vertical ? _ctx.size + "px" : undefined,
      height: _ctx.vertical ? _ctx.size + "px" : undefined,
      transform: "translate" + (_ctx.vertical ? 'Y' : 'X') + "(" + _ctx.translate + "px)"
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 6
  /* CLASS, STYLE */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarSwipeItem',

  setup() {
    var translate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var {
      swipe,
      bindSwipe,
      index
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_2__.useSwipe)();
    var {
      size,
      vertical
    } = swipe;

    var setTranslate = x => {
      translate.value = x;
    };

    var swipeItemProvider = {
      index,
      setTranslate
    };
    bindSwipe(swipeItemProvider);
    return {
      n,
      size,
      vertical,
      translate
    };
  }

}));

/***/ }),
/* 436 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSwipe": () => (/* binding */ useSwipe)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _swipe_provide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(433);


function useSwipe() {
  var {
    bindParent,
    parentProvider
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useParent)(_swipe_provide__WEBPACK_IMPORTED_MODULE_1__.SWIPE_BIND_SWIPE_ITEM_KEY);
  var {
    index
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtParentIndex)(_swipe_provide__WEBPACK_IMPORTED_MODULE_1__.SWIPE_COUNT_SWIPE_ITEM_KEY);

  if (!bindParent || !parentProvider || !index) {
    throw Error('<var-swipe-item/> must in <var-swipe/>');
  }

  return {
    index,
    swipe: parentProvider,
    bindSwipe: bindParent
  };
}

/***/ }),
/* 437 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _swipe_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(432);
/* harmony import */ var _popup_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(328);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var props = _extends({
  show: {
    type: Boolean,
    default: false
  },
  images: {
    type: Array,
    default: () => []
  },
  current: {
    type: String
  },
  zoom: {
    type: [String, Number],
    default: 2
  },
  closeable: {
    type: Boolean,
    default: false
  },
  'onUpdate:show': {
    type: Function
  }
}, (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.pickProps)(_swipe_props__WEBPACK_IMPORTED_MODULE_1__.props, ['loop', 'indicator', 'onChange']), (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.pickProps)(_popup_props__WEBPACK_IMPORTED_MODULE_2__.props, ['lockScroll', 'teleport', 'onOpen', 'onClose', 'onOpened', 'onClosed', // internal for function call closes the dialog
'onRouteChange']));

/***/ }),
/* 438 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_IndexAnchorComponent": () => (/* binding */ _IndexAnchorComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexAnchor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(439);


_IndexAnchor_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_IndexAnchor_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _IndexAnchor_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _IndexAnchorComponent = _IndexAnchor_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_IndexAnchor_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 439 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sticky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(440);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(444);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(443);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);





var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('index-anchor');

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(_ctx.sticky ? 'var-sticky' : _ctx.Transition), {
    "offset-top": _ctx.sticky ? _ctx.stickyOffsetTop : null,
    "z-index": _ctx.sticky ? _ctx.zIndex : null,
    disabled: _ctx.disabled && !_ctx.cssMode,
    "css-mode": _ctx.cssMode,
    ref: "anchorEl"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
      class: _ctx.n()
    }, _ctx.$attrs), [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.name), 1
    /* TEXT */
    )])], 16
    /* FULL_PROPS */
    )]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["offset-top", "z-index", "disabled", "css-mode"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarIndexAnchor',
  components: {
    VarSticky: _sticky__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  inheritAttrs: false,
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup(props) {
    var {
      index,
      indexBar,
      bindIndexBar
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_4__.useIndexBar)();
    var ownTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var disabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var name = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.index);
    var anchorEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var {
      active,
      sticky,
      cssMode,
      stickyOffsetTop,
      zIndex
    } = indexBar;

    var setOwnTop = () => {
      if (!anchorEl.value) return;
      ownTop.value = anchorEl.value.$el ? anchorEl.value.$el.offsetTop : anchorEl.value.offsetTop;
    };

    var setDisabled = value => {
      disabled.value = value;
    };

    var indexAnchorProvider = {
      index,
      name,
      ownTop,
      setOwnTop,
      setDisabled
    };
    bindIndexBar(indexAnchorProvider);
    return {
      n,
      classes,
      name,
      anchorEl,
      active,
      sticky,
      zIndex,
      disabled,
      cssMode,
      stickyOffsetTop,
      Transition: vue__WEBPACK_IMPORTED_MODULE_0__.Transition
    };
  }

}));

/***/ }),
/* 440 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_StickyComponent": () => (/* binding */ _StickyComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sticky_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(441);


_Sticky_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Sticky_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Sticky_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _StickyComponent = _Sticky_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Sticky_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 441 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(442);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(324);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('sticky');

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), [_ctx.enableCSSMode, _ctx.n('--css-mode')])),
    ref: "stickyEl",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      zIndex: _ctx.toNumber(_ctx.zIndex),
      top: _ctx.enableCSSMode ? _ctx.offsetTop + "px" : undefined,
      width: _ctx.enableFixedMode ? _ctx.fixedWidth : undefined,
      height: _ctx.enableFixedMode ? _ctx.fixedHeight : undefined
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('wrapper')),
    ref: "wrapperEl",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      zIndex: _ctx.toNumber(_ctx.zIndex),
      position: _ctx.enableFixedMode ? 'fixed' : undefined,
      width: _ctx.enableFixedMode ? _ctx.fixedWrapperWidth : undefined,
      height: _ctx.enableFixedMode ? _ctx.fixedWrapperHeight : undefined,
      left: _ctx.enableFixedMode ? _ctx.fixedLeft : undefined,
      top: _ctx.enableFixedMode ? _ctx.fixedTop : undefined
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 6
  /* CLASS, STYLE */
  )], 6
  /* CLASS, STYLE */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarSticky',
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup(props) {
    var stickyEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var wrapperEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var isFixed = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var fixedTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('0px');
    var fixedLeft = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('0px');
    var fixedWidth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('auto');
    var fixedHeight = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('auto');
    var fixedWrapperWidth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('auto');
    var fixedWrapperHeight = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('auto');
    var enableCSSMode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !props.disabled && props.cssMode);
    var enableFixedMode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !props.disabled && isFixed.value);
    var offsetTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.toPxNum)(props.offsetTop));
    var scroller;

    var handleScroll = () => {
      var {
        onScroll,
        cssMode,
        disabled
      } = props;

      if (disabled) {
        return;
      }

      var scrollerTop = 0;

      if (scroller !== window) {
        var {
          top
        } = scroller.getBoundingClientRect();
        scrollerTop = top;
      }

      var wrapper = wrapperEl.value;
      var sticky = stickyEl.value;
      var {
        top: stickyTop,
        left: stickyLeft
      } = sticky.getBoundingClientRect();
      var currentOffsetTop = stickyTop - scrollerTop;

      if (currentOffsetTop <= offsetTop.value) {
        if (!cssMode) {
          fixedWidth.value = sticky.offsetWidth + "px";
          fixedHeight.value = sticky.offsetHeight + "px";
          fixedTop.value = scrollerTop + offsetTop.value + "px";
          fixedLeft.value = stickyLeft + "px";
          fixedWrapperWidth.value = wrapper.offsetWidth + "px";
          fixedWrapperHeight.value = wrapper.offsetHeight + "px";
          isFixed.value = true;
        }

        (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onScroll, offsetTop.value, true);
      } else {
        isFixed.value = false;
        (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onScroll, currentOffsetTop, false);
      }
    };

    var addScrollListener = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* () {
        yield (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.doubleRaf)();
        scroller = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.getParentScroller)(stickyEl.value);
        scroller !== window && scroller.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
      });

      return function addScrollListener() {
        return _ref.apply(this, arguments);
      };
    }();

    var removeScrollListener = () => {
      scroller !== window && scroller.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.disabled, handleScroll);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onActivated)(addScrollListener);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onDeactivated)(removeScrollListener);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(addScrollListener);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(removeScrollListener);
    return {
      n,
      classes,
      stickyEl,
      wrapperEl,
      isFixed,
      offsetTop,
      fixedTop,
      fixedLeft,
      fixedWidth,
      fixedHeight,
      fixedWrapperWidth,
      fixedWrapperHeight,
      enableCSSMode,
      enableFixedMode,
      toNumber: _varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber
    };
  }

}));

/***/ }),
/* 442 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  zIndex: {
    type: [String, Number],
    default: 10
  },
  cssMode: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  onScroll: {
    type: Function
  }
};

/***/ }),
/* 443 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  index: {
    type: [Number, String]
  }
};

/***/ }),
/* 444 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIndexBar": () => (/* binding */ useIndexBar)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _index_bar_provide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(445);


function useIndexBar() {
  var {
    parentProvider,
    bindParent
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useParent)(_index_bar_provide__WEBPACK_IMPORTED_MODULE_1__.INDEX_BAR_BIND_INDEX_ANCHOR_KEY);
  var {
    index
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtParentIndex)(_index_bar_provide__WEBPACK_IMPORTED_MODULE_1__.INDEX_BAR_COUNT_INDEX_ANCHOR_KEY);

  if (!parentProvider || !bindParent) {
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  }

  return {
    index,
    indexBar: parentProvider,
    bindIndexBar: bindParent
  };
}

/***/ }),
/* 445 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INDEX_BAR_BIND_INDEX_ANCHOR_KEY": () => (/* binding */ INDEX_BAR_BIND_INDEX_ANCHOR_KEY),
/* harmony export */   "INDEX_BAR_COUNT_INDEX_ANCHOR_KEY": () => (/* binding */ INDEX_BAR_COUNT_INDEX_ANCHOR_KEY),
/* harmony export */   "useIndexAnchors": () => (/* binding */ useIndexAnchors)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);

var INDEX_BAR_BIND_INDEX_ANCHOR_KEY = Symbol('INDEX_BAR_BIND_INDEX_ANCHOR_KEY');
var INDEX_BAR_COUNT_INDEX_ANCHOR_KEY = Symbol('INDEX_BAR_COUNT_INDEX_ANCHOR_KEY');
function useIndexAnchors() {
  var {
    bindChildren,
    childProviders
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useChildren)(INDEX_BAR_BIND_INDEX_ANCHOR_KEY);
  var {
    length
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtChildrenCounter)(INDEX_BAR_COUNT_INDEX_ANCHOR_KEY);
  return {
    length,
    indexAnchors: childProviders,
    bindIndexAnchors: bindChildren
  };
}

/***/ }),
/* 446 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_IndexBarComponent": () => (/* binding */ _IndexBarComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(447);


_IndexBar_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_IndexBar_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _IndexBar_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _IndexBarComponent = _IndexBar_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_IndexBar_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 447 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(337);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(324);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(445);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(448);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('index-bar');


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = ["onClick"];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n()),
    ref: "barEl"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('anchor-list')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      zIndex: _ctx.toNumber(_ctx.zIndex) + 2,
      display: _ctx.hideList ? 'none' : 'block'
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.anchorNameList, anchorName => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: anchorName,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('anchor-item'), [_ctx.active === anchorName, _ctx.n('anchor-item--active')])),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        color: _ctx.active === anchorName && _ctx.highlightColor ? _ctx.highlightColor : ''
      }),
      onClick: $event => _ctx.anchorClick(anchorName, true)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(anchorName), 15
    /* TEXT, CLASS, STYLE, PROPS */
    , _hoisted_1);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 6
  /* CLASS, STYLE */
  )], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarIndexBar',
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup(props) {
    var {
      length,
      indexAnchors,
      bindIndexAnchors
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_4__.useIndexAnchors)();
    var clickedName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var scroller = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var barEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var anchorNameList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var sticky = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.sticky);
    var cssMode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.cssMode);
    var stickyOffsetTop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (0,_utils_elements__WEBPACK_IMPORTED_MODULE_5__.toPxNum)(props.stickyOffsetTop));
    var zIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.zIndex);
    var indexBarProvider = {
      active,
      sticky,
      cssMode,
      stickyOffsetTop,
      zIndex
    };
    bindIndexAnchors(indexBarProvider);

    var emitEvent = anchor => {
      var anchorName = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(anchor) ? anchor.name.value : anchor;
      if (anchorName === active.value || anchorName === undefined) return;
      active.value = anchorName;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props.onChange, anchorName);
    };

    var handleScroll = () => {
      var scrollTop = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_5__.getScrollTop)(scroller.value);
      var scrollHeight = scroller.value === window ? document.body.scrollHeight : scroller.value.scrollHeight;
      var {
        offsetTop
      } = barEl.value;
      indexAnchors.forEach((anchor, index) => {
        var anchorTop = anchor.ownTop.value;
        var top = scrollTop - anchorTop + stickyOffsetTop.value - offsetTop;
        var distance = index === indexAnchors.length - 1 ? scrollHeight : indexAnchors[index + 1].ownTop.value - anchor.ownTop.value;

        if (top >= 0 && top < distance && !clickedName.value) {
          if (index && !props.cssMode) {
            indexAnchors[index - 1].setDisabled(true);
          }

          anchor.setDisabled(false);
          emitEvent(anchor);
        }
      });
    };

    var anchorClick = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (anchorName, manualCall) {
        var {
          offsetTop
        } = barEl.value;
        if (manualCall) (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props.onClick, anchorName);
        if (anchorName === active.value) return;
        var indexAnchor = indexAnchors.find(_ref2 => {
          var {
            name
          } = _ref2;
          return anchorName === name.value;
        });
        if (!indexAnchor) return;
        var top = indexAnchor.ownTop.value - stickyOffsetTop.value + offsetTop;
        var left = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_5__.getScrollLeft)(scroller.value);
        clickedName.value = anchorName;
        emitEvent(anchorName);
        yield (0,_utils_elements__WEBPACK_IMPORTED_MODULE_5__.scrollTo)(scroller.value, {
          left,
          top,
          animation: _utils_shared__WEBPACK_IMPORTED_MODULE_6__.easeInOutCubic,
          duration: (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.duration)
        });
        (0,_utils_elements__WEBPACK_IMPORTED_MODULE_5__.nextTickFrame)(() => {
          clickedName.value = '';
        });
      });

      return function anchorClick(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(); // expose


    var scrollTo = index => {
      (0,_utils_elements__WEBPACK_IMPORTED_MODULE_5__.requestAnimationFrame)(() => anchorClick(index));
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => length.value, /*#__PURE__*/_asyncToGenerator(function* () {
      yield (0,_utils_elements__WEBPACK_IMPORTED_MODULE_5__.doubleRaf)();
      indexAnchors.forEach(_ref4 => {
        var {
          name,
          setOwnTop
        } = _ref4;
        if (name.value) anchorNameList.value.push(name.value);
        setOwnTop();
      });
    }));
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)( /*#__PURE__*/_asyncToGenerator(function* () {
      yield (0,_utils_elements__WEBPACK_IMPORTED_MODULE_5__.doubleRaf)();
      scroller.value = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_5__.getParentScroller)(barEl.value);
      scroller.value.addEventListener('scroll', handleScroll);
    }));
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(scroller.value.removeEventListener, 'scroll', handleScroll);
    });
    return {
      n,
      classes,
      barEl,
      active,
      zIndex,
      anchorNameList,
      toNumber: _varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber,
      scrollTo,
      anchorClick
    };
  }

}));

/***/ }),
/* 448 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  sticky: {
    type: Boolean,
    default: true
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  cssMode: {
    type: Boolean,
    default: false
  },
  hideList: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  highlightColor: {
    type: String
  },
  duration: {
    type: [Number, String],
    default: 0
  },
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  }
};

/***/ }),
/* 449 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_InputComponent": () => (/* binding */ _InputComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(450);


_Input_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Input_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Input_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _InputComponent = _Input_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Input_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 450 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(369);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(331);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(451);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
/* harmony import */ var _form_provide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(375);







var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('input');


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = ["id", "disabled", "type", "value", "maxlength", "rows"];
var _hoisted_2 = ["id", "disabled", "type", "value", "maxlength"];
var _hoisted_3 = ["for"];
function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  var _component_var_form_details = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-form-details");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), 'var--box', [_ctx.disabled, _ctx.n('--disabled')])),
    onClick: _cache[8] || (_cache[8] = function () {
      return _ctx.handleClick && _ctx.handleClick(...arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('controller'), [_ctx.isFocus, _ctx.n('--focus')], [_ctx.errorMessage, _ctx.n('--error')], [_ctx.formDisabled || _ctx.disabled, _ctx.n('--disabled')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: !_ctx.errorMessage ? _ctx.isFocus ? _ctx.focusColor : _ctx.blurColor : undefined
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('icon'), [!_ctx.hint, _ctx.n('--non-hint')]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "prepend-icon")], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('wrap'), [!_ctx.hint, _ctx.n('--non-hint')]))
  }, [_ctx.type === 'password' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('autocomplete'))
  }, null, 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.textarea ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
    key: 1,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('input'), _ctx.n('--textarea'), [_ctx.formDisabled || _ctx.disabled, _ctx.n('--disabled')], [_ctx.errorMessage, _ctx.n('--caret-error')])),
    ref: "el",
    autocomplete: "new-password",
    id: _ctx.id,
    disabled: _ctx.formDisabled || _ctx.disabled || _ctx.formReadonly || _ctx.readonly,
    type: _ctx.type,
    value: _ctx.modelValue,
    maxlength: _ctx.maxlength,
    rows: _ctx.rows,
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: _ctx.textColor,
      caretColor: !_ctx.errorMessage ? _ctx.focusColor : undefined,
      resize: _ctx.resize ? 'vertical' : 'none'
    }),
    onFocus: _cache[0] || (_cache[0] = function () {
      return _ctx.handleFocus && _ctx.handleFocus(...arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function () {
      return _ctx.handleBlur && _ctx.handleBlur(...arguments);
    }),
    onInput: _cache[2] || (_cache[2] = function () {
      return _ctx.handleInput && _ctx.handleInput(...arguments);
    }),
    onChange: _cache[3] || (_cache[3] = function () {
      return _ctx.handleChange && _ctx.handleChange(...arguments);
    })
  }, "\n        ", 46
  /* CLASS, STYLE, PROPS, HYDRATE_EVENTS */
  , _hoisted_1)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 2,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('input'), [_ctx.formDisabled || _ctx.disabled, _ctx.n('--disabled')], [_ctx.errorMessage, _ctx.n('--caret-error')])),
    ref: "el",
    autocomplete: "new-password",
    id: _ctx.id,
    disabled: _ctx.formDisabled || _ctx.disabled || _ctx.formReadonly || _ctx.readonly,
    type: _ctx.type,
    value: _ctx.modelValue,
    maxlength: _ctx.maxlength,
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: _ctx.textColor,
      caretColor: !_ctx.errorMessage ? _ctx.focusColor : undefined
    }),
    onFocus: _cache[4] || (_cache[4] = function () {
      return _ctx.handleFocus && _ctx.handleFocus(...arguments);
    }),
    onBlur: _cache[5] || (_cache[5] = function () {
      return _ctx.handleBlur && _ctx.handleBlur(...arguments);
    }),
    onInput: _cache[6] || (_cache[6] = function () {
      return _ctx.handleInput && _ctx.handleInput(...arguments);
    }),
    onChange: _cache[7] || (_cache[7] = function () {
      return _ctx.handleChange && _ctx.handleChange(...arguments);
    })
  }, null, 46
  /* CLASS, STYLE, PROPS, HYDRATE_EVENTS */
  , _hoisted_2)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes('var--ellipsis', [_ctx.isFocus, _ctx.n('--focus')], [_ctx.errorMessage, _ctx.n('--error')], [_ctx.textarea, _ctx.n('textarea-placeholder'), _ctx.n('placeholder')], _ctx.computePlaceholderState(), [!_ctx.hint, _ctx.n('--placeholder-non-hint')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: !_ctx.errorMessage ? _ctx.isFocus ? _ctx.focusColor : _ctx.blurColor : undefined
    }),
    for: _ctx.id
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.placeholder), 15
  /* TEXT, CLASS, STYLE, PROPS */
  , _hoisted_3)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('icon'), [!_ctx.hint, _ctx.n('--non-hint')]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "append-icon", {}, () => [_ctx.clearable && !_ctx.isEmpty(_ctx.modelValue) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_icon, {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('clear-icon')),
    "var-input-cover": "",
    name: "close-circle",
    size: "14px",
    onClick: _ctx.handleClear
  }, null, 8
  /* PROPS */
  , ["class", "onClick"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 2
  /* CLASS */
  )], 6
  /* CLASS, STYLE */
  ), _ctx.line ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('line'), [_ctx.formDisabled || _ctx.disabled, _ctx.n('--line-disabled')], [_ctx.errorMessage, _ctx.n('--line-error')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      background: !_ctx.errorMessage ? _ctx.blurColor : undefined
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('dot'), [_ctx.isFocus, _ctx.n('--spread')], [_ctx.formDisabled || _ctx.disabled, _ctx.n('--line-disabled')], [_ctx.errorMessage, _ctx.n('--line-error')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      background: !_ctx.errorMessage ? _ctx.focusColor : undefined
    })
  }, null, 6
  /* CLASS, STYLE */
  )], 6
  /* CLASS, STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_form_details, {
    "error-message": _ctx.errorMessage,
    "maxlength-text": _ctx.maxlengthText
  }, null, 8
  /* PROPS */
  , ["error-message", "maxlength-text"])], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarInput',
  components: {
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
    VarFormDetails: _form_details__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_5__.props,

  setup(props) {
    var id = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("var-input-" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)().uid);
    var el = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var isFocus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var maxlengthText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var {
        maxlength,
        modelValue
      } = props;

      if (!maxlength) {
        return '';
      }

      if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(modelValue)) {
        return "0 / " + maxlength;
      }

      return String(modelValue).length + "/" + maxlength;
    });
    var {
      bindForm,
      form
    } = (0,_form_provide__WEBPACK_IMPORTED_MODULE_6__.useForm)();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation
    } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.useValidation)();

    var validateWithTrigger = trigger => {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        var {
          validateTrigger,
          rules,
          modelValue
        } = props;
        vt(validateTrigger, trigger, rules, modelValue);
      });
    };

    var computePlaceholderState = () => {
      var {
        hint,
        modelValue
      } = props;

      if (!hint && !(0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(modelValue)) {
        return n('--placeholder-hidden');
      }

      if (hint && (!(0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(modelValue) || isFocus.value)) {
        return n('--placeholder-hint');
      }
    };

    var handleFocus = e => {
      isFocus.value = true;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props.onFocus, e);
      validateWithTrigger('onFocus');
    };

    var handleBlur = e => {
      isFocus.value = false;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props.onBlur, e);
      validateWithTrigger('onBlur');
    };

    var handleInput = e => {
      var {
        value
      } = e.target;
      value = withTrim(value);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], value);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props.onInput, value, e);
      validateWithTrigger('onInput');
    };

    var handleChange = e => {
      var {
        value
      } = e.target;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props.onChange, withTrim(value), e);
      validateWithTrigger('onChange');
    };

    var handleClear = () => {
      var {
        disabled,
        readonly,
        clearable,
        onClear
      } = props;

      if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly || !clearable) {
        return;
      }

      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], '');
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onClear, '');
      validateWithTrigger('onClear');
    };

    var handleClick = e => {
      var {
        disabled,
        onClick
      } = props;

      if (form != null && form.disabled.value || disabled) {
        return;
      }

      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onClick, e);
      validateWithTrigger('onClick');
    };

    var withTrim = value => props.modelModifiers.trim ? value.trim() : value; // expose


    var reset = () => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], '');
      resetValidation();
    }; // expose


    var validate = () => v(props.rules, props.modelValue); // expose


    var focus = () => {
      var _el$value;

      ;
      (_el$value = el.value) == null ? void 0 : _el$value.focus();
    }; // expose


    var blur = () => {
      ;
      el.value.blur();
    };

    var inputProvider = {
      reset,
      validate,
      resetValidation
    };
    (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(bindForm, inputProvider);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      if (props.autofocus) focus();
    });
    return {
      el,
      id,
      isFocus,
      errorMessage,
      maxlengthText,
      formDisabled: form == null ? void 0 : form.disabled,
      formReadonly: form == null ? void 0 : form.readonly,
      n,
      classes,
      isEmpty: _varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isEmpty,
      computePlaceholderState,
      handleFocus,
      handleBlur,
      handleInput,
      handleChange,
      handleClear,
      handleClick,
      validate,
      resetValidation,
      reset,
      focus,
      blur
    };
  }

}));

/***/ }),
/* 451 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typeValidator": () => (/* binding */ typeValidator),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
function typeValidator(type) {
  return ['text', 'password', 'number'].includes(type);
}
var props = {
  modelValue: {
    type: String
  },
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  type: {
    type: String,
    default: 'text',
    validator: typeValidator
  },
  textarea: {
    type: Boolean,
    default: false
  },
  rows: {
    type: [String, Number],
    default: 8
  },
  placeholder: {
    type: String
  },
  line: {
    type: Boolean,
    default: true
  },
  hint: {
    type: Boolean,
    default: true
  },
  textColor: {
    type: String
  },
  focusColor: {
    type: String
  },
  blurColor: {
    type: String
  },
  maxlength: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  resize: {
    type: Boolean,
    default: false
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  validateTrigger: {
    type: Array,
    default: () => ['onInput', 'onClear']
  },
  rules: {
    type: Array
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onClick: {
    type: Function
  },
  onClear: {
    type: Function
  },
  onInput: {
    type: Function
  },
  onChange: {
    type: Function
  },
  'onUpdate:modelValue': {
    type: Function
  }
};

/***/ }),
/* 452 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_ListComponent": () => (/* binding */ _ListComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(453);


_List_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_List_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _List_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _ListComponent = _List_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_List_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 453 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(345);
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(323);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(324);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(454);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(337);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(335);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('list');

function render(_ctx, _cache) {
  var _component_var_loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-loading");

  var _directive_ripple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("ripple");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), 'var--box')),
    ref: "listEl"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), _ctx.loading ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "loading", {
    key: 0
  }, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('loading'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('loading-text'))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.dt(_ctx.loadingText, _ctx.pack.listLoadingText)), 3
  /* TEXT, CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_loading, {
    size: "mini",
    radius: 10
  })], 2
  /* CLASS */
  )]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.finished ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "finished", {
    key: 1
  }, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('finished'))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.dt(_ctx.finishedText, _ctx.pack.listFinishedText)), 3
  /* TEXT, CLASS */
  )]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.error ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "error", {
    key: 2
  }, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('error')),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.load && _ctx.load(...arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.dt(_ctx.errorText, _ctx.pack.listErrorText)), 1
  /* TEXT */
  )], 2
  /* CLASS */
  )), [[_directive_ripple]])]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('detector')),
    ref: "detectorEl"
  }, null, 2
  /* CLASS */
  )], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarList',
  directives: {
    Ripple: _ripple__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  components: {
    VarLoading: _loading__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_5__.props,

  setup(props) {
    var listEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var detectorEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var scroller;

    var load = () => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:error'], false);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:loading'], true);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props.onLoad);
    };

    var isReachBottom = () => {
      var containerBottom = scroller === window ? window.innerHeight : scroller.getBoundingClientRect().bottom;
      var {
        bottom: detectorBottom
      } = detectorEl.value.getBoundingClientRect(); // The fractional part of the detectorBottom when bottoming out overflows
      // https://github.com/varletjs/varlet/issues/310

      return Math.floor(detectorBottom) - (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.toPxNum)(props.offset) <= containerBottom;
    }; // expose


    var check = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* () {
        yield (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)();
        var {
          loading,
          finished,
          error
        } = props;

        if (!loading && !finished && !error && isReachBottom()) {
          load();
        }
      });

      return function check() {
        return _ref.apply(this, arguments);
      };
    }();

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      scroller = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.getParentScroller)(listEl.value);
      props.immediateCheck && check();
      scroller.addEventListener('scroll', check);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
      scroller.removeEventListener('scroll', check);
    });
    return {
      pack: _locale__WEBPACK_IMPORTED_MODULE_7__.pack,
      listEl,
      detectorEl,
      dt: _utils_shared__WEBPACK_IMPORTED_MODULE_8__.dt,
      isNumber: _varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isNumber,
      load,
      check,
      n,
      classes
    };
  }

}));

/***/ }),
/* 454 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  loading: {
    type: Boolean,
    default: false
  },
  immediateCheck: {
    type: Boolean,
    default: true
  },
  finished: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  loadingText: {
    type: String
  },
  finishedText: {
    type: String
  },
  errorText: {
    type: String
  },
  onLoad: {
    type: Function
  },
  'onUpdate:loading': {
    type: Function
  },
  'onUpdate:error': {
    type: Function
  }
};

/***/ }),
/* 455 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_MenuComponent": () => (/* binding */ _MenuComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(456);


_Menu__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Menu__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Menu__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _MenuComponent = _Menu__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Menu__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 456 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(457);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(324);
/* harmony import */ var _context_zIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(329);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,vue__WEBPACK_IMPORTED_MODULE_0__.isVNode)(s);
}

var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('menu');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'VarMenu',
  props: _props__WEBPACK_IMPORTED_MODULE_2__.props,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var host = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var to = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    var top = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var left = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var {
      zIndex
    } = (0,_context_zIndex__WEBPACK_IMPORTED_MODULE_3__.useZIndex)(() => props.show, 1);
    var {
      disabled
    } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.useTeleport)();
    var clickSelf = false;

    var computeTop = alignment => {
      return alignment === 'top' ? (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.getTop)(host.value) : (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.getTop)(host.value) - menu.value.offsetHeight;
    };

    var handleClick = () => {
      clickSelf = true;
    };

    var handleMenuClose = () => {
      if (clickSelf) {
        clickSelf = false;
        return;
      }

      if (!props.show) {
        return;
      }

      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props['onUpdate:show'], false);
    }; // expose


    var resize = () => {
      top.value = computeTop(props.alignment);
      left.value = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.getLeft)(host.value);
    }; // Transition style use computed place here


    var transitionStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return {
        top: "calc(" + top.value + "px + " + (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.toSizeUnit)(props.offsetY) + ")",
        left: "calc(" + left.value + "px + " + (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.toSizeUnit)(props.offsetX) + ")",
        zIndex: zIndex.value
      };
    });

    var renderTransition = () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
      "name": n(),
      "onAfterEnter": props.onOpened,
      "onAfterLeave": props.onClosed
    }, {
      default: () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        "class": classes(n('menu'), 'var-elevation--3'),
        "ref": menu,
        "style": transitionStyle.value,
        "onClick": event => {
          event.stopPropagation();
        }
      }, [(0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(slots.menu)]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, props.show]])]
    });

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.alignment, resize);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.show, /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* (newValue) {
        var {
          onOpen,
          onClose
        } = props;

        if (newValue) {
          yield (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)();
          resize();
        }

        newValue ? (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(onOpen) : (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(onClose);
      });

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.teleport, newValue => {
      to.value = newValue;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      // Synchronously transfer the state to the mount hook to support server-side rendering to prevent hydration errors
      to.value = props.teleport;
      resize();
      document.addEventListener('click', handleMenuClose);
      window.addEventListener('resize', resize);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
      document.removeEventListener('click', handleMenuClose);
      window.removeEventListener('resize', resize);
    });
    (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.exposeApis)({
      resize
    });
    return () => {
      var _slot;

      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        "class": n(),
        "ref": host,
        "onClick": handleClick
      }, [(0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(slots.default), to.value ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
        "to": to.value,
        "disabled": disabled.value
      }, _isSlot(_slot = renderTransition()) ? _slot : {
        default: () => [_slot]
      }) : renderTransition()]);
    };
  }

}));

/***/ }),
/* 457 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
function alignmentValidator(alignment) {
  return ['top', 'bottom'].includes(alignment);
}

var props = {
  show: {
    type: Boolean,
    default: false
  },
  alignment: {
    type: String,
    default: 'top',
    validator: alignmentValidator
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: String,
    default: 'body'
  },
  onOpen: {
    type: Function
  },
  onOpened: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onClosed: {
    type: Function
  },
  'onUpdate:show': {
    type: Function
  }
};

/***/ }),
/* 458 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_OptionComponent": () => (/* binding */ _OptionComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Option_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(459);


_Option_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Option_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Option_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _OptionComponent = _Option_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Option_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 459 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(367);
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(323);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(461);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(460);






var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('option');

function render(_ctx, _cache) {
  var _component_var_checkbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-checkbox");

  var _directive_ripple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("ripple");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), 'var--box', [_ctx.optionSelected, _ctx.n('--selected-color')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: _ctx.wrapWidth,
      color: _ctx.optionSelected ? _ctx.focusColor : undefined
    }),
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.handleClick && _ctx.handleClick(...arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('cover'), [_ctx.optionSelected, _ctx.n('--selected-background')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      background: _ctx.optionSelected ? _ctx.focusColor : undefined
    })
  }, null, 6
  /* CLASS, STYLE */
  ), _ctx.multiple ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_checkbox, {
    key: 0,
    ref: "checkbox",
    "checked-color": _ctx.focusColor,
    modelValue: _ctx.optionSelected,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.optionSelected = $event),
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"])),
    onChange: _ctx.handleSelect
  }, null, 8
  /* PROPS */
  , ["checked-color", "modelValue", "onChange"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('text'), 'var--ellipsis'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.label), 1
  /* TEXT */
  )])], 2
  /* CLASS */
  )], 6
  /* CLASS, STYLE */
  )), [[_directive_ripple]]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarOption',
  directives: {
    Ripple: _ripple__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  components: {
    VarCheckbox: _checkbox__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_4__.props,

  setup(props) {
    var optionSelected = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var selected = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => optionSelected.value);
    var label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.label);
    var value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.value);
    var {
      select,
      bindSelect
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_5__.useSelect)();
    var {
      wrapWidth,
      multiple,
      focusColor,
      onSelect
    } = select;

    var handleClick = () => {
      optionSelected.value = !optionSelected.value;
      onSelect(optionProvider);
    };

    var handleSelect = () => onSelect(optionProvider);

    var sync = checked => {
      optionSelected.value = checked;
    };

    var optionProvider = {
      label,
      value,
      selected,
      sync
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)([() => props.label, () => props.value], () => {
      if (props.label == null && props.value == null) {
        throw Error("Props label and value can't both be undefined\n");
      }
    }, {
      immediate: true
    });
    bindSelect(optionProvider);
    return {
      n,
      classes,
      optionSelected,
      wrapWidth,
      multiple,
      focusColor,
      handleClick,
      handleSelect
    };
  }

}));

/***/ }),
/* 460 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  label: {},
  value: {}
};

/***/ }),
/* 461 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSelect": () => (/* binding */ useSelect)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _select_provide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(462);


function useSelect() {
  var {
    bindParent,
    parentProvider
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useParent)(_select_provide__WEBPACK_IMPORTED_MODULE_1__.SELECT_BIND_OPTION_KEY);
  var {
    index
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtParentIndex)(_select_provide__WEBPACK_IMPORTED_MODULE_1__.SELECT_COUNT_OPTION_KEY);

  if (!bindParent || !parentProvider) {
    throw Error('<var-option/> must in <var-select/>');
  }

  return {
    index,
    select: parentProvider,
    bindSelect: bindParent
  };
}

/***/ }),
/* 462 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SELECT_BIND_OPTION_KEY": () => (/* binding */ SELECT_BIND_OPTION_KEY),
/* harmony export */   "SELECT_COUNT_OPTION_KEY": () => (/* binding */ SELECT_COUNT_OPTION_KEY),
/* harmony export */   "useOptions": () => (/* binding */ useOptions)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);

var SELECT_BIND_OPTION_KEY = Symbol('SELECT_BIND_OPTION_KEY');
var SELECT_COUNT_OPTION_KEY = Symbol('SELECT_COUNT_OPTION_KEY');
function useOptions() {
  var {
    bindChildren,
    childProviders
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useChildren)(SELECT_BIND_OPTION_KEY);
  var {
    length
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtChildrenCounter)(SELECT_COUNT_OPTION_KEY);
  return {
    length,
    options: childProviders,
    bindOptions: bindChildren
  };
}

/***/ }),
/* 463 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_PaginationComponent": () => (/* binding */ _PaginationComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagination_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(464);


_Pagination_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Pagination_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Pagination_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _PaginationComponent = _Pagination_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Pagination_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 464 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(455);
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(323);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(331);
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(364);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(449);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _porps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(465);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(335);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);










var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('pagination');


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = ["item-mode", "onClick"];
function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  var _component_var_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-input");

  var _component_var_cell = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-cell");

  var _component_var_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-menu");

  var _directive_ripple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("ripple");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('item'), _ctx.n('prev'), [_ctx.current <= 1 || _ctx.disabled, _ctx.n('item--disabled')], [_ctx.simple, _ctx.n('item--hover'), 'var-elevation--2'])),
    onClick: _cache[0] || (_cache[0] = $event => _ctx.clickItem('prev'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "prev", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
    name: "chevron-left"
  })])], 2
  /* CLASS */
  )), [[_directive_ripple, {
    disabled: _ctx.current <= 1 || _ctx.disabled
  }]]), _ctx.simple ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('simple'), [_ctx.disabled, _ctx.n('item--disabled')]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_input, {
    modelValue: _ctx.simpleValue,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.simpleValue = $event),
    disabled: _ctx.disabled,
    "var-pagination-cover": "",
    onBlur: _cache[2] || (_cache[2] = $event => _ctx.setPage('simple', _ctx.simpleValue, $event)),
    onKeydown: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($event => _ctx.setPage('simple', _ctx.simpleValue, $event), ["enter"]))
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "/ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.pageCount), 1
  /* TEXT */
  )], 2
  /* CLASS */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.pageList, (item, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: _ctx.toNumber(item) + index,
      "item-mode": _ctx.getMode(item, index),
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('item'), 'var-elevation--2', [item === _ctx.current && !_ctx.disabled, _ctx.n('item--active')], [_ctx.isHideEllipsis(item, index), _ctx.n('item--hide')], [_ctx.disabled, _ctx.n('item--disabled')], [item === _ctx.current && _ctx.disabled, _ctx.n('item--disabled--active')])),
      onClick: $event => _ctx.clickItem(item, index)
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item), 1
    /* TEXT */
    )], 10
    /* CLASS, PROPS */
    , _hoisted_1)), [[_directive_ripple, {
      disabled: _ctx.disabled
    }]]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('item'), _ctx.n('next'), [_ctx.current >= _ctx.pageCount || _ctx.disabled, _ctx.n('item--disabled')], [_ctx.simple, _ctx.n('item--hover'), 'var-elevation--2'])),
    onClick: _cache[4] || (_cache[4] = $event => _ctx.clickItem('next'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "next", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
    name: "chevron-right"
  })])], 2
  /* CLASS */
  )), [[_directive_ripple, {
    disabled: _ctx.current >= _ctx.pageCount || _ctx.disabled
  }]]), _ctx.showSizeChanger ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    key: 2,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('size'), [_ctx.disabled, _ctx.n('item--disabled')]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_menu, {
    show: _ctx.menuVisible,
    "onUpdate:show": _cache[6] || (_cache[6] = $event => _ctx.menuVisible = $event),
    "offset-x": -4
  }, {
    menu: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.sizeOption, (option, index) => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_cell, {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('list'), [_ctx.size === option, _ctx.n('list--active')])),
        key: index,
        onClick: $event => _ctx.clickSize(option)
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.pack.paginationItem) + " / " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.pack.paginationPage), 1
        /* TEXT */
        )]),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["class", "onClick"])), [[_directive_ripple]]);
    }), 128
    /* KEYED_FRAGMENT */
    ))]),
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('size--open'), [_ctx.current <= 1 || _ctx.disabled, _ctx.n('size--open--disabled')])),
      onClick: _cache[5] || (_cache[5] = function () {
        return _ctx.showMenu && _ctx.showMenu(...arguments);
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.size) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.pack.paginationItem) + " / " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.pack.paginationPage), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('size--open-icon')),
      "var-pagination-cover": "",
      name: "menu-down"
    }, null, 8
    /* PROPS */
    , ["class"])], 2
    /* CLASS */
    )]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["show"])], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.showQuickJumper && !_ctx.simple ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    key: 3,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('quickly'), [_ctx.disabled, 'item--disabled']))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.pack.paginationJump) + " ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_input, {
    modelValue: _ctx.inputValue,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.inputValue = $event),
    disabled: _ctx.disabled,
    "var-pagination-cover": "",
    onBlur: _cache[8] || (_cache[8] = $event => _ctx.setPage('quick', _ctx.inputValue, $event)),
    onKeydown: _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($event => _ctx.setPage('quick', _ctx.inputValue, $event), ["enter"]))
  }, null, 8
  /* PROPS */
  , ["modelValue", "disabled"])], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.totalText ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
    key: 4,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('total'))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.totalText), 3
  /* TEXT, CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarPagination',
  components: {
    VarMenu: _menu__WEBPACK_IMPORTED_MODULE_3__["default"],
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
    VarCell: _cell__WEBPACK_IMPORTED_MODULE_5__["default"],
    VarInput: _input__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  directives: {
    Ripple: _ripple__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: _porps__WEBPACK_IMPORTED_MODULE_8__.props,

  setup(props) {
    var menuVisible = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var inputValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var simpleValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('1');
    var isHideEllipsisHead = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var isHideEllipsisTail = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var current = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.current) || 1);
    var size = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.size) || 10);
    var pageList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var activePosition = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => Math.ceil(props.maxPagerCount / 2));
    var pageCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => Math.ceil((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.total) / (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(size.value)));
    var range = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var start = size.value * (current.value - 1) + 1;
      var end = Math.min(size.value * current.value, (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.total));
      return [start, end];
    });
    var totalText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      if (!props.showTotal) return '';
      return props.showTotal((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.total), range.value);
    });

    var isHideEllipsis = (item, index) => {
      if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isNumber)(item)) return false;
      return index === 1 ? isHideEllipsisHead.value : isHideEllipsisTail.value;
    };

    var getMode = (item, index) => {
      if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isNumber)(item)) return 'basic';
      return index === 1 ? 'head' : 'tail';
    };

    var clickItem = (item, index) => {
      if (item === current.value || props.disabled) return;
      if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isNumber)(item)) current.value = item;else if (item === 'prev') current.value > 1 && (current.value -= 1);else if (item === 'next') current.value < pageCount.value && (current.value += 1);else if (item === '...') {
        if (index === 1) {
          current.value = Math.max(current.value - props.maxPagerCount, 1);
        } else {
          current.value = Math.min(current.value + props.maxPagerCount, pageCount.value);
        }
      }
    };

    var showMenu = () => {
      if (props.disabled) return;
      menuVisible.value = true;
    };

    var clickSize = option => {
      size.value = option;
      menuVisible.value = false;
    };

    var isValidatePage = value => {
      var pattern = /^[1-9][0-9]*$/;
      return pattern.test(value);
    };

    var setPage = (type, value, event) => {
      ;
      event.target.blur();

      if (isValidatePage(value)) {
        var valueNum = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(value);

        if (valueNum > pageCount.value) {
          valueNum = pageCount.value;
          simpleValue.value = "" + valueNum;
        }

        if (valueNum !== current.value) current.value = valueNum;
      }

      if (type === 'quick') inputValue.value = '';
      if (type === 'simple' && !isValidatePage(value)) simpleValue.value = "" + current.value;
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)([() => props.current, () => props.size], _ref => {
      var [newCurrent, newSize] = _ref;
      current.value = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(newCurrent) || 1;
      size.value = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(newSize || 10);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)([current, size], (_ref2, _ref3) => {
      var _props$onUpdateCurre, _props$onUpdateSize;

      var [newCurrent, newSize] = _ref2;
      var [oldCurrent, oldSize] = _ref3;

      if (newCurrent > pageCount.value) {
        current.value = pageCount.value;
        return;
      }

      var list = [];
      var {
        maxPagerCount,
        total,
        onChange
      } = props;
      var oldCount = Math.ceil((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(total) / (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(oldSize));
      var rEllipseSign = pageCount.value - (maxPagerCount - activePosition.value) - 1;
      simpleValue.value = "" + newCurrent;

      if (pageCount.value - 2 > maxPagerCount) {
        if (oldCurrent === undefined || pageCount.value !== oldCount) {
          for (var i = 2; i < maxPagerCount + 2; i++) {
            list.push(i);
          }
        } // 左边不需要出现省略符号占位


        if (newCurrent <= maxPagerCount && newCurrent < rEllipseSign) {
          list = [];

          for (var _i = 1; _i < maxPagerCount + 1; _i++) {
            list.push(_i + 1);
          }

          isHideEllipsisHead.value = true;
          isHideEllipsisTail.value = false;
        } // 两边都需要出现省略符号占位


        if (newCurrent > maxPagerCount && newCurrent < rEllipseSign) {
          list = [];

          for (var _i2 = 1; _i2 < maxPagerCount + 1; _i2++) {
            list.push(newCurrent + _i2 - activePosition.value);
          } // 针对 maxPagerCount===1 的特殊处理


          isHideEllipsisHead.value = newCurrent === 2 && maxPagerCount === 1;
          isHideEllipsisTail.value = false;
        } // 右边不需要出现省略符号占位


        if (newCurrent >= rEllipseSign) {
          list = [];

          for (var _i3 = 1; _i3 < maxPagerCount + 1; _i3++) {
            list.push(pageCount.value - (maxPagerCount - _i3) - 1);
          }

          isHideEllipsisHead.value = false;
          isHideEllipsisTail.value = true;
        }

        list = [1, '...', ...list, '...', pageCount.value];
      } else {
        for (var _i4 = 1; _i4 <= pageCount.value; _i4++) {
          list.push(_i4);
        }
      }

      pageList.value = list;
      if (oldCurrent !== undefined) onChange == null ? void 0 : onChange(newCurrent, newSize);
      (_props$onUpdateCurre = props['onUpdate:current']) == null ? void 0 : _props$onUpdateCurre.call(props, newCurrent);
      (_props$onUpdateSize = props['onUpdate:size']) == null ? void 0 : _props$onUpdateSize.call(props, newSize);
    }, {
      immediate: true
    });
    return {
      n,
      classes,
      pack: _locale__WEBPACK_IMPORTED_MODULE_9__.pack,
      current,
      menuVisible,
      size,
      pageCount,
      pageList,
      inputValue,
      simpleValue,
      totalText,
      getMode,
      isHideEllipsis,
      clickItem,
      showMenu,
      clickSize,
      setPage,
      toNumber: _varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber
    };
  }

}));

/***/ }),
/* 465 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  current: {
    type: [Number, String]
  },
  size: {
    type: [Number, String],
    default: 10
  },
  total: {
    type: [Number, String],
    default: 0
  },
  maxPagerCount: {
    type: Number,
    default: 3
  },
  disabled: {
    type: Boolean,
    default: false
  },
  simple: {
    type: Boolean,
    default: true
  },
  showSizeChanger: {
    type: Boolean,
    default: true
  },
  showQuickJumper: {
    type: Boolean,
    default: false
  },
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100]
  },
  showTotal: {
    type: Function
  },
  onChange: {
    type: Function
  },
  'onUpdate:current': {
    type: Function
  },
  'onUpdate:size': {
    type: Function
  }
};

/***/ }),
/* 466 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_PickerComponent": () => (/* binding */ _PickerComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Picker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(467);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);




var singletonOptions;

function Picker(options) {
  return new Promise(resolve => {
    Picker.close();
    var pickerOptions = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(options) ? {
      columns: options
    } : options;
    var reactivePickerOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(pickerOptions);
    reactivePickerOptions.dynamic = true;
    reactivePickerOptions.teleport = 'body';
    singletonOptions = reactivePickerOptions;
    var {
      unmountInstance
    } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.mountInstance)(_Picker_js__WEBPACK_IMPORTED_MODULE_3__["default"], reactivePickerOptions, {
      onConfirm: (texts, indexes) => {
        reactivePickerOptions.onConfirm == null ? void 0 : reactivePickerOptions.onConfirm(texts, indexes);
        resolve({
          state: 'confirm',
          texts,
          indexes
        });
        reactivePickerOptions.show = false;
        singletonOptions === reactivePickerOptions && (singletonOptions = null);
      },
      onCancel: (texts, indexes) => {
        reactivePickerOptions.onCancel == null ? void 0 : reactivePickerOptions.onCancel(texts, indexes);
        resolve({
          state: 'cancel',
          texts,
          indexes
        });
        reactivePickerOptions.show = false;
        singletonOptions === reactivePickerOptions && (singletonOptions = null);
      },
      onClose: () => {
        reactivePickerOptions.onClose == null ? void 0 : reactivePickerOptions.onClose();
        resolve({
          state: 'close'
        });
        singletonOptions === reactivePickerOptions && (singletonOptions = null);
      },
      onClosed: () => {
        reactivePickerOptions.onClosed == null ? void 0 : reactivePickerOptions.onClosed();
        unmountInstance();
        singletonOptions === reactivePickerOptions && (singletonOptions = null);
      },
      onRouteChange: () => {
        unmountInstance();
        singletonOptions === reactivePickerOptions && (singletonOptions = null);
      },
      'onUpdate:show': value => {
        reactivePickerOptions.show = value;
      }
    });
    reactivePickerOptions.show = true;
  });
}

_Picker_js__WEBPACK_IMPORTED_MODULE_3__["default"].install = function (app) {
  app.component(_Picker_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, _Picker_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
};

Picker.Component = _Picker_js__WEBPACK_IMPORTED_MODULE_3__["default"];

Picker.install = function (app) {
  app.component(_Picker_js__WEBPACK_IMPORTED_MODULE_3__["default"].name, _Picker_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
};

Picker.close = () => {
  if (singletonOptions != null) {
    var prevSingletonOptions = singletonOptions;
    singletonOptions = null;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)().then(() => {
      prevSingletonOptions.show = false;
    });
  }
};

var _PickerComponent = _Picker_js__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Picker);

/***/ }),
/* 467 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(343);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(326);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(468);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(337);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(324);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(335);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);









var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('picker');
var MOMENTUM_RECORD_TIME = 300;
var MOMENTUM_ALLOW_DISTANCE = 15;
var sid = 0;


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = ["onTouchstart", "onTouchmove", "onTouchend"];
var _hoisted_2 = ["onTransitionend"];
function render(_ctx, _cache) {
  var _component_var_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(_ctx.dynamic ? 'var-popup' : _ctx.Transition), (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(_ctx.dynamic ? {
    onOpen: _ctx.onOpen,
    onOpened: _ctx.onOpened,
    onClose: _ctx.onClose,
    onClosed: _ctx.onClosed,
    onClickOverlay: _ctx.onClickOverlay,
    onRouteChange: _ctx.onRouteChange,
    closeOnClickOverlay: _ctx.closeOnClickOverlay,
    teleport: _ctx.teleport,
    show: _ctx.show,
    'onUpdate:show': _ctx.handlePopupUpdateShow,
    position: 'bottom',
    class: _ctx.n('popup')
  } : null, {
    "var-picker-cover": ""
  }), {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
      class: _ctx.n()
    }, _ctx.$attrs), [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('toolbar'))
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "cancel", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_button, {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('cancel-button')),
      "var-picker-cover": "",
      text: "",
      "text-color": _ctx.cancelButtonTextColor,
      onClick: _ctx.cancel
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.dt(_ctx.cancelButtonText, _ctx.pack.pickerCancelButtonText)), 1
      /* TEXT */
      )]),
      _: 1
      /* STABLE */

    }, 8
    /* PROPS */
    , ["class", "text-color", "onClick"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "title", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('title'))
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.dt(_ctx.title, _ctx.pack.pickerTitle)), 3
    /* TEXT, CLASS */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "confirm", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_button, {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('confirm-button')),
      text: "",
      "var-picker-cover": "",
      "text-color": _ctx.confirmButtonTextColor,
      onClick: _ctx.confirm
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.dt(_ctx.confirmButtonText, _ctx.pack.pickerConfirmButtonText)), 1
      /* TEXT */
      )]),
      _: 1
      /* STABLE */

    }, 8
    /* PROPS */
    , ["class", "text-color", "onClick"])])], 2
    /* CLASS */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('columns')),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        height: _ctx.columnHeight + "px"
      })
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.scrollColumns, c => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('column')),
        key: c.id,
        onTouchstart: $event => _ctx.handleTouchstart($event, c),
        onTouchmove: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.handleTouchmove($event, c), ["prevent"]),
        onTouchend: $event => _ctx.handleTouchend($event, c)
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('scroller')),
        ref_for: true,
        ref: el => _ctx.getScrollEl(el, c),
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
          transform: "translateY(" + c.translate + "px)",
          transitionDuration: c.duration + "ms",
          transitionProperty: c.duration ? 'transform' : 'none'
        }),
        onTransitionend: $event => _ctx.handleTransitionend(c)
      }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(c.column.texts, t => {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('option')),
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
            height: _ctx.optionHeight + "px"
          }),
          key: t
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('text'))
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.textFormatter(t, c.columnIndex)), 3
        /* TEXT, CLASS */
        )], 6
        /* CLASS, STYLE */
        );
      }), 128
      /* KEYED_FRAGMENT */
      ))], 46
      /* CLASS, STYLE, PROPS, HYDRATE_EVENTS */
      , _hoisted_2)], 42
      /* CLASS, PROPS, HYDRATE_EVENTS */
      , _hoisted_1);
    }), 128
    /* KEYED_FRAGMENT */
    )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('picked')),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        top: _ctx.center + "px",
        height: _ctx.optionHeight + "px"
      })
    }, null, 6
    /* CLASS, STYLE */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('mask')),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        backgroundSize: "100% " + (_ctx.columnHeight - _ctx.optionHeight) / 2 + "px"
      })
    }, null, 6
    /* CLASS, STYLE */
    )], 6
    /* CLASS, STYLE */
    )], 16
    /* FULL_PROPS */
    )]),
    _: 3
    /* FORWARDED */

  }, 16
  /* FULL_PROPS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarPicker',
  components: {
    VarButton: _button__WEBPACK_IMPORTED_MODULE_3__["default"],
    VarPopup: _popup__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  inheritAttrs: false,
  props: _props__WEBPACK_IMPORTED_MODULE_5__.props,

  setup(props) {
    var scrollColumns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var optionHeight = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.toPxNum)(props.optionHeight));
    var optionCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.toPxNum)(props.optionCount));
    var center = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => optionCount.value * optionHeight.value / 2 - optionHeight.value / 2);
    var columnHeight = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => optionCount.value * optionHeight.value);
    var prevIndexes = [];

    var getScrollEl = (el, scrollColumn) => {
      scrollColumn.scrollEl = el;
    };

    var handlePopupUpdateShow = value => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:show'], value);
    };

    var limitTranslate = scrollColumn => {
      var START_LIMIT = optionHeight.value + center.value;
      var END_LIMIT = center.value - scrollColumn.column.texts.length * optionHeight.value;

      if (scrollColumn.translate >= START_LIMIT) {
        scrollColumn.translate = START_LIMIT;
      }

      if (scrollColumn.translate <= END_LIMIT) {
        scrollColumn.translate = END_LIMIT;
      }
    };

    var boundaryIndex = (scrollColumn, index) => {
      var {
        length
      } = scrollColumn.column.texts;
      index = index >= length ? length - 1 : index;
      index = index <= 0 ? 0 : index;
      return index;
    };

    var getIndex = scrollColumn => {
      var index = Math.round((center.value - scrollColumn.translate) / optionHeight.value);
      return boundaryIndex(scrollColumn, index);
    };

    var getPicked = () => {
      var texts = scrollColumns.value.map(scrollColumn => scrollColumn.column.texts[scrollColumn.index]);
      var indexes = scrollColumns.value.map(scrollColumn => scrollColumn.index);
      return {
        texts,
        indexes
      };
    };

    var scrollTo = function (scrollColumn, index, duration, noEmit) {
      if (noEmit === void 0) {
        noEmit = false;
      }

      var translate = center.value - boundaryIndex(scrollColumn, index) * optionHeight.value;

      if (translate === scrollColumn.translate) {
        scrollColumn.scrolling = false;
        !noEmit && change(scrollColumn);
      }

      scrollColumn.translate = translate;
      scrollColumn.duration = duration;
    };

    var momentum = (scrollColumn, distance, duration) => {
      scrollColumn.translate += Math.abs(distance / duration) / 0.003 * (distance < 0 ? -1 : 1);
    };

    var handleTouchstart = (event, scrollColumn) => {
      scrollColumn.touching = true;
      scrollColumn.scrolling = false;
      scrollColumn.duration = 0;
      scrollColumn.translate = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.getTranslate)(scrollColumn.scrollEl);
    };

    var handleTouchmove = (event, scrollColumn) => {
      if (!scrollColumn.touching) {
        return;
      }

      var {
        clientY
      } = event.touches[0];
      var moveY = scrollColumn.prevY !== undefined ? clientY - scrollColumn.prevY : 0;
      scrollColumn.prevY = clientY;
      scrollColumn.translate += moveY;
      limitTranslate(scrollColumn);
      var now = performance.now();

      if (now - scrollColumn.momentumTime > MOMENTUM_RECORD_TIME) {
        scrollColumn.momentumTime = now;
        scrollColumn.momentumPrevY = scrollColumn.translate;
      }
    };

    var handleTouchend = (event, scrollColumn) => {
      scrollColumn.touching = false;
      scrollColumn.scrolling = true;
      scrollColumn.prevY = undefined;
      var distance = scrollColumn.translate - scrollColumn.momentumPrevY;
      var duration = performance.now() - scrollColumn.momentumTime;
      var shouldMomentum = Math.abs(distance) >= MOMENTUM_ALLOW_DISTANCE && duration <= MOMENTUM_RECORD_TIME;
      shouldMomentum && momentum(scrollColumn, distance, duration);
      scrollColumn.index = getIndex(scrollColumn);
      scrollTo(scrollColumn, scrollColumn.index, shouldMomentum ? 1000 : 200);
    };

    var handleTransitionend = scrollColumn => {
      scrollColumn.scrolling = false;
      change(scrollColumn);
    };

    var normalizeNormalColumns = normalColumns => {
      return normalColumns.map((column, columnIndex) => {
        var _normalColumn$initial;

        var normalColumn = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(column) ? {
          texts: column
        } : column;
        var scrollColumn = {
          id: sid++,
          prevY: undefined,
          momentumPrevY: undefined,
          touching: false,
          translate: center.value,
          index: (_normalColumn$initial = normalColumn.initialIndex) != null ? _normalColumn$initial : 0,
          columnIndex,
          duration: 0,
          momentumTime: 0,
          column: normalColumn,
          scrollEl: null,
          scrolling: false
        };
        scrollTo(scrollColumn, scrollColumn.index, 0, true);
        return scrollColumn;
      });
    };

    var normalizeCascadeColumns = cascadeColumns => {
      var scrollColumns = [];
      createChildren(scrollColumns, cascadeColumns, 0, true);
      return scrollColumns;
    };

    var createChildren = function (scrollColumns, children, columnIndex, initial) {
      if (initial === void 0) {
        initial = false;
      }

      if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children) && children.length) {
        var _props$cascadeInitial;

        var index = initial ? (_props$cascadeInitial = props.cascadeInitialIndexes[scrollColumns.length]) != null ? _props$cascadeInitial : 0 : 0;
        var scrollColumn = {
          id: sid++,
          prevY: undefined,
          momentumPrevY: undefined,
          touching: false,
          translate: center.value,
          index,
          columnIndex,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: children.map(cascadeColumn => cascadeColumn[props.textKey])
          },
          columns: children,
          scrollEl: null,
          scrolling: false
        };
        scrollColumns.push(scrollColumn);
        scrollTo(scrollColumn, scrollColumn.index, 0, true);
        createChildren(scrollColumns, scrollColumn.columns[scrollColumn.index].children, columnIndex + 1, initial);
      }
    };

    var rebuildChildren = scrollColumn => {
      scrollColumns.value.splice(scrollColumns.value.indexOf(scrollColumn) + 1);
      createChildren(scrollColumns.value, scrollColumn.columns[scrollColumn.index].children, scrollColumn.columnIndex + 1);
    };

    var change = scrollColumn => {
      var {
        cascade,
        onChange
      } = props;
      cascade && rebuildChildren(scrollColumn);
      var hasScrolling = scrollColumns.value.some(scrollColumn => scrollColumn.scrolling);

      if (hasScrolling) {
        return;
      }

      var {
        texts,
        indexes
      } = getPicked();
      var samePicked = indexes.every((index, idx) => index === prevIndexes[idx]);

      if (samePicked) {
        return;
      }

      prevIndexes = [...indexes];
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onChange, texts, indexes);
    };

    var stopScroll = () => {
      if (props.cascade) {
        var currentScrollColumn = scrollColumns.value.find(scrollColumn => scrollColumn.scrolling);

        if (currentScrollColumn) {
          currentScrollColumn.translate = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.getTranslate)(currentScrollColumn.scrollEl);
          currentScrollColumn.index = getIndex(currentScrollColumn);
          scrollTo(currentScrollColumn, currentScrollColumn.index, 0, true);
          currentScrollColumn.scrolling = false;
          rebuildChildren(currentScrollColumn);
        }
      } else {
        scrollColumns.value.forEach(scrollColumn => {
          scrollColumn.translate = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.getTranslate)(scrollColumn.scrollEl);
          scrollColumn.index = getIndex(scrollColumn);
          scrollTo(scrollColumn, scrollColumn.index, 0);
        });
      }
    }; // expose


    var confirm = () => {
      stopScroll();
      var {
        texts,
        indexes
      } = getPicked();
      prevIndexes = [...indexes];
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props.onConfirm, texts, indexes);
    }; // expose


    var cancel = () => {
      stopScroll();
      var {
        texts,
        indexes
      } = getPicked();
      prevIndexes = [...indexes];
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props.onCancel, texts, indexes);
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.columns, newValue => {
      scrollColumns.value = props.cascade ? normalizeCascadeColumns((0,vue__WEBPACK_IMPORTED_MODULE_0__.toRaw)(newValue)) : normalizeNormalColumns((0,vue__WEBPACK_IMPORTED_MODULE_0__.toRaw)(newValue));
      var {
        indexes
      } = getPicked();
      prevIndexes = [...indexes];
    }, {
      immediate: true,
      deep: true
    });
    return {
      n,
      classes,
      pack: _locale__WEBPACK_IMPORTED_MODULE_7__.pack,
      optionHeight,
      optionCount,
      scrollColumns,
      columnHeight,
      center,
      Transition: vue__WEBPACK_IMPORTED_MODULE_0__.Transition,
      getScrollEl,
      handlePopupUpdateShow,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      handleTransitionend,
      confirm,
      cancel,
      dt: _utils_shared__WEBPACK_IMPORTED_MODULE_8__.dt
    };
  }

}));

/***/ }),
/* 468 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _popup_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(328);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var props = _extends({
  columns: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  textKey: {
    type: String,
    default: 'text'
  },
  toolbar: {
    type: Boolean,
    default: true
  },
  cascade: {
    type: Boolean,
    default: false
  },
  cascadeInitialIndexes: {
    type: Array,
    default: () => []
  },
  optionHeight: {
    type: [Number, String],
    default: 44
  },
  optionCount: {
    type: [Number, String],
    default: 6
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  // dynamic internal
  dynamic: {
    type: Boolean,
    default: false
  },
  onChange: {
    type: Function
  },
  onConfirm: {
    type: Function
  },
  onCancel: {
    type: Function
  },
  textFormatter: {
    type: Function,
    default: text => text
  }
}, (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.pickProps)(_popup_props__WEBPACK_IMPORTED_MODULE_1__.props, ['show', 'onUpdate:show', 'closeOnClickOverlay', 'teleport', 'onOpen', 'onClose', 'onOpened', 'onClosed', 'onClickOverlay', 'onRouteChange']));

/***/ }),
/* 469 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_ProgressComponent": () => (/* binding */ _ProgressComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Progress_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(470);


_Progress_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Progress_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Progress_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _ProgressComponent = _Progress_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Progress_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 470 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(471);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(324);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);





var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('progress');


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = ["viewBox"];
var _hoisted_2 = ["cx", "cy", "r", "stroke-width"];
var _hoisted_3 = ["cx", "cy", "r", "stroke-width"];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n())
  }, [_ctx.mode === 'linear' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('linear'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    class: _ctx.n('linear-block'),
    style: {
      height: _ctx.toSizeUnit(_ctx.lineWidth)
    }
  }, _ctx.$attrs), [_ctx.track ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('linear-background')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      background: _ctx.trackColor
    })
  }, null, 6
  /* CLASS, STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('linear-certain'), [_ctx.ripple, _ctx.n('linear-ripple')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      background: _ctx.color,
      width: _ctx.linearProps.width
    })
  }, null, 6
  /* CLASS, STYLE */
  )], 16
  /* FULL_PROPS */
  ), _ctx.label ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    key: 0,
    class: _ctx.n('linear-label')
  }, _ctx.$attrs), [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.linearProps.roundValue), 1
  /* TEXT */
  )])], 16
  /* FULL_PROPS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.mode === 'circle' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('circle')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: _ctx.toSizeUnit(_ctx.size),
      height: _ctx.toSizeUnit(_ctx.size)
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('circle-svg')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      transform: "rotate(" + (_ctx.rotate - 90) + "deg)"
    }),
    viewBox: _ctx.circleProps.viewBox
  }, [_ctx.track ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("circle", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('circle-background')),
    cx: _ctx.multiplySizeUnit(_ctx.size, 0.5),
    cy: _ctx.multiplySizeUnit(_ctx.size, 0.5),
    r: _ctx.circleProps.radius,
    fill: "transparent",
    "stroke-width": _ctx.toSizeUnit(_ctx.lineWidth),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      strokeDasharray: _ctx.circleProps.perimeter,
      stroke: _ctx.trackColor
    })
  }, null, 14
  /* CLASS, STYLE, PROPS */
  , _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('circle-certain')),
    cx: _ctx.multiplySizeUnit(_ctx.size, 0.5),
    cy: _ctx.multiplySizeUnit(_ctx.size, 0.5),
    r: _ctx.circleProps.radius,
    fill: "transparent",
    "stroke-width": _ctx.toSizeUnit(_ctx.lineWidth),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      strokeDasharray: _ctx.circleProps.strokeDasharray,
      stroke: _ctx.color
    })
  }, null, 14
  /* CLASS, STYLE, PROPS */
  , _hoisted_3)], 14
  /* CLASS, STYLE, PROPS */
  , _hoisted_1)), _ctx.label ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    key: 0,
    class: _ctx.n('circle-label')
  }, _ctx.$attrs), [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.circleProps.roundValue), 1
  /* TEXT */
  )])], 16
  /* FULL_PROPS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 6
  /* CLASS, STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarProgress',
  inheritAttrs: false,
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup(props) {
    var linearProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var value = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.value);
      var width = value > 100 ? 100 : value;
      var roundValue = value > 100 ? 100 : Math.round(value);
      return {
        width: width + "%",
        roundValue: roundValue + "%"
      };
    });
    var circleProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var {
        size,
        lineWidth,
        value
      } = props;
      var viewBox = "0 0 " + (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.toPxNum)(size) + " " + (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.toPxNum)(size);
      var roundValue = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(value) > 100 ? 100 : Math.round((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(value));
      var radius = ((0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.toPxNum)(size) - (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.toPxNum)(lineWidth)) / 2;
      var perimeter = 2 * Math.PI * radius;
      var strokeDasharray = roundValue / 100 * perimeter + ", " + perimeter;
      return {
        viewBox,
        radius,
        strokeDasharray,
        perimeter,
        roundValue: roundValue + "%"
      };
    });
    return {
      n,
      classes,
      toSizeUnit: _utils_elements__WEBPACK_IMPORTED_MODULE_4__.toSizeUnit,
      multiplySizeUnit: _utils_elements__WEBPACK_IMPORTED_MODULE_4__.multiplySizeUnit,
      linearProps,
      circleProps
    };
  }

}));

/***/ }),
/* 471 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
function modeValidator(mode) {
  return ['linear', 'circle'].includes(mode);
}

var props = {
  // progress 模式
  mode: {
    type: String,
    default: 'linear',
    validator: modeValidator
  },
  // progress 线宽
  lineWidth: {
    type: [Number, String],
    default: 4
  },
  // progress 颜色
  color: {
    type: String
  },
  // progress 轨道颜色
  trackColor: {
    type: String
  },
  // 是否添加水波纹效果
  ripple: {
    type: Boolean,
    default: false
  },
  // progress 值
  value: {
    type: [Number, String],
    default: 0
  },
  // 是否显示label
  label: {
    type: Boolean,
    default: false
  },
  // circle 的尺寸
  size: {
    type: [Number, String],
    default: 40
  },
  // circle的原点
  rotate: {
    type: Number,
    default: 0
  },
  // 是否显示 circle 轨道
  track: {
    type: Boolean,
    default: true
  }
};

/***/ }),
/* 472 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_PullRefreshComponent": () => (/* binding */ _PullRefreshComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PullRefresh_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(473);


_PullRefresh_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_PullRefresh_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _PullRefresh_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _PullRefreshComponent = _PullRefresh_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PullRefresh_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 473 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(331);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(324);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(474);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('pull-refresh');
var MAX_DISTANCE = 100;
var CONTROL_POSITION = -50;
var ICON_TRANSITION = 150;

function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    ref: "freshNode",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n()),
    onTouchstart: _cache[0] || (_cache[0] = function () {
      return _ctx.touchStart && _ctx.touchStart(...arguments);
    }),
    onTouchmove: _cache[1] || (_cache[1] = function () {
      return _ctx.touchMove && _ctx.touchMove(...arguments);
    }),
    onTouchend: _cache[2] || (_cache[2] = function () {
      return _ctx.touchEnd && _ctx.touchEnd(...arguments);
    }),
    onTouchcancel: _cache[3] || (_cache[3] = function () {
      return _ctx.touchEnd && _ctx.touchEnd(...arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('control'), 'var-elevation--2', [_ctx.isSuccess, _ctx.n('control-success')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.controlStyle)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
    name: _ctx.iconName,
    transition: _ctx.ICON_TRANSITION,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('icon'), [_ctx.refreshStatus === 'loading' && _ctx.iconHasChanged, _ctx.n('animation')])),
    "var-pull-refresh-cover": ""
  }, null, 8
  /* PROPS */
  , ["name", "transition", "class"])], 6
  /* CLASS, STYLE */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 34
  /* CLASS, HYDRATE_EVENTS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarPullRefresh',
  components: {
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_4__.props,

  setup(props) {
    var scroller;
    var changing;
    var freshNode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var startPosition = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var distance = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(CONTROL_POSITION);
    var iconName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('arrow-down');
    var refreshStatus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('default');
    var isEnd = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false); // https://github.com/varletjs/varlet/issues/509

    var iconHasChanged = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    var isTouchable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => refreshStatus.value !== 'loading' && refreshStatus.value !== 'success' && !props.disabled);
    var controlStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
      transform: "translate3d(0px, " + distance.value + "px, 0px) translate(-50%, 0)",
      transition: isEnd.value ? "transform " + props.animationDuration + "ms" : undefined,
      background: props.successBgColor || props.bgColor,
      color: props.successColor || props.color
    }));
    var isSuccess = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => refreshStatus.value === 'success');

    var changeIcon = () => {
      return new Promise(resolve => {
        window.setTimeout(() => {
          iconHasChanged.value = true;
          resolve();
        }, ICON_TRANSITION);
      });
    };

    var touchStart = event => {
      if (!isTouchable.value) return;
      refreshStatus.value = 'pulling';
      startPosition.value = event.touches[0].clientY;
    };

    var touchMove = event => {
      var scrollTop = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_5__.getScrollTop)(scroller);
      if (scrollTop > 0 || !isTouchable.value) return;
      if (scrollTop === 0 && distance.value > CONTROL_POSITION) event.cancelable && event.preventDefault();
      var moveDistance = (event.touches[0].clientY - startPosition.value) / 2 + CONTROL_POSITION;
      distance.value = moveDistance >= MAX_DISTANCE ? MAX_DISTANCE : moveDistance;

      if (distance.value >= MAX_DISTANCE * 0.2) {
        iconHasChanged.value = false;
        iconName.value = 'refresh';
        changing = changeIcon();
      } else {
        iconName.value = 'arrow-down';
      }
    };

    var touchEnd = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* () {
        if (!isTouchable.value) return;
        isEnd.value = true;

        if (distance.value >= MAX_DISTANCE * 0.2) {
          var _props$onUpdateModel;

          yield changing;
          refreshStatus.value = 'loading';
          distance.value = MAX_DISTANCE * 0.3;
          (_props$onUpdateModel = props['onUpdate:modelValue']) == null ? void 0 : _props$onUpdateModel.call(props, true);
          props.onRefresh == null ? void 0 : props.onRefresh();
        } else {
          refreshStatus.value = 'loosing';
          iconName.value = 'arrow-down';
          distance.value = CONTROL_POSITION;
          setTimeout(() => {
            isEnd.value = false;
          }, (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.animationDuration));
        }
      });

      return function touchEnd() {
        return _ref.apply(this, arguments);
      };
    }();

    var reset = () => {
      setTimeout(() => {
        refreshStatus.value = 'default';
        iconName.value = 'arrow-down';
        isEnd.value = false;
      }, (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.animationDuration));
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.modelValue, newValue => {
      if (newValue === false) {
        isEnd.value = true;
        refreshStatus.value = 'success';
        iconName.value = 'checkbox-marked-circle';
        setTimeout(() => {
          distance.value = CONTROL_POSITION;
          reset();
        }, (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.successDuration));
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      scroller = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_5__.getParentScroller)(freshNode.value);
    });
    return {
      n,
      classes,
      iconHasChanged,
      ICON_TRANSITION,
      refreshStatus,
      freshNode,
      touchStart,
      touchMove,
      touchEnd,
      iconName,
      controlStyle,
      isSuccess
    };
  }

}));

/***/ }),
/* 474 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  modelValue: {
    type: Boolean
  },
  // 是否禁用下拉刷新
  disabled: {
    type: Boolean,
    default: false
  },
  // 动画时长
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  // 刷新成功提示展示时长
  successDuration: {
    type: [Number, String],
    default: 2000
  },
  // control 的背景颜色
  bgColor: {
    type: String
  },
  // 成功状态下 control 的背景颜色
  successBgColor: {
    type: String
  },
  // control 的颜色
  color: {
    type: String
  },
  // 成功状态下 control 的颜色
  successColor: {
    type: String
  },
  onRefresh: {
    type: Function
  },
  'onUpdate:modelValue': {
    type: Function
  }
};

/***/ }),
/* 475 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_RadioComponent": () => (/* binding */ _RadioComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Radio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(476);


_Radio_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Radio_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Radio_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _RadioComponent = _Radio_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Radio_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 476 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(331);
/* harmony import */ var _form_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(369);
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(323);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(477);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(478);
/* harmony import */ var _form_provide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(375);








var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('radio');

function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  var _component_var_form_details = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-form-details");

  var _directive_ripple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("ripple");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('wrap'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    class: _ctx.n(),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.handleClick && _ctx.handleClick(...arguments);
    })
  }, _ctx.$attrs), [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('action'), [_ctx.checked, _ctx.n('--checked'), _ctx.n('--unchecked')], [_ctx.errorMessage || _ctx.radioGroupErrorMessage, _ctx.n('--error')], [_ctx.formDisabled || _ctx.disabled, _ctx.n('--disabled')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: _ctx.checked ? _ctx.checkedColor : _ctx.uncheckedColor
    })
  }, [_ctx.checked ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "checked-icon", {
    key: 0
  }, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('icon'), [_ctx.withAnimation, _ctx.n('--with-animation')])),
    "var-radio-cover": "",
    name: "radio-marked",
    size: _ctx.iconSize
  }, null, 8
  /* PROPS */
  , ["class", "size"])]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "unchecked-icon", {
    key: 1
  }, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('icon'), [_ctx.withAnimation, _ctx.n('--with-animation')])),
    "var-radio-cover": "",
    name: "radio-blank",
    size: _ctx.iconSize
  }, null, 8
  /* PROPS */
  , ["class", "size"])])], 6
  /* CLASS, STYLE */
  )), [[_directive_ripple, {
    disabled: _ctx.formReadonly || _ctx.readonly || _ctx.formDisabled || _ctx.disabled || !_ctx.ripple
  }]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('text'), [_ctx.errorMessage || _ctx.radioGroupErrorMessage, _ctx.n('--error')], [_ctx.formDisabled || _ctx.disabled, _ctx.n('--disabled')]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
  /* CLASS */
  )], 16
  /* FULL_PROPS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_form_details, {
    "error-message": _ctx.errorMessage
  }, null, 8
  /* PROPS */
  , ["error-message"])], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarRadio',
  directives: {
    Ripple: _ripple__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  components: {
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
    VarFormDetails: _form_details__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  inheritAttrs: false,
  props: _props__WEBPACK_IMPORTED_MODULE_5__.props,

  setup(props) {
    var value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var checked = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => value.value === props.checkedValue);
    var withAnimation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var {
      radioGroup,
      bindRadioGroup
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_6__.useRadioGroup)();
    var {
      form,
      bindForm
    } = (0,_form_provide__WEBPACK_IMPORTED_MODULE_7__.useForm)();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation
    } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.useValidation)();

    var validateWithTrigger = trigger => {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        var {
          validateTrigger,
          rules,
          modelValue
        } = props;
        vt(validateTrigger, trigger, rules, modelValue);
      });
    };

    var change = changedValue => {
      var {
        checkedValue,
        onChange
      } = props;

      if (radioGroup && value.value === checkedValue) {
        return;
      }

      value.value = changedValue;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props['onUpdate:modelValue'], value.value);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(onChange, value.value);
      radioGroup == null ? void 0 : radioGroup.onToggle(checkedValue);
      validateWithTrigger('onChange');
    };

    var handleClick = e => {
      var {
        disabled,
        readonly,
        uncheckedValue,
        checkedValue,
        onClick
      } = props;

      if (form != null && form.disabled.value || disabled) {
        return;
      }

      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(onClick, e);

      if (form != null && form.readonly.value || readonly) {
        return;
      }

      withAnimation.value = true;
      change(checked.value ? uncheckedValue : checkedValue);
    };

    var sync = v => {
      var {
        checkedValue,
        uncheckedValue
      } = props;
      value.value = v === checkedValue ? checkedValue : uncheckedValue;
    }; // expose


    var reset = () => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props['onUpdate:modelValue'], props.uncheckedValue);
      resetValidation();
    }; // expose


    var validate = () => v(props.rules, props.modelValue); // expose


    var toggle = changedValue => {
      var {
        uncheckedValue,
        checkedValue
      } = props;
      var shouldReverse = ![uncheckedValue, checkedValue].includes(changedValue);

      if (shouldReverse) {
        changedValue = checked.value ? uncheckedValue : checkedValue;
      }

      change(changedValue);
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.modelValue, newValue => {
      value.value = newValue;
    }, {
      immediate: true
    });
    var radioProvider = {
      sync,
      validate,
      resetValidation,
      reset
    };
    (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(bindRadioGroup, radioProvider);
    (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(bindForm, radioProvider);
    return {
      withAnimation,
      checked,
      errorMessage,
      radioGroupErrorMessage: radioGroup == null ? void 0 : radioGroup.errorMessage,
      formDisabled: form == null ? void 0 : form.disabled,
      formReadonly: form == null ? void 0 : form.readonly,
      n,
      classes,
      handleClick,
      toggle,
      reset,
      validate,
      resetValidation
    };
  }

}));

/***/ }),
/* 477 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: false
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: true
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: true
  },
  validateTrigger: {
    type: Array,
    default: () => ['onChange']
  },
  rules: {
    type: Array
  },
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  'onUpdate:modelValue': {
    type: Function
  }
};

/***/ }),
/* 478 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRadioGroup": () => (/* binding */ useRadioGroup)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _radio_group_provide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(479);


function useRadioGroup() {
  var {
    bindParent,
    parentProvider
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useParent)(_radio_group_provide__WEBPACK_IMPORTED_MODULE_1__.RADIO_GROUP_BIND_RADIO_KEY);
  var {
    index
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtParentIndex)(_radio_group_provide__WEBPACK_IMPORTED_MODULE_1__.RADIO_GROUP_COUNT_RADIO_KEY);
  return {
    index,
    radioGroup: parentProvider,
    bindRadioGroup: bindParent
  };
}

/***/ }),
/* 479 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RADIO_GROUP_BIND_RADIO_KEY": () => (/* binding */ RADIO_GROUP_BIND_RADIO_KEY),
/* harmony export */   "RADIO_GROUP_COUNT_RADIO_KEY": () => (/* binding */ RADIO_GROUP_COUNT_RADIO_KEY),
/* harmony export */   "useRadios": () => (/* binding */ useRadios)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);

var RADIO_GROUP_BIND_RADIO_KEY = Symbol('RADIO_GROUP_BIND_RADIO_KEY');
var RADIO_GROUP_COUNT_RADIO_KEY = Symbol('RADIO_GROUP_COUNT_RADIO_KEY');
function useRadios() {
  var {
    bindChildren,
    childProviders
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useChildren)(RADIO_GROUP_BIND_RADIO_KEY);
  var {
    length
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtChildrenCounter)(RADIO_GROUP_COUNT_RADIO_KEY);
  return {
    length,
    radios: childProviders,
    bindRadios: bindChildren
  };
}

/***/ }),
/* 480 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_RadioGroupComponent": () => (/* binding */ _RadioGroupComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RadioGroup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(481);


_RadioGroup_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_RadioGroup_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _RadioGroup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _RadioGroupComponent = _RadioGroup_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_RadioGroup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 481 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(369);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(482);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(479);
/* harmony import */ var _form_provide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(375);






var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('radio-group');

function render(_ctx, _cache) {
  var _component_var_form_details = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-form-details");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('wrap'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), _ctx.n("--" + _ctx.direction)))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_form_details, {
    "error-message": _ctx.errorMessage
  }, null, 8
  /* PROPS */
  , ["error-message"])], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarRadioGroup',
  components: {
    VarFormDetails: _form_details__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup(props) {
    var {
      length,
      radios,
      bindRadios
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_4__.useRadios)();
    var {
      bindForm
    } = (0,_form_provide__WEBPACK_IMPORTED_MODULE_5__.useForm)();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation
    } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.useValidation)();
    var radioGroupErrorMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => errorMessage.value);

    var validateWithTrigger = trigger => {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        var {
          validateTrigger,
          rules,
          modelValue
        } = props;
        vt(validateTrigger, trigger, rules, modelValue);
      });
    };

    var syncRadios = () => radios.forEach(_ref => {
      var {
        sync
      } = _ref;
      return sync(props.modelValue);
    });

    var onToggle = changedValue => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props['onUpdate:modelValue'], changedValue);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props.onChange, changedValue);
      validateWithTrigger('onChange');
    }; // expose


    var validate = () => v(props.rules, props.modelValue); // expose


    var reset = () => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props['onUpdate:modelValue'], undefined);
      resetValidation();
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.modelValue, syncRadios);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => length.value, syncRadios);
    var radioGroupProvider = {
      onToggle,
      validate,
      reset,
      resetValidation,
      errorMessage: radioGroupErrorMessage
    };
    (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(bindForm, radioGroupProvider);
    bindRadios(radioGroupProvider);
    return {
      errorMessage,
      n,
      classes,
      reset,
      validate,
      resetValidation
    };
  }

}));

/***/ }),
/* 482 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "directionValidator": () => (/* binding */ directionValidator),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
function directionValidator(direction) {
  return ['horizontal', 'vertical'].includes(direction);
}
var props = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: undefined
  },
  direction: {
    type: String,
    default: 'horizontal',
    validator: directionValidator
  },
  validateTrigger: {
    type: Array,
    default: () => ['onChange']
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  'onUpdate:modelValue': {
    type: Function
  }
};

/***/ }),
/* 483 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_RateComponent": () => (/* binding */ _RateComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Rate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(484);


_Rate_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Rate_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Rate_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _RateComponent = _Rate_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Rate_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 484 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(331);
/* harmony import */ var _form_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(369);
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(323);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _form_provide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(375);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(324);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(485);









var {
  n
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('rate');


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = ["onClick"];
function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  var _component_var_form_details = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-form-details");

  var _directive_ripple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("ripple");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('wrap'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n())
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.toNumber(_ctx.count), val => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: val,
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.getStyle(val)),
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.getClass(val)),
      onClick: $event => _ctx.handleClick(val, $event)
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('content-icon')),
      "var-rate-cover": "",
      transition: 0,
      namespace: _ctx.namespace,
      name: _ctx.getIconName(val),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        fontSize: _ctx.toSizeUnit(_ctx.size)
      })
    }, null, 8
    /* PROPS */
    , ["class", "namespace", "name", "style"])], 14
    /* CLASS, STYLE, PROPS */
    , _hoisted_1)), [[_directive_ripple, {
      disabled: _ctx.formReadonly || _ctx.readonly || _ctx.formDisabled || _ctx.disabled || !_ctx.ripple
    }]]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_form_details, {
    "error-message": _ctx.errorMessage
  }, null, 8
  /* PROPS */
  , ["error-message"])], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarRate',
  components: {
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
    VarFormDetails: _form_details__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  directives: {
    Ripple: _ripple__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_6__.props,

  setup(props) {
    var {
      form,
      bindForm
    } = (0,_form_provide__WEBPACK_IMPORTED_MODULE_7__.useForm)();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      resetValidation
    } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.useValidation)();

    var getStyle = val => {
      var {
        count,
        size,
        gap
      } = props;
      return {
        color: transformValue(val).color,
        marginRight: val !== (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(count) ? (0,_utils_elements__WEBPACK_IMPORTED_MODULE_8__.toSizeUnit)(gap) : 0,
        width: (0,_utils_elements__WEBPACK_IMPORTED_MODULE_8__.toSizeUnit)(size),
        height: (0,_utils_elements__WEBPACK_IMPORTED_MODULE_8__.toSizeUnit)(size),
        borderRadius: '50%'
      };
    };

    var getClass = val => {
      var {
        type,
        color
      } = transformValue(val);
      return {
        [n('content')]: true,
        [n('--disabled')]: (form == null ? void 0 : form.disabled.value) || props.disabled,
        [n('--error')]: errorMessage.value,
        [n('--primary')]: type !== 'empty' && !color
      };
    };

    var getIconName = val => {
      var {
        type
      } = transformValue(val);
      var {
        icon,
        halfIcon,
        emptyIcon
      } = props;
      return type === 'full' ? icon : type === 'half' ? halfIcon : emptyIcon;
    };

    var transformValue = index => {
      var {
        modelValue,
        disabled,
        disabledColor,
        color,
        half,
        emptyColor
      } = props;
      var iconColor;
      if (disabled || form != null && form.disabled.value) iconColor = disabledColor;else if (color) iconColor = color;

      if (index <= (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(modelValue)) {
        return {
          type: 'full',
          score: index,
          color: iconColor
        };
      }

      if (half && index <= (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(modelValue) + 0.5) {
        return {
          type: 'half',
          score: index,
          color: iconColor
        };
      }

      return {
        type: 'empty',
        score: index,
        color: disabled || form != null && form.disabled.value ? disabledColor : emptyColor
      };
    };

    var changeValue = (score, event) => {
      if (props.half) {
        var {
          offsetWidth
        } = event.target;
        if (event.offsetX <= Math.floor(offsetWidth / 2)) score -= 0.5;
      }

      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], score);
    };

    var validate = () => v(props.rules, (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.modelValue));

    var validateWithTrigger = () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => vt(['onChange'], 'onChange', props.rules, props.modelValue));

    var handleClick = (score, event) => {
      var {
        readonly,
        disabled,
        onChange
      } = props;

      if (readonly || disabled || form != null && form.disabled.value || form != null && form.readonly.value) {
        return;
      }

      changeValue(score, event);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onChange, score);
      validateWithTrigger();
    };

    var reset = () => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], 0);
      resetValidation();
    };

    var rateProvider = {
      reset,
      validate,
      resetValidation
    };
    (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(bindForm, rateProvider);
    return {
      errorMessage,
      formDisabled: form == null ? void 0 : form.disabled,
      formReadonly: form == null ? void 0 : form.readonly,
      getStyle,
      getClass,
      getIconName,
      handleClick,
      reset,
      validate,
      resetValidation,
      toSizeUnit: _utils_elements__WEBPACK_IMPORTED_MODULE_8__.toSizeUnit,
      toNumber: _varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber,
      n
    };
  }

}));

/***/ }),
/* 485 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  count: {
    type: [String, Number],
    default: 5
  },
  color: {
    type: String
  },
  icon: {
    type: String,
    default: 'star'
  },
  emptyColor: {
    type: String
  },
  emptyIcon: {
    type: String,
    default: 'star-outline'
  },
  size: {
    type: [String, Number]
  },
  gap: {
    type: [String, Number]
  },
  namespace: {
    type: String
  },
  half: {
    type: Boolean,
    default: false
  },
  halfIcon: {
    type: String,
    default: 'star-half-full'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  disabledColor: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: false
  },
  ripple: {
    type: Boolean,
    default: true
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  'onUpdate:modelValue': {
    type: Function
  }
};

/***/ }),
/* 486 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_RowComponent": () => (/* binding */ _RowComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Row_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(487);


_Row_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Row_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Row_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _RowComponent = _Row_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Row_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 487 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(488);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(386);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(324);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);





var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('row');

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), 'var--box')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      justifyContent: _ctx.justify,
      alignItems: _ctx.align,
      margin: _ctx.average ? "0 -" + _ctx.average + "px" : undefined
    }),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.onClick && _ctx.onClick(...arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 6
  /* CLASS, STYLE */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarRow',
  props: _props__WEBPACK_IMPORTED_MODULE_2__.props,

  setup(props) {
    var {
      cols,
      bindCols,
      length
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_3__.useCols)();
    var average = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var gutter = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.toPxNum)(props.gutter);
      return gutter / 2;
    });

    var computePadding = () => {
      cols.forEach(col => {
        col.setPadding({
          left: average.value,
          right: average.value
        });
      });
    };

    var rowProvider = {
      computePadding
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => length.value, computePadding);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.gutter, computePadding);
    bindCols(rowProvider);
    return {
      n,
      classes,
      average
    };
  }

}));

/***/ }),
/* 488 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
function justifyValidator(justify) {
  return ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'].includes(justify);
}

function alignValidator(align) {
  return ['flex-start', 'center', 'flex-end'].includes(align);
}

var props = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: 'flex-start',
    validator: justifyValidator
  },
  align: {
    type: String,
    default: 'flex-start',
    validator: alignValidator
  },
  onClick: {
    type: Function
  }
};

/***/ }),
/* 489 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_SelectComponent": () => (/* binding */ _SelectComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(490);


_Select_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Select_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Select_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _SelectComponent = _Select_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Select_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 490 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(331);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(455);
/* harmony import */ var _chip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(379);
/* harmony import */ var _form_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(369);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(491);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(462);
/* harmony import */ var _form_provide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(375);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(324);











var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('select');


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  key: 1
};
function render(_ctx, _cache) {
  var _component_var_chip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-chip");

  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  var _component_var_menu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-menu");

  var _component_var_form_details = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-form-details");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), 'var--box', [_ctx.formDisabled || _ctx.disabled, _ctx.n('--disabled')])),
    onClick: _cache[3] || (_cache[3] = function () {
      return _ctx.handleClick && _ctx.handleClick(...arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('controller'), [_ctx.isFocus, _ctx.n('--focus')], [_ctx.errorMessage, _ctx.n('--error')], [_ctx.formDisabled || _ctx.disabled, _ctx.n('--disabled')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: !_ctx.errorMessage ? _ctx.isFocus ? _ctx.focusColor : _ctx.blurColor : undefined
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('icon'), [!_ctx.hint, _ctx.n('--non-hint')]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "prepend-icon")], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_menu, {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('menu')),
    "var-select-cover": "",
    "offset-y": _ctx.offsetY,
    show: _ctx.isFocus,
    "onUpdate:show": _cache[2] || (_cache[2] = $event => _ctx.isFocus = $event),
    onClose: _ctx.handleBlur
  }, {
    menu: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      ref: "menuEl",
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('scroller'))
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
    /* CLASS */
    )]),
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('wrap'), [!_ctx.hint, _ctx.n('--non-hint')])),
      ref: "wrapEl",
      onClick: _cache[1] || (_cache[1] = function () {
        return _ctx.handleFocus && _ctx.handleFocus(...arguments);
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('select'), [_ctx.errorMessage, _ctx.n('--error')], [_ctx.formDisabled || _ctx.disabled, _ctx.n('--disabled')])),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        textAlign: _ctx.textAlign,
        color: _ctx.textColor
      })
    }, [_ctx.multiple ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_ctx.chip ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 0,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('chips'))
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.labels, l => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_chip, {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('chip')),
        "var-select-cover": "",
        closable: "",
        size: "small",
        type: _ctx.errorMessage ? 'danger' : undefined,
        key: l,
        onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["stop"])),
        onClose: () => _ctx.handleClose(l)
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(l), 1
        /* TEXT */
        )]),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["class", "type", "onClose"]);
    }), 128
    /* KEYED_FRAGMENT */
    ))], 2
    /* CLASS */
    )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 1,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('values'))
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.labels.join(_ctx.separator)), 3
    /* TEXT, CLASS */
    ))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.label), 1
    /* TEXT */
    )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('arrow'), [_ctx.isFocus, _ctx.n('--arrow-rotate')])),
      "var-select-cover": "",
      name: "menu-down",
      transition: 300
    }, null, 8
    /* PROPS */
    , ["class"])], 6
    /* CLASS, STYLE */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('placeholder'), 'var--ellipsis', [_ctx.isFocus, _ctx.n('--focus')], [_ctx.errorMessage, _ctx.n('--error')], [_ctx.formDisabled || _ctx.disabled, _ctx.n('--disabled')], _ctx.computePlaceholderState(), [!_ctx.hint, _ctx.n('--placeholder-non-hint')])),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        color: !_ctx.errorMessage ? _ctx.isFocus ? _ctx.focusColor : _ctx.blurColor : undefined
      })
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.placeholder), 7
    /* TEXT, CLASS, STYLE */
    )], 2
    /* CLASS */
    )]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["class", "offset-y", "show", "onClose"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('icon'), [!_ctx.hint, _ctx.n('--non-hint')]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "append-icon", {}, () => [_ctx.clearable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_icon, {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('clear-icon')),
    name: "close-circle",
    size: "14px",
    onClick: _ctx.handleClear
  }, null, 8
  /* PROPS */
  , ["class", "onClick"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 2
  /* CLASS */
  )], 6
  /* CLASS, STYLE */
  ), _ctx.line ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('line'), [_ctx.formDisabled || _ctx.disabled, _ctx.n('--line-disabled')], [_ctx.errorMessage, _ctx.n('--line-error')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      background: !_ctx.errorMessage ? _ctx.blurColor : undefined
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('dot'), [_ctx.isFocus, _ctx.n('--spread')], [_ctx.formDisabled || _ctx.disabled, _ctx.n('--line-disabled')], [_ctx.errorMessage, _ctx.n('--line-error')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      background: !_ctx.errorMessage ? _ctx.focusColor : undefined
    })
  }, null, 6
  /* CLASS, STYLE */
  )], 6
  /* CLASS, STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_form_details, {
    "error-message": _ctx.errorMessage
  }, null, 8
  /* PROPS */
  , ["error-message"])], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarSelect',
  components: {
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
    VarMenu: _menu__WEBPACK_IMPORTED_MODULE_4__["default"],
    VarChip: _chip__WEBPACK_IMPORTED_MODULE_5__["default"],
    VarFormDetails: _form_details__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_7__.props,

  setup(props) {
    var wrapEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var isFocus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var multiple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.multiple);
    var focusColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.focusColor);
    var label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var labels = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var wrapWidth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('0px');
    var offsetY = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var {
      bindForm,
      form
    } = (0,_form_provide__WEBPACK_IMPORTED_MODULE_8__.useForm)();
    var {
      length,
      options,
      bindOptions
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_9__.useOptions)();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation
    } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.useValidation)();
    var menuEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

    var computeLabel = () => {
      var {
        multiple,
        modelValue
      } = props;

      if (multiple) {
        var rawModelValue = modelValue;
        labels.value = rawModelValue.map(findLabel);
      }

      if (!multiple && !(0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(modelValue)) {
        label.value = findLabel(modelValue);
      }

      if (!multiple && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(modelValue)) {
        label.value = '';
      }
    };

    var validateWithTrigger = trigger => {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        var {
          validateTrigger,
          rules,
          modelValue
        } = props;
        vt(validateTrigger, trigger, rules, modelValue);
      });
    };

    var findValueOrLabel = _ref => {
      var {
        value,
        label
      } = _ref;

      if (value.value != null) {
        return value.value;
      }

      return label.value;
    };

    var findLabel = modelValue => {
      var _option$label$value, _option;

      var option = options.find(_ref2 => {
        var {
          value
        } = _ref2;
        return value.value === modelValue;
      });

      if (!option) {
        option = options.find(_ref3 => {
          var {
            label
          } = _ref3;
          return label.value === modelValue;
        });
      }

      return (_option$label$value = (_option = option) == null ? void 0 : _option.label.value) != null ? _option$label$value : '';
    };

    var computePlaceholderState = () => {
      var {
        hint,
        modelValue
      } = props;

      if (!hint && !(0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(modelValue)) {
        return n('--placeholder-hidden');
      }

      if (hint && (!(0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(modelValue) || isFocus.value)) {
        return n('--placeholder-hint');
      }
    };

    var getWrapWidth = () => {
      return wrapEl.value && window.getComputedStyle(wrapEl.value).width || '0px';
    };

    var getOffsetY = () => {
      var paddingTop = wrapEl.value && window.getComputedStyle(wrapEl.value).paddingTop || '0px';
      return (0,_utils_elements__WEBPACK_IMPORTED_MODULE_10__.toPxNum)(paddingTop) * 1.5;
    };

    var handleFocus = () => {
      var {
        disabled,
        readonly,
        onFocus
      } = props;

      if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly) {
        return;
      }

      wrapWidth.value = getWrapWidth();
      offsetY.value = getOffsetY() + (0,_utils_elements__WEBPACK_IMPORTED_MODULE_10__.toPxNum)(props.offsetY);
      isFocus.value = true;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onFocus);
      validateWithTrigger('onFocus');
      detectBoundary();
    };

    var handleBlur = () => {
      var {
        disabled,
        readonly,
        onBlur
      } = props;

      if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly) {
        return;
      }

      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onBlur);
      validateWithTrigger('onBlur');
    };

    var onSelect = option => {
      var {
        disabled,
        readonly,
        multiple,
        onChange
      } = props;

      if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly) {
        return;
      }

      var selectedValue = multiple ? options.filter(_ref4 => {
        var {
          selected
        } = _ref4;
        return selected.value;
      }).map(findValueOrLabel) : findValueOrLabel(option);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], selectedValue);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onChange, selectedValue);
      validateWithTrigger('onChange');
      !multiple && (isFocus.value = false);
    };

    var handleClear = () => {
      var {
        disabled,
        readonly,
        multiple,
        clearable,
        onClear
      } = props;

      if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly || !clearable) {
        return;
      }

      var changedModelValue = multiple ? [] : undefined;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], changedModelValue);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onClear, changedModelValue);
      validateWithTrigger('onClear');
    };

    var handleClick = e => {
      var {
        disabled,
        onClick
      } = props;

      if (form != null && form.disabled.value || disabled) {
        return;
      }

      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onClick, e);
      validateWithTrigger('onClick');
    };

    var handleClose = text => {
      var {
        disabled,
        readonly,
        modelValue,
        onClose
      } = props;

      if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly) {
        return;
      }

      var rawModelValue = modelValue;
      var option = options.find(_ref5 => {
        var {
          label
        } = _ref5;
        return label.value === text;
      });
      var currentModelValue = rawModelValue.filter(value => {
        var _value$value;

        return value !== ((_value$value = option.value.value) != null ? _value$value : option.label.value);
      });
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], currentModelValue);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onClose, currentModelValue);
      validateWithTrigger('onClose');
    };

    var syncOptions = () => {
      var {
        multiple,
        modelValue
      } = props;

      if (multiple) {
        var rawModelValue = modelValue;
        options.forEach(option => option.sync(rawModelValue.includes(findValueOrLabel(option))));
      } else {
        options.forEach(option => option.sync(modelValue === findValueOrLabel(option)));
      }

      computeLabel();
    }; // expose


    var focus = () => {
      wrapWidth.value = getWrapWidth();
      offsetY.value = getOffsetY() + (0,_utils_elements__WEBPACK_IMPORTED_MODULE_10__.toPxNum)(props.offsetY);
      isFocus.value = true;
      detectBoundary();
    }; // expose


    var blur = () => {
      isFocus.value = false;
    }; // expose


    var validate = () => v(props.rules, props.modelValue); // expose


    var reset = () => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], props.multiple ? [] : undefined);
      resetValidation();
    };

    var detectBoundary = () => {
      var {
        body
      } = document;
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        var _menuEl$value, _menuEl$value2;

        var {
          offsetTop: menuOffsetTop,
          offsetHeight: menuOffsetHeight
        } = (_menuEl$value = menuEl.value) == null ? void 0 : _menuEl$value.parentElement;
        var menuOffsetBottom = body.scrollHeight - menuOffsetHeight - menuOffsetTop;
        if (menuOffsetTop < 0) offsetY.value = getOffsetY();
        if (menuOffsetBottom < 0) offsetY.value -= ((_menuEl$value2 = menuEl.value) == null ? void 0 : _menuEl$value2.parentElement).offsetHeight - getOffsetY();
      });
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.multiple, () => {
      var {
        multiple,
        modelValue
      } = props;

      if (multiple && !(0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue)) {
        throw Error('The modelValue must be an array when multiple is true');
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.modelValue, syncOptions, {
      deep: true
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => length.value, syncOptions);
    var selectProvider = {
      wrapWidth: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => wrapWidth.value),
      multiple,
      focusColor,
      onSelect,
      reset,
      validate,
      resetValidation
    };
    bindOptions(selectProvider);
    (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(bindForm, selectProvider);
    return {
      wrapEl,
      offsetY,
      isFocus,
      errorMessage,
      formDisabled: form == null ? void 0 : form.disabled,
      label,
      labels,
      menuEl,
      n,
      classes,
      computePlaceholderState,
      handleFocus,
      handleBlur,
      handleClear,
      handleClick,
      handleClose,
      reset,
      validate,
      resetValidation,
      focus,
      blur
    };
  }

}));

/***/ }),
/* 491 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textAlignValidator": () => (/* binding */ textAlignValidator),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
function textAlignValidator(textAlign) {
  return ['left', 'right', 'center'].includes(textAlign);
}
var props = {
  modelValue: {
    default: undefined
  },
  placeholder: {
    type: String
  },
  multiple: {
    type: Boolean,
    default: false
  },
  offsetY: {
    type: [String, Number],
    default: 0
  },
  chip: {
    type: Boolean,
    default: false
  },
  line: {
    type: Boolean,
    default: true
  },
  hint: {
    type: Boolean,
    default: true
  },
  textColor: {
    type: String
  },
  focusColor: {
    type: String
  },
  blurColor: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  separator: {
    type: String,
    default: ','
  },
  textAlign: {
    type: String,
    default: 'left',
    validator: textAlignValidator
  },
  validateTrigger: {
    type: Array,
    default: () => ['onChange', 'onClear', 'onClose']
  },
  rules: {
    type: Array
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onClick: {
    type: Function
  },
  onClear: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onChange: {
    type: Function
  },
  'onUpdate:modelValue': {
    type: Function
  }
};

/***/ }),
/* 492 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_SkeletonComponent": () => (/* binding */ _SkeletonComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Skeleton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(493);


_Skeleton_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Skeleton_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Skeleton_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _SkeletonComponent = _Skeleton_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Skeleton_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 493 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(494);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(324);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);





var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('skeleton');

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes('var--box', _ctx.n()))
  }, [!_ctx.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('data'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.loading && !_ctx.fullscreen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('content'))
  }, [_ctx.card ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('card')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      height: _ctx.toSizeUnit(_ctx.cardHeight)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('--animation'))
  }, null, 2
  /* CLASS */
  )], 6
  /* CLASS, STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('article'))
  }, [_ctx.avatar ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('avatar')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: _ctx.toSizeUnit(_ctx.avatarSize),
      height: _ctx.toSizeUnit(_ctx.avatarSize)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('--animation'))
  }, null, 2
  /* CLASS */
  )], 6
  /* CLASS, STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('section'))
  }, [_ctx.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('title')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: _ctx.toSizeUnit(_ctx.titleWidth)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('--animation'))
  }, null, 2
  /* CLASS */
  )], 6
  /* CLASS, STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.toNumber(_ctx.rows), (r, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('row')),
      key: r,
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        width: _ctx.toSizeUnit(_ctx.rowsWidth[index])
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('--animation'))
    }, null, 2
    /* CLASS */
    )], 6
    /* CLASS, STYLE */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  )], 2
  /* CLASS */
  )], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.loading && _ctx.fullscreen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 2,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('fullscreen')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      zIndex: _ctx.toNumber(_ctx.fullscreenZIndex)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('--animation'))
  }, null, 2
  /* CLASS */
  )], 6
  /* CLASS, STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarSkeleton',
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup() {
    return {
      n,
      classes,
      toSizeUnit: _utils_elements__WEBPACK_IMPORTED_MODULE_4__.toSizeUnit,
      toNumber: _varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber
    };
  }

}));

/***/ }),
/* 494 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  loading: {
    type: Boolean,
    default: true
  },
  title: {
    type: Boolean,
    default: false
  },
  card: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: Boolean,
    default: false
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  fullscreenZIndex: {
    type: [Number, String],
    default: 100
  },
  titleWidth: {
    type: [Number, String]
  },
  cardHeight: {
    type: [Number, String]
  },
  avatarSize: {
    type: [Number, String]
  },
  rows: {
    type: [Number, String],
    default: 3
  },
  rowsWidth: {
    type: Array,
    default: () => []
  }
};

/***/ }),
/* 495 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_SliderComponent": () => (/* binding */ _SliderComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(496);


_Slider_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Slider_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Slider_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _SliderComponent = _Slider_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Slider_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 496 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
/* harmony import */ var _form_provide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(375);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(324);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(497);
/* harmony import */ var _form_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(369);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('slider');
var Thumbs;

(function (Thumbs) {
  Thumbs["First"] = "1";
  Thumbs["Second"] = "2";
})(Thumbs || (Thumbs = {}));



var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function render(_ctx, _cache) {
  var _component_var_form_details = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-form-details");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('block'), [_ctx.isDisabled, _ctx.n('--disabled')], [_ctx.errorMessage, _ctx.n('--error')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      height: _ctx.thumbSize === undefined ? _ctx.thumbSize : _ctx.multiplySizeUnit(_ctx.thumbSize, 3),
      margin: _ctx.thumbSize === undefined ? _ctx.thumbSize : "0 " + _ctx.multiplySizeUnit(_ctx.thumbSize, 0.5)
    }),
    ref: "sliderEl",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.click && _ctx.click(...arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('track'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('track-background')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      background: _ctx.trackColor,
      height: _ctx.multiplySizeUnit(_ctx.trackHeight)
    })
  }, null, 6
  /* CLASS, STYLE */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('track-fill')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.getFillStyle)
  }, null, 6
  /* CLASS, STYLE */
  )], 2
  /* CLASS */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.thumbList, item => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('thumb')),
      key: item.enumValue,
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        left: item.value + "%",
        zIndex: _ctx.thumbsProps[item.enumValue].active ? 1 : undefined
      }),
      onTouchstart: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.start($event, item.enumValue), ["stop"]),
      onTouchmove: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.move($event, item.enumValue), ["stop"]),
      onTouchend: $event => _ctx.end(item.enumValue),
      onTouchcancel: $event => _ctx.end(item.enumValue)
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "button", {
      currentValue: item.value
    }, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('thumb-block')),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        background: _ctx.thumbColor,
        height: _ctx.multiplySizeUnit(_ctx.thumbSize),
        width: _ctx.multiplySizeUnit(_ctx.thumbSize)
      })
    }, null, 6
    /* CLASS, STYLE */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('thumb-ripple'), [_ctx.thumbsProps[item.enumValue].active, _ctx.n('thumb-ripple--active')])),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_extends({
        background: _ctx.thumbColor
      }, _ctx.getRippleSize(item)))
    }, null, 6
    /* CLASS, STYLE */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('thumb-label'), [_ctx.showLabel(item.enumValue), _ctx.n('thumb-label--active')])),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        background: _ctx.labelColor,
        color: _ctx.labelTextColor,
        height: _ctx.thumbSize === undefined ? _ctx.thumbSize : _ctx.multiplySizeUnit(_ctx.thumbSize, 2),
        width: _ctx.thumbSize === undefined ? _ctx.thumbSize : _ctx.multiplySizeUnit(_ctx.thumbSize, 2)
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.value), 1
    /* TEXT */
    )], 6
    /* CLASS, STYLE */
    )])], 46
    /* CLASS, STYLE, PROPS, HYDRATE_EVENTS */
    , _hoisted_1);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 6
  /* CLASS, STYLE */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_form_details, {
    "error-message": _ctx.errorMessage,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('form')),
    "var-slider-cover": ""
  }, null, 8
  /* PROPS */
  , ["error-message", "class"])], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarSlider',
  components: {
    VarFormDetails: _form_details__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_4__.props,

  setup(props) {
    var {
      bindForm,
      form
    } = (0,_form_provide__WEBPACK_IMPORTED_MODULE_5__.useForm)();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      resetValidation
    } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.useValidation)();

    var validate = () => v(props.rules, props.modelValue);

    var getThumbProps = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: false,
      percentValue: 0
    });

    var validateWithTrigger = () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => vt(['onChange'], 'onChange', props.rules, props.modelValue));

    var sliderEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var maxWidth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var isScroll = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var thumbsProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      [Thumbs.First]: getThumbProps(),
      [Thumbs.Second]: getThumbProps()
    });
    var unitWidth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => maxWidth.value / 100 * (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.step));
    var thumbList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var list = [{
        value: props.modelValue,
        enumValue: Thumbs.First
      }];

      if (props.range && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(props.modelValue)) {
        list = [{
          value: props.modelValue[0],
          enumValue: Thumbs.First
        }, {
          value: props.modelValue[1],
          enumValue: Thumbs.Second
        }];
      }

      return list;
    });

    var getRippleSize = item => {
      var size;

      if (props.thumbSize !== undefined) {
        size = thumbsProps[item.enumValue].active ? (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.multiplySizeUnit)(props.thumbSize, 3) : '0px';
      }

      return {
        height: size,
        width: size
      };
    };

    var showLabel = type => {
      if (props.labelVisible === 'always') return true;
      if (props.labelVisible === 'never') return false;
      return thumbsProps[type].active;
    };

    var getFillStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var {
        activeColor,
        range,
        modelValue
      } = props;
      var width = range && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue) ? Math.abs(modelValue[0] - modelValue[1]) : modelValue;
      var left = range && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue) ? Math.min(modelValue[0], modelValue[1]) : 0;
      return {
        width: width + "%",
        left: left + "%",
        background: activeColor
      };
    });
    var isDisabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.disabled || (form == null ? void 0 : form.disabled.value));
    var isReadonly = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.readonly || (form == null ? void 0 : form.readonly.value));

    var setPercent = (moveDistance, type) => {
      var rangeValue = [];
      var {
        step,
        range,
        modelValue,
        onChange
      } = props;
      var stepNumber = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(step);
      var roundDistance = Math.round(moveDistance / unitWidth.value);
      var curValue = roundDistance * stepNumber;
      var prevValue = thumbsProps[type].percentValue;
      thumbsProps[type].percentValue = curValue / stepNumber;

      if (range && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue)) {
        rangeValue = type === Thumbs.First ? [curValue, modelValue[1]] : [modelValue[0], curValue];
      }

      if (prevValue !== curValue) {
        var value = range ? rangeValue : curValue;
        (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onChange, value);
        (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], value);
        validateWithTrigger();
      }
    };

    var getType = offset => {
      if (!props.range) return Thumbs.First;
      var thumb1Distance = thumbsProps[Thumbs.First].percentValue * unitWidth.value;
      var thumb2Distance = thumbsProps[Thumbs.Second].percentValue * unitWidth.value;
      var offsetToThumb1 = Math.abs(offset - thumb1Distance);
      var offsetToThumb2 = Math.abs(offset - thumb2Distance);
      return offsetToThumb1 <= offsetToThumb2 ? Thumbs.First : Thumbs.Second;
    };

    var start = (event, type) => {
      if (!maxWidth.value) maxWidth.value = sliderEl.value.offsetWidth;
      if (isDisabled.value || isReadonly.value) return;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props.onStart);
      isScroll.value = true;
      thumbsProps[type].startPosition = event.touches[0].clientX;
    };

    var move = (event, type) => {
      if (isDisabled.value || isReadonly.value || !isScroll.value) return;
      var moveDistance = event.touches[0].clientX - thumbsProps[type].startPosition + thumbsProps[type].currentLeft;
      thumbsProps[type].active = true;
      if (moveDistance <= 0) moveDistance = 0;else if (moveDistance >= maxWidth.value) moveDistance = maxWidth.value;
      setPercent(moveDistance, type);
    };

    var end = type => {
      var {
        range,
        modelValue,
        onEnd
      } = props;
      if (isDisabled.value || isReadonly.value) return;
      var rangeValue = [];
      thumbsProps[type].currentLeft = thumbsProps[type].percentValue * unitWidth.value;
      thumbsProps[type].active = false;
      var curValue = thumbsProps[type].percentValue;

      if (range && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue)) {
        rangeValue = type === Thumbs.First ? [curValue, modelValue[1]] : [modelValue[0], curValue];
      }

      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onEnd, range ? rangeValue : curValue);
      isScroll.value = false;
    };

    var click = event => {
      if (isDisabled.value || isReadonly.value) return;
      if (event.target.closest('.var-slider__thumb')) return;
      var offset = event.clientX - (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.getLeft)(event.currentTarget);
      var type = getType(offset);
      setPercent(offset, type);
      end(type);
    };

    var stepValidator = () => {
      var stepNumber = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.step);

      if (isNaN(stepNumber)) {
        console.warn('[Varlet] Slider: type of prop "step" should be Number');
        return false;
      }

      if (stepNumber < 1 || stepNumber > 100) {
        console.warn('[Varlet] Slider: "step" should be >= 0 and <= 100');
        return false;
      }

      if (parseInt("" + props.step, 10) !== stepNumber) {
        console.warn('[Varlet] Slider: "step" should be an Integer');
        return false;
      }

      return true;
    };

    var valueValidator = () => {
      var {
        range,
        modelValue
      } = props;

      if (range && !(0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue)) {
        console.error('[Varlet] Slider: "modelValue" should be an Array');
        return false;
      }

      if (!range && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue)) {
        console.error('[Varlet] Slider: "modelValue" should be a Number');
        return false;
      }

      if (range && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue) && modelValue.length < 2) {
        console.error('[Varlet] Slider: "modelValue" should have two value');
        return false;
      }

      return true;
    };

    var setProps = function (modelValue, step) {
      if (modelValue === void 0) {
        modelValue = props.modelValue;
      }

      if (step === void 0) {
        step = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(props.step);
      }

      if (props.range && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue)) {
        thumbsProps[Thumbs.First].percentValue = modelValue[0] / step;
        thumbsProps[Thumbs.First].currentLeft = thumbsProps[Thumbs.First].percentValue * unitWidth.value;
        thumbsProps[Thumbs.Second].percentValue = modelValue[1] / step;
        thumbsProps[Thumbs.Second].currentLeft = thumbsProps[Thumbs.Second].percentValue * unitWidth.value;
      } else if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isNumber)(modelValue)) {
        thumbsProps[Thumbs.First].currentLeft = modelValue / step * unitWidth.value;
      }
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)([() => props.modelValue, () => props.step], _ref => {
      var [modelValue, step] = _ref;
      if (!stepValidator() || !valueValidator() || isScroll.value) return;
      setProps(modelValue, (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(step));
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(maxWidth, () => setProps());
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      if (!stepValidator() || !valueValidator()) return;
      maxWidth.value = sliderEl.value.offsetWidth;
    });

    var reset = () => {
      var resetValue = props.range ? [0, 0] : 0;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], resetValue);
      resetValidation();
    };

    var sliderProvider = {
      reset,
      validate,
      resetValidation
    };
    (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(bindForm, sliderProvider);
    return {
      n,
      classes,
      Thumbs,
      sliderEl,
      getFillStyle,
      isDisabled,
      errorMessage,
      thumbsProps,
      thumbList,
      multiplySizeUnit: _utils_elements__WEBPACK_IMPORTED_MODULE_6__.multiplySizeUnit,
      toNumber: _varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber,
      getRippleSize,
      showLabel,
      start,
      move,
      end,
      click
    };
  }

}));

/***/ }),
/* 497 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
function labelValidator(label) {
  return ['always', 'normal', 'never'].includes(label);
}

var props = {
  // 当前进度百分比
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  // 步长
  step: {
    type: [Number, String],
    default: 1
  },
  // 是否开启双滑块模式
  range: {
    type: Boolean,
    default: false
  },
  labelVisible: {
    type: String,
    default: 'normal',
    validator: labelValidator
  },
  activeColor: {
    type: String
  },
  trackColor: {
    type: String
  },
  thumbColor: {
    type: String
  },
  labelColor: {
    type: String
  },
  labelTextColor: {
    type: String
  },
  trackHeight: {
    type: [String, Number]
  },
  thumbSize: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: false
  },
  // 是否只读
  readonly: {
    type: Boolean,
    default: false
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  onStart: {
    type: Function
  },
  onEnd: {
    type: Function
  },
  'onUpdate:modelValue': {
    type: Function
  }
};

/***/ }),
/* 498 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SNACKBAR_TYPE": () => (/* binding */ SNACKBAR_TYPE),
/* harmony export */   "_SnackbarComponent": () => (/* binding */ _SnackbarComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(499);
/* harmony import */ var _Snackbar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(501);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(325);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(321);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,vue__WEBPACK_IMPORTED_MODULE_0__.isVNode)(s);
}

var SNACKBAR_TYPE = ['loading', 'success', 'warning', 'info', 'error'];
var sid = 0;
var isMount = false;
var unmount;
var isAllowMultiple = false;
var uniqSnackbarOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)([]);
var defaultOption = {
  type: undefined,
  content: '',
  position: 'top',
  duration: 3000,
  vertical: false,
  contentClass: undefined,
  loadingType: 'circle',
  loadingSize: 'normal',
  lockScroll: false,
  teleport: 'body',
  forbidClick: false,
  onOpen: () => {},
  onOpened: () => {},
  onClose: () => {},
  onClosed: () => {}
};
var transitionGroupProps = {
  name: 'var-snackbar-fade',
  tag: 'div',
  class: 'var-transition-group'
};
var TransitionGroupHost = {
  setup() {
    return () => {
      var snackbarList = uniqSnackbarOptions.map(_ref => {
        var {
          id,
          reactiveSnackOptions,
          _update
        } = _ref;
        var transitionGroupEl = document.querySelector('.var-transition-group');

        if (reactiveSnackOptions.forbidClick || reactiveSnackOptions.type === 'loading') {
          ;
          transitionGroupEl.classList.add('var-pointer-auto');
        } else {
          ;
          transitionGroupEl.classList.remove('var-pointer-auto');
        }

        if (isAllowMultiple) reactiveSnackOptions.position = 'top';
        var position = isAllowMultiple ? 'relative' : 'absolute'; // avoid stylelint value-keyword-case error

        var style = _extends({
          position
        }, getTop(reactiveSnackOptions.position));

        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_core_js__WEBPACK_IMPORTED_MODULE_2__["default"], (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(reactiveSnackOptions, {
          "key": id,
          "style": style,
          "data-id": id,
          "_update": _update,
          'show': reactiveSnackOptions.show,
          "onUpdate:show": $event => reactiveSnackOptions.show = $event
        }), null);
      });
      var zindex = _context__WEBPACK_IMPORTED_MODULE_3__["default"].zIndex; // avoid stylelint value-keyword-case error

      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(transitionGroupProps, {
        "style": {
          zIndex: zindex
        },
        "onAfterEnter": opened,
        "onAfterLeave": removeUniqOption
      }), _isSlot(snackbarList) ? snackbarList : {
        default: () => [snackbarList]
      });
    };
  }

};

var Snackbar = function (options) {
  var snackOptions = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(options) || (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isNumber)(options) ? {
    content: String(options)
  } : options;
  var reactiveSnackOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(_extends({}, defaultOption, snackOptions));
  reactiveSnackOptions.show = true;

  if (!isMount) {
    isMount = true;
    unmount = (0,_utils_components__WEBPACK_IMPORTED_MODULE_4__.mountInstance)(TransitionGroupHost).unmountInstance;
  }

  var {
    length
  } = uniqSnackbarOptions;
  var uniqSnackbarOptionItem = {
    id: sid++,
    reactiveSnackOptions
  };

  if (length === 0 || isAllowMultiple) {
    addUniqOption(uniqSnackbarOptionItem);
  } else {
    var _update = "update-" + sid;

    updateUniqOption(reactiveSnackOptions, _update);
  }

  return {
    clear() {
      if (!isAllowMultiple && uniqSnackbarOptions.length) {
        uniqSnackbarOptions[0].reactiveSnackOptions.show = false;
      } else {
        reactiveSnackOptions.show = false;
      }
    }

  };
};

SNACKBAR_TYPE.forEach(type => {
  Snackbar[type] = options => {
    if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(options)) {
      options.type = type;
    } else {
      options = {
        content: options,
        type
      };
    }

    return Snackbar(options);
  };
});

Snackbar.install = function (app) {
  app.component(_Snackbar_js__WEBPACK_IMPORTED_MODULE_5__["default"].name, _Snackbar_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
};

Snackbar.allowMultiple = function (bool) {
  if (bool === void 0) {
    bool = false;
  }

  if (bool !== isAllowMultiple) {
    uniqSnackbarOptions.forEach(option => {
      option.reactiveSnackOptions.show = false;
    });
    isAllowMultiple = bool;
  }
};

Snackbar.clear = function () {
  uniqSnackbarOptions.forEach(option => {
    option.reactiveSnackOptions.show = false;
  });
};

Snackbar.Component = _Snackbar_js__WEBPACK_IMPORTED_MODULE_5__["default"];

function opened(element) {
  var id = element.getAttribute('data-id');
  var option = uniqSnackbarOptions.find(option => option.id === (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(id));
  if (option) option.reactiveSnackOptions.onOpened == null ? void 0 : option.reactiveSnackOptions.onOpened();
}

function removeUniqOption(element) {
  element.parentElement && element.parentElement.classList.remove('var-pointer-auto');
  var id = element.getAttribute('data-id');
  var option = uniqSnackbarOptions.find(option => option.id === (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(id));

  if (option) {
    option.animationEnd = true;
    option.reactiveSnackOptions.onClosed == null ? void 0 : option.reactiveSnackOptions.onClosed();
  }

  var isAllAnimationEnd = uniqSnackbarOptions.every(option => option.animationEnd);

  if (isAllAnimationEnd) {
    unmount == null ? void 0 : unmount();
    uniqSnackbarOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)([]);
    isMount = false;
  }
}

function addUniqOption(uniqSnackbarOptionItem) {
  uniqSnackbarOptions.push(uniqSnackbarOptionItem);
}

function updateUniqOption(reactiveSnackOptions, _update) {
  var [firstOption] = uniqSnackbarOptions;
  firstOption.reactiveSnackOptions = _extends({}, firstOption.reactiveSnackOptions, reactiveSnackOptions);
  firstOption._update = _update;
}

function getTop(position) {
  if (position === void 0) {
    position = 'top';
  }

  if (position === 'bottom') return {
    [position]: '5%'
  };
  return {
    top: position === 'top' ? '5%' : '45%'
  };
}

_Snackbar_js__WEBPACK_IMPORTED_MODULE_5__["default"].install = function (app) {
  app.component(_Snackbar_js__WEBPACK_IMPORTED_MODULE_5__["default"].name, _Snackbar_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
};

var _SnackbarComponent = _Snackbar_js__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snackbar);

/***/ }),
/* 499 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(345);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(331);
/* harmony import */ var _context_zIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(329);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(500);
/* harmony import */ var _context_lock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(330);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(498);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);








var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('snackbar');
var ICON_TYPE_DICT = {
  success: 'checkbox-marked-circle',
  warning: 'warning',
  info: 'information',
  error: 'error',
  loading: ''
};

function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  var _component_var_loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-loading");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n()),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      pointerEvents: _ctx.isForbidClick ? 'auto' : 'none',
      zIndex: _ctx.zIndex
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('wrapper'), _ctx.n("wrapper-" + _ctx.position), 'var-elevation--4', [_ctx.vertical, _ctx.n('vertical')], [_ctx.type && _ctx.SNACKBAR_TYPE.includes(_ctx.type), _ctx.n("wrapper-" + _ctx.type)])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      zIndex: _ctx.zIndex
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.n('content'), _ctx.contentClass])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.content), 1
  /* TEXT */
  )])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('action'))
  }, [_ctx.iconName ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_icon, {
    key: 0,
    name: _ctx.iconName
  }, null, 8
  /* PROPS */
  , ["name"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.type === 'loading' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_loading, {
    key: 1,
    type: _ctx.loadingType,
    size: _ctx.loadingSize
  }, null, 8
  /* PROPS */
  , ["type", "size"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "action")], 2
  /* CLASS */
  )], 6
  /* CLASS, STYLE */
  )], 6
  /* CLASS, STYLE */
  )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.show]]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarSnackbarCore',
  components: {
    VarLoading: _loading__WEBPACK_IMPORTED_MODULE_2__["default"],
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_4__.props,

  setup(props) {
    var timer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var {
      zIndex
    } = (0,_context_zIndex__WEBPACK_IMPORTED_MODULE_5__.useZIndex)(() => props.show, 1);
    (0,_context_lock__WEBPACK_IMPORTED_MODULE_6__.useLock)(() => props.show, () => props.lockScroll);
    var isForbidClick = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.type === 'loading' || props.forbidClick);
    var iconName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      if (!props.type) return '';
      return ICON_TYPE_DICT[props.type];
    });

    var updateAfterDuration = () => {
      timer.value = setTimeout(() => {
        var _props$onUpdateShow;

        props.type !== 'loading' && ((_props$onUpdateShow = props['onUpdate:show']) == null ? void 0 : _props$onUpdateShow.call(props, false));
      }, props.duration);
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.show, show => {
      if (show) {
        props.onOpen == null ? void 0 : props.onOpen();
        updateAfterDuration();
      } else if (show === false) {
        clearTimeout(timer.value);
        props.onClose == null ? void 0 : props.onClose();
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props._update, () => {
      clearTimeout(timer.value);
      updateAfterDuration();
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      if (props.show) {
        props.onOpen == null ? void 0 : props.onOpen();
        updateAfterDuration();
      }
    });
    return {
      SNACKBAR_TYPE: _index__WEBPACK_IMPORTED_MODULE_7__.SNACKBAR_TYPE,
      n,
      classes,
      zIndex,
      iconName,
      isForbidClick
    };
  }

}));

/***/ }),
/* 500 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "positionValidator": () => (/* binding */ positionValidator),
/* harmony export */   "typeValidator": () => (/* binding */ typeValidator),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);
/* harmony import */ var _loading_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(347);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(498);



function positionValidator(position) {
  var validPositions = ['top', 'center', 'bottom'];
  return validPositions.includes(position);
}
function typeValidator(type) {
  return _index__WEBPACK_IMPORTED_MODULE_0__.SNACKBAR_TYPE.includes(type);
}
var props = {
  type: {
    type: String,
    validator: typeValidator
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: 'top',
    validator: positionValidator
  },
  // content内容
  content: {
    type: String
  },
  // 为snackbar content添加自定义类名
  contentClass: {
    type: String
  },
  // snackbar 持续时间
  duration: {
    type: Number,
    default: 3000
  },
  // 是否将消息条内容堆叠在操作（按钮）之上
  vertical: {
    type: Boolean,
    default: false
  },
  // 加载动画类型
  loadingType: (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.pickProps)(_loading_props__WEBPACK_IMPORTED_MODULE_2__.props, 'type'),
  // 加载动画尺寸
  loadingSize: (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.pickProps)(_loading_props__WEBPACK_IMPORTED_MODULE_2__.props, 'size'),
  // 是否禁止滚动穿透
  lockScroll: {
    type: Boolean,
    default: false
  },
  // 控制组件可见还是隐藏
  show: {
    type: Boolean,
    default: false
  },
  // teleport
  teleport: {
    type: String,
    default: 'body'
  },
  // 是否禁止点击背景
  forbidClick: {
    type: Boolean,
    default: false
  },
  // 打开时的回调函数
  onOpen: {
    type: Function,
    default: () => {}
  },
  // 打开动画结束时的回调
  onOpened: {
    type: Function,
    default: () => {}
  },
  // 关闭时的回调函数
  onClose: {
    type: Function,
    default: () => {}
  },
  // 关闭动画结束时的回调
  onClosed: {
    type: Function,
    default: () => {}
  },
  'onUpdate:show': {
    type: Function
  },
  _update: {
    type: String
  }
};

/***/ }),
/* 501 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(499);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(500);




var {
  n
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('snackbar');

function render(_ctx, _cache) {
  var _component_var_snackbar_core = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-snackbar-core");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: _ctx.teleport,
    disabled: _ctx.disabled
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: _ctx.n() + "-fade",
    onAfterEnter: _ctx.onOpened,
    onAfterLeave: _ctx.onClosed
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_snackbar_core, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(_ctx.$props, {
      class: _ctx.n('transition')
    }), {
      action: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "action")]),
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.content), 1
      /* TEXT */
      )])]),
      _: 3
      /* FORWARDED */

    }, 16
    /* FULL_PROPS */
    , ["class"])]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["name", "onAfterEnter", "onAfterLeave"])], 8
  /* PROPS */
  , ["to", "disabled"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarSnackbar',
  components: {
    VarSnackbarCore: _core__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup() {
    var {
      disabled
    } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.useTeleport)();
    return {
      n,
      disabled
    };
  }

}));

/***/ }),
/* 502 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_SpaceComponent": () => (/* binding */ _SpaceComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(503);


_Space__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Space__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Space__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _SpaceComponent = _Space__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Space__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 503 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(504);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(324);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);








var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('space');
var internalSizes = {
  mini: [4, 4],
  small: [6, 6],
  normal: [8, 12],
  large: [12, 20]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'VarSpace',
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup(props, _ref) {
    var {
      slots
    } = _ref;

    var getSize = (size, isInternalSize) => {
      return isInternalSize ? internalSizes[size] : (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(size) ? size.map(_utils_elements__WEBPACK_IMPORTED_MODULE_4__.toPxNum) : [(0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.toPxNum)(size), (0,_utils_elements__WEBPACK_IMPORTED_MODULE_4__.toPxNum)(size)];
    };

    return () => {
      var _call;

      var {
        inline,
        justify,
        align,
        wrap,
        direction,
        size
      } = props;
      var children = (_call = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(slots.default)) != null ? _call : [];
      var isInternalSize = (0,_props__WEBPACK_IMPORTED_MODULE_3__.internalSizeValidator)(size);
      var [y, x] = getSize(size, isInternalSize);

      var flatten = vNodes => {
        var result = [];
        vNodes.forEach(vNode => {
          if (vNode.type === vue__WEBPACK_IMPORTED_MODULE_0__.Comment) return;

          if (vNode.type === vue__WEBPACK_IMPORTED_MODULE_0__.Fragment && (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(vNode.children)) {
            vNode.children.forEach(item => {
              result.push(item);
            });
            return;
          }

          result.push(vNode);
        });
        return result;
      };

      children = flatten(children);
      var lastIndex = children.length - 1;
      var spacers = children.map((child, index) => {
        var width = direction === 'row' ? undefined : '100%';
        var margin = '0';

        if (direction === 'row') {
          if (justify === 'start' || justify === 'center' || justify === 'end') {
            if (index !== lastIndex) {
              margin = y / 2 + "px " + x + "px " + y / 2 + "px 0";
            } else {
              margin = y / 2 + "px 0";
            }
          } else if (justify === 'space-around') {
            margin = y / 2 + "px " + x / 2 + "px";
          } else if (justify === 'space-between') {
            if (index === 0) {
              margin = y / 2 + "px " + x / 2 + "px " + y / 2 + "px 0";
            } else if (index === lastIndex) {
              margin = y / 2 + "px 0 " + y / 2 + "px " + x / 2 + "px";
            } else {
              margin = y / 2 + "px " + x / 2 + "px";
            }
          }
        }

        if (direction === 'column' && index !== lastIndex) {
          margin = "0 0 " + y + "px 0";
        }

        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
          "style": {
            margin,
            width
          }
        }, [child]);
      });
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        "class": classes(n(), 'var--box', [inline, n('--inline')]),
        "style": {
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
          flexWrap: wrap ? 'wrap' : 'nowrap',
          margin: direction === 'row' ? "-" + y / 2 + "px 0" : undefined
        }
      }, [spacers]);
    };
  }

}));

/***/ }),
/* 504 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "internalSizeValidator": () => (/* binding */ internalSizeValidator),
/* harmony export */   "sizeValidator": () => (/* binding */ sizeValidator),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(320);

var internalSizeValidator = size => ['mini', 'small', 'normal', 'large'].includes(size);
var sizeValidator = size => {
  return internalSizeValidator(size) || (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(size) || (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.isNumber)(size) || (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(size);
};

var justifyValidator = justify => {
  return ['start', 'end', 'center', 'space-around', 'space-between'].includes(justify);
};

var props = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: 'normal',
    validator: sizeValidator
  },
  wrap: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    default: 'row'
  },
  justify: {
    type: String,
    default: 'start',
    validator: justifyValidator
  },
  inline: {
    type: Boolean,
    default: false
  }
};

/***/ }),
/* 505 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_StepComponent": () => (/* binding */ _StepComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Step_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(506);


_Step_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Step_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Step_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _StepComponent = _Step_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Step_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 506 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(507);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(508);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(331);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);





var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('step');


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = {
  key: 3
};
function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n(_ctx.direction))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n(_ctx.direction + "-main")),
    ref: _ctx.getRef
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(_ctx.direction + "-tag"), [_ctx.isActive || _ctx.isCurrent, _ctx.n(_ctx.direction + "-tag--active")])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      backgroundColor: _ctx.isActive || _ctx.isCurrent ? _ctx.activeColor : _ctx.inactiveColor
    }),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.click && _ctx.click(...arguments);
    })
  }, [_ctx.isActive ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_icon, {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('icon')),
    "var-step-cover": "",
    name: _ctx.activeIcon
  }, null, 8
  /* PROPS */
  , ["class", "name"])) : _ctx.isCurrent && _ctx.currentIcon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_icon, {
    key: 1,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('icon')),
    "var-step-cover": "",
    name: _ctx.currentIcon
  }, null, 8
  /* PROPS */
  , ["class", "name"])) : _ctx.inactiveIcon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_icon, {
    key: 2,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('icon')),
    "var-step-cover": "",
    name: _ctx.inactiveIcon
  }, null, 8
  /* PROPS */
  , ["class", "name"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.index + 1), 1
  /* TEXT */
  ))], 6
  /* CLASS, STYLE */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(_ctx.direction + "-content"), [_ctx.isActive || _ctx.isCurrent, _ctx.n(_ctx.direction + "-content--active")])),
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.click && _ctx.click(...arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 2
  /* CLASS */
  )], 2
  /* CLASS */
  ), !_ctx.isLastChild ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n(_ctx.direction + "-line")),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      margin: _ctx.lineMargin
    })
  }, null, 6
  /* CLASS, STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarStep',
  components: {
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup() {
    var main = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var lineMargin = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var isLastChild = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var {
      index,
      steps,
      bindSteps
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_4__.useSteps)();
    var {
      active,
      length,
      activeColor,
      inactiveColor,
      direction,
      clickStep
    } = steps;
    var isCurrent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => active.value === index.value);
    var isActive = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => index.value !== -1 && active.value > index.value);
    var stepProvider = {
      index
    };

    var click = () => clickStep(index.value);

    var getRef = el => {
      if (direction.value === 'horizontal') {
        main.value = el;
      }
    };

    bindSteps(stepProvider);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(length, newLength => {
      isLastChild.value = newLength - 1 === index.value;

      if (main.value) {
        var margin = main.value.offsetWidth / 2 - 14;
        lineMargin.value = "0 -" + margin + "px";
      }
    });
    return {
      n,
      classes,
      main,
      index,
      isActive,
      isCurrent,
      direction,
      lineMargin,
      activeColor,
      inactiveColor,
      isLastChild,
      click,
      getRef
    };
  }

}));

/***/ }),
/* 507 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  activeIcon: {
    type: String,
    default: 'check'
  },
  currentIcon: {
    type: String
  },
  inactiveIcon: {
    type: String
  }
};

/***/ }),
/* 508 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSteps": () => (/* binding */ useSteps)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _steps_provide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(509);


function useSteps() {
  var {
    parentProvider,
    bindParent
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useParent)(_steps_provide__WEBPACK_IMPORTED_MODULE_1__.STEPS_BIND_STEP_KEY);
  var {
    index
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtParentIndex)(_steps_provide__WEBPACK_IMPORTED_MODULE_1__.STEPS_COUNT_STEP_KEY);

  if (!parentProvider || !bindParent || !index) {
    throw Error('[Varlet] Steps: <step/> must in <steps>');
  }

  return {
    index,
    steps: parentProvider,
    bindSteps: bindParent
  };
}

/***/ }),
/* 509 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STEPS_BIND_STEP_KEY": () => (/* binding */ STEPS_BIND_STEP_KEY),
/* harmony export */   "STEPS_COUNT_STEP_KEY": () => (/* binding */ STEPS_COUNT_STEP_KEY),
/* harmony export */   "useStep": () => (/* binding */ useStep)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);

var STEPS_BIND_STEP_KEY = Symbol('STEPS_BIND_STEP_KEY');
var STEPS_COUNT_STEP_KEY = Symbol('STEPS_COUNT_STEP_KEY');
function useStep() {
  var {
    bindChildren,
    childProviders
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useChildren)(STEPS_BIND_STEP_KEY);
  var {
    length
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtChildrenCounter)(STEPS_COUNT_STEP_KEY);
  return {
    length,
    step: childProviders,
    bindStep: bindChildren
  };
}

/***/ }),
/* 510 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_StepsComponent": () => (/* binding */ _StepsComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Steps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);


_Steps_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Steps_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Steps_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _StepsComponent = _Steps_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Steps_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 511 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(509);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(512);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);




var {
  n
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('steps');

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n()),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      flexDirection: _ctx.direction === 'horizontal' ? 'row' : 'column'
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 6
  /* CLASS, STYLE */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarSteps',
  props: _props__WEBPACK_IMPORTED_MODULE_2__.props,

  setup(props) {
    var active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.active);
    var activeColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.activeColor);
    var inactiveColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.inactiveColor);
    var direction = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.direction);
    var {
      length,
      bindStep
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_3__.useStep)();

    var clickStep = index => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props.onClickStep, index);
    };

    var stepsProvider = {
      active,
      length,
      direction,
      activeColor,
      inactiveColor,
      clickStep
    };
    bindStep(stepsProvider);
    return {
      n
    };
  }

}));

/***/ }),
/* 512 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
function directionValidator(direction) {
  return ['horizontal', 'vertical'].includes(direction);
}

var props = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: 'horizontal',
    validator: directionValidator
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: {
    type: Function
  }
};

/***/ }),
/* 513 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_StyleProviderComponent": () => (/* binding */ _StyleProviderComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StyleProvider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(514);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(324);


var mountedVarKeys = [];

function StyleProvider(styleVars) {
  if (styleVars === void 0) {
    styleVars = {};
  }

  mountedVarKeys.forEach(key => document.documentElement.style.removeProperty(key));
  mountedVarKeys.length = 0;
  var styles = (0,_utils_elements__WEBPACK_IMPORTED_MODULE_0__.formatStyleVars)(styleVars);
  Object.entries(styles).forEach(_ref => {
    var [key, value] = _ref;
    document.documentElement.style.setProperty(key, value);
    mountedVarKeys.push(key);
  });
}

StyleProvider.Component = _StyleProvider_js__WEBPACK_IMPORTED_MODULE_1__["default"];

_StyleProvider_js__WEBPACK_IMPORTED_MODULE_1__["default"].install = function (app) {
  app.component(_StyleProvider_js__WEBPACK_IMPORTED_MODULE_1__["default"].name, _StyleProvider_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

StyleProvider.install = function (app) {
  app.component(_StyleProvider_js__WEBPACK_IMPORTED_MODULE_1__["default"].name, _StyleProvider_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

var _StyleProviderComponent = _StyleProvider_js__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyleProvider);

/***/ }),
/* 514 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(324);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);



var {
  n
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('style-provider');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'VarStyleProvider',
  props: {
    styleVars: {
      type: Object,
      default: () => ({})
    }
  },

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    return () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div', {
      class: n(),
      style: (0,_utils_elements__WEBPACK_IMPORTED_MODULE_2__.formatStyleVars)(props.styleVars)
    }, (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(slots.default));
  }

}));

/***/ }),
/* 515 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_SwitchComponent": () => (/* binding */ _SwitchComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Switch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(516);


_Switch_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Switch_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Switch_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _SwitchComponent = _Switch_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Switch_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 516 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(324);
/* harmony import */ var _form_provide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(375);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(517);
/* harmony import */ var _form_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(369);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(345);
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(323);








var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('switch');

function render(_ctx, _cache) {
  var _component_var_loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-loading");

  var _component_var_form_details = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-form-details");

  var _directive_ripple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("ripple");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n())
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('block'), [_ctx.disabled || _ctx.formDisabled, _ctx.n('--disable')])),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.switchActive && _ctx.switchActive(...arguments);
    }),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.styleComputed.switch)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.styleComputed.track),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('track'), [_ctx.modelValue === _ctx.activeValue, _ctx.n('track--active')], [_ctx.errorMessage, _ctx.n('track--error')]))
  }, null, 6
  /* CLASS, STYLE */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('ripple'), [_ctx.modelValue === _ctx.activeValue, _ctx.n('ripple--active')])),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.styleComputed.ripple)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.styleComputed.handle),
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('handle'), 'var-elevation--2', [_ctx.modelValue === _ctx.activeValue, _ctx.n('handle--active')], [_ctx.errorMessage, _ctx.n('handle--error')]))
  }, [_ctx.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_loading, {
    key: 0,
    radius: _ctx.radius
  }, null, 8
  /* PROPS */
  , ["radius"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 6
  /* CLASS, STYLE */
  )], 6
  /* CLASS, STYLE */
  )), [[_directive_ripple, {
    disabled: !_ctx.ripple || _ctx.disabled || _ctx.loading || _ctx.formDisabled
  }]])], 6
  /* CLASS, STYLE */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_form_details, {
    "error-message": _ctx.errorMessage
  }, null, 8
  /* PROPS */
  , ["error-message"])], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarSwitch',
  components: {
    VarLoading: _loading__WEBPACK_IMPORTED_MODULE_2__["default"],
    VarFormDetails: _form_details__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  directives: {
    Ripple: _ripple__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_5__.props,

  setup(props) {
    var {
      bindForm,
      form
    } = (0,_form_provide__WEBPACK_IMPORTED_MODULE_6__.useForm)();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      resetValidation
    } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.useValidation)();

    var validate = () => v(props.rules, props.modelValue);

    var validateWithTrigger = () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => vt(['onChange'], 'onChange', props.rules, props.modelValue));

    var styleComputed = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var {
        size,
        modelValue,
        color,
        closeColor,
        loadingColor,
        activeValue
      } = props;
      return {
        handle: {
          width: (0,_utils_elements__WEBPACK_IMPORTED_MODULE_7__.multiplySizeUnit)(size),
          height: (0,_utils_elements__WEBPACK_IMPORTED_MODULE_7__.multiplySizeUnit)(size),
          backgroundColor: modelValue === activeValue ? color || '' : closeColor || '',
          color: loadingColor && loadingColor
        },
        ripple: {
          left: modelValue === activeValue ? (0,_utils_elements__WEBPACK_IMPORTED_MODULE_7__.multiplySizeUnit)(size, 0.5) : "-" + (0,_utils_elements__WEBPACK_IMPORTED_MODULE_7__.multiplySizeUnit)(size, 0.5),
          color: modelValue === activeValue ? color || '' : closeColor || '#999',
          width: (0,_utils_elements__WEBPACK_IMPORTED_MODULE_7__.multiplySizeUnit)(size, 2),
          height: (0,_utils_elements__WEBPACK_IMPORTED_MODULE_7__.multiplySizeUnit)(size, 2)
        },
        track: {
          height: (0,_utils_elements__WEBPACK_IMPORTED_MODULE_7__.multiplySizeUnit)(size, 0.72),
          width: (0,_utils_elements__WEBPACK_IMPORTED_MODULE_7__.multiplySizeUnit)(size, 1.9),
          borderRadius: (0,_utils_elements__WEBPACK_IMPORTED_MODULE_7__.multiplySizeUnit)(size, 2 / 3),
          filter: modelValue === activeValue || errorMessage != null && errorMessage.value ? 'opacity(.6)' : 'brightness(.6)',
          backgroundColor: modelValue === activeValue ? color || '' : closeColor || ''
        },
        switch: {
          height: (0,_utils_elements__WEBPACK_IMPORTED_MODULE_7__.multiplySizeUnit)(size, 1.2),
          width: (0,_utils_elements__WEBPACK_IMPORTED_MODULE_7__.multiplySizeUnit)(size, 2)
        }
      };
    });
    var radius = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var {
        size = '5.333vw'
      } = props;
      return (0,_utils_elements__WEBPACK_IMPORTED_MODULE_7__.multiplySizeUnit)(size, 0.4);
    });

    var switchActive = event => {
      var {
        onClick,
        onChange,
        disabled,
        loading,
        readonly,
        modelValue,
        activeValue,
        inactiveValue,
        'onUpdate:modelValue': updateModelValue
      } = props;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(onClick, event);
      if (disabled || loading || readonly || form != null && form.disabled.value || form != null && form.readonly.value) return;
      var newValue = modelValue === activeValue ? inactiveValue : activeValue;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(onChange, newValue);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(updateModelValue, newValue);
      validateWithTrigger();
    };

    var reset = () => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props['onUpdate:modelValue'], props.inactiveValue);
      resetValidation();
    };

    var switchProvider = {
      reset,
      validate,
      resetValidation
    };
    (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(bindForm, switchProvider);
    return {
      n,
      classes,
      switchActive,
      radius,
      styleComputed,
      errorMessage,
      formDisabled: form == null ? void 0 : form.disabled,
      formReadonly: form == null ? void 0 : form.readonly
    };
  }

}));

/***/ }),
/* 517 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  modelValue: {
    default: false
  },
  activeValue: {
    default: true
  },
  inactiveValue: {
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  color: {
    type: String
  },
  loadingColor: {
    type: String
  },
  closeColor: {
    type: String
  },
  size: {
    type: [String, Number]
  },
  rules: {
    type: Array
  },
  ripple: {
    type: Boolean,
    default: true
  },
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  'onUpdate:modelValue': {
    type: Function
  }
};

/***/ }),
/* 518 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_TabComponent": () => (/* binding */ _TabComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(519);


_Tab_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Tab_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Tab_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _TabComponent = _Tab_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Tab_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 519 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(323);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(520);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(521);





var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('tab');

function render(_ctx, _cache) {
  var _directive_ripple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("ripple");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), 'var--box', _ctx.computeColorClass(), _ctx.n("--" + _ctx.itemDirection))),
    ref: "tabEl",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      color: _ctx.computeColorStyle()
    }),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.handleClick && _ctx.handleClick(...arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 6
  /* CLASS, STYLE */
  )), [[_directive_ripple, {
    disabled: _ctx.disabled
  }]]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarTab',
  directives: {
    Ripple: _ripple__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup(props) {
    var tabEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var name = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.name);
    var disabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.disabled);
    var element = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => tabEl.value);
    var {
      index,
      tabs,
      bindTabs
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_4__.useTabs)();
    var {
      onTabClick,
      active,
      activeColor,
      inactiveColor,
      disabledColor,
      itemDirection,
      resize
    } = tabs;
    var tabProvider = {
      name,
      index,
      disabled,
      element
    };
    bindTabs(tabProvider);

    var computeColorStyle = () => {
      var {
        disabled,
        name
      } = props;
      return disabled ? disabledColor.value : active.value === name || active.value === (index == null ? void 0 : index.value) ? activeColor.value : inactiveColor.value;
    };

    var computeColorClass = () => {
      var {
        disabled,
        name
      } = props;
      return disabled ? 'var-tab--disabled' : active.value === name || active.value === (index == null ? void 0 : index.value) ? 'var-tab--active' : 'var-tab--inactive';
    };

    var handleClick = event => {
      var {
        disabled,
        name,
        onClick
      } = props;

      if (disabled) {
        return;
      }

      onClick == null ? void 0 : onClick(name != null ? name : index.value, event);
      onTabClick(tabProvider);
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.name, resize);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.disabled, resize);
    return {
      n,
      classes,
      tabEl,
      active,
      activeColor,
      inactiveColor,
      itemDirection,
      computeColorStyle,
      computeColorClass,
      handleClick
    };
  }

}));

/***/ }),
/* 520 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: false
  },
  onClick: {
    type: Function
  }
};

/***/ }),
/* 521 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTabs": () => (/* binding */ useTabs)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _tabs_provide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(522);


function useTabs() {
  var {
    parentProvider,
    bindParent
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useParent)(_tabs_provide__WEBPACK_IMPORTED_MODULE_1__.TABS_BIND_TAB_KEY);
  var {
    index
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtParentIndex)(_tabs_provide__WEBPACK_IMPORTED_MODULE_1__.TABS_COUNT_TAB_KEY);

  if (!parentProvider || !bindParent || !index) {
    throw Error('<var-tab/> must in <var-tabs/>');
  }

  return {
    index,
    tabs: parentProvider,
    bindTabs: bindParent
  };
}

/***/ }),
/* 522 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TABS_BIND_TAB_KEY": () => (/* binding */ TABS_BIND_TAB_KEY),
/* harmony export */   "TABS_COUNT_TAB_KEY": () => (/* binding */ TABS_COUNT_TAB_KEY),
/* harmony export */   "useTabList": () => (/* binding */ useTabList)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);

var TABS_BIND_TAB_KEY = Symbol('TABS_BIND_TAB_KEY');
var TABS_COUNT_TAB_KEY = Symbol('TABS_COUNT_TAB_KEY');
function useTabList() {
  var {
    childProviders,
    bindChildren
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useChildren)(TABS_BIND_TAB_KEY);
  var {
    length
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtChildrenCounter)(TABS_COUNT_TAB_KEY);
  return {
    length,
    tabList: childProviders,
    bindTabList: bindChildren
  };
}

/***/ }),
/* 523 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_TabItemComponent": () => (/* binding */ _TabItemComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TabItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(524);


_TabItem_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_TabItem_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _TabItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _TabItemComponent = _TabItem_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TabItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 524 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swipe_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(526);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(525);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);





var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('tab-item');

function render(_ctx, _cache) {
  var _component_var_swipe_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-swipe-item");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_swipe_item, {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), [!_ctx.current, _ctx.n('--inactive')])),
    "var-tab-item-cover": ""
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [_ctx.initSlot ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {
      key: 0
    }) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["class"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarTabItem',
  components: {
    VarSwipeItem: _swipe_item__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup(props) {
    var current = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var initSlot = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var name = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.name);
    var {
      index,
      bindTabsItems
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_4__.useTabsItems)();

    var setCurrent = value => {
      if (!initSlot.value && value) {
        initSlot.value = true;
      }

      current.value = value;
    };

    var tabItemProvider = {
      index,
      name,
      setCurrent
    };
    bindTabsItems(tabItemProvider);
    return {
      n,
      classes,
      current,
      initSlot
    };
  }

}));

/***/ }),
/* 525 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  name: {
    type: [String, Number]
  }
};

/***/ }),
/* 526 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTabsItems": () => (/* binding */ useTabsItems)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _tabs_items_provide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(527);


function useTabsItems() {
  var {
    parentProvider,
    bindParent
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useParent)(_tabs_items_provide__WEBPACK_IMPORTED_MODULE_1__.TABS_ITEMS_BIND_TAB_ITEM_KEY);
  var {
    index
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtParentIndex)(_tabs_items_provide__WEBPACK_IMPORTED_MODULE_1__.TABS_ITEMS_COUNT_TAB_ITEM_KEY);

  if (!parentProvider || !bindParent || !index) {
    throw Error('<var-tab-item/> must in <var-tabs-items/>');
  }

  return {
    index,
    tabsItems: parentProvider,
    bindTabsItems: bindParent
  };
}

/***/ }),
/* 527 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TABS_ITEMS_BIND_TAB_ITEM_KEY": () => (/* binding */ TABS_ITEMS_BIND_TAB_ITEM_KEY),
/* harmony export */   "TABS_ITEMS_COUNT_TAB_ITEM_KEY": () => (/* binding */ TABS_ITEMS_COUNT_TAB_ITEM_KEY),
/* harmony export */   "useTabItem": () => (/* binding */ useTabItem)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);

var TABS_ITEMS_BIND_TAB_ITEM_KEY = Symbol('TABS_ITEMS_BIND_TAB_ITEM_KEY');
var TABS_ITEMS_COUNT_TAB_ITEM_KEY = Symbol('TABS_ITEMS_COUNT_TAB_ITEM_KEY');
function useTabItem() {
  var {
    bindChildren,
    childProviders
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useChildren)(TABS_ITEMS_BIND_TAB_ITEM_KEY);
  var {
    length
  } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.useAtChildrenCounter)(TABS_ITEMS_COUNT_TAB_ITEM_KEY);
  return {
    length,
    tabItemList: childProviders,
    bindTabItem: bindChildren
  };
}

/***/ }),
/* 528 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_TableComponent": () => (/* binding */ _TableComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(529);


_Table_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Table_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Table_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _TableComponent = _Table_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Table_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 529 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(324);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);



var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('table');

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), 'var-elevation--1 var--box'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('main'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('table')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: _ctx.toSizeUnit(_ctx.fullWidth)
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 6
  /* CLASS, STYLE */
  )], 2
  /* CLASS */
  ), _ctx.$slots.footer ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('footer'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "footer")], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarTable',
  props: {
    fullWidth: {
      type: [Number, String],
      default: '100%'
    }
  },

  setup() {
    return {
      toSizeUnit: _utils_elements__WEBPACK_IMPORTED_MODULE_2__.toSizeUnit,
      n,
      classes
    };
  }

}));

/***/ }),
/* 530 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_TabsComponent": () => (/* binding */ _TabsComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(531);


_Tabs_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Tabs_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Tabs_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _TabsComponent = _Tabs_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Tabs_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 531 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sticky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(440);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(532);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(522);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(337);
/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(324);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('tabs');

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(_ctx.sticky ? 'var-sticky' : _ctx.Transition), {
    "offset-top": _ctx.sticky ? _ctx.offsetTop : null
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
      class: _ctx.classes(_ctx.n(), 'var--box', _ctx.n("--item-" + _ctx.itemDirection), _ctx.n("--layout-" + _ctx.layoutDirection + "-padding"), [_ctx.elevation, 'var-elevation--4'], [_ctx.fixedBottom, _ctx.n('--fixed-bottom')], [_ctx.safeArea, _ctx.n('--safe-area')]),
      style: {
        background: _ctx.color
      }
    }, _ctx.$attrs), [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      ref: "scrollerEl",
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('tab-wrap'), [_ctx.scrollable, _ctx.n("--layout-" + _ctx.layoutDirection + "-scrollable")], _ctx.n("--layout-" + _ctx.layoutDirection)))
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('indicator'), _ctx.n("--layout-" + _ctx.layoutDirection + "-indicator"))),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        width: _ctx.layoutDirection === 'horizontal' ? _ctx.indicatorWidth : _ctx.toSizeUnit(_ctx.indicatorSize),
        height: _ctx.layoutDirection === 'horizontal' ? _ctx.toSizeUnit(_ctx.indicatorSize) : _ctx.indicatorHeight,
        transform: _ctx.layoutDirection === 'horizontal' ? "translateX(" + _ctx.indicatorX + ")" : "translateY(" + _ctx.indicatorY + ")",
        background: _ctx.indicatorColor || _ctx.activeColor
      })
    }, null, 6
    /* CLASS, STYLE */
    )], 2
    /* CLASS */
    )], 16
    /* FULL_PROPS */
    )]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["offset-top"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarTabs',
  components: {
    VarSticky: _sticky__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  inheritAttrs: false,
  props: _props__WEBPACK_IMPORTED_MODULE_4__.props,

  setup(props) {
    var indicatorWidth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('0px');
    var indicatorHeight = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('0px');
    var indicatorX = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('0px');
    var indicatorY = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('0px');
    var scrollable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var scrollerEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var active = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.active);
    var activeColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.activeColor);
    var inactiveColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.inactiveColor);
    var disabledColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.disabledColor);
    var itemDirection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.itemDirection);
    var {
      tabList,
      bindTabList,
      length
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_5__.useTabList)();

    var onTabClick = tab => {
      var _tab$name$value;

      var currentActive = (_tab$name$value = tab.name.value) != null ? _tab$name$value : tab.index.value;
      var {
        active,
        onChange,
        onClick
      } = props;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:active'], currentActive);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onClick, currentActive);
      currentActive !== active && (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onChange, currentActive);
    };

    var matchName = () => {
      return tabList.find(_ref => {
        var {
          name
        } = _ref;
        return props.active === name.value;
      });
    };

    var matchIndex = activeIndex => {
      return tabList.find(_ref2 => {
        var {
          index
        } = _ref2;
        return (activeIndex != null ? activeIndex : props.active) === index.value;
      });
    };

    var matchBoundary = () => {
      if (length.value === 0) {
        return;
      }

      var {
        active
      } = props;

      if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isNumber)(active)) {
        var activeIndex = active > length.value - 1 ? length.value - 1 : 0;
        (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:active'], activeIndex);
        return matchIndex(activeIndex);
      }
    };

    var watchScrollable = () => {
      scrollable.value = tabList.length >= 5;
    };

    var moveIndicator = _ref3 => {
      var {
        element
      } = _ref3;
      var el = element.value;

      if (props.layoutDirection === 'horizontal') {
        indicatorWidth.value = (el == null ? void 0 : el.offsetWidth) + "px";
        indicatorX.value = (el == null ? void 0 : el.offsetLeft) + "px";
      } else {
        indicatorHeight.value = (el == null ? void 0 : el.offsetHeight) + "px";
        indicatorY.value = (el == null ? void 0 : el.offsetTop) + "px";
      }
    };

    var scrollToCenter = _ref4 => {
      var {
        element
      } = _ref4;

      if (!scrollable.value) {
        return;
      }

      var scroller = scrollerEl.value;
      var el = element.value;

      if (props.layoutDirection === 'horizontal') {
        var left = el.offsetLeft + el.offsetWidth / 2 - scroller.offsetWidth / 2;
        (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.scrollTo)(scroller, {
          left,
          animation: _utils_shared__WEBPACK_IMPORTED_MODULE_7__.linear
        });
      } else {
        var top = el.offsetTop + el.offsetHeight / 2 - scroller.offsetHeight / 2;
        (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.scrollTo)(scroller, {
          top,
          animation: _utils_shared__WEBPACK_IMPORTED_MODULE_7__.linear
        });
      }
    }; // expose


    var resize = () => {
      var tab = matchName() || matchIndex() || matchBoundary();

      if (!tab || tab.disabled.value) {
        return;
      }

      watchScrollable();
      moveIndicator(tab);
      scrollToCenter(tab);
    };

    var tabsProvider = {
      active,
      activeColor,
      inactiveColor,
      disabledColor,
      itemDirection,
      resize,
      onTabClick
    };
    bindTabList(tabsProvider);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => length.value, /*#__PURE__*/_asyncToGenerator(function* () {
      yield (0,_utils_elements__WEBPACK_IMPORTED_MODULE_6__.doubleRaf)();
      resize();
    }));
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.active, resize);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => window.addEventListener('resize', resize));
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => window.removeEventListener('resize', resize));
    return {
      indicatorWidth,
      indicatorHeight,
      indicatorX,
      indicatorY,
      scrollable,
      scrollerEl,
      Transition: vue__WEBPACK_IMPORTED_MODULE_0__.Transition,
      toSizeUnit: _utils_elements__WEBPACK_IMPORTED_MODULE_6__.toSizeUnit,
      n,
      classes,
      resize
    };
  }

}));

/***/ }),
/* 532 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _sticky_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(442);



function directionValidator(direction) {
  return ['horizontal', 'vertical'].includes(direction);
}

var props = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: 'horizontal',
    validator: directionValidator
  },
  itemDirection: {
    type: String,
    default: 'horizontal',
    validator: directionValidator
  },
  fixedBottom: {
    type: Boolean,
    default: false
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  disabledColor: {
    type: String
  },
  color: {
    type: String
  },
  indicatorColor: {
    type: String
  },
  indicatorSize: {
    type: [String, Number]
  },
  elevation: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  safeArea: {
    type: Boolean,
    default: false
  },
  offsetTop: (0,_utils_components__WEBPACK_IMPORTED_MODULE_0__.pickProps)(_sticky_props__WEBPACK_IMPORTED_MODULE_1__.props, 'offsetTop'),
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  'onUpdate:active': {
    type: Function
  }
};

/***/ }),
/* 533 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_TabsItemsComponent": () => (/* binding */ _TabsItemsComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TabsItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(534);


_TabsItems_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_TabsItems_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _TabsItems_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _TabsItemsComponent = _TabsItems_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TabsItems_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 534 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(430);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _provide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(527);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(535);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);





var {
  n
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.createNamespace)('tabs-items');

function render(_ctx, _cache) {
  var _component_var_swipe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-swipe");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_swipe, {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n()),
    ref: "swipe",
    loop: _ctx.loop,
    touchable: _ctx.canSwipe,
    indicator: false,
    onChange: _ctx.handleSwipeChange
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["class", "loop", "touchable", "onChange"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarTabsItems',
  components: {
    VarSwipe: _swipe__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_3__.props,

  setup(props) {
    var swipe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var {
      tabItemList,
      bindTabItem,
      length
    } = (0,_provide__WEBPACK_IMPORTED_MODULE_4__.useTabItem)();

    var matchName = active => {
      return tabItemList.find(_ref => {
        var {
          name
        } = _ref;
        return active === name.value;
      });
    };

    var matchIndex = active => {
      return tabItemList.find(_ref2 => {
        var {
          index
        } = _ref2;
        return active === index.value;
      });
    };

    var matchActive = active => {
      return matchName(active) || matchIndex(active);
    };

    var handleActiveChange = newValue => {
      var _swipe$value;

      var newActiveTabItemProvider = matchActive(newValue);

      if (!newActiveTabItemProvider) {
        return;
      }

      tabItemList.forEach(_ref3 => {
        var {
          setCurrent
        } = _ref3;
        return setCurrent(false);
      });
      newActiveTabItemProvider.setCurrent(true);
      (_swipe$value = swipe.value) == null ? void 0 : _swipe$value.to(newActiveTabItemProvider.index.value);
    };

    var handleSwipeChange = currentIndex => {
      var _tabItem$name$value;

      var tabItem = tabItemList.find(_ref4 => {
        var {
          index
        } = _ref4;
        return index.value === currentIndex;
      });
      var active = (_tabItem$name$value = tabItem.name.value) != null ? _tabItem$name$value : tabItem.index.value;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_1__.call)(props['onUpdate:active'], active);
    };

    var tabsItemsProvider = {};
    bindTabItem(tabsItemsProvider);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.active, handleActiveChange);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => length.value, () => handleActiveChange(props.active));
    return {
      swipe,
      n,
      handleSwipeChange
    };
  }

}));

/***/ }),
/* 535 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: true
  },
  loop: {
    type: Boolean,
    default: false
  },
  'onUpdate:active': {
    type: Function
  }
};

/***/ }),
/* 536 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_TimePickerComponent": () => (/* binding */ _TimePickerComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TimePicker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);


_TimePicker_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_TimePicker_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _TimePicker_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _TimePickerComponent = _TimePicker_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TimePicker_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 537 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(404);
/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(538);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(321);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(540);







var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.createNamespace)('time-picker');


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, ":", -1
/* HOISTED */
));

var _hoisted_2 = {
  key: 0
};
function render(_ctx, _cache) {
  var _component_clock = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("clock");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), [_ctx.shadow, 'var-elevation--2'])),
    ref: "picker"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('title')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      background: _ctx.headerColor || _ctx.color
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('title-time'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('title-btn'), [_ctx.type === 'hour', _ctx.n('title-btn--active')])),
    onClick: _cache[0] || (_cache[0] = $event => _ctx.checkPanel('hour'))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.time.hour), 3
  /* TEXT, CLASS */
  ), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('title-btn'), [_ctx.type === 'minute', _ctx.n('title-btn--active')])),
    onClick: _cache[1] || (_cache[1] = $event => _ctx.checkPanel('minute'))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.time.minute), 3
  /* TEXT, CLASS */
  ), _ctx.useSeconds ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2, ":")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.useSeconds ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('title-btn'), [_ctx.type === 'second', _ctx.n('title-btn--active')])),
    onClick: _cache[2] || (_cache[2] = $event => _ctx.checkPanel('second'))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.time.second), 3
  /* TEXT, CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), _ctx.format === 'ampm' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('title-ampm'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('title-btn'), [_ctx.ampm === 'am', _ctx.n('title-btn--active')])),
    onClick: _cache[3] || (_cache[3] = $event => _ctx.checkAmpm('am'))
  }, "AM", 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('title-btn'), [_ctx.ampm === 'pm', _ctx.n('title-btn--active')])),
    onClick: _cache[4] || (_cache[4] = $event => _ctx.checkAmpm('pm'))
  }, "PM", 2
  /* CLASS */
  )], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 6
  /* CLASS, STYLE */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('body'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('clock-container')),
    onTouchstart: _cache[5] || (_cache[5] = function () {
      return _ctx.moveHand && _ctx.moveHand(...arguments);
    }),
    onTouchmove: _cache[6] || (_cache[6] = function () {
      return _ctx.moveHand && _ctx.moveHand(...arguments);
    }),
    onTouchend: _cache[7] || (_cache[7] = function () {
      return _ctx.end && _ctx.end(...arguments);
    }),
    ref: "container"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: _ctx.n() + "-panel-fade"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_clock, {
      key: _ctx.type,
      ref: "inner",
      type: _ctx.type,
      ampm: _ctx.ampm,
      color: _ctx.color,
      "is-inner": _ctx.isInner,
      format: _ctx.format,
      "allowed-time": _ctx.allowedTime,
      rad: _ctx.getRad,
      time: _ctx.time,
      "prevent-next-update": _ctx.isPreventNextUpdate,
      "use-seconds": _ctx.useSeconds,
      max: _ctx.max,
      min: _ctx.min,
      onUpdate: _ctx.update,
      onChangePreventUpdate: _ctx.changePreventUpdate
    }, null, 8
    /* PROPS */
    , ["type", "ampm", "color", "is-inner", "format", "allowed-time", "rad", "time", "prevent-next-update", "use-seconds", "max", "min", "onUpdate", "onChangePreventUpdate"]))]),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["name"])], 34
  /* CLASS, HYDRATE_EVENTS */
  )], 2
  /* CLASS */
  )], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarTimePicker',
  components: {
    Clock: _clock_js__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_5__.props,

  setup(props) {
    var container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var picker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var inner = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var isInner = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var isPreventNextUpdate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var isActualInner = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var isChosenUsableHour = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var isChosenUsableMinute = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var hourRad = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(undefined);
    var minuteRad = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var secondRad = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var type = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('hour');
    var ampm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('am');
    var isDisableHour = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var isDisableMinute = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var time = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      hour: '00',
      minute: '00',
      second: '00'
    });
    var center = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      x: 0,
      y: 0
    });
    var innerRange = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      x: [],
      y: []
    });
    var getRad = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      if (type.value === 'hour') return hourRad.value;
      if (type.value === 'minute') return minuteRad.value;
      return secondRad.value;
    });

    var update = newTime => {
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(props['onUpdate:modelValue'], newTime);
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.call)(props.onChange, newTime);
    };

    var rad2deg = rad => {
      return rad * 57.29577951308232;
    };

    var checkPanel = panelType => {
      isChosenUsableHour.value = false;
      isDisableMinute.value = false;
      type.value = panelType;
    };

    var findAvailableHour = ampm => {
      var {
        disableHour
      } = inner.value;
      var index = _props__WEBPACK_IMPORTED_MODULE_5__.hoursAmpm.findIndex(hour => (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(hour) === (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(time.value.hour));
      var hours = ampm === 'am' ? _props__WEBPACK_IMPORTED_MODULE_5__.hoursAmpm : _props__WEBPACK_IMPORTED_MODULE_5__.hours24;
      var realignmentHours = [...hours.slice(index), ...hours.slice(0, index)];
      return realignmentHours.find((hour, index) => {
        isPreventNextUpdate.value = index !== 0;
        return !disableHour.includes(hour);
      });
    };

    var checkAmpm = ampmType => {
      if (props.readonly) return;
      ampm.value = ampmType;
      var newHour = findAvailableHour(ampmType);
      if (!newHour) return;
      var second = props.useSeconds ? ":" + time.value.second : '';
      var newTime = newHour.padStart(2, '0') + ":" + time.value.minute + second;
      update(newTime);
    };

    var getInner = (clientX, clientY) => {
      var xIsInRange = clientX >= innerRange.x[0] && clientX <= innerRange.x[1];
      var yIsInRange = clientY >= innerRange.y[0] && clientY <= innerRange.y[1];
      return xIsInRange && yIsInRange;
    };

    var getTime = value => {
      var hourFormat = props.format === '24hr' ? 'HH' : 'hh';
      var {
        hour,
        minute,
        second
      } = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getNumberTime)(value);
      return {
        hour: (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])().hour(hour).format(hourFormat),
        minute: (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])().minute(minute).format('mm'),
        second: (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])().second(second).format('ss')
      };
    };

    var getHourIndex = rad => {
      var value = rad / 30;
      return value >= 0 ? value : value + 12;
    };

    var getRangeSize = () => {
      var {
        width: innerWidth,
        height: innerHeight
      } = inner.value.getSize();
      var rangeXMin = center.x - innerWidth / 2 - 8;
      var rangeXMax = center.x + innerWidth / 2 + 8;
      var rangeYMin = center.y - innerHeight / 2 - 8;
      var rangeYMax = center.y + innerHeight / 2 + 8;
      return {
        rangeXMin,
        rangeXMax,
        rangeYMin,
        rangeYMax
      };
    };

    var setHourRad = (clientX, clientY, roundDeg) => {
      var {
        disableHour
      } = inner.value;
      isActualInner.value = getInner(clientX, clientY);
      var rad = Math.round(roundDeg / 30) * 30 + 90;
      var index = getHourIndex(rad);
      var anotherHour = isInner.value ? _props__WEBPACK_IMPORTED_MODULE_5__.hoursAmpm[index] : _props__WEBPACK_IMPORTED_MODULE_5__.hours24[index];

      if (!disableHour.includes(anotherHour)) {
        isInner.value = props.format === '24hr' ? getInner(clientX, clientY) : false;
      }

      if (isInner.value !== isActualInner.value) return;
      var newHour = isInner.value || ampm.value === 'pm' ? _props__WEBPACK_IMPORTED_MODULE_5__.hours24[index] : _props__WEBPACK_IMPORTED_MODULE_5__.hoursAmpm[index];
      isDisableHour.value = disableHour.includes(newHour);
      if (isDisableHour.value) return;
      hourRad.value = rad;
      isChosenUsableHour.value = true;
    };

    var setMinuteRad = roundDeg => {
      var {
        disableHour
      } = inner.value;
      var rad = Math.round(roundDeg / 6) * 6 + 90;
      var radToMin = rad / 6 >= 0 ? rad / 6 : rad / 6 + 60;
      var values = {
        time: radToMin,
        format: props.format,
        ampm: ampm.value,
        hour: time.value.hour,
        max: props.max,
        min: props.min,
        disableHour,
        allowedTime: props.allowedTime
      };
      isDisableMinute.value = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getIsDisableMinute)(values);
      if (isDisableMinute.value) return;
      minuteRad.value = rad;
      isChosenUsableMinute.value = true;
    };

    var setSecondRad = roundDeg => {
      var {
        disableHour
      } = inner.value;
      var rad = Math.round(roundDeg / 6) * 6 + 90;
      var radToSec = rad / 6 >= 0 ? rad / 6 : rad / 6 + 60;
      var values = {
        time: radToSec,
        format: props.format,
        ampm: ampm.value,
        hour: time.value.hour,
        minute: (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(time.value.minute),
        max: props.max,
        min: props.min,
        disableHour,
        allowedTime: props.allowedTime
      };
      if (!(0,_utils__WEBPACK_IMPORTED_MODULE_6__.getIsDisableSecond)(values)) secondRad.value = rad;
    };

    var setCenterAndRange = () => {
      var {
        left,
        top,
        width,
        height
      } = container.value.getBoundingClientRect();
      center.x = left + width / 2;
      center.y = top + height / 2;

      if (type.value === 'hour' && props.format === '24hr') {
        var {
          rangeXMin,
          rangeXMax,
          rangeYMin,
          rangeYMax
        } = getRangeSize();
        innerRange.x = [rangeXMin, rangeXMax];
        innerRange.y = [rangeYMin, rangeYMax];
      }
    };

    var moveHand = event => {
      event.preventDefault();
      if (props.readonly) return;
      setCenterAndRange();
      var {
        clientX,
        clientY
      } = event.touches[0];
      var x = clientX - center.x;
      var y = clientY - center.y;
      var roundDeg = Math.round(rad2deg(Math.atan2(y, x)));
      if (type.value === 'hour') setHourRad(clientX, clientY, roundDeg);else if (type.value === 'minute') setMinuteRad(roundDeg);else setSecondRad(roundDeg);
    };

    var end = () => {
      if (props.readonly) return;

      if (type.value === 'hour' && isChosenUsableHour.value) {
        type.value = 'minute';
        return;
      }

      if (type.value === 'minute' && props.useSeconds && isChosenUsableMinute.value) {
        type.value = 'second';
      }
    };

    var changePreventUpdate = () => {
      isPreventNextUpdate.value = false;
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.modelValue, value => {
      if (value) {
        var {
          hour,
          minute,
          second
        } = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getNumberTime)(value);
        var formatHour12 = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])().hour(hour).format('hh');
        var formatHour24 = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])().hour(hour).format('HH');
        var formatMinute = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])().minute(minute).format('mm');
        var formatSecond = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])().second(second).format('ss');
        hourRad.value = (formatHour12 === '12' ? 0 : (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(formatHour12)) * 30;
        minuteRad.value = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(formatMinute) * 6;
        secondRad.value = (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(formatSecond) * 6;
        time.value = getTime(value);

        if (props.format !== '24hr') {
          ampm.value = ("" + hour).padStart(2, '0') === formatHour24 && _props__WEBPACK_IMPORTED_MODULE_5__.hours24.includes(formatHour24) ? 'pm' : 'am';
        }

        isInner.value = props.format === '24hr' && _props__WEBPACK_IMPORTED_MODULE_5__.hours24.includes(formatHour24);
      }
    }, {
      immediate: true
    });
    return {
      n,
      classes,
      getRad,
      time,
      container,
      inner,
      picker,
      isInner,
      type,
      ampm,
      isPreventNextUpdate,
      moveHand,
      checkPanel,
      checkAmpm,
      end,
      update,
      changePreventUpdate
    };
  }

}));

/***/ }),
/* 538 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(404);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(540);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(320);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(321);






var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_3__.createNamespace)('time-picker');

function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('clock'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('clock-hand')),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.handStyle)
  }, null, 6
  /* CLASS, STYLE */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.timeScales, (timeScale, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('clock-item'), [_ctx.isActive(index, false), _ctx.n('clock-item--active')], [_ctx.isDisable(timeScale), _ctx.n('clock-item--disable')])),
      key: timeScale,
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.getStyle(index, timeScale, false))
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(timeScale), 7
    /* TEXT, CLASS, STYLE */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )), _ctx.format === '24hr' && _ctx.type === 'hour' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('clock-inner')),
    ref: "inner"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.hours24, (hour, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('clock-item'), [_ctx.isActive(index, true), _ctx.n('clock-item--active')], [_ctx.isDisable(hour), _ctx.n('clock-item--disable')])),
      key: hour,
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_ctx.getStyle(index, hour, true))
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(hour), 7
    /* TEXT, CLASS, STYLE */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'Clock',
  props: {
    isInner: {
      type: Boolean,
      required: true
    },
    rad: {
      type: Number
    },
    format: {
      type: String,
      default: 'ampm'
    },
    allowedTime: {
      type: Object
    },
    time: {
      type: Object,
      required: true
    },
    useSeconds: {
      type: Boolean,
      default: false
    },
    preventNextUpdate: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'hour'
    },
    ampm: {
      type: String,
      default: 'am'
    },
    color: {
      type: String
    },
    min: {
      type: String
    },
    max: {
      type: String
    }
  },
  emits: ['update', 'change-prevent-update'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;
    var inner = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var disableHour = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var disable24HourIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var handStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
      transform: "rotate(" + (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(props.rad) + "deg)",
      height: props.isInner && props.type === 'hour' ? 'calc(50% - 40px)' : 'calc(50% - 4px)',
      backgroundColor: getHandleColor(),
      borderColor: getHandleColor()
    }));
    var activeItemIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      if (props.rad === undefined) return;
      var value = props.rad / 30;
      return value >= 0 ? value : value + 12;
    });
    var timeScales = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      if (props.type === 'hour') return _props__WEBPACK_IMPORTED_MODULE_4__.hoursAmpm;
      return _props__WEBPACK_IMPORTED_MODULE_4__.minSec;
    });

    var isDisableMinSec = (time, isDisable) => {
      var _time;

      time = (_time = time) != null ? _time : props.type === 'minute' ? props.time.minute : props.time.second;
      var disableMethod = props.type === 'minute' ? _utils__WEBPACK_IMPORTED_MODULE_5__.getIsDisableMinute : _utils__WEBPACK_IMPORTED_MODULE_5__.getIsDisableSecond;
      var values = {
        time: (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(time),
        format: props.format,
        ampm: props.ampm,
        hour: props.time.hour,
        minute: (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(props.time.minute),
        max: props.max,
        min: props.min,
        allowedTime: props.allowedTime,
        disableHour: disableHour.value
      };
      if (isDisable && props.type === 'minute') Reflect.deleteProperty(values, 'minute');
      return disableMethod(values);
    };

    var getHandleColor = () => {
      if (activeItemIndex.value === undefined) return props.color;
      var hour = props.isInner ? _props__WEBPACK_IMPORTED_MODULE_4__.hours24[activeItemIndex.value] : timeScales.value[activeItemIndex.value];

      if (timeScales.value === _props__WEBPACK_IMPORTED_MODULE_4__.minSec) {
        return isDisableMinSec() ? '#bdbdbd' : props.color;
      }

      return isDisable(hour) ? '#bdbdbd' : props.color;
    };

    var isActive = (index, inner) => {
      if (inner) return activeItemIndex.value === index && props.isInner;
      return activeItemIndex.value === index && (!props.isInner || props.type !== 'hour');
    };

    var isDisable = time => {
      if (props.type === 'hour') {
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_5__.notConvert)(props.format, props.ampm)) return disableHour.value.includes(time);
        var timeIndex = _props__WEBPACK_IMPORTED_MODULE_4__.hoursAmpm.findIndex(hour => hour === time);
        return disable24HourIndex.value.includes(timeIndex);
      }

      return isDisableMinSec(time, true);
    };

    var getStyle = (index, hour, inner) => {
      var rad = 2 * Math.PI / 12 * index - Math.PI / 2;
      var left = 50 * (1 + Math.cos(rad));
      var top = 50 * (1 + Math.sin(rad));

      var computedColor = () => {
        if (!isActive(index, inner)) {
          return {
            backgroundColor: undefined,
            color: undefined
          };
        }

        if (isDisable(hour)) {
          return {
            backgroundColor: '#bdbdbd',
            color: '#fff'
          };
        }

        return {
          backgroundColor: props.color,
          color: undefined
        };
      };

      var {
        backgroundColor,
        color
      } = computedColor();
      return {
        left: left + "%",
        top: top + "%",
        backgroundColor,
        color
      };
    };

    var getSize = () => {
      var {
        width,
        height
      } = inner.value.getBoundingClientRect();
      return {
        width,
        height
      };
    };

    var getHour = () => {
      if (activeItemIndex.value === undefined) return undefined;
      var hours = props.ampm === 'am' ? _props__WEBPACK_IMPORTED_MODULE_4__.hoursAmpm : _props__WEBPACK_IMPORTED_MODULE_4__.hours24;
      return hours[activeItemIndex.value].padStart(2, '0');
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)([activeItemIndex, () => props.isInner], (_ref2, _ref3) => {
      var [index, inner] = _ref2;
      var [oldIndex, oldInner] = _ref3;
      var isSame = index === oldIndex && inner === oldInner;
      if (isSame || props.type !== 'hour' || activeItemIndex.value === undefined) return;
      var newHour = inner ? _props__WEBPACK_IMPORTED_MODULE_4__.hours24[activeItemIndex.value] : getHour();
      var second = props.useSeconds ? ":" + props.time.second : '';
      var newTime = newHour + ":" + props.time.minute + second;
      if (!props.preventNextUpdate) emit('update', newTime);
      emit('change-prevent-update');
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.rad, (rad, oldRad) => {
      if (props.type === 'hour' || rad === undefined || oldRad === undefined) return;
      var radToMinSec = rad / 6 >= 0 ? rad / 6 : rad / 6 + 60;
      var oldRadToMinSec = oldRad / 6 >= 0 ? oldRad / 6 : oldRad / 6 + 60;
      if (radToMinSec === oldRadToMinSec) return;
      var newTime;
      var {
        hourStr
      } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.convertHour)(props.format, props.ampm, props.time.hour);

      if (props.type === 'minute') {
        var newMinute = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])().minute(radToMinSec).format('mm');
        var second = props.useSeconds ? ":" + props.time.second : '';
        newTime = hourStr + ":" + newMinute + second;
      }

      if (props.type === 'second') {
        var newSecond = (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])().second(radToMinSec).format('ss');

        var _second = props.useSeconds ? ":" + newSecond : '';

        newTime = hourStr + ":" + props.time.minute + _second;
      }

      emit('update', newTime);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)([() => props.max, () => props.min, () => props.allowedTime], _ref4 => {
      var [max, min, allowedTime] = _ref4;
      disableHour.value = [];

      if (max && !min) {
        var {
          hour: maxHour
        } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getNumberTime)(max);
        var disableAmpmHours = _props__WEBPACK_IMPORTED_MODULE_4__.hoursAmpm.filter(hour => (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(hour) > maxHour);
        var disable24Hours = _props__WEBPACK_IMPORTED_MODULE_4__.hours24.filter(hour => (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(hour) > maxHour);
        disableHour.value = [...disableAmpmHours, ...disable24Hours];
      }

      if (!max && min) {
        var {
          hour: minHour
        } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getNumberTime)(min);

        var _disableAmpmHours = _props__WEBPACK_IMPORTED_MODULE_4__.hoursAmpm.filter(hour => (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(hour) < minHour);

        var _disable24Hours = _props__WEBPACK_IMPORTED_MODULE_4__.hours24.filter(hour => (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(hour) < minHour);

        disableHour.value = [..._disableAmpmHours, ..._disable24Hours];
      }

      if (max && min) {
        var {
          hour: _maxHour
        } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getNumberTime)(max);
        var {
          hour: _minHour
        } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getNumberTime)(min);

        var _disableAmpmHours2 = _props__WEBPACK_IMPORTED_MODULE_4__.hoursAmpm.filter(hour => (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(hour) < _minHour || (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(hour) > _maxHour);

        var _disable24Hours2 = _props__WEBPACK_IMPORTED_MODULE_4__.hours24.filter(hour => (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(hour) < _minHour || (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(hour) > _maxHour);

        disableHour.value = [..._disableAmpmHours2, ..._disable24Hours2];
      }

      if (allowedTime != null && allowedTime.hours) {
        var {
          hours
        } = allowedTime;

        var _disableAmpmHours3 = _props__WEBPACK_IMPORTED_MODULE_4__.hoursAmpm.filter(hour => !hours((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(hour)));

        var _disable24Hours3 = _props__WEBPACK_IMPORTED_MODULE_4__.hours24.filter(hour => !hours((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_2__.toNumber)(hour)));

        disableHour.value = [...new Set([...disableHour.value, ..._disableAmpmHours3, ..._disable24Hours3])];
      }

      disable24HourIndex.value = disableHour.value.map(hour => _props__WEBPACK_IMPORTED_MODULE_4__.hours24.findIndex(hour24 => hour === hour24)).filter(hour => hour >= 0);
    }, {
      immediate: true
    });
    return {
      n,
      classes,
      hours24: _props__WEBPACK_IMPORTED_MODULE_4__.hours24,
      timeScales,
      inner,
      handStyle,
      disableHour,
      isActive,
      isDisable,
      getSize,
      getStyle,
      activeItemIndex
    };
  }

}));

/***/ }),
/* 539 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hoursAmpm": () => (/* binding */ hoursAmpm),
/* harmony export */   "hours24": () => (/* binding */ hours24),
/* harmony export */   "minSec": () => (/* binding */ minSec),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var hoursAmpm = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
var hours24 = ['00', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
var minSec = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

function formatValidator(type) {
  return ['ampm', '24hr'].includes(type);
}

var props = {
  modelValue: {
    type: String
  },
  shadow: {
    type: Boolean,
    default: false
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  format: {
    type: String,
    default: 'ampm',
    validator: formatValidator
  },
  allowedTime: {
    type: Object
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  useSeconds: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  'onUpdate:modelValue': {
    type: Function
  },
  onChange: {
    type: Function
  }
};

/***/ }),
/* 540 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notConvert": () => (/* binding */ notConvert),
/* harmony export */   "convertHour": () => (/* binding */ convertHour),
/* harmony export */   "getNumberTime": () => (/* binding */ getNumberTime),
/* harmony export */   "getIsDisableMinute": () => (/* binding */ getIsDisableMinute),
/* harmony export */   "getIsDisableSecond": () => (/* binding */ getIsDisableSecond)
/* harmony export */ });
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(320);


var notConvert = (format, ampm) => format === '24hr' || ampm === 'am';
var convertHour = (format, ampm, hour) => {
  var index = _props__WEBPACK_IMPORTED_MODULE_1__.hoursAmpm.findIndex(hourAmpm => (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.toNumber)(hourAmpm) === (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.toNumber)(hour));
  var getHour = notConvert(format, ampm) ? hour : _props__WEBPACK_IMPORTED_MODULE_1__.hours24[index];
  return {
    hourStr: getHour,
    hourNum: (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.toNumber)(getHour)
  };
};
var getNumberTime = time => {
  var [hour, minute, second] = time.split(':');
  return {
    hour: (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.toNumber)(hour),
    minute: (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.toNumber)(minute),
    second: (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_0__.toNumber)(second)
  };
};
var getIsDisableMinute = values => {
  var _values$allowedTime, _values$allowedTime2;

  var {
    time,
    format,
    ampm,
    hour,
    max,
    min,
    disableHour
  } = values;
  var {
    hourStr,
    hourNum
  } = convertHour(format, ampm, hour);
  var isBetweenMinMax = false;
  var isAllow = false;
  if (disableHour.includes(hourStr)) return true;

  if (max && !min) {
    var {
      hour: maxHour,
      minute: maxMinute
    } = getNumberTime(max);
    isBetweenMinMax = maxHour === hourNum && time > maxMinute;
  }

  if (!max && min) {
    var {
      hour: minHour,
      minute: minMinute
    } = getNumberTime(min);
    isBetweenMinMax = minHour === hourNum && time < minMinute;
  }

  if (max && min) {
    var {
      hour: _maxHour,
      minute: _maxMinute
    } = getNumberTime(max);
    var {
      hour: _minHour,
      minute: _minMinute
    } = getNumberTime(min);
    isBetweenMinMax = _minHour === hourNum && time < _minMinute || _maxHour === hourNum && time > _maxMinute;
  }

  if ((_values$allowedTime = values.allowedTime) != null && _values$allowedTime.minutes) isAllow = (_values$allowedTime2 = values.allowedTime) == null ? void 0 : _values$allowedTime2.minutes(time);
  return isBetweenMinMax || isAllow;
};
var getIsDisableSecond = values => {
  var _values$allowedTime3, _values$allowedTime4;

  var {
    time,
    format,
    ampm,
    hour,
    minute,
    max,
    min,
    disableHour
  } = values;
  var {
    hourStr,
    hourNum
  } = convertHour(format, ampm, hour);
  var isBetweenMinMax = false;
  var isAllow = false;
  if (disableHour.includes(hourStr)) return true;

  if (max && !min) {
    var {
      hour: maxHour,
      minute: maxMinute,
      second: maxSecond
    } = getNumberTime(max);
    isBetweenMinMax = maxHour === hourNum && maxMinute < minute || maxMinute === minute && time > maxSecond;
  }

  if (!max && min) {
    var {
      hour: minHour,
      minute: minMinute,
      second: minSecond
    } = getNumberTime(min);
    isBetweenMinMax = minHour === hourNum && minMinute > minute || minMinute === minute && time > minSecond;
  }

  if (max && min) {
    var {
      hour: _maxHour2,
      minute: _maxMinute2,
      second: _maxSecond
    } = getNumberTime(max);
    var {
      hour: _minHour2,
      minute: _minMinute2,
      second: _minSecond
    } = getNumberTime(min);
    isBetweenMinMax = _maxHour2 === hourNum && _maxMinute2 < minute || _minHour2 === hourNum && _minMinute2 > minute || _maxHour2 === hourNum && _maxMinute2 === minute && time > _maxSecond || _minHour2 === hourNum && _minMinute2 === minute && time < _minSecond;
  }

  if ((_values$allowedTime3 = values.allowedTime) != null && _values$allowedTime3.seconds) isAllow = (_values$allowedTime4 = values.allowedTime) == null ? void 0 : _values$allowedTime4.seconds(time);
  return isBetweenMinMax || isAllow;
};

/***/ }),
/* 541 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_UploaderComponent": () => (/* binding */ _UploaderComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Uploader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(542);


_Uploader_js__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (app) {
  app.component(_Uploader_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Uploader_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

var _UploaderComponent = _Uploader_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Uploader_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 542 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(369);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(331);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(326);
/* harmony import */ var _image_preview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(428);
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(323);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(543);
/* harmony import */ var _varlet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(337);
/* harmony import */ var _utils_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
/* harmony import */ var _form_provide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(375);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }












var {
  n,
  classes
} = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.createNamespace)('uploader');
var fid = 0;


var _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(""), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);

var _hoisted_1 = ["onClick"];
var _hoisted_2 = ["onClick"];
var _hoisted_3 = ["src", "alt"];
var _hoisted_4 = ["multiple", "accept", "capture", "disabled"];
var _hoisted_5 = ["src"];
function render(_ctx, _cache) {
  var _component_var_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-icon");

  var _component_var_form_details = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-form-details");

  var _component_var_popup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-popup");

  var _directive_ripple = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("ripple");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n(), 'var--box'))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('file-list'))
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.files, f => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('file'), 'var-elevation--2', [f.state === 'loading', _ctx.n('--loading')])),
      key: f.id,
      onClick: $event => _ctx.preview(f)
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('file-name'))
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(f.name || f.url), 3
    /* TEXT, CLASS */
    ), _ctx.removable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 0,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('file-close')),
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => _ctx.handleRemove(f), ["stop"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('file-close-icon')),
      "var-uploader-cover": "",
      name: "delete"
    }, null, 8
    /* PROPS */
    , ["class"])], 10
    /* CLASS, PROPS */
    , _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), f.cover ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
      key: 1,
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('file-cover')),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        objectFit: f.fit
      }),
      src: f.cover,
      alt: f.name
    }, null, 14
    /* CLASS, STYLE, PROPS */
    , _hoisted_3)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes(_ctx.n('file-indicator'), [f.state === 'success', _ctx.n('--success')], [f.state === 'error', _ctx.n('--error')]))
    }, null, 2
    /* CLASS */
    )], 10
    /* CLASS, PROPS */
    , _hoisted_1)), [[_directive_ripple, {
      disabled: _ctx.disabled || _ctx.formDisabled || _ctx.readonly || _ctx.formReadonly || !_ctx.ripple
    }]]);
  }), 128
  /* KEYED_FRAGMENT */
  )), !_ctx.maxlength || _ctx.modelValue.length < _ctx.maxlength ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classes([!_ctx.$slots.default, _ctx.n('action') + " var-elevation--2"], [_ctx.disabled || _ctx.formDisabled, _ctx.n('--disabled')])),
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.triggerAction && _ctx.triggerAction(...arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    ref: "input",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('action-input')),
    type: "file",
    multiple: _ctx.multiple,
    accept: _ctx.accept,
    capture: _ctx.capture,
    disabled: _ctx.disabled || _ctx.formDisabled || _ctx.readonly || _ctx.formReadonly,
    onChange: _cache[0] || (_cache[0] = function () {
      return _ctx.handleChange && _ctx.handleChange(...arguments);
    })
  }, null, 42
  /* CLASS, PROPS, HYDRATE_EVENTS */
  , _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_icon, {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('action-icon')),
    "var-uploader-cover": "",
    name: "plus"
  }, null, 8
  /* PROPS */
  , ["class"])])], 2
  /* CLASS */
  )), [[_directive_ripple, {
    disabled: _ctx.disabled || _ctx.formDisabled || _ctx.readonly || _ctx.formReadonly || !_ctx.ripple || _ctx.$slots.default
  }]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_form_details, {
    "error-message": _ctx.errorMessage,
    "maxlength-text": _ctx.maxlengthText
  }, null, 8
  /* PROPS */
  , ["error-message", "maxlength-text"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_popup, {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('preview')),
    "var-uploader-cover": "",
    position: "center",
    show: _ctx.showPreview,
    "onUpdate:show": _cache[2] || (_cache[2] = $event => _ctx.showPreview = $event),
    onClosed: _cache[3] || (_cache[3] = $event => _ctx.currentPreview = null)
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => {
      var _ctx$currentPreview, _ctx$currentPreview2;

      return [_ctx.currentPreview && _ctx.isHTMLSupportVideo((_ctx$currentPreview = _ctx.currentPreview) == null ? void 0 : _ctx$currentPreview.url) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("video", {
        key: 0,
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.n('preview-video')),
        playsinline: "true",
        "webkit-playsinline": "true",
        "x5-playsinline": "true",
        "x5-video-player-type": "h5",
        "x5-video-player-fullscreen": "false",
        controls: "",
        src: (_ctx$currentPreview2 = _ctx.currentPreview) == null ? void 0 : _ctx$currentPreview2.url
      }, null, 10
      /* CLASS, PROPS */
      , _hoisted_5)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class", "show"])], 2
  /* CLASS */
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  render,
  name: 'VarUploader',
  directives: {
    Ripple: _ripple__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  components: {
    VarIcon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
    VarPopup: _popup__WEBPACK_IMPORTED_MODULE_5__["default"],
    VarFormDetails: _form_details__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: _props__WEBPACK_IMPORTED_MODULE_7__.props,

  setup(props) {
    var input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var showPreview = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var currentPreview = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var maxlengthText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var {
        maxlength,
        modelValue: {
          length
        }
      } = props;
      return (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isNumber)(maxlength) ? length + " / " + maxlength : '';
    });
    var {
      form,
      bindForm
    } = (0,_form_provide__WEBPACK_IMPORTED_MODULE_8__.useForm)();
    var {
      errorMessage,
      validateWithTrigger: vt,
      validate: v,
      // expose
      resetValidation
    } = (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.useValidation)();
    var files = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var {
        modelValue,
        hideList
      } = props;

      if (hideList) {
        return [];
      }

      return modelValue;
    });

    var triggerAction = () => {
      input.value.click();
    };

    var preview = varFile => {
      var {
        disabled,
        readonly,
        previewed
      } = props;

      if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly || !previewed) {
        return;
      }

      var {
        url
      } = varFile;

      if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(url) && (0,_utils_shared__WEBPACK_IMPORTED_MODULE_9__.isHTMLSupportImage)(url)) {
        (0,_image_preview__WEBPACK_IMPORTED_MODULE_10__["default"])(url);
        return;
      }

      if ((0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(url) && (0,_utils_shared__WEBPACK_IMPORTED_MODULE_9__.isHTMLSupportVideo)(url)) {
        currentPreview.value = varFile;
        showPreview.value = true;
      }
    };

    var createVarFile = file => {
      return {
        id: fid++,
        url: '',
        cover: '',
        name: file.name,
        file
      };
    };

    var getFiles = event => {
      var el = event.target;
      var {
        files: fileList
      } = el;
      return Array.from(fileList);
    };

    var resolver = varFile => {
      return new Promise(resolve => {
        var fileReader = new FileReader();

        fileReader.onload = () => {
          var base64 = fileReader.result;
          varFile.file.type.startsWith('image') && (varFile.cover = base64);
          varFile.url = base64;
          resolve(varFile);
        };

        fileReader.readAsDataURL(varFile.file);
      });
    };

    var getResolvers = varFiles => varFiles.map(resolver);

    var getBeforeReaders = varFiles => {
      var {
        onBeforeRead
      } = props;
      return varFiles.map(varFile => {
        return new Promise(resolve => {
          var valid = onBeforeRead ? onBeforeRead((0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(varFile)) : true;
          Promise.resolve(valid).then(valid => resolve({
            valid,
            varFile
          }));
        });
      });
    };

    var handleChange = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (event) {
        var {
          maxsize,
          maxlength,
          modelValue,
          onOversize,
          onAfterRead,
          readonly,
          disabled
        } = props;

        if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly) {
          return;
        }

        var getValidSizeVarFile = varFiles => {
          return varFiles.filter(varFile => {
            if (varFile.file.size > (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(maxsize)) {
              (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onOversize, (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(varFile));
              return false;
            }

            return true;
          });
        };

        var getValidLengthVarFiles = varFiles => {
          var limit = Math.min(varFiles.length, (0,_varlet_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(maxlength) - modelValue.length);
          return varFiles.slice(0, limit);
        }; // limit


        var files = getFiles(event);
        var varFiles = files.map(createVarFile);
        varFiles = maxsize != null ? getValidSizeVarFile(varFiles) : varFiles;
        varFiles = maxlength != null ? getValidLengthVarFiles(varFiles) : varFiles; // pre resolve

        var resolvedVarFiles = yield Promise.all(getResolvers(varFiles));
        var validationVarFiles = yield Promise.all(getBeforeReaders(resolvedVarFiles));
        var validVarFiles = validationVarFiles.filter(_ref2 => {
          var {
            valid
          } = _ref2;
          return valid;
        }).map(_ref3 => {
          var {
            varFile
          } = _ref3;
          return varFile;
        });
        (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], [...modelValue, ...validVarFiles]);
        event.target.value = '';
        validVarFiles.forEach(varFile => (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onAfterRead, (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(varFile)));
      });

      return function handleChange(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    var handleRemove = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(function* (removedVarFile) {
        var {
          disabled,
          readonly,
          modelValue,
          onBeforeRemove,
          onRemove
        } = props;

        if (form != null && form.disabled.value || form != null && form.readonly.value || disabled || readonly) {
          return;
        }

        if (onBeforeRemove && !(yield onBeforeRemove(removedVarFile))) {
          return;
        }

        var expectedFiles = modelValue.filter(varFile => varFile !== removedVarFile);
        (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(onRemove, removedVarFile);
        validateWithTrigger('onRemove');
        (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], expectedFiles);
      });

      return function handleRemove(_x2) {
        return _ref4.apply(this, arguments);
      };
    }(); // expose


    var getSuccess = () => props.modelValue.filter(varFile => varFile.state === 'success'); // expose


    var getError = () => props.modelValue.filter(varFile => varFile.state === 'error'); // expose


    var getLoading = () => props.modelValue.filter(varFile => varFile.state === 'loading');

    var varFileUtils = {
      getSuccess,
      getError,
      getLoading
    };

    var validateWithTrigger = trigger => {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        var {
          validateTrigger,
          rules,
          modelValue
        } = props;
        vt(validateTrigger, trigger, rules, modelValue, varFileUtils);
      });
    };

    var callReset = false; // expose

    var validate = () => v(props.rules, props.modelValue, varFileUtils); // expose


    var reset = () => {
      callReset = true;
      (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(props['onUpdate:modelValue'], []);
      resetValidation();
    };

    var uploaderProvider = {
      validate,
      resetValidation,
      reset
    };
    (0,_utils_components__WEBPACK_IMPORTED_MODULE_2__.call)(bindForm, uploaderProvider);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props.modelValue, () => {
      !callReset && validateWithTrigger('onChange');
      callReset = false;
    }, {
      deep: true
    });
    return {
      n,
      classes,
      input,
      files,
      showPreview,
      currentPreview,
      errorMessage,
      maxlengthText,
      isHTMLSupportVideo: _utils_shared__WEBPACK_IMPORTED_MODULE_9__.isHTMLSupportVideo,
      isHTMLSupportImage: _utils_shared__WEBPACK_IMPORTED_MODULE_9__.isHTMLSupportImage,
      formDisabled: form == null ? void 0 : form.disabled,
      formReadonly: form == null ? void 0 : form.readonly,
      preview,
      triggerAction,
      handleChange,
      handleRemove,
      getSuccess,
      getError,
      getLoading,
      validate,
      resetValidation,
      reset
    };
  }

}));

/***/ }),
/* 543 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
var props = {
  modelValue: {
    type: Array,
    default: () => []
  },
  accept: {
    type: String,
    default: 'image/*'
  },
  capture: {
    type: [String, Boolean],
    default: undefined
  },
  multiple: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  removable: {
    type: Boolean,
    default: true
  },
  maxlength: {
    type: [Number, String]
  },
  maxsize: {
    type: [Number, String]
  },
  previewed: {
    type: Boolean,
    default: true
  },
  ripple: {
    type: Boolean,
    default: true
  },
  validateTrigger: {
    type: Array,
    default: () => ['onChange', 'onRemove']
  },
  rules: {
    type: Array
  },
  hideList: {
    type: Boolean,
    default: false
  },
  onBeforeRead: {
    type: Function
  },
  onAfterRead: {
    type: Function
  },
  onBeforeRemove: {
    type: Function
  },
  onRemove: {
    type: Function
  },
  onOversize: {
    type: Function
  },
  'onUpdate:modelValue': {
    type: Function
  }
};

/***/ })
])]);