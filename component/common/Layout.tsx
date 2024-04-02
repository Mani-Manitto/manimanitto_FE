import "@/styles/globals.scss";
import {useEffect} from "react";

interface IProps {
    children: React.ReactNode;
}

const Layout = ({children} : IProps) => {

    useEffect(() => {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    })
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}

export default Layout;