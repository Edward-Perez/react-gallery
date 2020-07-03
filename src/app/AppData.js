import { apiKey } from ".config";

export const AppData = {
  title: "React Gallery",
  apiKey: apiKey,
  initialSearch: "matterhorn",
  trendingData: [
    {
      id: 1,
      content: "forest",
      url: "/image/trending/forest",
    },
    {
      id: 2,
      content: "ocean",
      url: "/image/trending/ocean",
    },
    {
      id: 3,
      content: "mountains",
      url: "/image/trending/mountains",
    },
  ],
};
