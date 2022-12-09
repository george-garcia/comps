import className from 'classnames';

const finalClassName = className('px-3', 'py-1.5', 'bg-blue-500');
console.log(finalClassName);

function Button({
                children,
                primary,
                secondary,
                success,
                warning,
                danger,
                outline,
                rounded,
                ...rest
}) {

    const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-300 text-white' : primary,
        'border-gray-500 bg-gray-300 text-white' : secondary,
        'border-green-500 bg-green-300 text-white' : success,
        'border-orange-500 bg-orange-300 text-white' : warning,
        'border-red-500 bg-red-300 text-white' : danger,
        'rounded-full' : rounded,
        'bg-white' : outline,
        'text-blue-500' : outline && primary,
        'text-gray-500' : outline && secondary,
        'text-green-500' : outline && success,
        'text-orange-500' : outline && warning,
        'text-red-500' : outline && danger,


    });

    return <button {...rest} className={classes}>{children}</button>
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary)
        + Number(!!secondary)
        + Number(!!success)
        + Number(!!warning)
        + Number(!!danger);

        if(count > 1)
            return new Error('Only one of primary, secondary, success, warning, danger, can be true!');
    },
};

export default Button;