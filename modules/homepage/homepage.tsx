import React from "react";

const Searchbar = (): JSX.Element => {
  return (
    <div className="relative">
      <input
        className="p-5 pr-10 w-full h-15 text-sm text-blackRussian bg-white shadow-primary rounded-lg placeholder-baliHai"
        placeholder="Search quotes, series or anything"
      />

      <div className="absolute" style={{ right: "1.25rem", top: "1.50rem" }}>
        {/* prettier-ignore */}
        <svg className="w-4 h-4 text-blackRussian" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
};

const Heading = ({ children }: { children: string }): JSX.Element => (
  <div className="text-xs font-bold tracking-wider uppercase text-blackRussian">{children}</div>
);

interface CharacterCardProps {
  imageUrl: string;
  realName: string;
  characterName: string;
  showName: string;
  showYear: number;
}

const CharacterCard = ({ imageUrl, realName, characterName, showName, showYear }: CharacterCardProps): JSX.Element => (
  <div className="w-full shadow-primary rounded-xl border border-aliceBlue">
    <div className="w-full h-32">
      <img className="w-full h-full rounded-t-xl object-cover" src={imageUrl} alt={characterName} />
    </div>
    <div className="p-4 text-blackRussian">
      <div className="font-semibold">{characterName}</div>
      <div className="font-serif">{realName}</div>
      <div className="h-1"></div>
      <div className="">{showName}</div>
      <div className="text-xs text-baliHai">{showYear}</div>
    </div>
  </div>
);

export const HomePage: React.FunctionComponent = () => {
  return (
    <div className="">
      <div className="h-5"></div>
      <Searchbar />
      <div className="h-8"></div>
      <Heading>Character</Heading>
      <div className="h-3"></div>
      <div className="flex flex-wrap">
        <div className="grid-item ">
          <CharacterCard
            imageUrl="https://media.pri.org/s3fs-public/styles/story_main/public/story/images/mr.%20robot.jpg?itok=4iHmKmck"
            realName="Rami Malek"
            characterName="Elliot Alderson"
            showName="Mr. Robot"
            showYear={2015}
          />
        </div>
        <div className="grid-item">
          <CharacterCard
            imageUrl="https://vignette.wikia.nocookie.net/mrrobot/images/5/5c/Tumblr_96060a66d3af926ec3f638882b6ebb79_b2da2bc6_640.jpg/revision/latest?cb=20190928213622"
            realName="Darlene"
            characterName="Carly Chaikin"
            showName="Mr. Robot"
            showYear={2015}
          />
        </div>
        <div className="grid-item">
          <CharacterCard
            imageUrl="data:image/jpeg;base64,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"
            realName="Angela Moss"
            characterName="Portia Doubleday"
            showName="Mr. Robot"
            showYear={2015}
          />
        </div>
        <div className="grid-item">
          <CharacterCard
            imageUrl="https://i.imgur.com/qy9sIaT.png"
            realName="Tyrell Wellick"
            characterName="Martin Wallström"
            showName="Mr. Robot"
            showYear={2015}
          />
        </div>
      </div>
    </div>
  );
};
