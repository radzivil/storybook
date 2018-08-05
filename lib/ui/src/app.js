import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from '@storybook/components';

const App = ({ provider, store }) => {
  const state = store.getAll();

  const Preview = () => {
    const preview = provider.renderPreview(state.selectedKind, state.selectedStory);
    return preview;
  };

  const {
    shortcutOptions: { showStoriesPanel, showAddonPanel, goFullScreen, addonPanelInRight },
    isMobileDevice,
    uiOptions,
  } = state;

  const layoutProps = {
    isMobileDevice,
    showStoriesPanel,
    showAddonPanel,
    goFullScreen,
    addonPanelInRight,
    ...uiOptions,
  };

  return (
    <div>
      <Layout
        {...layoutProps}
        storiesPanel={() => <div>storiesPanel</div>}
        preview={() => <Preview />}
        addonPanel={() => <div>addonPanel</div>}
        shortcutsHelp={() => <div>shortcutsHelp</div>}
        searchBox={() => <div>searchBox</div>}

        // storiesPanel={() => <StoriesPanel />}
        // preview={() => <Preview />}
        // addonPanel={() => <AddonPanel />}
        // shortcutsHelp={() => <ShortcutsHelp />}
        // searchBox={() => <SearchBox />}
      />
    </div>
  );
};

App.propTypes = {
  provider: PropTypes.shape({
    renderPreview: PropTypes.func.isRequired,
  }).isRequired,
  store: PropTypes.shape({
    getAll: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
