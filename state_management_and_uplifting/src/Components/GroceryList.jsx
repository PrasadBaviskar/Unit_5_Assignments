export const GroceryList = ({ title, status, id, removeItem }) => {
  return (
    <div className="ListItm">
      <h4> {title} </h4>
      <button className="rmvbtn" onClick={() => {removeItem(id);}}> Remove </button>
    </div>
  );
};
