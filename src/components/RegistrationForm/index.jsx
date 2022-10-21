import { Typography } from "antd";
import { Button, Form, message } from "antd";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { registerNewUser } from "../../helpers/functions";
import { User } from "./RegistrationComponents/User";
import { Passwords } from "./RegistrationComponents/Passwords";
import { Name } from "./RegistrationComponents/Name";
import { Email } from "./RegistrationComponents/Email";
import { Phone } from "./RegistrationComponents/Phone";
import { Birth } from "./RegistrationComponents/Birth";

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const cb = () => navigate("/login", { replace: true });
  const { Title } = Typography;

  const onError = (error) => {
    message.error("Fill all fields");
  };

  const registerHandler = (event) => {
    const { fullName, countryCode, phone, userName, email, password, bDay } =
      event;

    const formData = {
      fullName: fullName.trim(),
      userName: userName.trim(),
      email: email.toLowerCase(),
      password: password.trim(),
      phone: `${countryCode}${phone}`,
      bDay: moment(bDay).format("DD-MM-YYYY"),
    };

    registerNewUser(formData, cb);
  };

  return (
    <div className="register_page_container">
      <Title level={2}>Registration</Title>

      <Form
        autoComplete="off"
        labelCol={{ span: 10 }}
        labelAlign={"left"}
        wrapperCol={{ span: 18 }}
        onFinish={registerHandler}
        onFinishFailed={onError}
      >
        <Name />
        <User />
        <Email />
        <Passwords />
        <Phone />
        <Birth />

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button block type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
