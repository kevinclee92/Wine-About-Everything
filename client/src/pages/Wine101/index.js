import React from 'react';
import img from '../../images/foodandwinepairing.jpg'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import imgThree from '../../images/winestats.jpg';
import imgFour from '../../images/winestats2.jpg';
import imgFive from '../../images/winestats3.jpg';
import imgSix from '../../images/winestats4.jpg';
import imgTen from '../../images/happyhour.jpg';
import imgEleven from '../../images/smallbottle.jpg';
import imgLogo from '../../images/logo_transparent.png';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import './wine101.css'

const styles = theme => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',   
  },
  paper: {
    margin: theme.spacing.unit,
  },
  svg: {
    width: 75,
    height: 75, 
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,

  },
});

class SimpleGrow extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div className="wineBackground">
        <Header {...this.props}/>
      <h1> Interesting facts about wine...</h1>
                    
                    
                    <h5>- Wine is made virtually in every country in the world -</h5>
                    <h5>- Intense fear or hatred of wine is called “oenophobia.” -</h5>
                    <h5>- The dark green wine bottle was an English invention, the work of Sir Kenelm Digby (1603-1665). Previously wine had been kept in goat skin bags. -</h5>
                    <h5>- The average age of a French oak tree harvested for use in creating wine barrels is 170 years. -</h5>
                    <h5>- European wines are named after their geographic locations while non-European wines are named after different grape varieties. -</h5>
                    <h5>- China has become the leading market for red wine—not just for its flavor. It’s a color favored by the government, and also is considered lucky. -</h5>
                    <h5>- The “Cheers” ritual started back in the Middle Ages, when poisoning was a favorite way to get rid of an enemy. To be sure their glass was poison-free, drinkers would first pour a bit of wine into each other’s glass, so if there was poison in one, it was now in both. -</h5>
                    
        <p></p>            
        <h4> Click to see more fun facts</h4>      
        <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />        
        <div className={classes.container}> 
               
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            <Paper elevation={4} className={classes.paper}>
                <img src={imgFour}/>
                <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Grow>
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            <Paper elevation={4} className={classes.paper}>
                <img src={imgFive}/>
                <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Grow>
          
          </div>
          <div className={classes.container}> 
          
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            <Paper elevation={4} className={classes.paper}>
                <img src={imgThree}/>
                <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Grow>
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            <Paper elevation={4} className={classes.paper}>
                <img src={imgSix}/>
                <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Grow>
          
          </div>

         <div className={classes.container}> 
          
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            <Paper elevation={4} className={classes.paper}>
                <img src={imgTen}/>
                <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Grow>
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            <Paper elevation={4} className={classes.paper}>
                <img src={imgEleven}/>
                <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Grow>
          
          </div>

          <div className={classes.container}> 
          
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            <Paper elevation={4} className={classes.paper}>
                <img src={img}/>
                <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Grow>          
          
          </div>
      </div>
    );
    
  }
}

SimpleGrow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleGrow);
