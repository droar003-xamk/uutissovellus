import { Typography } from "@mui/material";
import ".././styles.css"

function Header() {
    return (
      <div className="Header">
        <Typography gutterBottom variant="h4" component="div" 
        style={{ color: "white",  }}>
          Top news from world</Typography>
      </div>
    );
  }
  
  export default Header;