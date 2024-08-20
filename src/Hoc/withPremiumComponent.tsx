import { CardProps } from "../types/CartItemsType";

const withPremiumComponent = (
  WrappedComponent: React.ComponentType<CardProps>
) => {
  return function (props: CardProps) {
    return (
      <>
        {props.price > 300 ? (
          <>
            <div className="relative">
              <p className="absolute  text-red-500">Premium</p>
              <WrappedComponent {...props} />
            </div>
          </>
        ) : (
          <WrappedComponent {...props} />
        )}
      </>
    );
  };
};

export default withPremiumComponent;
