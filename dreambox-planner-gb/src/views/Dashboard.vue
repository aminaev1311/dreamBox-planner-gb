<template>
  <div class="dashboard-container">
    <svg id="canvas" height="700" width="700" class="svg" />
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: "Dashboard",
  components: {  },
  data() {
    return {
      taskForView: {},
    };
  },
  computed: {
  },
  methods: {
  },
  mounted() {
    const categories = ['Career', 'Finance', 'Growth', 'Health', 'Relations', 'Relax', 'Spiritual', 'Sports']
    const visions = [
      {category_id: 0, title: 'Vision 1'},
      {category_id: 0, title: 'Vision 2'},
      {category_id: 2, title: 'Vision 3'},
      {category_id: 2, title: 'Vision 4'},
      {category_id: 2, title: 'Vision 5'},
      {category_id: 4, title: 'Vision 6'},
      {category_id: 5, title: 'Vision 7'},
    ]

    const circles = 6
    const sections = categories.length
    const r = 35 // Радиус окружности
    const max_radius = circles * r + 0.5*r  // Максимальное удаление текста от центра
    const angle = Math.PI * 2 / sections;

    const svg = d3.select('#canvas');
    const width = parseInt(svg.attr('width'));
    const height = parseInt(svg.attr('height'));

    const onPolygonClick = (event) => {
      const x = event.layerX - width / 2;
      const y = event.layerY - height / 2;

      const radius = Math.hypot(x, y);
      const circle = Math.abs(Math.ceil((radius - r) / r));
      let clickAngle = Math.atan2(x, -y);
      if (clickAngle < 0)
        clickAngle = Math.PI * 2 + clickAngle;
      const sector = Math.floor(clickAngle / angle)
      console.log(`Clicked on Circle ${circle} / Sector ${sector} with id=${event.target.id}`);
    }

    const createArcSVG = () => {
      svg.selectAll('g').remove();
      const g = svg.append('g')
          .attr('transform', `translate(${width/2},${height/2})`);

      const numVisionsInSection = 6
      for (let i = 0; i < sections; i++) {
        const numVisionsBySection = visions.filter(vision => vision.category_id === i).length

        console.log('In category ', i, ' there are ', numVisionsBySection, 'visions')
        for (let k = 0; k < numVisionsInSection; k++) {
          const color = k < numVisionsBySection ? '#69b3a2' : 'white'

          g.append("path")
              .attr("d", d3.arc()
                  .innerRadius(r * k)
                  .outerRadius(r * (k + 1))
                  .startAngle(angle * i)
                  .endAngle(angle * (i + 1))
              )
              .attr('stroke', 'black')
              .attr('fill', color)
              .attr('id', 100*i + k)
              .on('click', onPolygonClick)
        }
      }

      for (let i = 0; i < sections; i++) {
        let x_cur = max_radius * Math.sin(angle * i + angle/2);
        let y_cur = max_radius * -Math.cos(angle * i + angle/2);
        if (x_cur < 0)
          x_cur = x_cur - 6*categories[i].length
        g.append('text')
            .attr("x", x_cur)
            .attr("y", y_cur)
            .text(categories[i])
      }

    }

    createArcSVG()

  }
};
</script>

<style lang="sass" scoped>
.dashboard
  display: flex

  &-container
    display: flex
    height: calc(100vh - 200px)
    justify-content: center
    //align-items: center
    position: relative

.svg
  position: absolute
</style>
