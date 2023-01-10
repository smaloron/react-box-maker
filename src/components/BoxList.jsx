
function Box (props) {

    const style = {
        width: props.settings.width + 'px',
        height: props.settings.height + 'px',
        backgroundColor: props.settings.color,
        margin: '15px',
        border: 'solid 1px black',
        textAlign: 'center'
    }



    return (
        <div style={style}>
            {props.id}
            <button onClick={() => {
                props.deleteBox(props.id)
            }}>
                Supprimer
            </button>
        </div>
    );
}

export default function BoxList (props) {

    function getBoxes () {
        return props.boxes.map((item, index) => {

            return <Box
                settings={item}
                key={index}
                id={index}
                deleteBox={props.delete} />
        })
    }

    const boxStyle = {
        display: 'flex',
        flexWrap: 'wrap'
    }

    return (
        <div style={boxStyle}>
            {getBoxes()}
        </div>
    );
}

