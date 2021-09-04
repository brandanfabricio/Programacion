import Link from 'next/link';
const navbar = () => {
    return (  
        <nab>
        <ul>
            <li>
                <Link href="/"> 
                    <a>Home</a>
                </Link>
            </li>

            <li>
            <Link href="/about">
                <a> About</a>
            </Link>
           
            </li>
            <li> 
                <Link href="/trabajo">
                    <a> Trabajo</a>
                </Link>
            </li>

        </ul>
        </nab>
    );
}
 
export default navbar;