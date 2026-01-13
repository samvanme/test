import { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * DemoTabs - Accessible tab navigation for use case selection
 *
 * Implements ARIA tablist pattern with full keyboard navigation.
 * Three tabs: Sales (blue), Support (white), Operations (amber)
 *
 * @example
 * <DemoTabs
 *   activeTab="sales"
 *   onTabChange={(tab) => setActiveTab(tab)}
 *   disabled={false}
 * />
 */

const TABS = [
  { id: 'sales', label: 'Sales', color: 'bg-brand-blue', textColor: 'text-white' },
  { id: 'support', label: 'Support', color: 'bg-white', textColor: 'text-void' },
  { id: 'operations', label: 'Operations', color: 'bg-amber-500', textColor: 'text-void' },
];

export default function DemoTabs({
  activeTab = 'sales',
  onTabChange,
  disabled = false,
  highlightTabs = false,
}) {
  const tabRefs = useRef([]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event, index) => {
    if (disabled) return;

    let newIndex = index;
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = index === 0 ? TABS.length - 1 : index - 1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        newIndex = index === TABS.length - 1 ? 0 : index + 1;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = TABS.length - 1;
        break;
      default:
        return;
    }

    // Focus and activate new tab
    tabRefs.current[newIndex]?.focus();
    onTabChange?.(TABS[newIndex].id);
  }, [disabled, onTabChange]);

  const handleClick = useCallback((tabId) => {
    if (!disabled) {
      onTabChange?.(tabId);
    }
  }, [disabled, onTabChange]);

  return (
    <div
      role="tablist"
      aria-label="Use case selection"
      className="flex gap-2 sm:gap-3"
    >
      {TABS.map((tab, index) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            ref={(el) => (tabRefs.current[index] = el)}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => handleClick(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            disabled={disabled}
            className={`
              px-4 sm:px-6 py-2 sm:py-3 min-h-[44px]
              font-bold text-sm sm:text-base uppercase tracking-wider
              border-2 border-white
              transition-all duration-200
              focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-2
              motion-reduce:transition-none
              ${isActive
                ? `${tab.color} ${tab.textColor} shadow-brutal-sm`
                : `bg-transparent text-white/60 hover:text-white border-white/30 hover:border-white/50`
              }
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              ${highlightTabs && !isActive ? 'animate-pulse' : ''}
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

DemoTabs.propTypes = {
  /** Currently active tab */
  activeTab: PropTypes.oneOf(['sales', 'support', 'operations']),
  /** Callback when tab changes */
  onTabChange: PropTypes.func,
  /** Disable tab interaction */
  disabled: PropTypes.bool,
  /** Highlight tabs to draw attention (after simulation) */
  highlightTabs: PropTypes.bool,
};
