import React from 'react';
import CompanyHeader from '@components/entities/company/company-header';

const CompanyPage = () => {
  return (
    <div>
      <CompanyHeader/>
      <div style={{borderTop: '1px solid lightgray', height: '1px', width: '100%'}} className='my-10'></div>
    </div>
  );
};

export default CompanyPage;