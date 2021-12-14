import React, { useState } from 'react'
import classNames from 'classnames'
import { Loader } from '@buildcities/build-ui.ui.base.loader'

export type ImageCardProps = {
  title?: string
  source?: string
  onClick?: (payload?: unknown) => void
  onEdit?: (payload?: unknown) => void
  onRemove?: (payload?: unknown) => void
  loading?: boolean
  className?: string
}

export const ImageCard = ({

}: ImageCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
}
