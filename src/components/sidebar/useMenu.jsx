import { ReactComponent as IconOrders } from "@/assets/orders.svg";
import { ReactComponent as IconLogout } from "@/assets/logout.svg";
import { ReactComponent as IconInventory } from "@/assets/inventory.svg";

export const useMenu = () => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const warehouseItems = [
    getItem("Events", "admin/events", <IconInventory />),
    getItem("Reservation", "admin/reservations", <IconOrders />),
    getItem("Exit", "logout", <IconLogout />),
  ];

  return {
    items: warehouseItems,
  };
};
