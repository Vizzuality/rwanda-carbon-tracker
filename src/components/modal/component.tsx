import {
  useFloating,
  useInteractions,
  useRole,
  useDismiss,
  FloatingPortal,
  FloatingOverlay,
  FloatingFocusManager,
} from '@floating-ui/react-dom-interactions';
import { AnimatePresence, motion } from 'framer-motion';

import { Media } from 'components/media-query';

import ModalContent from './content';
import { OVERLAY_CLASSES } from './content/constants';
import { ModalProps } from './types';

export const Modal = (props: ModalProps) => {
  const { open, onOpenChange, dismissable } = props;
  const { floating, context } = useFloating({
    open,
    onOpenChange,
  });

  const { getFloatingProps } = useInteractions([
    useRole(context),
    useDismiss(context, {
      enabled: dismissable,
    }),
  ]);

  const overlayFramerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <FloatingPortal>
      <AnimatePresence>
        {open && (
          <FloatingOverlay lockScroll>
            <motion.div
              variants={overlayFramerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={OVERLAY_CLASSES}
            >
              <FloatingFocusManager context={context}>
                <>
                  <Media
                    lessThan="sm"
                    className="pointer-events-none absolute z-50 flex h-full w-full grow flex-col"
                  >
                    <ModalContent
                      {...props}
                      floating={floating}
                      getFloatingProps={getFloatingProps}
                    />
                  </Media>
                  <Media
                    greaterThanOrEqual="sm"
                    className="pointer-events-none absolute z-50 flex h-full w-full grow flex-col"
                  >
                    <ModalContent
                      {...props}
                      viewport="sm"
                      floating={floating}
                      getFloatingProps={getFloatingProps}
                    />
                  </Media>
                </>
              </FloatingFocusManager>
            </motion.div>
          </FloatingOverlay>
        )}
      </AnimatePresence>
    </FloatingPortal>
  );
};

export default Modal;
