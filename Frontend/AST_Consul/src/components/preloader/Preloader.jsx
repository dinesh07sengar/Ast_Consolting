import { motion } from "framer-motion";

import { useColorModeValue } from "@chakra-ui/react";

export default function PreLoader() {
  return (
    <div
      style={{
        height: "90vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <motion.img
        style={{
          width: "5%",
          borderRadius: "100%",
          boxShadow: useColorModeValue("0px 0px 13px #b3b3b3ad", "0px 0px 13px #11151d"),
          padding: "10px"
        }}
        animate={{ rotate: 1000 }}
        transition={{ duration: 3, repeat: Infinity }}
        src={"https://rb.gy/cz0fk"}
      />
      <p
        style={{
          fontWeight: "bold",
          color: useColorModeValue("#4A5568", "white"),
          marginTop: "10px",
          fontSize: "20px"
        }}
      >
        Follow your ❤️
      </p>
    </div>
  );
}