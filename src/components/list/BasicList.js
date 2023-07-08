import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./List.scss";
import classnames from "classnames";

export default function BasicList(props) {
  const [selected, setSelected] = React.useState({});

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <List dense>
        {props.items?.map((item) => {
          return (
            <ListItem
              onClick={() => setSelected(item)}
              className={classnames("list-item", {
                "is-active": selected.primaryText === item.primaryText,
              })}
            >
              <ListItemText
                primary={item.primaryText}
                secondary={item.secondaryText ? item.secondaryText : null}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
