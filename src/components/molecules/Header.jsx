import Button from "../atoms/Button";

const Header = () => {
    return <>
        <Button isColorRed={true}>
            <p>Botón 1</p>
        </Button>
        <Button>
            <p>Botón 2</p>
        </Button>
    </>
}

export default Header;