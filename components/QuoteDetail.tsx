import React from "react";
import { HeaderWithBackButton } from "./HeaderWithBackButton";
import { Heading } from "./Typography";

const quoteMarkup = `
<p>
  <strong>Krista Gordon</strong>: What is it about society that disappoints you so much?</p>\n<p><strong>Elliot Alderson</strong>: Oh, I don't know. Is it that we collectively thought Steve Jobs was a great man, even when we knew he made billions off the backs of children? Or maybe it's that it feels like all our heroes are counterfeit. The world itself's just one big hoax. Spamming each other with our burning commentary of bullshit masquerading as insight. Our social media faking as intimacy. Or is it that we voted for this? Not with our rigged elections, but with our things. Our property. Our money. I'm not saying anything new. We all know why we do this. Not because Hunger Games books makes us happy. But because we wanna be sedated. Because it's painful not to pretend. Because we're cowards. ''Fuck society.''",
</p>
`;

export const QuoteDetail = (): JSX.Element => {
  return (
    <div className="relative">
      <HeaderWithBackButton />
      {/* Image */}
      <div className="absolute top-0 w-24 h-32">
        {/* <svg viewBox="0 0 643 525">
          <defs>
            <clipPath id="clipPath">
              <path
                stroke="#000"
                d="M329.039 113.894c3.285 84.114-116.054 172.16-116.054 172.16s-1.549-172.295-1.256-172.036c-1.617-4.408-3.143 1.615 117.31-.124z"
                strokeOpacity="null"
                strokeWidth="1.5"
                fill="none"
              />
            </clipPath>
          </defs>
          <image
            width="643"
            height="643"
            style={{ borderRadius: "8888px" }}
            clipPath="url(#clipPath)"
            xlinkHref="https://deadline.com/wp-content/uploads/2019/08/mrrobot_s4_key_art_final_-1-e1566934598188.jpg?w=1024g"
          ></image>
        </svg> */}
        {/* <img
          className="h-full object-cover"
          src="https://deadline.com/wp-content/uploads/2019/08/mrrobot_s4_key_art_final_-1-e1566934598188.jpg?w=1024"
          alt=""
        /> */}
      </div>

      <div className="text-center">
        <div className="text-2xl  font-semibold">Mr. Robot</div>
        <div className="flex justify-center font-serif text-sm text-radicalRed ">
          <span className="">2015 &middot;&nbsp;</span>
          <span className="">E4 S2 &middot;&nbsp;</span>
          <span className="">23:45 min</span>
        </div>
      </div>

      <div className="h-12"></div>
      <div className="px-6 pb-12">
        {/* Characters */}
        <Heading>Character</Heading>
        <div className="h-3"></div>
        <div className="flex flex-wrap justify-between">
          <div className="w-1/2">
            <div className="font-semibold">Elliot Alderson</div>
            <div className="font-serif text-baliHai">Rami Malek</div>
          </div>
          <div className="w-1/2">
            <div className="font-semibold">Krista Gordon</div>
            <div className="font-serif text-baliHai">Gloria Reuben</div>
          </div>
        </div>
        <div className="h-3"></div>
        {/* Dialogue Header */}
        <div className="flex justify-between items-center">
          <Heading>Dialogue</Heading>
          <div className="pr-4">
            <button className="p-2 mr-4 rounded-full text-baliHai">
              {/* prettier-ignore */}
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
            </button>
            <button className="p-2 rounded-full text-radicalRed">
              {/* prettier-ignore */}
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>
          </div>
        </div>

        <div className="h-6"></div>
        {/* Dialogue content */}
        <div className="quote font-serif">
          <div dangerouslySetInnerHTML={{ __html: quoteMarkup }} />
        </div>
        <style jsx global>{`
          .quote p:not(:last-child) {
            display: block;
            margin-bottom: 1rem;
          }
        `}</style>
      </div>
    </div>
  );
};
