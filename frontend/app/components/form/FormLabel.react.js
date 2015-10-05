import React, { Component, PropTypes } from "react";
import cx from "classnames";


export default class FormLabel extends Component {

    render() {
        let { fieldName, formError, message, offset, title } = this.props;

        if (!message) {
            message = (formError && formError.data.errors && fieldName in formError.data.errors) ? formError.data.errors[fieldName] : undefined;
        }

        return (
            <label className={cx("Form-label", {"Form-offset": offset})}>{title}: { message !== undefined ? <span>{message}</span> : null }</label>
        );
    }
}

FormLabel.defaultProps = {
    offset: true
};

FormLabel.propTypes = {
    fieldName: PropTypes.string.isRequired,
    formError: PropTypes.object,
    message: PropTypes.string,
};