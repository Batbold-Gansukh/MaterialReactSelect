var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import Select, { Option } from '@material/react-select';
var TestTypeCheck = /** @class */ (function (_super) {
    __extends(TestTypeCheck, _super);
    function TestTypeCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestTypeCheck.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(Select, null,
                React.createElement(Option, { value: -1, disabled: true }),
                [1, 2, 3, 4, 5, 6].map(function (val) { return React.createElement(Option, { value: val, key: val }, val); })),
            React.createElement(Select, null,
                React.createElement(Option, { value: -1, disabled: true }),
                [1, 2, 3, 4, 5, 6].map(function (val) { return React.createElement(Option, { value: val, key: val }, val); })),
            React.createElement(Select, null,
                React.createElement(Option, { value: -1, disabled: true }),
                Array.from(Array(10).keys()).map(function (val) { return React.createElement(Option, { value: val, key: val }, val); })),
            React.createElement(Select, null,
                React.createElement(Option, { value: -1, disabled: true }),
                Array.from(Array(10).keys()).map(function (val) { return React.createElement(Option, { value: val, key: val }, val); })),
            React.createElement(Select, null,
                Array(10).fill({}).map(function (_, index) {
                    return React.createElement(Option, { value: index }, index);
                }),
                1 === 1 ? React.createElement(Option, { value: '-1' }, "someValue") : null));
    };
    return TestTypeCheck;
}(React.Component));
export { TestTypeCheck };
//# sourceMappingURL=index.js.map