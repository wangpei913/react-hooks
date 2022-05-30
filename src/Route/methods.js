const onRouteBefore = ({ pathname, meta }) => {
    const isLogin = null
    if (meta.title !== undefined) {
        document.title = meta.title
    }
    if (meta.needLogin) {
        if (!isLogin) {
            return '/login'
        }
    }
}

export default onRouteBefore