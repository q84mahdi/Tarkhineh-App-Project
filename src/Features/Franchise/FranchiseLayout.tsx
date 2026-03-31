import Header from "../../UI/Header";
import FranchiseIcons from "./FranchiseIcons";
import FranchisePoints from "./FranchisePoints";
import FranchiseCouncilForm from "./FranchiseCouncilForm";
import FranchiseForm from "./FranchiseForm";

const slides = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/mahdi-q/Tarkhineh-App-API/refs/heads/master/images/header/franchise.webp",
    text: "همین الان به خانواده بزرگ ترخینه بپیوندید!",
  },
];

function FranchiseLayout() {
  return (
    <div className="minimum-height">
      <Header slides={slides} />

      <div className="container">
        <FranchiseIcons />

        <FranchisePoints />

        <FranchiseCouncilForm />

        <FranchiseForm />
      </div>
    </div>
  );
}
export default FranchiseLayout;
