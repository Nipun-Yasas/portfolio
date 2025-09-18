import React from 'react'

export default function Logo() {
  return (
    <div>
        <Typography variant="h2" align="center" sx={{ mt: 4 }}>
        Front End
      </Typography>

      <LogoLoop
        logos={frontend}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#846791"
        ariaLabel="Technology partners"
      />

      <Typography variant="h2" align="center" sx={{ mt: 4 }}>
        back End
      </Typography>

      <LogoLoop
        logos={backend}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#846791"
        ariaLabel="Technology partners"
      />
      <Typography variant="h2" align="center" sx={{ mt: 4 }}>
        Data bases
      </Typography>

      <LogoLoop
        logos={database}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#846791"
        ariaLabel="Technology partners"
      />

      <Typography variant="h2" align="center" sx={{ mt: 4 }}>
        Data Science
      </Typography>

      <LogoLoop
        logos={dataScience}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#846791"
        ariaLabel="Technology partners"
      />

      <Typography variant="h2" align="center" sx={{ mt: 4 }}>
        Other tools
      </Typography>

      <LogoLoop
        logos={others}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#846791"
        ariaLabel="Technology partners"
      />
      
    </div>
  )
}
