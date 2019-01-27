import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/icons/List';
import { NavLink } from 'react-router-dom';

function ListNavs ({ currentAgentId }) {
  const listNavs = [
    {
      title: 'Domains',
      link: `/agent/${currentAgentId}/domains`,
      icon: <List />
    },
    {
      title: 'Intents',
      link: `/agent/${currentAgentId}/intents`,
      icon: <List />
    },
    {
      title: 'Entitys',
      link: `/agent/${currentAgentId}/entities`,
      icon: <List />
    },
    {
      title: 'Actions',
      link: `/agent/${currentAgentId}/actions`,
      icon: <List />
    }
  ];

  return listNavs.map((item, key) => (
    <NavLink
      to={item.link}
      style={{
        textDecoration: 'none'
      }}
      key={key}
    >
      <ListItem button key={key + item}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText>{item.title}</ListItemText>
      </ListItem>
    </NavLink>
  ));
}

export default ListNavs;
