import styled from 'styled-components';
import { variant } from 'styled-system';

interface IProps {
  variant: string
}

export const TemplateStyle = styled('div')<IProps>(
    variant({
      scale: 'template',
      variants: {
        main: {},
        header: {},
        footer: {}
      },
    })
);
