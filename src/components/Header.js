
function Header (props) {
return (
    <header style={{ color:'red', height:'40px', backgroundColor:'yellow', padding:'70px' }}> 
    {props.title}
    </header>    
);

}

export default Header;