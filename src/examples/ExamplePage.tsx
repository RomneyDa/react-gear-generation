import React, { useEffect, useState } from 'react';
import { MouseGearSetViewer, PositionedGearSetViewer, SimpleSpinner } from '../components';
import { ExampleGears, GearSet, RandomBackAndForth } from '@dromney/gear-gen';
import '@dromney/gear-gen/dist/styles/dark.css'
import '../styles/example-page.css'

function ExamplePage() {
  const [gearSet1, setGearSet1] = useState<GearSet>()
  const [gearSet2, setGearSet2] = useState<GearSet>()
  useEffect(() => {
    setGearSet1(new GearSet(ExampleGears()))
    setGearSet2(new GearSet(RandomBackAndForth(10)))
  }, [])

  return (
    <div>
      <div className="top-row">
        <div className="simple-spinners">
          <SimpleSpinner gear={gearSet1?.gears.find(g => g.internal)} rpm={3} />
          <SimpleSpinner gear={gearSet1?.gears[2]} rpm={8} />
        </div>
        {gearSet1 && <div className="mouse-set">
          <MouseGearSetViewer gearSet={gearSet1} showGrid={true} />
          <div className="download-buttons">
            <button className="download-button" onClick={() => { gearSet1?.downloadAllSVGs(50) }}>Download all</button>
            <button className="download-button" onClick={() => { gearSet1.gears[0].downloadSVG() }}>Download first</button>
            <button className="download-button" onClick={() => { gearSet1.gears[0].downloadDXF() }}>Download dxf</button>
          </div>
        </div>}

      </div>
      {gearSet2 && <div>
        <PositionedGearSetViewer gearSet={gearSet2} rot={0} showGrid={false} />
      </div>}
    </div>
  )
}

export default ExamplePage;
