import React from "react";
import styled from "styled-components";

const STextBubble = styled.div`
  .imessage {
    background-color: transparent;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    font-family: "SanFrancisco";
    font-size: 1.25rem;
    margin: 0 auto 1rem;
    /* max-width: 600px; */
    padding: 0.5rem 1.5rem;
  }

  .imessage p {
    border-radius: 1.15rem;
    line-height: 1.25;
    max-width: 75%;
    padding: 0.5rem 0.875rem;
    position: relative;
    word-wrap: break-word;
  }

  .imessage p::before,
  .imessage p::after {
    bottom: -0.1rem;
    content: "";
    height: 1rem;
    position: absolute;
  }

  p.from-me {
    align-self: flex-end;
    background-color: #248bf5;
    color: #fff;
  }

  p.from-me::before {
    border-bottom-left-radius: 0.8rem 0.7rem;
    border-right: 1rem solid #248bf5;
    right: -0.35rem;
    transform: translate(0, -0.1rem);
  }

  p.from-me::after {
    background-color: black;
    border-bottom-left-radius: 0.5rem;
    right: -40px;
    transform: translate(-30px, -2px);
    width: 10px;
  }

  p[class^="from-"] {
    margin: 0.5rem 0;
    width: fit-content;
  }

  p.from-me ~ p.from-me {
    margin: 0.25rem 0 0;
  }

  p.from-me ~ p.from-me:not(:last-child) {
    margin: 0.25rem 0 0;
  }

  p.from-me ~ p.from-me:last-child {
    margin-bottom: 0.5rem;
  }

  p.from-them {
    align-items: flex-start;
    background-color: #e5e5ea;
    color: #000;
  }

  p.from-them:before {
    border-bottom-right-radius: 0.8rem 0.7rem;
    border-left: 1rem solid #e5e5ea;
    left: -0.35rem;
    transform: translate(0, -0.1rem);
  }

  p.from-them::after {
    background-color: black;
    border-bottom-right-radius: 0.5rem;
    left: 20px;
    transform: translate(-30px, -2px);
    width: 10px;
  }

  p[class^="from-"].emoji {
    background: none;
    font-size: 2.5rem;
  }

  p[class^="from-"].emoji::before {
    content: none;
  }

  .no-tail::before {
    display: none;
  }

  .margin-b_none {
    margin-bottom: 0 !important;
  }

  .margin-b_one {
    margin-bottom: 1rem !important;
  }

  .margin-t_one {
    margin-top: 1rem !important;
  }

  /* general styling */
  @font-face {
    font-family: "SanFrancisco";
    src: url("https://cdn.rawgit.com/AllThingsSmitty/fonts/25983b71/SanFrancisco/sanfranciscodisplay-regular-webfont.woff2")
        format("woff2"),
      url("https://cdn.rawgit.com/AllThingsSmitty/fonts/25983b71/SanFrancisco/sanfranciscodisplay-regular-webfont.woff")
        format("woff");
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: normal;
    margin: 0;
  }

  h1 {
    font-weight: normal;
    margin-bottom: 0.5rem;
  }

  h2 {
    border-bottom: 1px solid #e5e5ea;
    color: #666;
    font-weight: normal;
    margin-top: 0;
    padding-bottom: 1.5rem;
  }

  @media screen and (max-width: 800px) {
    body {
      margin: 0 0.5rem;
    }

    .imessage {
      font-size: 1.05rem;
      margin: 0 auto 1rem;
      max-width: 600px;
      padding: 0.25rem 0.875rem;
    }

    .imessage p {
      margin: 0.5rem 0;
    }
  }
`;

