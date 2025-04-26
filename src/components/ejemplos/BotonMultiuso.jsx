const BotonMultiuso = ({texto, estilo, manejadorDelOnclick, disabled}) => {
    // console.log(props)
    // const {texto, estilo, manejadorDelOnclick, disabled}= props
    return(
        <button className={estilo} onClick={manejadorDelOnclick} disabled={disabled}>
            {texto}
        </button>
    )
}

export default BotonMultiuso