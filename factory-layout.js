const FACTORY_LAYOUT_SVG = `
<svg width="1500" height="600" viewBox="0 0 1500 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hatch" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="2" height="4" transform="translate(0,0)" fill="#888" opacity="0.5"/>
    </pattern>

    <style>
      /* กล่องสถานี */
      .station-box { fill: #FFFFE0; stroke: #555; stroke-width: 2; }
      .station-text { font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; text-anchor: middle; dominant-baseline: central; fill: #333; }
      
      /* เส้นสายพาน (Conveyor Line) */
      .conveyor-line { fill: none; stroke: #999; stroke-width: 6; stroke-linecap: round; stroke-linejoin: round; }
      .conveyor-line-large { fill: none; stroke: #999; stroke-width: 36; stroke-linecap: round; stroke-linejoin: round; }
      
      /* ป้าย Sub Box (สีส้มพีช) */
      .sub-box { fill: #FFE4C4; stroke: none; }
      .sub-box-text { font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; fill: black; }
      
      /* ป้าย Monitor (สีเหลืองมน) */
      .monitor-box { fill: #FFFACD; stroke: #888; stroke-width: 1; }
      .monitor-text { font-family: Arial, sans-serif; font-size: 12px; font-weight: bold; text-anchor: middle; fill: black; }
      
      /* ป้ายหลัก (สีน้ำเงิน) */
      .main-label { fill: blue; rx: 5; ry: 5; }
      .main-label-text { font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; fill: white; text-anchor: middle; dominant-baseline: middle; }
      
      /* สัญลักษณ์ L/R */
      .lr-circle { fill: #DDD; stroke: none; }
      .lr-text { font-family: Arial, sans-serif; font-size: 10px; text-anchor: middle; dominant-baseline: central; }

      /* Auto Impact Box */
      .auto-impact { fill: url(#hatch); stroke: #333; stroke-width: 1; }
      .auto-text { font-family: Arial, sans-serif; font-size: 10px; font-weight: bold; fill: #333; }
    </style>
  </defs>

  <g transform="translate(50, 50)">
    
    <path d="M 350,225 L 480,225 L 480,375 L 100,375 L 100,125 L 250,125 L 250,200 L 250,225 L 350,225" class="conveyor-line" />

    <g transform="translate(300, 212.5)">
      <rect x="0" y="0" width="30" height="25" class="station-box"/><text x="15" y="12.5" class="station-text">1</text>
      <rect x="40" y="0" width="30" height="25" class="station-box"/><text x="55" y="12.5" class="station-text">2</text>
      <rect x="80" y="0" width="30" height="25" class="station-box"/><text x="95" y="12.5" class="station-text">3</text>
      <rect x="120" y="0" width="30" height="25" class="station-box"/><text x="135" y="12.5" class="station-text">4</text>
    </g>

    <g transform="translate(465, 250)">
      <rect x="0" y="0" width="25" height="30" class="station-box"/><text x="12.5" y="15" class="station-text">5</text>
      <rect x="0" y="40" width="25" height="30" class="station-box"/><text x="12.5" y="55" class="station-text">6</text>
      <rect x="0" y="80" width="25" height="30" class="station-box"/><text x="12.5" y="95" class="station-text">7</text>
    </g>

    <g transform="translate(60, 362.5)">
      <rect x="360" y="0" width="30" height="25" class="station-box"/><text x="375" y="12.5" class="station-text">8</text>
      <rect x="320" y="0" width="30" height="25" class="station-box"/><text x="335" y="12.5" class="station-text">9</text>
      <rect x="280" y="0" width="30" height="25" class="station-box"/><text x="295" y="12.5" class="station-text">10</text>
      <rect x="240" y="0" width="30" height="25" class="station-box"/><text x="255" y="12.5" class="station-text">11</text>
      <rect x="200" y="0" width="30" height="25" class="station-box"/><text x="215" y="12.5" class="station-text">12</text>
      <rect x="160" y="0" width="30" height="25" class="station-box"/><text x="175" y="12.5" class="station-text">13</text>
      <rect x="120" y="0" width="30" height="25" class="station-box"/><text x="135" y="12.5" class="station-text">14</text>
      <rect x="80" y="0" width="30" height="25" class="station-box"/><text x="95" y="12.5" class="station-text">15</text>
    </g>

    <g transform="translate(87.5, 110)">
      <rect x="0" y="240" width="25" height="30" class="station-box"/><text x="12.5" y="255" class="station-text">16</text>
      <rect x="0" y="200" width="25" height="30" class="station-box"/><text x="12.5" y="215" class="station-text">17</text>
      <rect x="0" y="160" width="25" height="30" class="station-box"/><text x="12.5" y="175" class="station-text">18</text>
      <rect x="0" y="120" width="25" height="30" class="station-box"/><text x="12.5" y="135" class="station-text">19</text>
      <rect x="0" y="80" width="25" height="30" class="station-box"/><text x="12.5" y="95" class="station-text">20</text>
      <rect x="0" y="40" width="25" height="30" class="station-box"/><text x="12.5" y="55" class="station-text">21</text>
    </g>

    <g transform="translate(105, 110)">
      <rect x="5" y="0" width="30" height="25" class="station-box"/>
      <text x="20" y="12.5" class="station-text">22</text>

      <path d="M 40,-10 A 30,25 0 0,1 100,-10" fill="#FFFACD" stroke="#888" stroke-width="1" />
      <path d="M 40,35 A 30,25 0 0,0 100,35" fill="#FFFACD" stroke="#888" stroke-width="1" />

      <rect x="40" y="0" width="60" height="25" class="station-box" fill="#FFFFE0"/>
      <text x="70" y="12.5" class="station-text">MD</text>

      <text x="70" y="-42" class="monitor-text" font-size="11">Middle 1L</text>
      <text x="70" y="80" class="monitor-text" font-size="11">Middle 1R</text>

      <rect x="105" y="0" width="30" height="25" class="station-box"/>
      <text x="120" y="12.5" class="station-text">24</text>

      <rect x="132.5" y="35" width="25" height="30" class="station-box"/>
      <text x="145" y="50" class="station-text">25</text>

      <rect x="132.5" y="75" width="25" height="30" class="station-box"/>
      <text x="145" y="90" class="station-text">26</text>
    </g>


    <rect x="250" y="260" width="100" height="30" class="main-label" />
    <text x="300" y="275" class="main-label-text">OVER HEAD</text>

    <rect x="400" y="280" width="50" height="40" class="sub-box"/>
    <text x="425" y="300" class="sub-box-text" text-anchor="middle">Sub</text>
    <text x="425" y="315" class="sub-box-text" text-anchor="middle">box 1</text>

    <rect x="150" y="300" width="50" height="40" class="sub-box"/>
    <text x="175" y="320" class="sub-box-text" text-anchor="middle">Sub</text>
    <text x="175" y="335" class="sub-box-text" text-anchor="middle">box 2</text>

    <rect x="10" y="210" width="50" height="40" class="sub-box"/>
    <text x="35" y="230" class="sub-box-text" text-anchor="middle">Sub</text>
    <text x="35" y="245" class="sub-box-text" text-anchor="middle">box 3</text>

    <path d="M 240,80 L 255,50 L 270,80 Z" fill="skyblue" stroke="none"/>
    <text x="270" y="70" font-family="Arial" font-size="14" font-weight="bold">Monitor</text>
    
    <circle cx="280" cy="210" r="8" class="lr-circle" /><text x="280" y="210" class="lr-text">L</text>
    <circle cx="280" cy="240" r="8" class="lr-circle" /><text x="280" y="240" class="lr-text">R</text>

  </g>


  <g transform="translate(190, 120)">
    
    <line x1="180" y1="75" x2="1220" y2="75" class="conveyor-line-large" />

    <rect x="210" y="20" width="110" height="30" class="main-label" />
    <text x="265" y="35" class="main-label-text">MAIN LINE</text>

    <circle cx="160" cy="50" r="8" class="lr-circle" /><text x="160" y="50" class="lr-text">L</text>
    <circle cx="160" cy="100" r="8" class="lr-circle" /><text x="160" y="100" class="lr-text">R</text>

    <rect x="180" y="65" width="60" height="20" class="auto-impact" />
    <rect x="180" y="95" width="80" height="20" fill="#DDD" stroke="black" />
    <text x="220" y="108" class="auto-text" text-anchor="middle">AUTO IMPACT</text>

    <g transform="translate(250, 62.5)">
      <g>
         <rect x="0" y="0" width="25" height="25" class="station-box"/><text x="12.5" y="12.5" class="station-text">27</text>
         <rect x="30" y="0" width="25" height="25" class="station-box"/><text x="42.5" y="12.5" class="station-text">22</text>
         <rect x="60" y="0" width="25" height="25" class="station-box"/><text x="72.5" y="12.5" class="station-text">23</text>
         <rect x="90" y="0" width="25" height="25" class="station-box"/><text x="102.5" y="12.5" class="station-text">24</text>
         <rect x="120" y="0" width="25" height="25" class="station-box"/><text x="132.5" y="12.5" class="station-text">25</text>
         <rect x="150" y="0" width="25" height="25" class="station-box"/><text x="162.5" y="12.5" class="station-text">26</text>
         <rect x="180" y="0" width="25" height="25" class="station-box"/><text x="192.5" y="12.5" class="station-text">27</text>
         
         <rect x="210" y="0" width="25" height="25" class="station-box"/><text x="222.5" y="12.5" class="station-text">28</text>
         
         <rect x="240" y="0" width="25" height="25" class="station-box"/><text x="252.5" y="12.5" class="station-text">29</text>
         <rect x="270" y="0" width="25" height="25" class="station-box"/><text x="282.5" y="12.5" class="station-text">30</text>
         <rect x="300" y="0" width="25" height="25" class="station-box"/><text x="312.5" y="12.5" class="station-text">31</text>
         <rect x="330" y="0" width="25" height="25" class="station-box"/><text x="342.5" y="12.5" class="station-text">32</text>
         
         <rect x="360" y="0" width="25" height="25" class="station-box"/><text x="372.5" y="12.5" class="station-text">33</text>
         
         <rect x="390" y="0" width="25" height="25" class="station-box"/><text x="402.5" y="12.5" class="station-text">34</text>
         <rect x="420" y="0" width="25" height="25" class="station-box"/><text x="432.5" y="12.5" class="station-text">35</text>
      </g>
    </g>

    <g transform="translate(710, 62.5)">
       <path d="M 0,-10 A 30,30 0 0,1 60,-10" class="monitor-box" />
       <text x="30" y="-45" class="monitor-text">Middle 2L</text>
       <text x="30" y="80" class="monitor-text">Middle 2R</text>
       <path d="M 0,35 A 30,30 0 0,0 60,35" class="monitor-box" />
       
       <rect x="0" y="0" width="60" height="25" class="station-box"/><text x="30" y="12.5" class="station-text">MD</text>
    </g>

    <g transform="translate(780, 62.5)">
       <rect x="0" y="0" width="25" height="25" class="station-box"/><text x="12.5" y="12.5" class="station-text">36</text>
       <rect x="30" y="0" width="25" height="25" class="station-box"/><text x="42.5" y="12.5" class="station-text">DS</text>
       
       <rect x="60" y="0" width="25" height="25" class="station-box"/><text x="72.5" y="12.5" class="station-text">37</text>
       
       <rect x="90" y="0" width="25" height="25" class="station-box"/><text x="102.5" y="12.5" class="station-text">38</text>
       <rect x="120" y="0" width="25" height="25" class="station-box"/><text x="132.5" y="12.5" class="station-text">39</text>
       <rect x="150" y="0" width="25" height="25" class="station-box"/><text x="162.5" y="12.5" class="station-text">40</text>
       
       <rect x="180" y="0" width="25" height="25" class="station-box"/><text x="192.5" y="12.5" class="station-text">41</text>
       
       <rect x="210" y="0" width="25" height="25" class="station-box"/><text x="222.5" y="12.5" class="station-text">42</text>
       <rect x="240" y="0" width="25" height="25" class="station-box"/><text x="252.5" y="12.5" class="station-text">43</text>
    </g>

    <g transform="translate(1060, 62.5)">
       <path d="M 0,-10 A 30,30 0 0,1 60,-10" class="monitor-box" />
       <text x="30" y="-45" class="monitor-text">Middle 3L</text>
       <text x="30" y="80" class="monitor-text">Middle 3R</text>
       <path d="M 0,35 A 30,30 0 0,0 60,35" class="monitor-box" />
       
       <rect x="0" y="0" width="60" height="25" class="station-box"/><text x="30" y="12.5" class="station-text">MD</text>
    </g>

    <g transform="translate(1130, 62.5)">
       <rect x="0" y="0" width="25" height="25" class="station-box"/><text x="12.5" y="12.5" class="station-text">44</text>
       <rect x="30" y="0" width="25" height="25" class="station-box"/><text x="42.5" y="12.5" class="station-text">45</text>
       
       <rect x="40" y="35" width="60" height="20" class="auto-impact" />
       <rect x="20" y="60" width="80" height="20" fill="#DDD" stroke="black" />
       <text x="60" y="73" class="auto-text" text-anchor="middle">AUTO IMPACT</text>
    </g>

    <g transform="translate(250, -10)">
       <rect x="210" y="20" width="50" height="40" class="sub-box"/>
       <text x="235" y="40" class="sub-box-text" text-anchor="middle">Sub</text>
       <text x="235" y="55" class="sub-box-text" text-anchor="middle">box 4</text>
       
       <rect x="390" y="20" width="50" height="40" class="sub-box"/>
       <text x="415" y="40" class="sub-box-text" text-anchor="middle">Sub</text>
       <text x="415" y="55" class="sub-box-text" text-anchor="middle">box 5</text>
       
       <rect x="580" y="20" width="50" height="40" class="sub-box"/>
       <text x="605" y="40" class="sub-box-text" text-anchor="middle">Sub</text>
       <text x="605" y="55" class="sub-box-text" text-anchor="middle">box 6</text>
       
       <rect x="730" y="20" width="50" height="40" class="sub-box"/>
       <text x="755" y="40" class="sub-box-text" text-anchor="middle">Sub</text>
       <text x="755" y="55" class="sub-box-text" text-anchor="middle">box 7</text>
    </g>

    <g transform="translate(1100, 180)">
      <path d="M 0,20 L 15,-10 L 30,20 Z" fill="#EE82EE" stroke="none"/>
      <text x="40" y="10" font-family="Arial" font-size="14" font-weight="bold">Main control</text>
    </g>

    <g transform="translate(900, -70)">
      <path d="M 240,80 L 255,50 L 270,80 Z" fill="skyblue" stroke="none"/>
      <text x="270" y="70" font-family="Arial" font-size="14" font-weight="bold">Monitor</text>
    </g>
  </g>
</svg>
`;
