import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/icons/List';
import { NavLink } from 'react-router-dom';

function ListNavs ({ currentAgentId, currentDomainId }) {
  const prefix = `/domain/${currentDomainId}`;
  const listNavs = [
    {
      title: 'Stories',
      link: `${prefix}/stories`,
      icon: <List />
    },
    {
      title: 'Intents',
      link: `${prefix}/intents`,
      icon: <List />
    },
    {
      title: 'Actions',
      link: `${prefix}/actions`,
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
