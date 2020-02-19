import React from 'react';
import {
  ThemeProvider,
  createTheme,
  withStyles,
  Arwes,
  Button,
  Table,
  Image,
  Frame
} from 'arwes';

const styles = theme => ({
  root: {
    padding: [theme.padding, 0],
    background: theme.background.primary.level0
  }
});

const App = () => (
  <ThemeProvider theme={createTheme()}>
    <Arwes animate show>
      {anim => (
        <div style={{ padding: 20, textAlign: 'center' }}>
          <h1>Arwes Test App</h1>
          <div style={{ padding: '20px', maxWidth: 400, margin: '0 auto' }}>
               <Frame
                   animate={true}
                   level={3}
                   corners={4}
                   layer='primary'
               >
                   <div style={{ padding: '20px 40px', fontSize: '32px' }}>
                       A SciFi Project
                   </div>
               </Frame>
           </div>
          <Button animate show={anim.entered}>Travel to Space</Button>

          <div style={{ padding: 20, margin: '0 auto', maxWidth: 800  }}>
               <Table
                   animate
                   headers={['Prop name', 'Type', 'Default', 'Description']}
                   dataset={[
                       ['name', 'string', '\'\'', 'The base name of the component'],
                       ['age', 'number', '0', 'The age of the component'],
                       ['married', 'bool', 'false', 'If the component is married'],
                   ]}
               />
           </div>

           <div style={{ margin: '0 auto', padding: 20, maxWidth: 600 }}>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Image animate resources='/static/img/wallpaper.jpg'>
                  The vast universe around us
              </Image>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              </p>
          </div>
        </div>
      )}
    </Arwes>
  </ThemeProvider>
);


export default App;
