const breakPoints = {
    mobile: 1060,
}

export default {
    mobile: `(max-width: ${breakPoints.mobile}px)`,
    isMobile,
}

function isMobile () {
    return window.innerWidth < breakPoints.mobile
}