const ChatScreen = () => {
  return (
    <STextBubble>
      <div className="imessage">
        <p className="from-them">
          It was loud. We just laid there and said &ldquo;is this an earthquake?
          I think this is an earthquake.&rdquo;
        </p>
        <p className="from-me">
          Like is this an earthquake just go back to sleep
        </p>
        <p className="from-them margin-b_one">
          It&rsquo;s more like &ldquo;this is an earthquake. Check the Internet.
          Yup. Earthquake. This is the size. This is the epicenter. Check social
          media. Make sure the East Coast knows I&rsquo;m alive. Okay, try and
          go back to sleep.&rdquo;
        </p>
        <p className="from-me no-tail emoji">👍🏻</p>
        <p className="from-me">Glad you&rsquo;re safe</p>

        <p className="from-me">Time to write some code where I left off</p>

        <p className="from-them">Previously on As the Code Turns</p>

        <p className="from-me no-tail margin-b_none">Previously...</p>
        <p className="from-me no-tail">
          Brock went to the hospital to check on Cyntheeah...
        </p>
        <p className="from-me no-tail">
          Notice the pretentious spelling of &ldquo;Cyntheeah&rdquo;...
        </p>
        <p className="from-me no-tail">
          While in her hospital room, Diego is standing outside looking through
          the door window and can hear the entire conversation because he has
          super hearing.
        </p>
        <p className="from-me margin-b_none">
          Elsewhere, Biff has plans to take down the entire Caspian family with
          his secret about how Roger Caspian used to be...REGINA Caspian!
        </p>
        <p className="from-them margin-b_one margin-t_one">Haha</p>
        <p className="from-me no-tail">
          And the budding romance between teens Erika and Johnny bloom
        </p>
        <p className="from-me">
          Back at the hospital, cuz who doesn&rsquo;t hang out at hospitals in
          their free time, amirite...
        </p>
        <p className="from-them margin-b_one margin-t_one">Riiiiight</p>
        <p className="from-me no-tail margin-b_none">
          Brock leaves Cyntheeah&rsquo;s room, and Diego sneaks in while she
          sleeps...
        </p>
        <p className="from-me no-tail">
          It&rsquo;s the worst hospital in the world cuz they leave her chart
          out for anyone to see...
        </p>
        <p className="from-me no-tail">
          While the nurse isn&rsquo;t watching Diego looks at her chart...
        </p>
        <p className="from-me no-tail">And discovers...</p>
        <p className="from-me no-tail">[bad music]...[Commercial]</p>
        <p className="from-me no-tail">...TO BE CONTINUED...</p>
        <p className="from-me">Gotta run, have a safe day in the sun ☀️</p>
        <p className="from-them margin-t_one">Haha, talk to you later.</p>

        <p className="from-me no-tail margin-b_none">
          Heiress Lexus von Doberman - cuz all towns have an heiress - takes an
          interest in her new pool man, Rodrigo...
        </p>
        <p className="from-me no-tail">
          Lexus&rsquo;s time sunbathing by the pool is interrupted by Biff who
          has some juicy information on the Caspian family...
        </p>
        <p className="from-me no-tail">
          The Caspians are the largest juice bar magnate in the tri-state area
          and Lexus plans to take them down, for no reason in particular, just
          because it&rsquo;s good daytime drama...
        </p>
        <p className="from-me">
          Incidentally, Lexus&rsquo;s daughter is Erika. And Erika&rsquo;s love
          interest Johnny? Johnny Caspian. Cuz no one saw that little plot twist
          coming...
        </p>

        <p className="from-me no-tail margin-b_none">
          Back at the hospital, Diego sneaks out of Cyntheeah&rsquo;s room with
          a copy of her chart under his arm, right in front of the nurse&rsquo;s
          station, but no one notices cuz all the nurses are gossiping. Again,
          worst. Hospital. Ever.
        </p>
        <p className="from-me no-tail">
          Diego sneaks around the corner to the vending machine, looks in the
          chart again, with one eyebrow raised and a smirk, and scheming music
          playing in the background...
        </p>
        <p className="from-me">[bad music]...[Commercial]</p>
        <p className="from-them margin-b_one margin-t_one">This is awesome</p>
        <p className="from-me no-tail">
          Brock returns to his home which is amazingly well-lit with track
          lighting in every room. His maid Juanita tells him that &ldquo;Ze
          strange man come by ask question about se&ntilde;or Brock&rdquo;.
          Brock makes a call and plans a meeting...
        </p>
        <p className="from-me no-tail">
          Meanwhile at the beach cabana, Erika, Johnny and friends makes plans
          for a weekend getaway cruise as all 17-year-olds do...
        </p>
        <p className="from-me">
          Incidentally, last week Erika and Johnny were 10 years-old, but kids
          don&rsquo;t age fast enough for daytime drama, so now they are 17!
          Overnight! Like magic!
        </p>

        <p className="from-me no-tail margin-b_none">
          Brock arrives at a restaurant for a lunch with his old marine buddy,
          Joze (not a misspelling) cuz nothing says &ldquo;secret meeting&rdquo;
          like a public restaurant in the middle of the day with plenty of
          on-lookers.
        </p>
        <p className="from-me no-tail">
          Back at the hospital Dr. Stewart Collins is examining Cyntheeah. Both
          went to high school together and Stewart had an unrequited crush on
          her. He looks for her chart but it&rsquo;s missing...
        </p>
        <p className="from-me no-tail">
          Dr. Stew asks the nurse if anyone has been in Cyntheeah&rsquo;s room
          and the nurse says &ldquo;just her brother...&rdquo;, to which Dr.
          Stew replies &ldquo;she has no brother...&rdquo;
        </p>
        <p className="from-me">[bad music]…[Commercial]</p>
        <p className="from-them margin-t_one">Haha</p>

        <p className="from-me no-tail margin-b_none">
          Brock walks outside the restaurant and gets a phone call from his
          mother, Amelia, who has more money than Jesus Christ and casually
          wears padded blazers at home for the fun of it...
        </p>
        <p className="from-me no-tail">
          &ldquo;Darling...just calling cuz I&rsquo;m dreading having drinks at
          the club with that Doberman bitch.&rdquo;
        </p>
        <p className="from-me no-tail">
          &ldquo;Can&rsquo;t talk now mom...&rdquo;
        </p>
        <p className="from-me no-tail">
          &ldquo;Yes, yes, always something to do with the downtrodden
          folk&rdquo;
        </p>
        <p className="from-me no-tail">
          As Brock hangs up he notices seated at a table across the street
          someone who suspiciously looks like Diego. But as a bus passes by the
          seat is now empty.
        </p>
        <p className="from-me no-tail">
          Joze heads to the beach club for his &ldquo;day job&rdquo; as the
          former Iraq vet is now in charge of the swanky up-scale beach
          resort...
        </p>
        <p className="from-me no-tail">
          He spots Johnny and whistles to his favorite cabana boy. &ldquo;Towels
          need to be changed in Cabana #5, lady and her poodle need more
          sunscreen.&ldquo;
        </p>
        <p className="from-me no-tail">
          Johnny, having forsaken his family&rsquo;s juice bar fortune, is
          working a &ldquo;real job&rdquo; for his own cash. Plus, the beach
          club is a good spot to make lots of coke deals.
        </p>
        <p className="from-me no-tail">
          Joze goes into his office, shuts the door, and opens his wardrobe
          filled with cheap Love Boat white jackets, &agrave; la Capt. Stubing.
          Behind the blazers is a safe...
        </p>
        <p className="from-me no-tail">
          Joze unlocks the safe and pulls out a stack of bills and two hand
          guns. He raises an eyebrow, loads a clip into one of the guns...
        </p>
        <p className="from-me">[bad music]...[Commericial]</p>

        <p className="from-them">This is GOLD!</p>

        <p className="from-me no-tail margin-b_none">
          Lexus and Amelia have drinks at the country club but each hates the
          other. Lexus casually mentions she has a new pool man. She also knows
          that Amelia has been sleeping with her right hand man Biff. No one
          know what any of this has to do with anything, but the scheming is
          afoot...
        </p>
        <p className="from-me no-tail">
          Back at the hospital, Brock returns to see Cyntheeah but Dr. Stew
          stops him in the hall. He asks about the missing chart, cuz doctors
          don&rsquo;t bother with security, they just do it all themselves. Dr.
          Stew won&rsquo;t let Brock see her...
        </p>
        <p className="from-me no-tail">
          Brock goes behind the nurses station and raids the drawers for some
          Vicodin, cuz the nurses are too busy doing something other than their
          job. Just as Brock turns the corner he&rsquo;s met face-to-face
          with...
        </p>
        <p className="from-me no-tail">DAMIAN CASPIAN!</p>
        <p className="from-me">
          Damian is the older brother to Johnny and the rebel of the Caspian
          juice bar clan. He&rsquo;s obviously not at the hospital to sell
          smoothies...
        </p>

        <p className="from-me no-tail margin-b_none">
          At the beach club, cabana boy Johnny is changing towels when he spots
          Biff. He knows Biff from when he&rsquo;d sneak out of Erika&rsquo;s
          bedroom at the same time Biff was sneaking out Lexus&rsquo;s window.
          Also Biff drives a 1984 Pontiac Fierro
        </p>
        <p className="from-me no-tail">
          Biff is there to pick up Erika and to score some blow from the high
          school dealers. Johnny hides behind a towel rack and sees Joze,
          sporting a Magnum PI Hawaiian shirt with two Glock 9&rsquo;s leaving
          his office.
        </p>
        <p className="from-me no-tail">
          As Joze leaves he spots Biff, and Biff spots him. The camera closes in
          on their faces and they squint...
        </p>
        <p className="from-me">[bad music]...[Commercial]</p>

        <p className="from-me no-tail margin-b_none">
          [Cut to Diego on a boat in the marina]
        </p>
        <p className="from-me no-tail">
          Diego is talking on the phone. Remarkably his phone service is crystal
          clear.
        </p>
        <p className="from-me">
          Back at the hospital, Damian and Brock stare each other down. No one
          says anything, no one flinches or blinks. Damian is holding a
          smoothie...
        </p>

        <p className="from-me no-tail margin-b_none">
          Brock turns around and goes back to Cyntheeah&rsquo;s room. The nurse
          tries to stop him, which is uncharacteristic of the nurse since she
          hasn&rsquo;t been doing her job at all today. As Brock opens the
          hospital room door he and the nurse see the bed is empty...
        </p>
        <p className="from-me no-tail">Cyntheeah is gone...</p>
        <p className="from-me no-tail">
          Damian strolls in behind: &ldquo;Well well well, isn&rsquo;t that
          lovely.&rdquo;
        </p>
        <p className="from-me no-tail">
          Lexus returns homes to find her pool man Rodrigo in her bedroom and
          looking through her drawers...
        </p>
        <p className="from-me no-tail">
          Lexus: &ldquo;What the hell?!&rdquo; Rodrigo: &ldquo;No hablo Englais,
          se&ntilde;ora.&rdquo; ¯\_(ツ)_/¯
        </p>
        <p className="from-me no-tail">
          She sees what he&rsquo;s holding. &ldquo;I think I have the perfect
          job for you, Rodrigo.&rdquo;
        </p>
        <p className="from-me">
          Joze is in his car applying a fake mustache to his face, cuz
          he&rsquo;s always been a Tom Selleck fan. He checks his Glock, puts on
          his sunglasses, then lets the tires of his Ford Ranchero squeal down
          the road.
        </p>

        <p className="from-me no-tail margin-b_none">
          The Caspians plan to introduce a new chocolate with red pepper
          smoothie at their juice bar that could cause controversy…and a make a
          few enemies...
        </p>
        <p className="from-me no-tail">
          Erika is at Johnny&rsquo;s house and both are packing for the weekend
          cruise. Their dialog is only for the younger viewers: Beyoncé this,
          Kanye that...
        </p>
        <p className="from-me no-tail">Diego&rsquo;s boat blows up.</p>
        <p className="from-me">...CLIFFHANGER...</p>
        <p className="from-me emoji">😎</p>
        <p className="from-them margin-t_one emoji">😱</p>
      </div>
    </STextBubble>
  );
};

export default ChatScreen;
