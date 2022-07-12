import axios from 'axios';
import _ from 'lodash';
import { parseISO } from 'date-fns';

const instance = axios.create({
  baseURL: 'http://localhost:5001/unlockd-game/us-central1/unlockd',
  // baseURL: 'https://us-central1-unlockd-game.cloudfunctions.net/unlockd',
});

export type UserGame = {
  name: string;
  titleId: string;
  category: string;
  firstPlayedDateTime: Date;
  lastPlayedDateTime: Date;
  playDurationSecs: number;
  playDurationHours: number;
  images: {
    BACKGROUND_LAYER_ART: string;
    GAMEHUB_COVER_ART: string;
    LOGO: string;
    MASTER: string;
    TROPHY_TITLE_ICON_URL: string;
  };
  communicationId: string;
  trophySummary: {
    progress: number;
    earnedTrophies: any;
    earnedCount: number;
    definedTrophies: any;
    definedCount: number;
    lastUpdatedDateTime: Date;
  };
};

export const fetchUserGames = async (
  accountId: string
): Promise<UserGame[]> => {
  const { data } = await instance.get(`/user/${accountId}/games`);
  return _.map(data?.titles || [], (title) => ({
    ...title,
    firstPlayedDateTime: parseISO(title.firstPlayedDateTime),
    lastPlayedDateTime: parseISO(title.lastPlayedDateTime),
    trophySummary: {
      ...title.trophySummary,
      lastUpdatedDateTime: parseISO(title.trophySummary.lastUpdatedDateTime),
    },
  }));
};

export type TrophyType = 'bronze' | 'silver' | 'gold' | 'platinum';

export type UserGameTrophy = {
  earned: false;
  earnedDateTime?: Date;
  trophyDetail: string;
  trophyEarnedRate: number;
  trophyGroupId: string;
  trophyHidden: boolean;
  trophyIconUrl: string;
  trophyId: number;
  trophyName: string;
  trophyRare: number;
  trophyType: TrophyType;
};

export const fetchUserGameTrophies = async (
  accountId: string,
  communicationId: string,
  category: string
): Promise<UserGameTrophy[]> => {
  const { data } = await instance.get(
    `/user/${accountId}/game/${communicationId}/category/${category}`
  );

  return _.orderBy(
    _.map(data, (d) => ({ ...d, trophyEarnedRate: +d.trophyEarnedRate })),
    'trophyEarnedRate'
  );
};

export type People = {
  onlineId: string;
  accountId: string;
  avatarUrl: string;
  type: 'friend' | 'following';
};

export const fetchPeople = async (accountId: string): Promise<People[]> => {
  const { data } = await instance.get(`/user/${accountId}/people`);

  return data;
};
