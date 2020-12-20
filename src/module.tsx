import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { Panel } from './panel';

export const plugin = new PanelPlugin<SimpleOptions>(Panel);
