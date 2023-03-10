import { Story } from '@storybook/react/types-6-0';

import Loading from './component';
import type { LoadingProps } from './types';

const StoryLoading = {
  title: 'Components/Loading',
  component: Loading,
};

export default StoryLoading;

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-5 h-5 text-cobalt-500',
  visible: true,
};
