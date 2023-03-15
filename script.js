const cubes = new Zdog.Illustration({
    element: '.cubes',
    resize: 'fullscreen',
    zoom: 2
  })

  const cubeOne = new Zdog.Box({
    addTo: cubes,
    width: 100,
    height: 100,
    depth: 100,
    stroke: false,
    leftFace: "#da0",
    rightFace: "#e62",
    topFace: '#ed0',
    bottomFace: '#636'
  })

  const cubeTwo = new Zdog.Box({
    addTo: cubes,
    width: 50,
    height: 50,
    depth: 50,
    stroke: false,
    leftFace: "#da0",
    rightFace: "#e62",
    topFace: '#ed0',
    bottomFace: '#636',
    translate: { z: 100 }
  })

  const cubeThree = cubeTwo.copy({
    translate: { z: -100 }
  })

  function animateCubes() {
    cubes.rotate.y += 0.01;
    cubes.rotate.x += 0.01;
    cubeTwo.rotate.z += 0.03;
    cubeThree.rotate.z += 0.03;
    cubes.updateRenderGraph()
    requestAnimationFrame(animateCubes)
  }

  animateCubes()