// COMPONENT: GlossaryTableComponent
// PURPOSE: Renders a list of key glossary terms with short definitions

import React from 'react';

const glossaryItems = [
  { term: 'MVP', definition: 'Minimum Viable Product — the smallest testable version.' },
  { term: 'Register', definition: 'Social tone of a word: formal, casual, slang...' },
  { term: 'Polarity', definition: 'Positive, negative, or neutral emotional weight.' },
  { term: 'Domain', definition: 'Field of use — like medicine, law, or poetry.' },
  { term: 'Context', definition: 'Surrounding usage that shapes meaning.' },
];

const GlossaryTableComponent = () => {
  return (
    <div className="glossary-table">
      <table>
        <thead>
          <tr>
            <th>Term</th>
            <th>Definition</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {glossaryItems.map((item, index) => (
            <tr key={index}>
              <td>{item.term}</td>
              <td>{item.definition}</td>
              <td><button title="More info">🔍</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GlossaryTableComponent;