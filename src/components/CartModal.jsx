import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import { verify } from "../api/users/verify";
import { useStore } from "../store";
import CartContent from "./CartContent";
import CheckoutForm from "./CheckoutForm";
import SignModal from "./SignModal";
import { useMutation } from "@tanstack/react-query";

const CartModal = () => {
  const { toggleCart, cartOpen } = useStore();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const mutation = useMutation({
    mutationFn: verify,
    onSuccess: (data) => {
      console.log(data);
      setIsSignedIn(data);
    },
  });

  useEffect(() => {
    mutation.mutate();
  }, [isCheckoutOpen]);

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      onClick={() => {
        document.body.style.overflow = "auto";
        toggleCart(false);
      }}
      style={{ pointerEvents: cartOpen ? "auto" : "none" }}
      className="fixed top-0 left-0 w-full h-full bg-custom bg-opacity-50 grid place-items-center z-30"
    >
      {isCheckoutOpen && isSignedIn && (
        <CheckoutForm
          setIsCheckoutOpen={setIsCheckoutOpen}
          onClick={(e) => e.stopPropagation()}
          className="w-[90%] md:w-[40%] md:h-[90%] bg-white rounded-lg flex flex-col p-5 z-50 relative"
        />
      )}
      {isCheckoutOpen && !isSignedIn && (
        <SignModal setIsCheckoutOpen={setIsCheckoutOpen} />
      )}
      {!isCheckoutOpen && <CartContent setIsCheckoutOpen={setIsCheckoutOpen} />}

      {/* {isCheckoutOpen ? isSignedIn ? (
        <CheckoutForm
          setIsCheckoutOpen={setIsCheckoutOpen}
          onClick={(e) => e.stopPropagation()}
          className="w-[90%] md:w-[40%] md:h-[90%] bg-white rounded-lg flex flex-col p-5 z-50 relative"
        /> ) : (
        <SignModal setIsCheckoutOpen={setIsCheckoutOpen} />
      ) : (
        <CartContent setIsCheckoutOpen={setIsCheckoutOpen} />
      )} */}
    </motion.div>
  );
};

export default CartModal;
