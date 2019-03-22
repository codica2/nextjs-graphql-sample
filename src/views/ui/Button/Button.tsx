import Button from "antd/lib/button";

const ButtonComp = (props: any) => {
  console.log("props :", props);

  return <Button {...props} />;
};

export default ButtonComp;
