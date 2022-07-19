import React from 'react';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';

const routes = [
  {
    path: 'show-list',
    breadcrumbName: 'show ',
  },
  {
    path: 'create-list',
    breadcrumbName: 'create',
  },
  {
    path: 'update-list',
    breadcrumbName: 'update',
  },
];
export default function Header(){ 
    
    return(
  <PageHeader
    className="site-page-header"
    breadcrumb={{
      routes,
    }}
  />
)
}