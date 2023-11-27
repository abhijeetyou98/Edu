import React from 'react'

function Courses() {
  return (
    <div className="courses">
  <button className="course1">
    <svg className="Rectangle_1">
      <rect
        id="Rectangle_1"
        rx={10}
        ry={10}
        x={0}
        y={0}
        width={300}
        height={48}
      ></rect>
    </svg>
    <div id="Personalised__Group_Facilitation">
      <span>Personalised / Group Facilitation</span>
    </div>
  </button>
  <button className="course2">
    <svg className="Rectangle_2">
      <rect
        id="Rectangle_2"
        rx={10}
        ry={10}
        x={0}
        y={0}
        width={290}
        height={48}
      ></rect>
    </svg>
    <div id="International_competition_hub">
      <span>International competition hub</span>
    </div>
  </button>
  <button className="course3">
    <svg className="Rectangle_3">
      <rect
        id="Rectangle_3"
        rx={10}
        ry={10}
        x={0}
        y={0}
        width={246}
        height={48}
      ></rect>
    </svg>
    <div id="Bridge_The_Gap_Program">
      <span> Bridge The Gap Program</span>
    </div>
  </button>
</div>

  );
}

export default Courses;