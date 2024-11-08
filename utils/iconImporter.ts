import * as Hi2Icons from 'react-icons/hi2';
import * as HiIcons from 'react-icons/hi';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import {IconType} from 'react-icons';

const iconSets = {
  Hi2: Hi2Icons,
  Hi: HiIcons,
  Fa: FaIcons,
  Md: MdIcons,
};

export const importIcon = (iconName: string): IconType => {
  const [iconSet, icon] = iconName.split('/');
  const selectedSet = iconSets[iconSet as keyof typeof iconSets];

  if (selectedSet && icon in selectedSet) {
    return selectedSet[icon as keyof typeof selectedSet] as IconType;
  }

  return Hi2Icons.HiQuestionMarkCircle;
};