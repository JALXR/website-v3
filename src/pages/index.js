import React from 'react';
import { graphql } from 'gatsby';
import App from '../components/layout/App';
import HeroHome from '../components/organims/HeroHome';
import Reassurance from '../components/organims/Reassurance';
import Presentation from '../components/organims/Presentation';
import More from '../components/organims/More';
import Opinions from '../components/organims/Opinions';
import SeeAllApps from '../components/organims/SeeAllApps';
import SliderMentions from '../components/organims/SliderMentions';
import { URL } from '../const';

const IndexPage = props => {
  const DATA = props.data.content.data;
  const DOWNLOAD = props.data.download;

  return (
    <App headerTheme="dark">
      <HeroHome
        title={DATA.hero_title}
        content={DATA.hero_content}
        legend={DATA.hero_legend}
        video={DATA.hero_video_url}
        image={DATA.hero_image}
        download={DOWNLOAD}
      />
      <Reassurance
        title={DATA.reassurance_title}
        content={DATA.reassurance_content}
        logos={DATA.reassurance_logos}
      />

      {DATA.presentation_list && <Presentation data={DATA.presentation_list} />}
      {DATA.more_title && (
        <More
          title={DATA.more_title}
          data={DATA.more_list}
          button={DATA.more_button_text}
          buttonUrl={URL.features}
        />
      )}
      {DATA.opinion && DATA.opinon___use_station_to && (
        <Opinions
          slideUseText={DATA.opinon___use_station_to}
          slideText={DATA.opinion}
          download={{
            text: DATA.download_text,
            url: DOWNLOAD.data.button_url.url,
          }}
        />
      )}
      {DATA.mentions_title && DATA.tweet && (
        <SliderMentions
          title={DATA.mentions_title}
          background={{
            top: DATA.mentions_gradient_top,
            bottom: DATA.mentions_gradient_bottom,
          }}
          data={DATA.tweet}
          link={{
            text: DATA.all_tweets_text,
            url: DATA.all_tweets_url,
          }}
        />
      )}
      {DATA.seeallapps_title && (
        <SeeAllApps
          title={DATA.seeallapps_title}
          button={{
            text: DATA.seeallapps_button_text,
            url: DATA.seeallapps_button_url,
            type: DATA.seeallapps_button_type,
          }}
          data={DATA.seeallapps_image}
        />
      )}
    </App>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query IndexQuery {
    content: prismicHomepage {
      data {
        hero_title
        hero_content
        hero_legend
        hero_video_url
        hero_image {
          url
          dimensions {
            width
            height
          }
        }
        reassurance_title
        reassurance_content
        reassurance_logos {
          title
          image {
            url
            dimensions {
              width
              height
            }
          }
        }
        presentation_list {
          subtitle
          title {
            html
          }
          content {
            html
          }
          image {
            url
            dimensions {
              width
              height
            }
          }
        }
        more_title
        more_list {
          title
          content
          image {
            url
            dimensions {
              width
              height
            }
          }
        }
        more_button_text
        opinion {
          name
          job
          use_for
          quote
          logo {
            url
            dimensions {
              width
              height
            }
          }
        }
        opinon___use_station_to
        download_text
        mentions_title
        mentions_gradient_top
        mentions_gradient_bottom
        tweet {
          url
          thumb {
            url
          }
          fullname
          username
          content {
            html
          }
          date
        }
        all_tweets_url
        all_tweets_text
        seeallapps_title
        seeallapps_image {
          url
          dimensions {
            width
            height
          }
        }
        seeallapps_button_url
        seeallapps_button_text
        seeallapps_button_type
      }
    }
    download: prismicDownloadapp {
      data {
        button_text
        button_url {
          url
        }
        plateform_list {
          type
          url {
            url
          }
        }
      }
    }
  }
`;
