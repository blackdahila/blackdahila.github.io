import React from 'react';
import { style as tss } from 'typestyle';

const styles = {
    medium: tss({
      background: '#3653ab',
      color: '#ffffff',
      textAlign: 'center',
      width: 'fit-content',
    }),
    strong: tss({
      border: 'solid 2px #3653ab',
      color: '#3653ab',
      textAlign: 'center',
      width: 'fit-content',
    }),
  }

type BadgeType = 'medium' | 'strong';

type Props = {
  label: string;
  type: BadgeType;
};

export class Badge extends React.Component<Props, {}> {
  typeToClass(type: BadgeType): string {
    switch (type) {
      case 'medium': return styles.medium;
      case 'strong': return styles.strong;
      default: return '';
    }
  }
  render() {
    const { label, type } = this.props;
    const className = this.typeToClass(type);
    return (
        <div className={className}>
          {label}
        </div>
    );
  }
}