import { FC } from 'react';

import { STYLES_WRAPPER } from './constants';
import Heading from './heading';
import Section from './section';
import SmallHeading from './small-heading';
import Title from './title';

const EffectiveGovernanceModalContent: FC = () => (
  <div className={STYLES_WRAPPER}>
    <Heading />
    <Title>EFFECTIVE GOVERNANCE</Title>
    <p>
      To indicate Rwanda’s institutional governance performance, we used the World Bank’s governance
      indicators for 2021. All indicators were rescaled to range from 0 to 100 for ease of
      interpretation and comparison. We also calculated a mean value for each indicator across all
      other African countries as a reference for Rwanda’s indicator values..
    </p>
    <Section>
      <SmallHeading>METHODOLOGY</SmallHeading>
      <p>
        Values for indicators of governance were obtained from the World Bank governance indicator
        project (Kaufmann et al., 2010). The six aggregate indicators produced by the World Bank are
        based on over 30 underlying data sources reporting the perceptions of governance of a large
        number of survey  respondents and expert assessments worldwide. The raw indicator values
        range from -2.5 (poor performance) to 2.5 (strong performance). The raw values for each
        indicator were re-scaled to lie with the range 0 to 100 using the following:
        (xi-min(x))/(max(x)-min(x))*100, where i indicates the value of indicator x for a given
        country. We extracted the rescaled indicator values for Rwanda and calculated average values
        for other countries across Africa to compare the Rwanda values against.{' '}
      </p>
    </Section>
    <Section>
      <SmallHeading>SOURCES</SmallHeading>
      <ul>
        <li>
          Daniel Kaufmann, Aart Kraay and Massimo Mastruzzi (2010). `&quot;`The Worldwide World Bank
          Policy Research  Working Paper No. 5430`&quot;`.
          <a
            href="https://databank.worldbank.org/source/worldwide-governance-indicators"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://databank.worldbank.org/source/worldwide-governance-indicators
          </a>
        </li>
      </ul>
    </Section>
    <Section>
      <SmallHeading>DATA FORMAT</SmallHeading>
    </Section>
  </div>
);

export default EffectiveGovernanceModalContent;
