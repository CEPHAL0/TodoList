import Button from "./Button"

// eslint-disable-next-line

const Header = ({onAdd, showAdd}) => {
    
    return (
        <header className="header">

            <h1>Task Tracker</h1>
            <Button color={showAdd ? 'red':'green'} 
            text={showAdd?'Close':'Add'} 
            onClick={onAdd}>
                
            </Button>
        </header>
    )
}

export default Header