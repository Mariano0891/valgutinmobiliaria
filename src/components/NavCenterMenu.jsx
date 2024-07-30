import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const NavCenterMenu = () => {
  return (
    <div className="flex justify-center text-base">
      <FlyoutLink href="#" FlyoutContent={salesContent}>
        VENTAS
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={rentContent}>
        ALQUILERES
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={tempContent}>
        TEMPORARIOS
      </FlyoutLink>
      <FlyoutLink href="#" FlyoutContent={contactContent}>
        CONTACTO
      </FlyoutLink>
    </div>
  )
}

const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);
  
    const showFlyout = FlyoutContent && open;
  
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative"
      >
        <a href={href} className="relative text-two mx-4">
          {children}
          <span
            style={{
              transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-two mx-1 transition-transform duration-300 ease-out"
          />
        </a>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ translateX: "-50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 top-12 bg-one text-two rounded-lg"
            >
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-one" />
              <FlyoutContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  const salesContent = () => {
    return (
      <div className="min-w-[200px] bg-one p-2 rounded-xl shadow-xl text-center text-base">
        <div className="mb-3 space-y-3">
          <a href="#" className="block hover:underline">
            CASAS
          </a>
          <a href="#" className="block hover:underline">
            DEPARTAMENTOS
          </a>
          <a href="#" className="block hover:underline">
            LOCALES
          </a>
          <a href="#" className="block hover:underline">
            GALPONES
          </a>
          <a href="#" className="block hover:underline">
            TERRENOS
          </a>
        </div>
      </div>
    );
  };

  const rentContent = () => {
    return (
      <div className="min-w-[200px] bg-one p-2 rounded-xl shadow-xl text-center text-base">
        <div className="mb-3 space-y-3">
          <a href="#" className="block hover:underline">
            CASAS
          </a>
          <a href="#" className="block hover:underline">
            DEPARTAMENTOS
          </a>
          <a href="#" className="block hover:underline">
            LOCALES
          </a>
          <a href="#" className="block hover:underline">
            GALPONES
          </a>
        </div>
      </div>
    );
  };
  
  const tempContent = () => {
    return (
      <div className="min-w-[200px] bg-one p-2 rounded-xl shadow-xl text-center text-base">
        <div className="mb-3 space-y-3">
          <a href="#" className="block hover:underline">
            CASAS
          </a>
          <a href="#" className="block hover:underline">
            DEPARTAMENTOS
          </a>
        </div>
      </div>
    );
  };

  const contactContent = () => {
    return (
      <div></div>
    );
  };
  