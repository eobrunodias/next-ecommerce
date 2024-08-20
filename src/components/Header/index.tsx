import Link from "next/link";
import { HeaderContainer, HeaderWrapper } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link href="/">Home</Link>
        <nav>
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
        </nav>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
