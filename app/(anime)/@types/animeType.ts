export interface mainInfo {
  id: number;
  title: string;
  main_picture: {
    large: string;
  };
  alternative_titles?: {
    en: string;
    ja: string;
  }[];
  start_date: string;
  end_date?: string;
  mean?: number; // Add the "mean" property here
  popularity?: number;
  nsfw?: string;
  media_type?: string;
  status?: string;
  genres?: number[] | string[];
  num_episodes?: number;
  start_season?: string;
  broadcast?: {
    day_of_the_week: string;
    start_time: string;
  };
  source?: string;
  average_episode_duration?: number;
  rating?: string;
  statistics?: {
    status?: {
      watching: number;
      completed: number;
      on_hold: number;
      dropped: number;
      plan_to_watch: number;
    };
    num_list_users?: number;
  }
}

export type recomendationsSwiperType = {
  swiperInfo: {
    id: number;
    title: string;
    main_picture: {
      medium: string;
    };
  }[];
};
