import { AccountCard, BellContainer, OrdersCard, Wrapper } from "./style";
import { GoBellFill } from "react-icons/go";
import { MdAccountCircle } from "react-icons/md";

export const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const admin = user?.is_superuser;
  const worker = user?.is_worker;
  const stock = user?.is_stock;
  return (
    <Wrapper>
      {admin && (
        <BellContainer>
          <GoBellFill />
          <div className="new-message">20</div>
        </BellContainer>
      )}

      {(worker || stock) && (
        <OrdersCard>
          buyurtmalar
          <div className="order-count">10ta</div>
        </OrdersCard>
      )}
      {(worker || stock) && (
        <OrdersCard>
          maoshi
          <div className="order-count">10ta</div>
        </OrdersCard>
      )}
      <AccountCard>
        <div className="user-name">{user?.firstname}</div>
        <MdAccountCircle />
      </AccountCard>
    </Wrapper>
  );
};
