import { useState } from "react";
import './Tab.css'

useState
const Tab = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
      };
  return (
    <div>
        <section className="tabs-flex">
            <div className={`tab ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => handleTabClick('tab1')}>
                New Drops
                <span>11</span>
            </div>
            <div className={`tab ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => handleTabClick('tab2')}>
                Best Sellers
                <span>9</span>
            </div>
        </section>
        <div className="tab-content">
        {activeTab === 'tab1' && <div>1</div>}
        {activeTab === 'tab2' && <div>2</div>}
      </div>
    </div>
  )
}

export default Tab