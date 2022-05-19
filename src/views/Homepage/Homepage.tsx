import { useEffect, useState } from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import {
  Content,
  MiddleSection,
  Title,
  SubTitle,
  Submit,
  Login,
  Background,
} from "./Homepage.style";
import Footer from "../../components/layout/Footer/Footer";
import { HomepageFooter, MobileScreen } from "../../styles/global.style";
import { useNavigate } from "react-router-dom";
import "../../styles/App.scss";
import myImage from "../../assets/homepage_img.jpg";
import styled from "styled-components";
import RenderSmoothImage from "render-smooth-image-react";
import "render-smooth-image-react/build/style.css";
import Notification from "../../components/layout/notification/Notification";
import SupportNotification from "../../components/layout/notification/SupportNotification";

type Props = {};

export default function Homepage({}: Props) {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  useEffect(() => {}, []);

  const handleSubmit = (event: any) => {
    return navigate("/dashboard");
    /* const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true); */
  };

  return (
    <Wrapper>
      <Background>
        <Content>
          <MiddleSection>
            <Title>MemberFlow.</Title>
            <SubTitle>
              Easy membership management software to streamline card membership
              and member database for your organization - Memberflow is created
              to ease the pain of Google Excels.
            </SubTitle>
            <Login>
              <Form>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <Submit>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                    className="btn_primary"
                  >
                    Login
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="btn-outline-primary"
                  >
                    Forgot Your Password?
                  </Button>
                </Submit>
              </Form>
            </Login>
          </MiddleSection>
        </Content>
        <ImageWrapper>
          <RenderSmoothImage src={myImage} alt="" />
        </ImageWrapper>
      </Background>
      <SupportNotification />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: white;
`;

const ImageWrapper = styled.div`
  img {
    max-height: 100vh;
    width: 100%;
    object-fit: cover !important;
    @media (max-width: ${MobileScreen}) {
      display: none;
    }
  }
`;
