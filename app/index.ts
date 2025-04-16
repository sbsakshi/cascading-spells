 const gameLevels = [
    {
      id: 1,
      title: "Sticky Spellbind",
      concept: "position: sticky",
      description: "Learn to make elements stay in place while scrolling",
      icon: "📌",
      subLevels: [
        {
          id: "1",
          title: "Basic Sticky Spell",
          description: "Make the navigation bar stay at the top while scrolling through the magical realm.",
          challenge:
            "The ethereal navigation bar refuses to heed your command! It drifts away with the scroll like a wayward spirit. Apply the sticky positioning spell to bind it to the top.",
          hint1:
            "Elements that must remain in view, even as the scroll moves, require a special positioning enchantment...",
          hint2:
            "The 'position: sticky' property binds elements to their position, preventing them from drifting with the scroll. Don't forget to set 'top: 0'!",
          successMessage:
            "By the ancient powers! Your spell has bound the nav to its place! The ethereal forces acknowledge your mastery of the sticky binding.",
          failMessage:
            "The arcane energies dissipate... Your incantation lacks the proper binding element. Perhaps the hints from the ancient tomes might guide you.",
          fixedHTML: `<div class="sprite-wrapper">
  <div class="sprite"></div>
</div>`,
          fixedCSS: `.sprite-wrapper {
  width: 100%;
  height: 800px;
  background-image: url('sky.jpg');
  position: relative;
}
  
@keyframes float {
  0% { transform: translateY(0); }
  100% { transform: translateY(-8px); }
}
    `,
          initialUserCSS: `/*cast your spell */
.sprite {
  width: 48px;
  height: 64px;
  position: absolute;
  top: 0;
  left:50%;
  z-index: 10;
  background-image: url('sprites/witch-002-NESW.png');
  background-repeat: no-repeat;
  background-position: -48px -64px;
  animation: float 1s ease-in-out infinite alternate;
}`,
          checkFunction: (userCSS:string) =>
            userCSS.includes("position: sticky") && (userCSS.includes("top: 0") || userCSS.includes("top:0")),
          lesson: `<div class="lesson-content">
            <h3>The Sticky Positioning Spell</h3>
            <p>In the magical world of CSS, the <code>position: sticky</code> property creates elements that switch between <code>relative</code> and <code>fixed</code> positioning based on the scroll position.</p>
            <p>When you apply this enchantment, the element behaves as <code>position: relative</code> until it crosses a specified threshold (like <code>top: 0</code>), then it becomes <code>position: fixed</code> until its parent exits the viewport.</p>
            <div class="spell-example">
              <pre><code>.sticky-element {
    position: sticky;
    top: 0; /* The threshold */
  }</code></pre>
            </div>
            <p>This powerful spell is perfect for navigation bars, headers, or any element you wish to keep visible while the user scrolls through your magical realm.</p>
          </div>`,
        },
        {
          id: "2",
          title: "Sticky Debugging",
          description: "Fix the broken sticky spell by adding the missing property.",
          challenge:
            "Oh no! The apprentice wizard cast an incomplete sticky spell. The navigation has position: sticky but it's still scrolling away! Find what's missing to complete the enchantment.",
          hint1:
            "The sticky spell needs a threshold point to know when to activate. What property defines this threshold?",
          hint2:
            "Without the 'top' property, the sticky spell doesn't know when to activate. Add 'top: 0' to make it stick at the top of the viewport.",
          successMessage:
            "Excellent debugging! You've identified the missing component of the sticky spell. The navigation now obeys your command!",
          failMessage:
            "The spell remains incomplete. The navigation has position: sticky but still scrolls away. What threshold property is missing",
          fixedHTML: `<div class="sprite-wrapper">
  <div class="sprite"></div>
</div>`,
          fixedCSS: `.sprite-wrapper {
  width: 100%;
  height: 800px;
  background-image: url('sky.jpg');
  position: relative;
}
  
@keyframes float {
  0% { transform: translateY(0); }
  100% { transform: translateY(-8px); }
}
    `,
          initialUserCSS: `/*cast your spell */
.sprite {
  width: 48px;
  height: 64px;
  position: sticky;
  left:50%;
  z-index: 10;
  background-image: url('sprites/witch-002-NESW.png');
  background-repeat: no-repeat;
  background-position: -48px -64px;
  animation: float 1s ease-in-out infinite alternate;
}`,
          checkFunction: (userCSS:string) =>
            userCSS.includes("position: sticky") && (userCSS.includes("top: 0") || userCSS.includes("top:0")),
          lesson: `<div class="lesson-content">
            <h3>Debugging Sticky Spells</h3>
            <p>When a sticky spell fails, there are common mistakes to check:</p>
            <ol>
              <p><li>Missing threshold: A sticky element needs a threshold property (<code>top</code>, <code>bottom</code>, <code>left</code>, or <code>right</code>) to know when to become "sticky".</li></p>
              <p><li>Overflow issues: The parent container must not have <code>overflow: hidden</code> as it prevents the sticky magic from working.</li></p>
              <p><li>Z-index conflicts: Sometimes other elements might appear above your sticky element due to stacking context issues.</li></p>
            </ol>
            <p>In this challenge, the sticky spell has been cast but lacks the threshold property, so it doesn't know when to activate!</p>
          </div>`,
        },
      ],
    },
    {
      id: 2,
      title: "Shadow Cloak",
      concept: "box-shadow, text-shadow",
      description: "Master the art of creating magical shadows and glows",
      icon: "✨",
      subLevels: [
        {
          id: "1",
          title: "Basic Shadow Spell",
          description: "Add a simple shadow to make the element appear to float.",
          challenge:
            "The magical orb looks flat and lifeless. Cast a shadow spell to make it appear to hover above the surface!",
          hint1:
            "The box-shadow property can create the illusion of elevation with a simple shadow beneath an element...",
          hint2: "Try 'box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3)' to create a soft shadow below the orb.",
          successMessage:
            "Excellent! The orb now appears to float above the surface. Your shadow spell creates a convincing illusion of depth!",
          failMessage: "The orb still appears flat. Your shadow spell needs adjustment to create the floating effect.",
          fixedHTML: `<div class="shadow-container">
    <div class="magical-orb"></div>
  </div>`,
          fixedCSS: `.shadow-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background: linear-gradient(to bottom, #0f0f1a 0%, #1e1b4b 100%);
  }
  
  .magical-orb {
    width: 100px;
    height: 100px;
    background: radial-gradient(circle at 30% 30%, #9333ea, #4c1d95);
    border-radius: 50%;
  }`,
          initialUserCSS: `/* 🧙‍♀️ Cast a shadow spell to make the orb float */
  .magical-orb {
    /* Your shadow spell here */
  }`,
          checkFunction: (userCSS:string) =>
            userCSS.includes("box-shadow") &&
            (userCSS.includes("px") || userCSS.includes("em") || userCSS.includes("rem")),
          lesson: `<div class="lesson-content">
            <h3>The Basic Shadow Spell</h3>
            <p>The <code>box-shadow</code> property creates magical shadows around elements, adding depth and dimension to your enchanted creations.</p>
            <p>The basic syntax follows this pattern:</p>
            <div class="spell-example">
              <pre><code>box-shadow: [horizontal offset] [vertical offset] [blur radius] [spread radius] [color];</code></pre>
            </div>
            <p>For example:</p>
            <div class="spell-example">
              <pre><code>box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);</code></pre>
            </div>
            <p>This creates a shadow 10px below the element, with a 15px blur, using a semi-transparent black color.</p>
          </div>`,
        },
        {
          id: "2",
          title: "Magical Glow Effect",
          description: "Create a colorful glow around the witch's potion.",
          challenge:
            "The witch's potion needs to radiate magical energy! Cast a colorful glow spell to show its powerful properties.",
          hint1:
            "A magical glow is like a shadow, but with a bright color and a negative spread to make it appear to emit light...",
          hint2: "Try 'box-shadow: 0 0 15px 5px #9333ea' to create a purple glow that radiates from the potion.",
          successMessage:
            "Magnificent! The potion now radiates with arcane energy. Your mastery of the glow spell is impressive!",
          failMessage: "The potion still lacks its magical aura. Adjust your glow spell to make it radiate energy.",
          fixedHTML: `<div class="potion-container">
    <div class="potion-bottle">
      <div class="potion-liquid"></div>
      <div class="potion-neck"></div>
    </div>
  </div>`,
          fixedCSS: `.potion-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: #0f0f1a;
  }
  
  .potion-bottle {
    position: relative;
    width: 80px;
    height: 120px;
  }
  
  .potion-liquid {
    position: absolute;
    bottom: 0;
    width: 80px;
    height: 80px;
    background: linear-gradient(to bottom, #9333ea, #4c1d95);
    border-radius: 0 0 40px 40px;
  }
  
  .potion-neck {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 40px;
    background-color: #9333ea;
    border-radius: 10px 10px 0 0;
  }`,
          initialUserCSS: `/* 🧙‍♀️ Make the potion glow with magical energy */
  .potion-liquid {
    /* Your glow spell here */
  }`,
          checkFunction: (userCSS:string) =>
            userCSS.includes("box-shadow") &&
            (userCSS.includes("rgb") || userCSS.includes("#") || userCSS.includes("hsl")|| userCSS.includes("px")),
          lesson: `<div class="lesson-content">
            <h3>The Magical Glow Enchantment</h3>
            <p>While shadows create depth by darkening, glows create magical effects by emitting light!</p>
            <p>To create a glow effect, use <code>box-shadow</code> with:</p>
            <ul>
              <p><li>Small or zero offset values (to center the glow)</li></p>
              <p><li>A significant blur radius (to create the soft glow effect)</li></p>
              <p><li>A bright or vibrant color</li></p>
            </ul>
            <div class="spell-example">
              <pre><code>box-shadow: 0 0 15px 5px #9333ea; /* Purple glow */</code></pre>
            </div>
            <p>The third value (15px) controls the blur spread, while the fourth value (5px) controls how far the glow extends.</p>
          </div>`,
        },
        {
          id: "3",
          title: "Glowing Text Enchantment",
          description: "Make the magical incantation text glow with power.",
          challenge:
            "The ancient incantation needs to pulse with magical energy! Cast a text-shadow spell to make the words glow with power.",
          hint1: "Text can glow just like elements, but requires a different spell: text-shadow...",
          hint2: "Try 'text-shadow: 0 0 10px #ff6b6b' to make the text glow with fiery energy.",
          successMessage:
            "The words now pulse with arcane power! Your text-shadow spell has brought the ancient incantation to life!",
          failMessage:
            "The incantation remains ordinary. Your text-shadow spell needs adjustment to create the magical glow.",
          fixedHTML: `<div class="incantation-container">
    <div class="magical-text">Ignis Arcanum</div>
  </div>`,
          fixedCSS: `.incantation-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: #0f0f1a;
  }
  
  .magical-text {
    font-size: 48px;
    color: #ff6b6b;
    font-family: 'Luminari', fantasy;
  }
  
  @keyframes pulse {
    0% { opacity: 0.8; }
    50% { opacity: 1; }
    100% { opacity: 0.8; }
  }
  
  .magical-text {
    animation: pulse 2s infinite;
  }`,
          initialUserCSS: `/* 🧙‍♀️ Make the incantation text glow with magical energy */
  .magical-text {
    /* Your text-shadow spell here */
  }`,
          checkFunction: (userCSS:string) =>
            userCSS.includes("text-shadow") &&
            (userCSS.includes("px") || userCSS.includes("em") || userCSS.includes("rem")),
          lesson: `<div class="lesson-content">
            <h3>The Text Glow Enchantment</h3>
            <p>While <code>box-shadow</code> works on elements, magical text requires the <code>text-shadow</code> property to create glowing effects.</p>
            <p>The syntax is similar but simpler:</p>
            <div class="spell-example">
              <pre><code>text-shadow: [horizontal offset] [vertical offset] [blur radius] [color];</code></pre>
            </div>
            <p>For a magical glow effect:</p>
            <div class="spell-example">
              <pre><code>text-shadow: 0 0 10px #ff6b6b; /* Fiery red glow */</code></pre>
            </div>
            <p>You can also stack multiple text shadows for more intense magical effects:</p>
            <div class="spell-example">
              <pre><code>text-shadow: 0 0 5px #ff6b6b, 0 0 15px #ff6b6b, 0 0 30px #ff6b6b;</code></pre>
            </div>
          </div>`,
        },
      ],
    },
    {
      id: 3,
      title: "Disguise Spell",
      concept: "transform, scale, rotate",
      description: "Master transformation magic to alter appearances",
      icon: "🔄",
      subLevels: [
        {
          id: "1",
          title: "Basic Rotation",
          description: "Rotate an element to match a target orientation.",
          challenge: "The magical rune is misaligned! Rotate it to match the target orientation and unlock its power.",
          hint1: "The transform property with rotate() can turn elements to specific angles...",
          hint2: "Try 'transform: rotate(45deg)' to turn the rune by 45 degrees clockwise.",
          successMessage:
            "Perfect alignment! The rune now resonates with magical energy. Your rotation spell was cast perfectly!",
          failMessage: "The rune is still misaligned. Adjust your rotation spell to match the target orientation.",
          fixedHTML: `<div class="rune-container">
    <div class="target-orientation"></div>
    <div class="magical-rune"></div>
  </div>`,
          fixedCSS: `.rune-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 300px;
    background-color: #0f0f1a;
  }
  
  .target-orientation {
    width: 100px;
    height: 100px;
    border: 2px dashed #7e22ce;
    transform: rotate(45deg);
    opacity: 0.5;
  }
  
  .magical-rune {
    width: 100px;
    height: 100px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%239333ea' d='M50 5 L95 50 L50 95 L5 50 Z M50 20 L80 50 L50 80 L20 50 Z'/%3E%3C/svg%3E");
  }`,
          initialUserCSS: `/* 🧙‍♀️ Rotate the rune to match the target orientation */
  .magical-rune {
    /* Your rotation spell here */
  }`,
          checkFunction: (userCSS:string) => {
            const rotateMatch = userCSS.match(/rotate$$\s*(\d+)deg\s*$$/)
            return rotateMatch && Number.parseInt(rotateMatch[1]) === 45
          },
          lesson: `<div class="lesson-content">
            <h3>The Rotation Enchantment</h3>
            <p>The <code>transform</code> property with the <code>rotate()</code> function allows you to turn elements to specific angles.</p>
            <p>Rotation is specified in degrees (deg), with positive values rotating clockwise:</p>
            <div class="spell-example">
              <pre><code>transform: rotate(45deg); /* 45 degrees clockwise */
  transform: rotate(-90deg); /* 90 degrees counter-clockwise */
  transform: rotate(0.5turn); /* Half turn (180 degrees) */</code></pre>
            </div>
            <p>The rotation happens around the center point of the element by default, but you can change this with <code>transform-origin</code>.</p>
          </div>`,
        },
        {
          id: "2",
          title: "Scaling Magic",
          description: "Resize an element to match a target size.",
          challenge:
            "The magical crystal needs to grow to match the energy field! Cast a scaling spell to resize it properly.",
          hint1: "The transform property with scale() can resize elements proportionally...",
          hint2: "Try 'transform: scale(1.5)' to make the crystal 1.5 times larger in all dimensions.",
          successMessage:
            "Perfect sizing! The crystal now resonates with the energy field. Your scaling spell was cast with precision!",
          failMessage: "The crystal is still the wrong size. Adjust your scaling spell to match the energy field.",
          fixedHTML: `<div class="crystal-container">
    <div class="energy-field"></div>
    <div class="magical-crystal"></div>
  </div>`,
          fixedCSS: `.crystal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: #0f0f1a;
    position: relative;
  }
  
  .energy-field {
    position: absolute;
    width: 150px;
    height: 150px;
    border: 2px dashed #7e22ce;
    border-radius: 50%;
    opacity: 0.5;
  }
  
  .magical-crystal {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #9333ea 0%, #4c1d95 100%);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }`,
          initialUserCSS: `/* 🧙‍♀️ Scale the crystal to match the energy field */
  .magical-crystal {
    /* Your scaling spell here */
  }`,
          checkFunction: (userCSS:string) => {
            const scaleMatch = userCSS.match(/scale$$\s*(1\.5|1,5)\s*$$/)
            return scaleMatch || (userCSS.includes("scale") && userCSS.includes("1.5"))
          },
          lesson: `<div class="lesson-content">
            <h3>The Scaling Enchantment</h3>
            <p>The <code>transform</code> property with the <code>scale()</code> function allows you to resize elements without changing their position in the document flow.</p>
            <p>Scaling can be uniform or different for width and height:</p>
            <div class="spell-example">
              <pre><code>transform: scale(1.5); /* Scale 1.5x in both dimensions */
  transform: scale(2, 1); /* Scale 2x horizontally, unchanged vertically */
  transform: scaleX(0.5); /* Scale to half width only */
  transform: scaleY(2); /* Double the height only */</code></pre>
            </div>
            <p>A scale value of 1 represents the original size, values greater than 1 enlarge, and values less than 1 shrink the element.</p>
          </div>`,
        },
        {
          id: "3",
          title: "Combined Transformations",
          description: "Apply multiple transformations to create a complex disguise.",
          challenge:
            "The witch must disguise herself to infiltrate the goblin market! Use combined transformation magic to alter her appearance.",
          hint1: "Multiple transform functions can be combined in a single transform property...",
          hint2: "Try 'transform: rotate(45deg) scale(0.8) translateX(20px)' to create a complex disguise.",
          successMessage:
            "Perfect disguise! The witch has transformed and can now blend in with the magical creatures at the market.",
          failMessage:
            "The disguise is incomplete... The transformation spell needs more power. Try combining multiple transform functions.",
          fixedHTML: `<div class="disguise-container">
    <div class="target-disguise"></div>
    <div class="witch-sprite"></div>
  </div>`,
          fixedCSS: `.disguise-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 300px;
    background-color: #0f0f1a;
  }
  
  .target-disguise {
    width: 80px;
    height: 80px;
    background-color: rgba(126, 34, 206, 0.3);
    border: 2px dashed #7e22ce;
    transform: rotate(45deg) scale(0.8) translateX(20px);
  }
  
  .witch-sprite {
    width: 80px;
    height: 80px;
    background-color: #7e22ce;
    position: relative;
  }
  
  .witch-sprite::before {
    content: '🧙‍♀️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
  }`,
          initialUserCSS: `/* 🧙‍♀️ Transform the witch to match the target disguise */
  .witch-sprite {
    /* Your combined transformation spell here */
  }`,
          checkFunction: (userCSS:string) =>
            userCSS.includes("transform") &&
            userCSS.includes("rotate") &&
            userCSS.includes("scale") &&
            userCSS.includes("translateX"),
          lesson: `<div class="lesson-content">
            <h3>Combined Transformation Magic</h3>
            <p>The true power of transformation magic comes from combining multiple effects in a single spell!</p>
            <p>You can chain multiple transform functions together in one declaration:</p>
            <div class="spell-example">
              <pre><code>transform: rotate(45deg) scale(0.8) translateX(20px);</code></pre>
            </div>
            <p>Important magical principles to remember:</p>
            <ul>
              <p><li>The order of transformations matters! They're applied from right to left</li></p>
              <p><li>Each transformation builds upon the previous one</li></p>
              <p><li>For complex illusions, you can combine any number of transformations</li></p>
            </ul>
          </div>`,
        },
      ],
    },
    {
      id: 4,
      title: "Secret Portal",
      concept: "z-index",
      description: "Control which magical elements appear in front of others",
      icon: "🌀",
      subLevels: [
        {
          id: "1",
          title: "Basic Z-Index Magic",
          description: "Control which element appears on top of another.",
          challenge:
            "The magical portal is hidden behind the guard! Use z-index magic to bring the portal to the foreground.",
          hint1: "The z-index property controls the stacking order of positioned elements...",
          hint2: "Try giving the portal a higher z-index value than the guard to make it appear in front.",
          successMessage:
            "Success! The portal now appears in front of the guard. Your command of the z-index plane is impressive!",
          failMessage: "The portal remains hidden. Adjust your z-index values to change the stacking order.",
          fixedHTML: `<div class="portal-scene">
    <div class="portal"></div>
    <div class="guard"></div>
  </div>`,
          fixedCSS: `.portal-scene {
    position: relative;
    height: 300px;
    background-color: #0f0f1a;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .portal {
    position: absolute;
    width: 100px;
    height: 150px;
    background: radial-gradient(ellipse at center, #9333ea, #4c1d95);
    border-radius: 50%;
    z-index: 1;
  }
  
  .guard {
    position: absolute;
    width: 60px;
    height: 80px;
    background-color: #7e22ce;
    z-index: 2;
  }
  
  .guard::before {
    content: '👹';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
  }`,
          initialUserCSS: `/* 🧙‍♀️ Bring the portal to the foreground */
  .portal {
    /* Your z-index spell here */
  }`,
          checkFunction: (userCSS:string) => {
            const portalZIndex = userCSS.match(/z-index\s*:\s*(\d+)/)
            return portalZIndex && Number.parseInt(portalZIndex[1]) > 2
          },
          lesson: `<div class="lesson-content">
            <h3>The Z-Index Dimension</h3>
            <p>The <code>z-index</code> property controls the third dimension of your magical layouts - which elements appear in front of or behind others.</p>
            <p>Key principles of z-index magic:</p>
            <ul>
              <p><li>Only works on positioned elements (position: relative, absolute, fixed, or sticky)</li></p>
              <p><li>Higher values appear in front of elements with lower values</li></p>
              <p><li>Default value is auto (effectively 0)</li></p>
            </ul>
            <div class="spell-example">
              <pre><code>.foreground { z-index: 10; }
  .background { z-index: 1; }</code></pre>
            </div>
          </div>`,
        },
        {
          id: "2",
          title: "Z-Index Debugging",
          description: "Fix a broken stacking context to reveal the hidden treasure.",
          challenge:
            "The treasure chest is hidden by a mysterious force! Debug the z-index issues to reveal the treasure.",
          hint1:
            "Check if all elements that need z-index have proper positioning. Z-index only works on positioned elements...",
          hint2:
            "The treasure element needs both a z-index AND a position property (like position: relative) to appear correctly.",
          successMessage:
            "The treasure is revealed! You've successfully debugged the z-index issue by adding proper positioning.",
          failMessage:
            "The treasure remains hidden. Remember that z-index requires positioned elements to work properly.",
          fixedHTML: `<div class="treasure-scene">
    <div class="mist"></div>
    <div class="treasure"></div>
  </div>`,
          fixedCSS: `.treasure-scene {
    position: relative;
    height: 300px;
    background-color: #0f0f1a;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  .mist {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.3));
    z-index: 5;
  }
  
  .treasure {
    width: 80px;
    height: 80px;
    z-index: 10;
  }
  
  .treasure::before {
    content: '💎';
    font-size: 50px;
  }`,
          initialUserCSS: `/* 🧙‍♀️ Fix the z-index issue to reveal the treasure */
  .treasure {
    /* The treasure has z-index: 10 but is still hidden! */
    /* What's missing? */
  }`,
          checkFunction: (userCSS:string) =>
            userCSS.includes("position") &&
            (userCSS.includes("relative") ||
              userCSS.includes("absolute") ||
              userCSS.includes("fixed") ||
              userCSS.includes("sticky")),
          lesson: `<div class="lesson-content">
            <h3>Z-Index Debugging</h3>
            <p>When z-index spells fail, there are common issues to check:</p>
            <ol>
              <p><li><strong>Missing positioning:</strong> Z-index only works on positioned elements. An element must have <code>position: relative</code>, <code>absolute</code>, <code>fixed</code>, or <code>sticky</code>.</li></p>
              <p><li><strong>Stacking context:</strong> Z-index values are compared only within the same stacking context.</li></p>
              <p><li><strong>Parent elements:</strong> If a parent has a lower z-index, children can't appear above elements with higher z-index than their parent.</li></p>
            </ol>
            <p>The most common mistake is forgetting to add positioning:</p>
            <div class="spell-example">
              <pre><code>.element {
    position: relative; /* Required for z-index to work */
    z-index: 10;
  }</code></pre>
            </div>
          </div>`,
        },
        {
          id: "3",
          title: "Layered Portal Magic",
          description: "Create a complex magical portal with multiple layers.",
          challenge:
            "Create a magical portal with three layers - the outer ring, inner ring, and core - each with the correct stacking order.",
          hint1: "You'll need to set different z-index values for each layer of the portal...",
          hint2:
            "The outer ring should have the lowest z-index, the inner ring a middle value, and the core the highest value.",
          successMessage: "Magnificent! Your portal's layers are perfectly arranged, creating a truly magical effect!",
          failMessage:
            "The portal layers are not in the correct order. Adjust your z-index values to create the proper magical effect.",
          fixedHTML: `<div class="layered-portal">
    <div class="portal-outer"></div>
    <div class="portal-inner"></div>
    <div class="portal-core"></div>
  </div>`,
          fixedCSS: `.layered-portal {
    position: relative;
    height: 300px;
    background-color: #0f0f1a;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .portal-outer {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(147, 51, 234, 0.2), rgba(147, 51, 234, 0.5));
  }
  
  .portal-inner {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(147, 51, 234, 0.5), rgba(147, 51, 234, 0.8));
  }
  
  .portal-core {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(circle at center, #9333ea, #4c1d95);
  }`,
          initialUserCSS: `/* 🧙‍♀️ Arrange the portal layers with the correct z-index values */
  .portal-outer {
    /* Outer ring z-index */
  }
  
  .portal-inner {
    /* Inner ring z-index */
  }
  
  .portal-core {
    /* Core z-index */
  }`,
          checkFunction: (userCSS:string) => {
            const outerMatch = userCSS.match(/\.portal-outer\s*{[^}]*z-index\s*:\s*(\d+)/)
            const innerMatch = userCSS.match(/\.portal-inner\s*{[^}]*z-index\s*:\s*(\d+)/)
            const coreMatch = userCSS.match(/\.portal-core\s*{[^}]*z-index\s*:\s*(\d+)/)
  
            if (!outerMatch || !innerMatch || !coreMatch) return false
  
            const outerZ = Number.parseInt(outerMatch[1])
            const innerZ = Number.parseInt(innerMatch[1])
            const coreZ = Number.parseInt(coreMatch[1])
  
            return outerZ < innerZ && innerZ < coreZ
          },
          lesson: `<div class="lesson-content">
            <h3>Layered Z-Index Magic</h3>
            <p>Creating complex magical effects often requires multiple layers with carefully arranged z-index values.</p>
            <p>When working with multiple layers:</p>
            <ul>
              <p><li>Plan your stacking order from back to front</li></p>
              <p><li>Use consistent z-index increments (like 10, 20, 30) to leave room for future layers</li></p>
              <p><li>Remember that all elements need positioning for z-index to work</li></p>
            </ul>
            <div class="spell-example">
              <pre><code>.background-layer {
    position: absolute;
    z-index: 10;
  }
  .middle-layer {
    position: absolute;
    z-index: 20;
  }
  .foreground-layer {
    position: absolute;
    z-index: 30;
  }</code></pre>
            </div>
          </div>`,
        },
      ],
    },
    {
      id: 5,
      title: "Flight Path",
      concept: "@keyframes, animation",
      description: "Create magical animations with keyframes",
      icon: "🧹",
      subLevels: [
        {
          id: "1",
          title: "Basic Animation",
          description: "Create a simple animation to make an element float.",
          challenge: "The magical feather seems lifeless! Cast an animation spell to make it float up and down gently.",
          hint1: "First define keyframes for the floating motion, then apply the animation to the feather...",
          hint2:
            "Use '@keyframes float' to define the up and down movement, then apply it with 'animation: float 2s infinite ease-in-out alternate'.",
          successMessage: "Beautiful! The feather now floats with magical grace. Your animation spell works perfectly!",
          failMessage:
            "The feather remains still. Make sure to define keyframes and apply the animation property correctly.",
          fixedHTML: `<div class="feather-container">
    <div class="magical-feather"></div>
  </div>`,
          fixedCSS: `.feather-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: #0f0f1a;
  }
  
  .magical-feather {
    width: 60px;
    height: 100px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 100'%3E%3Cpath fill='%239333ea' d='M30,0 C40,20 60,40 60,60 C60,80 40,100 30,100 C20,100 0,80 0,60 C0,40 20,20 30,0 Z'/%3E%3C/svg%3E");
  }`,
          initialUserCSS: `/* 🧙‍♀️ Animate the feather to float up and down */
  /* First, define your keyframes */
  @keyframes float {
    /* Define your animation keyframes here */
  }
  
  .magical-feather {
    /* Apply your animation here */
  }`,
          checkFunction: (userCSS:string) =>
            userCSS.includes("@keyframes float") &&
            userCSS.includes("animation") &&
            (userCSS.includes("translateY") || userCSS.includes("transform")),
          lesson: `<div class="lesson-content">
            <h3>Basic Animation Magic</h3>
            <p>CSS animations bring elements to life through magical movement! Creating animations is a two-step process:</p>
            <ol>
              <p><li>Define keyframes using <code>@keyframes</code> to specify what happens during the animation</li></p>
              <p><li>Apply the animation to an element using the <code>animation</code> property</li></p>
            </ol>
            <p>For a simple floating animation:</p>
            <div class="spell-example">
              <pre><code>@keyframes float {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
  }
  
  .element {
    animation: float 2s infinite ease-in-out alternate;
  }</code></pre>
            </div>
            <p>The animation property combines several values: name, duration, iteration count, timing function, and direction.</p>
          </div>`,
        },
        {
          id: "2",
          title: "Flight Path Animation",
          description: "Create a horizontal flight animation for the witch's broom.",
          challenge: "The witch's broom awaits! Create a flight animation to make it soar across the enchanted sky.",
          hint1: "Define keyframes that move the broom from left to right using translateX...",
          hint2:
            "Use '@keyframes fly' with transforms to move from left to right, then apply it with 'animation: fly 4s infinite'.",
          successMessage:
            "Magnificent! The broom soars through the sky with grace. Your animation spell is powerful indeed!",
          failMessage:
            "The broom refuses to fly... Your animation needs more magical energy. Check your keyframes and animation properties.",
          fixedHTML: `<div class="sky-container">
    <div class="clouds"></div>
    <div class="broom"></div>
  </div>`,
          fixedCSS: `.sky-container {
    position: relative;
    height: 300px;
    background: linear-gradient(to bottom, #1e40af, #3b82f6);
    overflow: hidden;
  }
  
  .clouds {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 24' width='56' height='24'%3E%3Cpath fill='%23ffffff' fillOpacity='0.4' d='M42.9 4.2c2.1 0 3.8 1.7 3.8 3.8 0 0.5-0.1 1-0.3 1.5 0.6 0.2 1.1 0.5 1.4 0.9 0.8 0.9 1.2 1.9 1.2 3.1 0 1.1-0.4 2.1-1.2 3-0.8 0.8-1.7 1.2-2.8 1.2h-16c-1.1 0-2.1-0.4-2.9-1.2-0.8-0.8-1.2-1.9-1.2-3 0-1.2 0.4-2.2 1.2-3.1 0.8-0.8 1.8-1.2 2.9-1.2 0.2 0 0.4 0 0.6 0.1 0-0.1 0-0.2 0-0.3 0-2.1 1.7-3.8 3.8-3.8 0.9 0 1.7 0.3 2.4 0.9 0.7-1.2 2-2 3.5-2 2.2 0 4 1.8 4 4 0 0.3 0 0.5-0.1 0.8 0.3-0.1 0.5-0.1 0.7-0.1zM14.9 4.2c2.1 0 3.8 1.7 3.8 3.8 0 0.5-0.1 1-0.3 1.5 0.6 0.2 1.1 0.5 1.4 0.9 0.8 0.9 1.2 1.9 1.2 3.1 0 1.1-0.4 2.1-1.2 3-0.8 0.8-1.7 1.2-2.8 1.2h-16c-1.1 0-2.1-0.4-2.9-1.2-0.8-0.8-1.2-1.9-1.2-3 0-1.2 0.4-2.2 1.2-3.1 0.8-0.8 1.8-1.2 2.9-1.2 0.2 0 0.4 0 0.6 0.1 0-0.1 0-0.2 0-0.3 0-2.1 1.7-3.8 3.8-3.8 0.9 0 1.7 0.3 2.4 0.9 0.7-1.2 2-2 3.5-2 2.2 0 4 1.8 4 4 0 0.3 0 0.5-0.1 0.8 0.3-0.1 0.5-0.1 0.7-0.1z'%3E%3C/path%3E%3C/svg%3E");
  }
  
  .broom {
    position: absolute;
    width: 80px;
    height: 20px;
    background-color: #7e22ce;
    bottom: 50%;
    left: 0;
  }
  
  .broom::before {
    content: '🧹';
    position: absolute;
    top: -10px;
    left: 0;
    font-size: 30px;
  }`,
          initialUserCSS: `/* 🧙‍♀️ Create a flight animation for the broom */
  /* First define your keyframes */
  @keyframes fly {
    /* Define your animation keyframes here */
  }
  
  .broom {
    /* Apply your animation here */
  }`,
          checkFunction: (userCSS:string) =>
            userCSS.includes("@keyframes fly") &&
            userCSS.includes("animation") &&
            (userCSS.includes("translateX") || userCSS.includes("left")),
          lesson: `<div class="lesson-content">
            <h3>Flight Path Animation</h3>
            <p>Creating a flight path animation requires moving an element from one position to another over time.</p>
            <p>There are two main approaches:</p>
            <ol>
              <p><li>Using <code>transform: translateX()</code> (preferred for performance)</li></p>
              <p><li>Animating the <code>left</code> property (simpler but less performant)</li></p>
            </ol>
            <div class="spell-example">
              <pre><code>/* Using transforms (better performance) */
  @keyframes fly {
    0% { transform: translateX(-100px); }
    100% { transform: translateX(calc(100vw + 100px)); }
  }
  
  /* Using position properties */
  @keyframes fly {
    0% { left: -100px; }
    100% { left: 100%; }
  }</code></pre>
            </div>
            <p>Apply the animation with timing and iteration settings:</p>
            <div class="spell-example">
              <pre><code>.broom {
    animation: fly 4s linear infinite;
  }</code></pre>
            </div>
          </div>`,
        },
        {
          id: "3",
          title: "Complex Animation Path",
          description: "Create a complex animation with multiple keyframes.",
          challenge:
            "The magical butterfly needs to follow a figure-eight path! Create a complex animation with multiple keyframes.",
          hint1:
            "Use multiple keyframe percentages (0%, 25%, 50%, 75%, 100%) to define points along the figure-eight path...",
          hint2:
            "Combine translateX and translateY at different keyframe points to create the curved figure-eight motion.",
          successMessage:
            "Extraordinary! The butterfly now follows a perfect figure-eight path. Your mastery of complex animations is impressive!",
          failMessage:
            "The butterfly's path isn't quite right. Try using more keyframe percentages to define a smoother figure-eight path.",
          fixedHTML: `<div class="garden-container">
    <div class="butterfly"></div>
    <div class="flower flower-1"></div>
    <div class="flower flower-2"></div>
    <div class="flower flower-3"></div>
  </div>`,
          fixedCSS: `.garden-container {
    position: relative;
    height: 300px;
    background-color: #0f0f1a;
    overflow: hidden;
  }
  
  .butterfly {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .butterfly::before {
    content: '🦋';
    font-size: 30px;
  }
  
  .flower {
    position: absolute;
    width: 30px;
    height: 30px;
  }
  
  .flower::before {
    content: '🌸';
    font-size: 30px;
  }
  
  .flower-1 {
    top: 30%;
    left: 30%;
  }
  
  .flower-2 {
    top: 30%;
    left: 70%;
  }
  
  .flower-3 {
    top: 70%;
    left: 50%;
  }`,
          initialUserCSS: `/* 🧙‍♀️ Create a figure-eight flight path for the butterfly */
  /* Define your complex keyframes */
  @keyframes figure-eight {
    /* Use multiple keyframe percentages to create the path */
  }
  
  .butterfly {
    /* Apply your animation here */
  }`,
          checkFunction: (userCSS:string) => {
            // Check for keyframes with at least 4 percentage points
            const hasMultipleKeyframes = 
  /0%[\s\S]*?25%[\s\S]*?50%[\s\S]*?75%[\s\S]*?100%/.test(userCSS) ||
  /from[\s\S]*?25%[\s\S]*?50%[\s\S]*?75%[\s\S]*?to/.test(userCSS);
  
            // Check for both X and Y translations
            const hasXandYTranslations = userCSS.includes("translateX") && userCSS.includes("translateY")
  
            // Check for animation application
            const hasAnimation = userCSS.includes("animation") && userCSS.includes("figure-eight")
  
            return hasMultipleKeyframes && hasXandYTranslations && hasAnimation
          },
          lesson: `<div class="lesson-content">
            <h3>Complex Animation Paths</h3>
            <p>Creating complex paths requires defining multiple points along the journey using percentage-based keyframes.</p>
            <p>For a figure-eight pattern, you need to combine horizontal and vertical movement at different stages:</p>
            <div class="spell-example">
              <pre><code>@keyframes figure-eight {
    0% { transform: translate(0, 0); }
    25% { transform: translate(50px, -50px); }
    50% { transform: translate(0, 0); }
    75% { transform: translate(-50px, -50px); }
    100% { transform: translate(0, 0); }
  }</code></pre>
            </div>
            <p>The more percentage points you define, the smoother and more precise your animation path will be.</p>
            <p>Apply with appropriate timing and easing:</p>
            <div class="spell-example">
              <pre><code>.element {
    animation: figure-eight 5s infinite ease-in-out;
  }</code></pre>
            </div>
          </div>`,
        },
      ],
    },
    {
      id: 6,
      title: "Magic Mirror",
      concept: "transform: scaleX(-1), filter",
      description: "Create mirror reflections and visual effects",
      icon: "🪞",
      subLevels: [
        {
          id: "1",
          title: "Basic Mirror Reflection",
          description: "Create a horizontal mirror reflection of an element.",
          challenge: "The witch encounters a magical mirror! Cast a spell to create her mirror reflection.",
          hint1: "The transform property with scaleX(-1) can flip elements horizontally to create mirror images...",
          hint2: "Apply 'transform: scaleX(-1)' to the reflection element to create a perfect mirror image.",
          successMessage:
            "Perfect reflection! The mirror magic is complete. Your understanding of transformations is impressive!",
          failMessage:
            "The mirror remains empty... Your reflection spell needs adjustment. Try using scaleX with a negative value.",
          fixedHTML: `<div class="mirror-container">
    <div class="witch original"></div>
    <div class="mirror"></div>
    <div class="witch reflection"></div>
  </div>`,
          fixedCSS: `.mirror-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: #0f0f1a;
    position: relative;
  }
  
  .mirror {
    width: 2px;
    height: 200px;
    background: linear-gradient(to bottom, #9333ea, #4c1d95);
    box-shadow: 0 0 10px #9333ea;
  }
  
  .witch {
    width: 60px;
    height: 80px;
    background-color: transparent;
    position: absolute;
  }
  
  .witch::before {
    content: '🧙‍♀️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
  }
  
  .original {
    left: calc(50% - 70px);
  }
  
  .reflection {
    right: calc(50% - 70px);
  }`,
          initialUserCSS: `/* 🧙‍♀️ Create a mirror reflection of the witch */
  .reflection {
    /* Your mirror spell here */
  }`,
          checkFunction: (userCSS:string) =>
            userCSS.includes("scaleX(-1)") || (userCSS.includes("scaleX") && userCSS.includes("-1")),
          lesson: `<div class="lesson-content">
            <h3>Mirror Reflection Magic</h3>
            <p>Creating mirror reflections is a simple yet powerful transformation spell using <code>scaleX(-1)</code>.</p>
            <p>This transformation flips an element horizontally, creating a perfect mirror image:</p>
            <div class="spell-example">
              <pre><code>.reflection {
    transform: scaleX(-1);
  }</code></pre>
            </div>
            <p>You can also create vertical reflections with <code>scaleY(-1)</code> or both with <code>scale(-1, -1)</code>.</p>
            <p>This technique is commonly used for:</p>
            <ul>
              <p><li>Creating reflections in water or mirrors</li></p>
              <p><li>Flipping icons or images to face different directions</li></p>
              <p><li>Creating symmetrical designs</li></p>
            </ul>
          </div>`,
        },
        {
          id: "2",
          title: "Magical Filter Effects",
          description: "Apply filter effects to create a magical appearance.",
          challenge: "The crystal ball shows a cloudy image! Apply filter effects to clarify the magical vision.",
          hint1: "The filter property can apply visual effects like blur, brightness, and contrast...",
          hint2: "Try 'filter: brightness(1.2) contrast(1.2) saturate(1.5)' to enhance the crystal ball's vision.",
          successMessage:
            "The vision clears! Your filter magic has enhanced the crystal ball's powers. The future is now visible!",
          failMessage: "The crystal ball remains cloudy. Adjust your filter values to enhance the magical vision.",
          fixedHTML: `<div class="divination-scene">
    <div class="crystal-ball">
      <div class="vision"></div>
    </div>
  </div>`,
          fixedCSS: `.divination-scene {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: #0f0f1a;
  }
  
  .crystal-ball {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(147, 51, 234, 0.3), rgba(76, 29, 149, 0.6));
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
  }
  
  .vision {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='noise' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E");
    filter: blur(1px) brightness(0.8) contrast(0.8) saturate(0.8);
  }`,
          initialUserCSS: `/* 🧙‍♀️ Enhance the crystal ball's vision with filters */
  .vision {
    /* Your filter spell here */
  }`,
          checkFunction: (userCSS:string) =>
            userCSS.includes("filter") &&
            (userCSS.includes("brightness") || userCSS.includes("contrast") || userCSS.includes("saturate")),
          lesson: `<div class="lesson-content">
            <h3>Magical Filter Effects</h3>
            <p>The <code>filter</code> property allows you to apply visual effects to elements, similar to photo editing enchantments.</p>
            <p>Common filter effects include:</p>
            <ul>
              <p><li><code>blur(px)</code>: Adds a blur effect</li></p>
              <p><li><code>brightness(amount)</code>: Adjusts brightness (1 is normal, >1 is brighter)</li></p>
              <p><li><code>contrast(amount)</code>: Adjusts contrast</li></p>
              <p><li><code>saturate(amount)</code>: Adjusts color intensity</li></p>
              <p><li><code>hue-rotate(deg)</code>: Shifts colors around the color wheel</li></p>
            </ul>
            <p>You can combine multiple filters in a single declaration:</p>
            <div class="spell-example">
              <pre><code>.element {
    filter: brightness(1.2) contrast(1.2) saturate(1.5);
  }</code></pre>
            </div>
          </div>`,
        },
        {
          id: "3",
          title: "Advanced Mirror Effects",
          description: "Combine reflection with filters for a magical mirror effect.",
          challenge: "Create an enchanted mirror that not only reflects but also adds a magical aura to the reflection!",
          hint1: "Combine scaleX(-1) with filter effects to create an otherworldly reflection...",
          hint2:
            "Try 'transform: scaleX(-1)' combined with 'filter: hue-rotate(180deg) brightness(1.2)' for a magical mirror effect.",
          successMessage:
            "Extraordinary! The enchanted mirror now shows not just a reflection, but a magical alternate version. Your combined spells work perfectly!",
          failMessage:
            "The mirror effect is incomplete. Try combining both transform and filter properties for a truly magical reflection.",
          fixedHTML: `<div class="enchanted-mirror">
    <div class="reality-side">
      <div class="witch-reality"></div>
    </div>
    <div class="mirror-divider"></div>
    <div class="mirror-side">
      <div class="witch-reflection"></div>
    </div>
  </div>`,
          fixedCSS: `.enchanted-mirror {
    display: flex;
    height: 300px;
    background: linear-gradient(to right, #0f0f1a, #1e1b4b);
    position: relative;
  }
  
  .reality-side, .mirror-side {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .mirror-divider {
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #9333ea, #4c1d95);
    box-shadow: 0 0 15px #9333ea;
  }
  
  .witch-reality, .witch-reflection {
    width: 80px;
    height: 100px;
    position: relative;
  }
  
  .witch-reality::before, .witch-reflection::before {
    content: '🧙‍♀️';
    position: absolute;
    font-size: 50px;
  }`,
          initialUserCSS: `/* 🧙‍♀️ Create an enchanted mirror reflection with both transform and filter */
  .witch-reflection {
    /* Your combined mirror and filter spell here */
  }`,
          checkFunction: (userCSS:string) =>
            userCSS.includes("scaleX(-1)") &&
            userCSS.includes("filter") &&
            (userCSS.includes("hue-rotate") ||
              userCSS.includes("brightness") ||
              userCSS.includes("contrast") ||
              userCSS.includes("saturate")),
          lesson: `<div class="lesson-content">
            <h3>Advanced Mirror Enchantments</h3>
            <p>The most powerful mirror magic combines reflection transformations with filter effects to create truly magical alternate realities.</p>
            <p>By combining <code>transform: scaleX(-1)</code> with various filters, you can create reflections that suggest magical or alternate dimensions:</p>
            <div class="spell-example">
              <pre><code>.magical-reflection {
    /*</code></pre>
            </div>
            <p>Some creative combinations include:</p>
            <ul>
              <p><li>Ethereal reflections: <code>filter: brightness(1.5) contrast(0.8) blur(1px)</code></li></p>
              <p><li>Dark mirror: <code>filter: brightness(0.7) contrast(1.3) saturate(0.5)</code></li></p>
              <p><li>Alternate dimension: <code>filter: hue-rotate(180deg) saturate(1.5)</code></li></p>
            </ul>
          </div>`,
        },
      ],
    },
    {
      id: 7,
      title: "Invisible Cloak",
      concept: "opacity, visibility, display",
      description: "Master different ways to hide elements",
      icon: "👻",
      subLevels: [
        {
          id: "1",
          title: "Basic Invisibility",
          description: "Make an element invisible while keeping its space.",
          challenge:
            "The witch needs to become invisible but still block the dragon's path! Use the right invisibility spell.",
          hint1: "There are three ways to make something disappear, but only one keeps its physical space...",
          hint2: "The 'opacity: 0' spell makes an element invisible but still present in the document flow.",
          successMessage:
            "Perfect invisibility! The witch is now unseen but still blocks the path. The dragon can't pass!",
          failMessage: "The invisibility spell failed... Try using the opacity property with the right value.",
          fixedHTML: `<div class="dungeon-path">
    <div class="dragon"></div>
    <div class="witch"></div>
    <div class="treasure"></div>
  </div>`,
          fixedCSS: `.dungeon-path {
    position: relative;
    height: 300px;
    background-color: #0f0f1a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
  }
  
  .dragon {
    width: 80px;
    height: 80px;
    background-color: transparent;
  }
  
  .dragon::before {
    content: '🐉';
    position: absolute;
    font-size: 50px;
  }
  
  .witch {
    width: 60px;
    height: 80px;
    background-color: #7e22ce;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .witch::before {
    content: '🧙‍♀️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
  }
  
  .treasure {
    width: 60px;
    height: 60px;
    background-color: transparent;
  }
  
  .treasure::before {
    content: '💎';
    position: absolute;
    top: 50%;
    right: 50px;
    transform: translateY(-50%);
    font-size: 30px;
  }`,
          initialUserCSS: `/* 🧙‍♀️ Make the witch invisible but still block the path */
  .witch {
    /* Your invisibility spell here */
  }`,
          checkFunction: (userCSS:string) => userCSS.includes("opacity: 0") || userCSS.includes("opacity:0"),
          lesson: `<div class="lesson-content">
            <h3>Basic Invisibility Magic</h3>
            <p>In CSS, there are three main ways to make elements disappear, each with different magical properties:</p>
            <ol>
              <p><li><code>opacity: 0</code>: Makes the element invisible but keeps its space and interactions</li></p>
              <p><li><code>visibility: hidden</code>: Makes the element invisible and prevents interactions, but keeps its space</li></p>
              <p><li><code>display: none</code>: Completely removes the element from the document flow (no space, no interactions)</li></p>
            </ol>
            <p>When you need an element to be invisible but still take up space:</p>
            <div class="spell-example">
              <pre><code>.invisible-but-present {
    opacity: 0;
  }</code></pre>
            </div>
            <p>This is useful for creating "invisible barriers" or placeholders that need to maintain layout.</p>
          </div>`,
        },
        {
          id: "2",
          title: "Visibility vs Display",
          description: "Choose the right invisibility spell for the situation.",
          challenge:
            "The witch needs to hide completely from the dragon! Choose the spell that removes her entirely from the scene.",
          hint1:
            "When you need an element to completely disappear as if it never existed, opacity and visibility aren't enough...",
          hint2:
            "The 'display: none' spell completely removes an element from the document flow, as if it was never there.",
          successMessage:
            "Perfect disappearance! The witch has completely vanished from the scene. The dragon won't find her!",
          failMessage: "The witch is still partially present. Try using the display property to remove her completely.",
          fixedHTML: `<div class="dragon-lair">
    <div class="dragon-sleeping"></div>
    <div class="witch-hiding"></div>
    <div class="exit-door"></div>
  </div>`,
          fixedCSS: `.dragon-lair {
    position: relative;
    height: 300px;
    background-color: #0f0f1a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
  }
  
  .dragon-sleeping {
    width: 100px;
    height: 100px;
    background-color: transparent;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  .dragon-sleeping::before {
    content: '🐉';
    position: absolute;
    font-size: 70px;
  }
  
  .witch-hiding {
    width: 60px;
    height: 80px;
    background-color: #7e22ce;
    position: absolute;
    left: 30%;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .witch-hiding::before {
    content: '🧙‍♀️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
  }
  
  .exit-door {
    width: 60px;
    height: 100px;
    background-color: #4c1d95;
    position: absolute;
    right: 50px;
    border-radius: 5px;
  }
  
  .exit-door::before {
    content: '🚪';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
  }`,
          initialUserCSS: `/* 🧙‍♀️ Make the witch completely disappear from the scene */
  .witch-hiding {
    /* Your complete disappearance spell here */
  }`,
          checkFunction: (userCSS:string) => userCSS.includes("display: none") || userCSS.includes("display:none"),
          lesson: `<div class="lesson-content">
            <h3>Choosing the Right Invisibility Spell</h3>
            <p>Different invisibility spells serve different magical purposes:</p>
            <table class="spell-comparison">
              <tr>
                <th>Spell</th>
                <th>Visibility</th>
                <th>Space</th>
                <th>Interactions</th>
                <th>Use Case</th>
              </tr>
              <tr>
                <td><code>opacity: 0</code></td>
                <td>Invisible</td>
                <td>Preserved</td>
                <td>Possible</td>
                <td>Invisible but clickable elements, animations</td>
              </tr>
              <tr>
                <td><code>visibility: hidden</code></td>
                <td>Invisible</td>
                <td>Preserved</td>
                <td>None</td>
                <td>Placeholder space, toggling without layout shifts</td>
              </tr>
              <tr>
                <td><code>display: none</code></td>
                <td>Removed</td>
                <td>Removed</td>
                <td>None</td>
                <td>Complete removal, collapsing space</td>
              </tr>
            </table>
            <p>When you need an element to completely disappear:</p>
            <div class="spell-example">
              <pre><code>.completely-gone {
    display: none;
  }</code></pre>
            </div>
          </div>`,
        },
        {
          id: "3",
          title: "Fading Transition",
          description: "Create a smooth fading effect with transition.",
          challenge:
            "The witch's invisibility potion should work gradually! Create a smooth fading transition when hovering over the potion.",
          hint1: "Combine opacity changes with the transition property to create smooth fading effects...",
          hint2: "Use 'transition: opacity 0.5s ease' along with opacity changes on hover to create a smooth fade.",
          successMessage:
            "Beautiful fading magic! The potion now smoothly transitions between visible and invisible states.",
          failMessage:
            "The fading effect isn't smooth. Make sure to use the transition property with the opacity changes.",
          fixedHTML: `<div class="potion-display">
    <div class="invisibility-potion">
      <div class="potion-label">Invisibility Potion</div>
    </div>
  </div>`,
          fixedCSS: `.potion-display {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: #0f0f1a;
  }
  
  .invisibility-potion {
    width: 100px;
    height: 150px;
    position: relative;
    cursor: pointer;
  }
  
  .invisibility-potion::before {
    content: '🧪';
    position: absolute;
    font-size: 80px;
  }
  
  .potion-label {
    position: absolute;
    bottom: -30px;
    left: 0;
    width: 100%;
    text-align: center;
    color: #9333ea;
    font-size: 14px;
  }`,
          initialUserCSS: `/* 🧙‍♀️ Create a smooth fading effect when hovering over the potion */
  .invisibility-potion {
    /* Your base state here */
  }
  
  .invisibility-potion:hover {
    /* Your hover state here */
  }`,
          checkFunction: (userCSS:string) =>
            userCSS.includes("transition") && userCSS.includes("opacity") && userCSS.includes(":hover"),
          lesson: `<div class="lesson-content">
            <h3>Fading Transition Magic</h3>
            <p>To create smooth fading effects, combine <code>opacity</code> changes with the <code>transition</code> property.</p>
            <p>The transition property specifies:</p>
            <ul>
              <p><li>Which property to animate (opacity)</li></p>
              <p><li>How long the transition takes (duration)</li></p>
              <p><li>The timing function (ease, linear, etc.)</li></p>
            </ul>
            <div class="spell-example">
              <pre><code>.fading-element {
    opacity: 1;
    transition: opacity 0.5s ease;
  }
  
  .fading-element:hover {
    opacity: 0;
  }</code></pre>
            </div>
            <p>This creates a smooth half-second fade to invisible when hovering, and back to visible when the hover ends.</p>
          </div>`,
        },
      ],
    },
  ]

  export default gameLevels