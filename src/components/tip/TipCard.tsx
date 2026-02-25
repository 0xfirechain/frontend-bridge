import { IconButton, XCircleIcon } from '@hyperlane-xyz/widgets';
import Image from 'next/image';
import { useState } from 'react';
import { config } from '../../consts/config';
import { links } from '../../consts/links';
import InfoCircle from '../../images/icons/info-circle.svg';
import { HyperlaneTransparentLogo } from '../icons/HyperlaneTransparentLogo';

export function TipCard() {
  const [show, setShow] = useState(config.showTipBox);
  if (!show) return null;
  return (
    <div className="relative w-100 overflow-hidden rounded bg-tip-card-gradient px-3 pb-3 pt-3 shadow-card sm:w-[31rem] sm:px-4 sm:pb-4 sm:pt-4">
      <div className="absolute right-2 top-2">
        <IconButton
          onClick={() => setShow(false)}
          title="Hide tip"
          className="text-gray-400 hover:text-gray-600"
        >
          <XCircleIcon width={14} height={14} />
        </IconButton>
      </div>

      <h2 className="pr-6 font-secondary text-sm font-normal text-gray-900 sm:text-lg">
        Rinia Cross Chain Bridge
      </h2>
      <p className="mt-1 text-xs text-gray-600 sm:mt-2 sm:text-sm">
        Seamlessly transfer your FIRE tokens between Rinia to other chains with secure,
  fast, and permissionless cross-chain infrastructure.
      </p>


      <div className="pointer-events-none absolute -bottom-0 left-1/2 -translate-x-1/2 opacity-40">
        <HyperlaneTransparentLogo />
      </div>
    </div>
  );
}
