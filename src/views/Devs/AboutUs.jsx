import React from 'react';
import { StyledDevProfile } from '../../components/Styles/StyledDevProfile';
import { StyledDevSection } from '../../components/Styles/StyledDevSection';
export default function AboutUs() {
  return (
    <>
      <article>
        <h1>Meet the Developers</h1>
        <StyledDevSection>
          <StyledDevProfile>
            <h3>Andrea Cleland</h3>
            <img src="/images/andrea.png" />
            <p>
              I'm Andrea Cleland, a budding full-stack software engineer in
              Portland, Oregon. In addition to programming, I enjoy video games,
              audiobooks, hiking, and roller skating.
            </p>
          </StyledDevProfile>

          <StyledDevProfile>
            <h3>Cole Rossman</h3>
            <img src="/images/cole.jpg" />
            <p>
              I am a full-stack software engineer based in Portland, OR. When
              not coding, you can find me hiking in the Columbia gorge, rock
              climbing or trying the various amazing food carts Portland has to
              offer.
            </p>
          </StyledDevProfile>

          <StyledDevProfile>
            <h3>Joshua Stresing</h3>
            <img src="/images/josh.jpg" />
            <p>
              I'm Joshua Stresing and I enjoy gaming, coding, music, and ramen.
              Game logic fascinates me and I enjoy figuring it out and
              implementing it.
            </p>
          </StyledDevProfile>
        </StyledDevSection>
      </article>
    </>
  );
}
