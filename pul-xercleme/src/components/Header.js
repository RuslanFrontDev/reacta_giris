import React from "react";

const Header = ({ total, money }) => {
  return (
    <>
    <div>
      {total > 0 && (money-total) !==0 && (
        <div>xerclenecek {money-total}$ pulunuz qaldi</div>
      )}
      {total === 0 && (
        <div>xerclemek ucun {money}$ pulunuz var</div>
      )}
      {(money-total) ===0 && (
        <div>pulsuzsan</div>
      )}
    </div>
    </>
  )
};

export default Header;
