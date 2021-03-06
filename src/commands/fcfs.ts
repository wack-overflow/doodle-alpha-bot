import { Constants } from 'discord.js';
import { run } from '../handlers/fcfs';
import { Command } from '../types';

export const Fcfs: Command = {
  name: 'wl-fcfs',
  description: 'First come first serve whitelist drop (50 max)',
  type: 'CHAT_INPUT',
  options: [
    {
      type: Constants.ApplicationCommandOptionTypes.INTEGER,
      name: 'wl-count',
      description: 'Number of entries available for the whitelist. Max 50.',
      required: true,
      maxValue: 50,
    },
    {
      type: Constants.ApplicationCommandOptionTypes.STRING,
      name: 'project',
      description: 'Name of the project providing the whitelist.',
      required: true,
    },
    {
      type: Constants.ApplicationCommandOptionTypes.STRING,
      name: 'description',
      description: 'Additional info about the project or drop, optional.',
      required: false,
    },
    {
      type: Constants.ApplicationCommandOptionTypes.STRING,
      name: 'discord-link',
      description: 'Link to project discord, optional.',
      required: false,
    },
    {
      type: Constants.ApplicationCommandOptionTypes.STRING,
      name: 'emoji',
      description: 'Emoji reaction to use for entries, optional.',
      required: false,
    },
    {
      type: Constants.ApplicationCommandOptionTypes.STRING,
      name: 'image-url',
      description: 'Image url for embed, optional.',
      required: false,
    },
    {
      type: Constants.ApplicationCommandOptionTypes.BOOLEAN,
      name: 'require-wallet',
      description: 'Require user to have submitted wallet to enter.',
      required: false,
    },
    {
      type: Constants.ApplicationCommandOptionTypes.BOOLEAN,
      name: 'pin',
      description: 'Pin FCFS message, optional.',
      required: false,
    },
  ],
  run,
};
