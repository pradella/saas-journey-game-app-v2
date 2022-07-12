import { useMemo } from 'react';
import _ from 'lodash';

import styles from './ActivityRings.module.scss';

// Source: https://codepen.io/webslingerm/pen/GXxxVx

type ActivityRingsProps = {
  series?: ActivityRingsSerie[];
  height?: string;
};

type ActivityRingsSerie = {
  value: number;
  color?: string;
};

function ActivityRings({
  height = '300px',
  series: initialSeries = [],
}: ActivityRingsProps) {
  const series = useMemo(() => {
    const updatedSeries = _.clone(initialSeries);
    // fill missing to reach 3 mininum items
    while (updatedSeries.length < 3) updatedSeries.push({ value: 60 });
    // remove above 5 items
    if (updatedSeries.length > 5) return _.slice(updatedSeries, 0, 5);
    return updatedSeries;
  }, [initialSeries]);

  const colors = [
    'rgb(233, 11, 58)',
    'rgb(160, 255, 3)',
    'rgb(26, 213, 222)',
    'orange',
    'purple',
  ];

  const params = {
    3: {
      scale: [0.7, 0.5, 0.3],
      strokeWidth: [4.3, 6, 10],
      color: colors,
    },
    4: {
      scale: [0.72, 0.565, 0.41, 0.26],
      strokeWidth: [3.3, 4.1, 5.5, 8.5],
      color: colors,
    },
  };

  // @ts-ignore
  const param = params[series.length];

  return (
    <div style={{ height }}>
      <svg className={styles.ActivityRings} viewBox="0 0 27 27">
        {series.map((serie, i) => (
          <g
            className={styles.ring}
            style={{ transform: `scale(${param.scale[i]}) rotate(-90deg)` }}
            key={i}
          >
            <circle
              strokeWidth={param.strokeWidth[i]}
              r="15.915"
              cx="50%"
              cy="50%"
              className={styles.background}
              style={{ stroke: serie.color || param.color[i] }}
            />
            <circle
              strokeWidth={param.strokeWidth[i]}
              r="15.915"
              cx="50%"
              cy="50%"
              className={styles.completed}
              style={{ stroke: serie.color || param.color[i] }}
              strokeDasharray={`${serie.value}, 100`}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default ActivityRings;
