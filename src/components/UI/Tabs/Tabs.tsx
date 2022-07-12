import { ReactNode, useState } from 'react';

import styles from './Tabs.module.scss';

type TabItem = {
  id: string;
  label: string;
  count: number;
  render: () => ReactNode;
};

type TabsProps = {
  loading?: boolean;
  spinner?: ReactNode;
  items: TabItem[];
  initialTab?: string;
  onChange?: (tabId: string) => void;
};

function Tabs({ loading, spinner, items, initialTab, onChange }: TabsProps) {
  const [activeTabId, setActiveTabId] = useState<string>(
    initialTab || items[0].id
  );

  function handleChangeTab(tab: string) {
    setActiveTabId(tab);
    onChange && onChange(tab);
  }

  function renderActiveTab() {
    const activeTab = items.find((item) => item.id === activeTabId) || items[0];
    return activeTab.render();
  }

  return (
    <main className={styles.root}>
      <ul>
        {items.map((item) => (
          <li
            className={activeTabId === item.id ? styles.active : undefined}
            key={item.id}
            onClick={() => handleChangeTab(item.id)}
          >
            <small>{item.label}</small>
            <p>{item.count}</p>
          </li>
        ))}
      </ul>
      <div className={styles.content}>
        {loading ? spinner : renderActiveTab()}
      </div>
    </main>
  );
}

export default Tabs;
