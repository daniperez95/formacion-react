import Header from "../header/Header"

const BaseLayout = ({children}) => {
    return (
        <>
        <Header />
        {children}
        </>
    )
} 

export default BaseLayout;