import Button from './Button'
const Header = ({title}) => {

    const handleOnClick=()=>{
        console.log("Add button clicked");
      }

 return (
    <div className="header">
    <h1>{title}</h1>
    <Button onClick={handleOnClick} />
    </div>
 )
}

export default Header