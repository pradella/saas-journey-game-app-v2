import styles from './ActivityRingsLegend.module.scss';

type ActivityRingsLegendProps = {
  legends: { title: string; count: number; color: string }[];
  width?: string;
};

function ActivityRingsLegend({ legends, width }: ActivityRingsLegendProps) {
  return (
    <main className={styles.root} style={{ width }}>
      {legends.map((l, i) => (
        <div key={i}>
          <p style={{ color: l.color }}>{l.count}</p>
          <small>{l.title}</small>
        </div>
      ))}
    </main>
  );
}

export default ActivityRingsLegend;
