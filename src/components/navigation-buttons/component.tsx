import { FC, useState } from 'react';

import Link from 'next/link';

import EffectiveGovernanceModalContent from 'containers/data-and-sources/effective-governance';
import GreenEnergyRushModalContent from 'containers/data-and-sources/green-energy-rush';
import RenewableWaterSourcesModalContent from 'containers/data-and-sources/renewable-water-sources';
import SmartCarbonModalContent from 'containers/data-and-sources/smart-carbon';
import SustainableLandUseModalContent from 'containers/data-and-sources/sustainable-land-use';

import Button from 'components/button';
import Icon from 'components/icon';
import Modal from 'components/modal';
import cn from 'lib/analytics/classnames';

import ARROW from 'svgs/ui/arrow.svg?sprite';

type NavigationTypes = Readonly<{
  previous?: string;
  current: string;
  next?: string;
  theme?: 'cobalt' | 'cyan';
}>;

const NavigationButtons: FC<NavigationTypes> = ({
  previous,
  current,
  next,
  theme = 'cyan',
}: NavigationTypes) => {
  const [isModalOpen, setModalVisibility] = useState(false);
  return (
    <div className="flex space-x-2">
      {previous && (
        <Link
          href={previous}
          as={previous}
          className={cn({
            'relative rounded-3xl border border-cyan-0 px-8 py-2': true,
            'border border-cobalt-0 bg-cobalt-0 text-white': theme === 'cobalt',
          })}
        >
          <Icon
            icon={ARROW}
            className="absolute top-1/2 right-5 h-3 w-3 -translate-y-1/2 transform text-white transition-transform"
          />
        </Link>
      )}

      <div className="flex space-x-5 py-0">
        <Button theme={theme} size="xs" onClick={() => setModalVisibility(!isModalOpen)}>
          DATA AND SOURCES
        </Button>

        <Modal
          title="LEARN MORE ABOUT"
          size="default"
          open={isModalOpen}
          onOpenChange={(o) => {
            setModalVisibility(o);
          }}
        >
          <div className="md:max-w-8xl m-auto flex min-h-screen w-full flex-col space-y-10 py-28 lg:max-w-7xl">
            {current === 'effective-governance' && <EffectiveGovernanceModalContent />}
            {current === 'smart-carbon' && <SmartCarbonModalContent />}
            {current === 'sustainable-land-use' && <SustainableLandUseModalContent />}
            {current === 'renewable-water-sources' && <RenewableWaterSourcesModalContent />}
            {current === 'green-energy-rush' && <GreenEnergyRushModalContent />}
            <Button
              theme="cobalt"
              size="s"
              className="self-center tracking-tight"
              onClick={() => setModalVisibility(false)}
            >
              Close
            </Button>
          </div>
        </Modal>
      </div>

      {next && (
        <Link
          href={next}
          as={next}
          className={cn({
            'relative rounded-3xl border border-cyan-0 px-8 py-2': true,
            'border border-cobalt-0 bg-cobalt-0 text-white': theme === 'cobalt',
          })}
        >
          <Icon
            icon={ARROW}
            className="text-cobalt-500 absolute top-1/2 h-3 w-3 -translate-y-1/2 rotate-180 transform transition-transform"
          />
        </Link>
      )}
    </div>
  );
};
export default NavigationButtons;
