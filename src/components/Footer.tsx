import React from "react";
import { VStack, HStack, Text } from "rsuite";

const Footer = () => (
  <VStack
    alignItems="center"
    spacing={16}
    style={{
      marginTop: 60,
      padding: "40px 20px",
      width: "100%",
      background: "#eef1ff",
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
    }}
  >
    <HStack
      spacing={50}
      justifyContent="center"
      wrap
      style={{
        width: "100%",
        maxWidth: 700,
      }}
    >
      <VStack spacing={8} alignItems="flex-start" style={{ width: 300 }}>
        <Text size={18} weight="bold">
          About Us
        </Text>
        <Text size={13} style={{ lineHeight: 1.45 }}>
          We are a curated innerwear brand delivering premium, soft and
          comfortable products. Every piece is selected with quality in mind so
          you feel your best every day.
        </Text>
      </VStack>
      <VStack spacing={8} alignItems="flex-start" style={{ width: 300 }}>
        <Text size={18} weight="bold">
          Contact Us
        </Text>
        <Text size={13} style={{ lineHeight: 1.45 }}>
          📩 Email: support@company.com <br />
          📞 Phone: +91 98765 43210 <br />
          🕒 Mon–Sat: 10 AM – 6 PM
        </Text>
      </VStack>
    </HStack>
    <Text size={12} color="#333" style={{ marginTop: 12 }}>
      © {new Date().getFullYear()} COMPANY — All Rights Reserved
    </Text>
  </VStack>
);

export default Footer;
