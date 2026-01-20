import React from 'react';
import Layout from '@theme/Layout';

/**
 * SearchPage component for local search
 * The @easyops-cn/docusaurus-search-local plugin provides search via SearchBar,
 * not a dedicated search page. This component exists to satisfy theme requirements.
 */
export default function SearchPage(): React.JSX.Element {
  return (
    <Layout title="Search" description="Search the documentation">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1>Search</h1>
            <p>
              Use the search bar in the navigation to search the documentation.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
