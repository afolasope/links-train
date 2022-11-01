import React from 'react';
import { gitIcon, slackIcon } from '../assets';
import Column from './Column';

const data = [
  {
    id: 0,
    link: 'twitter link',
    desc: 'visit my twitter profile',
    url: 'https://twitter.com/afolasope_',
  },
  {
    id: 'btn__zuri',
    link: 'zuri team',
    desc: 'Meet the Zuri Family',
    url: 'https://training.zuri.team/',
  },
  {
    id: 'books',
    link: 'zuri books',
    desc: 'Zuris Library of books. You can find all kinds of tech related books right here on the Zuri librabry, you get access to free and premium books to help you with your tech journey.',
    url: 'http://books.zuri.team',
  },
  {
    id: 'book__python',
    link: 'python books',
    desc: 'Are you new to python? Grab a copy of my beginner friendly book on python.',
    url: 'http://books.zuri.team',
  },
  {
    id: 'pitch',
    link: 'background check for coders',
    url: 'https://backgroundcheck.zuri.team/',
    desc: 'Learn about the good, bad, and downright scary online activities of candidates and employees. Let us help you make better informed hiring decisions.',
  },
  {
    id: 'book__design',
    link: 'design books',
    desc: 'Get the best book money can get you on UI/UX.',
    url: 'https://books.zuri.team/design-rules',
  },
];

const Links = () => {
  return (
    <div className="links">
      <>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Column url={item.url} title={item.link} desc={item.desc} id={id} />
            </div>
          );
        })}
        <div className="social-icons">
          <a href="https://slack.com/">
            <img src={slackIcon} alt="slack" />
          </a>
          <a href="https://github.com/afolasope">
            <img src={gitIcon} alt="git" />
          </a>
        </div>
      </>
    </div>
  );
};

export default Links;
