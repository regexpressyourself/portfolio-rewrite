let styles = {
    HeaderContainerStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        textAlign: 'center',
        height: '100vh',
        /* backgroundImage: 'url("../public/pineblur.jpg")',*/
        backgroundColor: "#e74c3c",
        backgroundSize: 'cover'
    },
    HeaderInnerStyle: {
    },
    ChevronStyle: {
        position: 'absolute',
        bottom: '20px',
        animation: 'bounce 3s infinite'
    },
    Center: {
        textAlign: 'center',
    },
    ProjectRowContainer: {
        margin: '120px 0px'
    },
    ProjectRowItem: {
        display: 'inline-block',
        verticalAlign: 'middle',
        float: 'none'
    },
    HeaderIcon: {
        fontSize: '400%',
        marginTop: '-5vh'
    },
    StaticWidth: {
        display: 'inline-block',
        textAlign: 'left'
    }
}

module.exports = styles;
