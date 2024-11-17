export type descriptionType = {
  synopsis: string;
};

export type mainInfo = {
  id: number;
  title: string;
  mainPicture: {
    large: string;
  };
  alternative_titles?: {
    en: string;
    ja: string;
  };
  start_date: string;
  end_date?: string;
  mean?: number;
  popularity?: number;
  nsfw?: boolean;
  media_type?: string;
  status?: string;
  genres?: number | string[];
  num_episodes?: number;
  start_season?: string;
  broadcast?: {
    day_of_the_week: string;
    start_time: string;
  };
  source?: string;
  average_episode_duration?: number;
  rating?: string;
  pictures?: string[];
  recomendations?: [
   
  ];
  statistics?: {
    status: {
      watching: number;
      completed: number;
      on_hold: number;
      dropped: number;
      plan_to_watch: number;
    };
    num_list_users: number;
  };
};
