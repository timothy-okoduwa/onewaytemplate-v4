'use client';
import React from 'react';
import Button from './Button';

const CategoryHead = () => {
  return (
    <div>
      <div className="categoryHead">
        <div className="container">
          <div className="categoryff">Categories</div>
          <div className="mt-5 " style={{ marginTop: '400px' }}>
            <div className="catesButton">
              <Button type="curvedButtons">UI Kits</Button>
              <Button type="curvedButtons">Mockups</Button>
              <Button type="curvedButtons">Flyers</Button>
              <Button type="curvedButtons">Documents</Button>
              <Button type="curvedButtons">Reports</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHead;
