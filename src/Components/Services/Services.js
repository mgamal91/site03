import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";
import Icon1 from "../../utils/images/img01.svg";
import Icon2 from "../../utils/images/img02.svg";
import Icon3 from "../../utils/images/img03.svg";
const Services = () => {
  return (
      
      <ServicesContainer id="services">
          {/* id is for nav to jump to this part */}
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesP>
              We help reduce your fees and Increase your overall revenue
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>
              We help reduce your fees and Increase your overall revenue
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>
              We help reduce your fees and Increase your overall revenue
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
  );
};

export default Services;
