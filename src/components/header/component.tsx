import { FC } from 'react';

import Link from 'next/link';

import MetaTags from 'containers/meta-tags';

import Button from 'components/button';
import Icon from 'components/icon';
import Logo from 'components/logo';
import Tooltip from 'components/tooltip';
import cn from 'lib/analytics/classnames';
import RwandaReasons from 'utils/constants';

import MENU from 'svgs/ui/menu.svg?sprite';

import type { HeaderProps } from './types';

export const Header: FC<HeaderProps> = ({ className, ...restProps }: HeaderProps) => (
  <header
    className={cn({
      'fixed top-0 left-0 z-40 w-full': true,
      [className]: !!className,
    })}
    {...restProps}
  >
    <MetaTags title="Rwanda Carbon Tracker" description="" type="website" />
    <div className="z-40 flex items-center justify-between py-4 px-6">
      <Link href="/">
        <Logo size="sm" />
      </Link>
      <Tooltip
        placement="bottom-end"
        trigger="click"
        content={
          <div className="space-y-4 rounded-3xl bg-white p-8 font-bold text-cobalt-0">
            <Link href="/positive-impacts">Positive impacts</Link>
            <div className="space-y-2 divide-y-2 divide-opacity-70">
              <Link href="/why-rwanda" className="border-box pb-2">
                Why Rwanda
              </Link>
              <div>
                <ul className="z-40 mt-4">
                  {RwandaReasons.map(({ slug, name }) => (
                    <li key={slug} className="pb-4 last-of-type:pb-0">
                      <Link href={`/why-rwanda/${slug}`} as={`/why-rwanda/${slug}`}>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        }
      >
        <div>
          <Button theme="white" size="base">
            <p className="pl-6">Menu</p>
            <span className="m-auto h-full px-4">
              <Icon icon={MENU} className={'mt-1 h-3 w-4'} />
            </span>
          </Button>
        </div>
      </Tooltip>
    </div>
  </header>
);

export default Header;
