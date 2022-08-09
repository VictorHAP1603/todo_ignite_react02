import { Container } from "./style"

import LogoImg from '../../assets/images/logo.svg'

export const Header = () => {
    return (
        <Container>
            <img src={LogoImg} alt="Logo Todo Ignite" />
        </Container>
    )
}