import type { Icon } from '@phosphor-icons/react';
import {
  BrainIcon,
  ChartLineUpIcon,
  DatabaseIcon,
  FlaskIcon,
  HardDrivesIcon,
  ListMagnifyingGlassIcon,
  MapTrifoldIcon,
  PlanetIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SunIcon,
  TicketIcon,
  UsersThreeIcon,
  WrenchIcon,
} from '@phosphor-icons/react/ssr';
import type { ApproachIconKey } from './portfolio';

/** Icônes des cartes « Notre approche » des fiches projet, indexées par `intro.approach[].icon`. */
export const approachIcons: Record<ApproachIconKey, Icon> = {
  brain: BrainIcon,
  database: DatabaseIcon,
  api: HardDrivesIcon,
  dashboard: ChartLineUpIcon,
  map: MapTrifoldIcon,
  search: ListMagnifyingGlassIcon,
  shield: ShieldCheckIcon,
  rocket: RocketLaunchIcon,
  users: UsersThreeIcon,
  ticket: TicketIcon,
  planet: PlanetIcon,
  flask: FlaskIcon,
  sun: SunIcon,
  wrench: WrenchIcon,
};
