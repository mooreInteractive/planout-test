import React from 'react';
import styles from './App.css';
import Experiment from './experiment';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
    this.userId = this.makeid();
  }
  makeid() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++ ) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  render() {
    this.userId = this.makeid();
    const exp = new Experiment({userId: this.userId });
    const abResult = exp.get('foo');
    const result = abResult || '1';
    return (
      <div className={styles.app}>
        A/B Result: {result} {result === '1' ? '(AB Test Service Failed, default value provided)' : ''}
      </div>
    );
  }
}
