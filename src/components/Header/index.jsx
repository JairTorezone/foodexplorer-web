import { Container, Menu, Logo, Search, Cart, Logout } from "./styles";
import { IoMenuOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { PiReceiptLight } from "react-icons/pi";
import { MdOutlineLogout } from "react-icons/md";

import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <Menu>
        <IoMenuOutline />
      </Menu>
      <Logo>
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 39 44"
            fill="none"
          >
            <path
              d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z"
              fill="#065E7C"
            />
          </svg>
          <h1>food explorer</h1>
        </a>
        <span>admin</span>
      </Logo>
      <Search>
        <Input icon={IoSearchOutline} />
      </Search>
      <Cart>
        <PiReceiptLight />
        <div className="item">
          <span>Pedidos (0)</span>
          <span>0</span>
        </div>
      </Cart>
      <Logout>
        <MdOutlineLogout />
      </Logout>
    </Container>
  );
}
