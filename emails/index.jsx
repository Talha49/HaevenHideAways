import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const EmailTemplate = ({ userFirstname }) => {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };

  const containerStyle = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };

  const logoStyle = {
    margin: "0 auto",
  };

  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "26px",
  };

  const btnContainerStyle = {
    textAlign: "center",
  };

  const buttonStyle = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    padding: "12px",
  };

  const hrStyle = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };

  const footerStyle = {
    color: "#8898aa",
    fontSize: "12px",
  };

  return (
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Body style={main}>
        <Container style={containerStyle}>
          <Img
            src={`${baseUrl}/static/koala-logo.png`}
            width="170"
            height="50"
            alt="Koala"
            style={logoStyle}
          />
          <Text style={paragraphStyle}>Hi {userFirstname},</Text>
          <Text style={paragraphStyle}>
            Welcome to Koala, the sales intelligence platform that helps you
            uncover qualified leads and close deals faster.
          </Text>
          <Section style={btnContainerStyle}>
            <Button style={buttonStyle} href="https://getkoala.com">
              Get started
            </Button>
          </Section>
          <Text style={paragraphStyle}>
            Best,
            <br />
            The Koala team
          </Text>
          <Hr style={hrStyle} />
          <Text style={footerStyle}>
            470 Noor Ave STE B #1148, South San Francisco, CA 94080
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
