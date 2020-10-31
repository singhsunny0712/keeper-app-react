import React from "react";

const time=new Date();
const year=time.getFullYear();

function Footer(){
    return (
        <footer>
           <p>Copy right © {year}</p>
        </footer>
    );
}

export default Footer;