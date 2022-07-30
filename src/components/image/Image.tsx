import React, { useState } from 'react';
import Loader from 'components/loader/Loader';

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

function Image(props: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, sethasError] = useState(false);
  const onLoad = () => setIsLoading(false);
  const onError = () => sethasError(true);

  return (
    <>
      {isLoading && (
        <div className={props?.className}>
          <Loader size="S" />
        </div>
      )}
      {/* TODO: improve error handling adding a default image */}
      {hasError && <div className={props?.className}>Error loading image</div>}
      <img
        style={isLoading || hasError ? { display: 'none' } : {}}
        {...props}
        onLoad={onLoad}
        onError={onError}
        alt={props?.alt || ''}
      />
    </>
  );
}

export default Image;
