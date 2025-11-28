import { PageProps } from "$fresh/server.ts";
import Head from "../components/Layouts/Head.tsx";
import Footer from "../components/Layouts/Footer.tsx";

const Layout = ({Component}: PageProps) => {
    return(
        <div class="layout">
            <Head/>
            <br/>
            <br/>
            <div class="content">
                <Component/>
            </div>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>
    );
}

export default Layout;