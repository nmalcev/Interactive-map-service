import React, {useCallback} from 'react';
import './InstaInput.scss';

const instaInput = props => {
    const {onInput, placeholder, ...other} = props;
    const onInputHandler = useCallback(e => {
        let val = e.target.value;
        e.target.classList[val ? 'add' : 'remove']('__not-empty');
        if (onInput) onInput(val);
    }, [onInput]);

    return (
        <label className="InstaInput">
            <input type="text" className="InstaInput__field" onInput={onInputHandler} {...other}/>
            <span className="InstaInput__placeholder">{placeholder}</span>
        </label>
    );
};

export default instaInput;