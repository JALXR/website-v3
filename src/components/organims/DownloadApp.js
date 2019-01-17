import React from 'react';
import { css, cx } from 'emotion';
import { isMobile, CustomView } from 'react-device-detect';
import Icon from '../../components/atoms/Icon';
import { rem, rgba } from 'polished';
import Button from '../atoms/Button';
import * as transition from '../../styles/transitions';
import * as color from '../../styles/colors';

const DownloadApp = ({ data, theme, className, ...rest }) => {
  const DATA = data.data;
  return (
    <div {...rest}>
      <p>------------------</p>
      <CustomView condition={!isMobile}>
        <a className="desktop" href={DATA.button_url.url}>
          {DATA.button_text} - Desktop
        </a>
        <p>{DATA.button_url.url}</p>
      </CustomView>
      <p>------------------</p>
      <div className={css({ marginBottom: rem(15), textAlign: 'center' })}>
        {DATA.button_text && DATA.button_url && (
          <div>
            >
            <CustomView condition={isMobile}>
              <a className="mobile" href={DATA.button_url_mobile.url}>
                {DATA.button_text} - Mobile
              </a>
              <p>{DATA.button_url_mobile.url}</p>
            </CustomView>
          </div>
        )}
      </div>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        {DATA.plateform_list &&
          DATA.plateform_list.map((item, index) => (
            <a
              key={`${index}-plateform-list`}
              href={item.url.url}
              className={cx(
                `${className}-${item.type}`,
                css({
                  padding: rem(5),
                  display: 'block',
                  margin: `0 ${rem(5)}`,
                  cursor: 'pointer',
                  opacity: 0.666,
                  transition: `opacity 0.3s ${transition.base}`,
                  '&:hover, &:focus, &:active': {
                    opacity: 1,
                  },
                }),
              )}
            >
              <Icon
                type={item.type}
                size={20}
                color={theme === 'light' ? 'light' : 'clr1Light'}
              />
              <span
                className={css({
                  position: 'absolute !important',
                  overflow: 'hidden !important',
                  clip: 'rect(0, 0, 0, 0)!important',
                  width: '1px !important',
                  height: '1px !important',
                  margin: '-1px',
                  padding: '0 !important',
                  border: '0 !important',
                })}
              >
                {item.type}
              </span>
            </a>
          ))}
      </div>
    </div>
  );
};

export default DownloadApp;
