const { useEffect } = require("react")

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Creative Agency`;
    }, [title])
};

export default useTitle;