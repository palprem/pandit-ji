

import * as motion from "motion/react-client"

export default function CardHoverPopupAnimation({children}) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5 }}
            style={box}
        >{children}</motion.div>
    )
}

/**
 * ==============   Styles   ================
 */

const box = {
    display: "inline-block",
    borderRadius: 5,
}
